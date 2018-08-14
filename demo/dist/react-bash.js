!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.ReactBash=t(require("react"),require("react-dom")):e.ReactBash=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(4),i=n(o),a=r(13),s=n(a),c=r(7),u=n(c),l={sudo:{exec:function(e){var t=e.cwd,r=e.structure,n=e.history;return{structure:r,cwd:t,history:n}}}},f=[{value:i.default.createElement("a",{target:"google",href:"www.google.com"},"Visit google")},{value:"Type `help` to begin"}],d={".hidden":{file1:{content:"The is the content for file1 in the <.hidden> directory."},file2:{content:"The is the content for file2 in the <.hidden> directory."},dir2:{file:{content:"The is the content for <file> in the <.hidden> directory."}},".secrets":{content:"I'm still afraid of the dark..."}},public:{file1:{content:"The is the content for file1 in the <public> directory."},file2:{content:"The is the content for file2 in the <public> directory."},file3:{content:"The is the content for file3 in the <public> directory."}},"README.md":{content:"✌⊂(✰‿✰)つ✌ Thanks for checking out the tool! There is a lot that you can do with react-bash and I'm excited to see all of the fun commands and projects build on top of it!"}},p=i.default.createElement(u.default,{history:f,structure:d,extensions:l});s.default.render(p,document.getElementById("app"))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.IS_SERVER="undefined"==typeof window;t.BACK_REGEX=/\/?\.?[\w-_]+\/\.\./,t.Errors={COMMAND_NOT_FOUND:"-bash: $1: command not found",FILE_EXISTS:"mkdir: $1: File exists",NO_SUCH_FILE:"-bash: cd: $1: No such file or directory",NOT_A_DIRECTORY:"-bash: cd: $1: Not a directory",IS_A_DIRECTORY:"cat: $1: Is a directory"},t.EnvVariables={TERM_PROGRAM:"ReactBash.app",TERM:"reactbash-256color",TERM_PROGRAM_VERSION:"1.4.3",TERM_SESSION_ID:"w0t0p1:37842145-87D9-4768-BEC3-3684BAF3A964",USER:function(e){return e.settings.user.username},PATH:"/",PWD:function(e){return"/"+e.cwd},LANG:function(){return r?"en_US.UTF-8":navigator.language.replace("-","_")+".UTF-8"},HOME:"/",LOGNAME:function(e){return e.settings.user.username},OLDPWD:"/"}},function(e,t,r){"use strict";function n(e,t){return e[0]===t&&(e=e.substr(1)),e[e.length-1]===t&&(e=e.substr(0,e.length-1)),e}function o(e,t,r){return Object.assign({},e,{error:!0,history:e.history.concat({value:t.replace("$1",r)})})}function i(e,t){if(""===e)return t;e=n(e,"/");for(var r=""+(t?t+"/":"")+e;r.match(l.BACK_REGEX);)r=r.replace(l.BACK_REGEX,"");return n(r,"/")}function a(e,t){var r=t.split("/");if(!r[0])return{dir:e};for(var n=e,o=0;r.length>o;){var i=r[o],a=n[i];if(!a||"object"!==(void 0===a?"undefined":u(a)))return{err:l.Errors.NO_SUCH_FILE.replace("$1",t)};if(a.hasOwnProperty("content"))return{err:l.Errors.NOT_A_DIRECTORY.replace("$1",t)};n=a,o++}return{dir:n}}function s(e){return Object.keys(l.EnvVariables).reduce(function(t,r){var n=l.EnvVariables[r];return t[r]="function"==typeof n?n(e):n,t},{})}function c(e){return void 0!==e.content}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.trim=n,t.appendError=o,t.extractPath=i,t.getDirectoryByPath=a,t.getEnvVariables=s,t.isFile=c;var l=r(1)},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);e.length>t;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.rm=t.whoami=t.printenv=t.echo=t.pwd=t.cd=t.mkdir=t.cat=t.ls=t.clear=t.help=void 0;var i=r(2),a=n(i),s=r(1),c=["clear","ls","cat","mkdir","cd","pwd","echo","printenv","whoami","rm"];t.help={exec:function(e){var t;return Object.assign({},e,{history:(t=e.history).concat.apply(t,[{value:"React-bash:"},{value:"These shell commands are defined internally.  Type 'help' to see this list."}].concat(o(c.map(function(e){return{value:e}}))))})}},t.clear={exec:function(e){return Object.assign({},e,{history:[]})}},t.ls={exec:function(e,t){var r=t.flags,n=t.args,o=n[0]||"",i=a.extractPath(o,e.cwd),s=a.getDirectoryByPath(e.structure,i),c=s.err,u=s.dir;if(c)return a.appendError(e,c,o);var l=Object.keys(u);return r.a||(l=l.filter(function(e){return"."!==e[0]})),r.l?Object.assign({},e,{history:e.history.concat(l.map(function(e){return{value:e}}))}):Object.assign({},e,{history:e.history.concat({value:l.join(" ")})})}},t.cat={exec:function(e,t){var r=t.args,n=r[0],o=n.split("/"),i=o.pop(),c=a.extractPath(o.join("/"),e.cwd),u=a.getDirectoryByPath(e.structure,c),l=u.err,f=u.dir;return l?a.appendError(e,l,n):f[i]?f[i].hasOwnProperty("content")?Object.assign({},e,{history:e.history.concat({value:f[i].content})}):a.appendError(e,s.Errors.IS_A_DIRECTORY,n):a.appendError(e,s.Errors.NO_SUCH_FILE,n)}},t.mkdir={exec:function(e,t){var r=t.args,n=r[0],o=n.split("/"),i=o.pop(),c=a.extractPath(o.join("/"),e.cwd),u=JSON.parse(JSON.stringify(e.structure)),l=a.getDirectoryByPath(u,c),f=l.dir;return f[i]?a.appendError(e,s.Errors.FILE_EXISTS,n):(f[i]={},Object.assign({},e,{structure:u}))}},t.cd={exec:function(e,t){var r=t.args,n=r[0];if(!n||"/"===n)return Object.assign({},e,{cwd:""});var o=a.extractPath(n,e.cwd),i=a.getDirectoryByPath(e.structure,o),s=i.err;return s?a.appendError(e,s,n):Object.assign({},e,{cwd:o})}},t.pwd={exec:function(e){var t="/"+e.cwd;return Object.assign({},e,{history:e.history.concat({value:t})})}},t.echo={exec:function(e,t){var r=t.input,n=5,o=a.getEnvVariables(e),i=r.slice(n).replace(/(\$\w+)/g,function(e){return o[e.slice(1)]||""});return Object.assign({},e,{history:e.history.concat({value:i})})}},t.printenv={exec:function(e){var t=a.getEnvVariables(e),r=Object.keys(t).map(function(e){return{value:e+"="+t[e]}});return Object.assign({},e,{history:e.history.concat(r)})}},t.whoami={exec:function(e){var t=e.settings.user.username;return Object.assign({},e,{history:e.history.concat({value:t})})}},t.rm={exec:function(e,t){var r=t.flags,n=t.args,o=n[0],i=o.split("/"),c=i.pop(),u=a.extractPath(i.join("/"),e.cwd),l=JSON.parse(JSON.stringify(e.structure)),f=a.getDirectoryByPath(l,u),d=f.dir;return d[c]?a.isFile(d[c])||r.r||r.R?(delete d[c],Object.assign({},e,{structure:l})):a.appendError(e,s.Errors.IS_A_DIRECTORY,o):a.appendError(e,s.Errors.NO_SUCH_FILE,o)}}},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;t.length>r;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2),s=n(a),c=r(1),u=r(3),l=n(u),f=r(8),d=n(f),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.commands=Object.assign(t,l),this.prevCommands=[],this.prevCommandsIndex=0}return i(e,[{key:"execute",value:function(e,t){this.prevCommands.push(e),this.prevCommandsIndex=this.prevCommands.length,t.history.push({cwd:t.cwd,value:e});var r=d.parse(e);return this.runCommands(r,t)}},{key:"runCommands",value:function(e,t){for(var r=this,n=!1,o=function(e,t){if(""===t.name)return e;if(r.commands[t.name]){var o=r.commands[t.name].exec(e,t);return n=n||o&&o.error,o}return n=!0,s.appendError(e,c.Errors.COMMAND_NOT_FOUND,t.name)};!n&&e.length;){var i=e.shift();t=i.reduce(o,t)}return t}},{key:"autocomplete",value:function(e,t){var r=t.structure,n=t.cwd,o=e.split(/ +/),i=o.pop(),a=function(e){return 0===e.indexOf(i)},c=function(e){return o.concat(e).join(" ")};if(0===o.length){var u=Object.keys(this.commands).filter(a);return 1===u.length?c(u[0]):null}var l=i.split("/");i=l.pop();var f=l.join("/"),d=s.extractPath(f,n),p=s.getDirectoryByPath(r,d),h=p.err,y=p.dir;if(h)return null;var m=Object.keys(y).filter(a),v=f?f+"/":"";return 1===m.length?c(""+v+m[0]):null}},{key:"getPrevCommand",value:function(){return this.prevCommands[--this.prevCommandsIndex]}},{key:"getNextCommand",value:function(){return this.prevCommands[++this.prevCommandsIndex]}},{key:"hasPrevCommand",value:function(){return 0!==this.prevCommandsIndex}},{key:"hasNextCommand",value:function(){return this.prevCommandsIndex!==this.prevCommands.length-1}}]),e}();t.default=p},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;t.length>r;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(4),l=o(u),f=r(11),d=o(f),p=r(3),h=n(p),y=r(5),m=o(y),v=r(9),b=o(v),g=17,O=76,x=67,E=38,_=40,w=9,j=function(){},C=function(e){function t(e){var r=e.history,n=e.structure,o=e.extensions,s=e.prefix;i(this,t);var c=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return c.Bash=new m.default(o),c.ctrlPressed=!1,c.state={settings:{user:{username:s.split("@")[1]}},history:r.slice(),structure:Object.assign({},n),cwd:""},c.handleKeyDown=c.handleKeyDown.bind(c),c.handleKeyUp=c.handleKeyUp.bind(c),c}return s(t,e),c(t,[{key:"componentDidMount",value:function(){this.refs.input.focus()}},{key:"componentWillReceiveProps",value:function(e){var t=e.extensions,r=e.structure,n=e.history,o={};r&&(o.structure=Object.assign({},r)),n&&(o.history=n.slice()),t&&(this.Bash.commands=Object.assign({},t,h)),this.setState(o)}},{key:"componentDidUpdate",value:function(){this.refs.input.scrollIntoView()}},{key:"attemptAutocomplete",value:function(){var e=this.refs.input.value,t=this.Bash.autocomplete(e,this.state);t&&(this.refs.input.value=t)}},{key:"handleKeyDown",value:function(e){e.which===g?this.ctrlPressed=!0:e.which===w&&(this.attemptAutocomplete(),e.preventDefault())}},{key:"handleKeyUp",value:function(e){e.which===O?this.ctrlPressed&&this.setState(this.Bash.execute("clear",this.state)):e.which===x?this.ctrlPressed&&(this.refs.input.value=""):e.which===E?this.Bash.hasPrevCommand()&&(this.refs.input.value=this.Bash.getPrevCommand()):e.which===_?this.refs.input.value=this.Bash.hasNextCommand()?this.Bash.getNextCommand():"":e.which===g&&(this.ctrlPressed=!1)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target[0].value,r=this.Bash.execute(t,this.state);this.setState(r),this.refs.input.value=""}},{key:"renderHistoryItem",value:function(e){var t=this;return function(r,n){var o=r.hasOwnProperty("cwd")?l.default.createElement("span",{style:e.prefix},t.props.prefix+" ~"+r.cwd+" $"):void 0;return l.default.createElement("div",{"data-test-id":"history-"+n,key:n},o,r.value)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.onClose,n=t.onExpand,o=t.onMinimize,i=t.prefix,a=t.styles,s=t.theme,c=this.state,u=c.history,f=c.cwd,d=Object.assign({},b.default[s]||b.default.light,a);return l.default.createElement("div",{className:"ReactBash",style:d.ReactBash},l.default.createElement("div",{style:d.header},l.default.createElement("span",{style:d.redCircle,onClick:r}),l.default.createElement("span",{style:d.yellowCircle,onClick:o}),l.default.createElement("span",{style:d.greenCircle,onClick:n})),l.default.createElement("div",{style:d.body,onClick:function(){return e.refs.input.focus()}},u.map(this.renderHistoryItem(d)),l.default.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},style:d.form},l.default.createElement("span",{style:d.prefix},i+" ~"+f+" $"),l.default.createElement("input",{autoComplete:"off",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,ref:"input",style:d.input}))))}}]),t}(u.PureComponent);t.default=C,C.Themes={LIGHT:"light",DARK:"dark"},C.propTypes={extensions:d.default.object,history:d.default.array,onClose:d.default.func,onExpand:d.default.func,onMinimize:d.default.func,prefix:d.default.string,structure:d.default.object,styles:d.default.object,theme:d.default.string},C.defaultProps={extensions:{},history:[],onClose:j,onExpand:j,onMinimize:j,prefix:"hacker@default",structure:{},styles:{},theme:C.Themes.LIGHT}},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BashUtil=t.BashConst=void 0;var i=r(6),a=o(i),s=r(2),c=n(s),u=r(1),l=n(u);t.default=a.default,t.BashConst=l,t.BashUtil=c},function(e,t){"use strict";function r(e){for(var t=e.split(/ +/),r=t.shift(),n={},o={},i=0;t.length>0;){var a=t.shift();if("-"===a[0])if("-"===a[1]){var s=t.shift();o[a.slice(2)]=s}else a.slice(1).split("").forEach(function(e){n[e]=!0});else o[i++]=a}return{name:r,flags:n,input:e,args:o}}function n(e){return e.trim().split(/ *&& */).map(function(e){return e.split(/ *; */).map(r)})}Object.defineProperty(t,"__esModule",{value:!0}),t.parseInput=r,t.parse=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};r.ReactBash={borderRadius:"5px",display:"flex",flexDirection:"column",fontFamily:"'Inconsolata', monospace",fontSize:"13px",fontWeight:"400",height:"100%",overflow:"hidden",textAlign:"left"},r.header={padding:"5px 10px 0"};var n={borderRadius:"50%",display:"inline-block",height:"15px",marginRight:"5px",width:"15px"};r.redCircle=Object.assign({},n,{backgroundColor:"#bf616a"}),r.yellowCircle=Object.assign({},n,{backgroundColor:"#ebcb8b"}),r.greenCircle=Object.assign({},n,{backgroundColor:"#a3be8c"}),r.body={flexGrow:1,overflowY:"scroll",padding:"10px"},r.form={display:"flex"},r.input={background:"none",border:"none",color:"inherit",flexGrow:"1",fontFamily:"inherit",fontSize:"inherit",outline:"none !important",padding:0},r.prefix={marginRight:"5px"},t.default={light:Object.assign({},r,{body:Object.assign({},r.body,{backgroundColor:"#fff",color:"#5D5D5D"}),header:Object.assign({},r.header,{backgroundColor:"#eee"}),prefix:Object.assign({},r.prefix,{color:"#bd081c"})}),dark:Object.assign({},r,{body:Object.assign({},r.body,{backgroundColor:"#000",color:"#d0d0d0"}),header:Object.assign({},r.header,{backgroundColor:"#dcdbdb"}),prefix:Object.assign({},r.prefix,{color:"#5b65fb"})})}},function(e,t,r){"use strict";function n(){}var o=r(12);e.exports=function(){function e(e,t,r,n,i,a){if(a!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){e.exports=r(10)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,r){e.exports=t}])});
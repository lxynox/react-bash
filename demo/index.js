import React from 'react';
import ReactDOM from 'react-dom';
import Terminal from '../src/index';

const helpCommands = ['React-bash:', 'These shell commands are defined internally.  Type \'help\' to see this list.', <a target='nbaTab' href='https://www.nba.com/'>Visit NBA</a>];

const extensions = {
    help: {
        exec: () => {
            return {
                history: helpCommands.map(value => ({ value }))
            }
        },
    },
    sudo: {
        exec: ({ cwd, structure, history }) => {
            return { structure, cwd, history }
        },
    },
};

const history = [
    { value: <a target='google' href='https://www.google.com'>Visit google</a> },
    { value: 'Type `help` to begin' },
];

const structure = {
    '.hidden': {
        file1: { content: 'The is the content for file1 in the <.hidden> directory.' },
        file2: { content: 'The is the content for file2 in the <.hidden> directory.' },
        dir2: {
            file: { content: 'The is the content for <file> in the <.hidden> directory.' },
        },
        '.secrets': { content: 'I\'m still afraid of the dark...' },
    },
    public: {
        file1: { content: 'The is the content for file1 in the <public> directory.' },
        file2: { content: 'The is the content for file2 in the <public> directory.' },
        file3: { content: 'The is the content for file3 in the <public> directory.' },
    },
    'README.md': { content: '✌⊂(✰‿✰)つ✌ Thanks for checking out the tool! There is a lot that you can do with react-bash and I\'m excited to see all of the fun commands and projects build on top of it!' },
};

const Root = <Terminal history={history} structure={structure} extensions={extensions} />;
ReactDOM.render(Root, document.getElementById('app'));

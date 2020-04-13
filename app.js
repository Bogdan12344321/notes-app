const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs')

yargs.version('1.1.0')

//Create and comand

yargs.command({
    "command": "list",
    describe: 'Add a new note',
    handler(argv) {
        notes.listNotes()
    }
})

yargs.command({
    "command": "add",
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    "command": "remove",
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command

yargs.command({
    "command": "read",
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)

    }
})

yargs.parse();
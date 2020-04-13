const fs = require('fs')
const chalk = require('chalk');

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(element);
    });
}

const removeNote = (title) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title != title);

    saveNotes(duplicateNotes)
    if (notes.length > duplicateNotes.length) {
        console.log(chalk.bgGreen('Note removed'));
    } else {
        console.log(chalk.bgRed('No note removed'));
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(note => note.title == title);
    const duplateNote = notes.find((note) => note.title === title);
    debugger
    if (duplateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log('New note added!');
    } else {
        console.log('Note title taken')
    }
    saveNotes(notes)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const readNote = (title) => {
    const notes = loadNotes();
    const duplateNote = notes.find((note) => note.title === title)
    if (duplateNote) {
        console.log(duplateNote)
    } else {
        console.log(chalk.red('No note found'));

    }
}

const getNotes = function () {

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
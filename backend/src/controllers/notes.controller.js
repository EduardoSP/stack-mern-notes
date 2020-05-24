const notesCtrl = {}

const NoteModel = require('../models/Note');

//async define una funcion asincrona
notesCtrl.getNotes   = async (req, res) => {
    const notes = await NoteModel.find();//devuelve todas la notas de la base de datos
    //luego de que encuentre el resultado devuelve el arreglo de notas
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new NoteModel({
        title,
        content,
        date,
        author,
    })
    await newNote.save();
    res.json({message: 'Note saved'})
}

notesCtrl.getNote    = async (req, res) => { 
    const note = await NoteModel.findById(req.params.id);
    res.json(note) 
}

notesCtrl.updateNote = async (req, res) => {
    console.log(req.params.id, req.body);
    const { title, content, date, author } = req.body;
    await NoteModel.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        date,
        author
    });

    res.json({message: 'Note updated'})
}

notesCtrl.deleteNote = async (req, res) => {
    await NoteModel.findOneAndDelete({_id: req.params.id});
    res.json({message: 'Note deleted'})
}

module.exports = notesCtrl;
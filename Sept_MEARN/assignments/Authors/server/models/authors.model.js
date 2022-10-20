//**************TEMPLATE MODEL DOC*********** */
// swap upperSingular
// swap Projects
// swap projects

const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: [true, `Author name required.`],
            minlength: [2, `longer than 2 characters you slob`]
        },

    },
    {timestamps: true}

);

const Authors = mongoose.model('authors', AuthorsSchema);

module.exports = Authors;
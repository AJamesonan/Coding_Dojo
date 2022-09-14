
const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
    },
    punchline:{
        type: String
    }
});

const Jokes = mongoose.model('jokes', JokesSchema);

module.exports = Jokes;
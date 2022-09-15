//**************TEMPLATE MODEL DOC*********** */
// swap upperSingular
// swap upperPlural
// swap lowerPlural

const mongoose = require('mongoose');

const upperPluralSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        price: {
            type: Number
        },
        description: {
            type: String
        }
    },
    {timestamps: true}
);

const upperPlural = mongoose.model('lowerPlural', upperPluralSchema);

module.exports = upperPlural; 
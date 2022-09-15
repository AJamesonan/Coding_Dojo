//**************TEMPLATE CONTROLLER DOC*********** */
// swap upperSingular
// swap upperPlural
// swap lowerPlural
const upperPlural = require('../models/lowerPlural.model');
module.exports.findAllupperPlural = (req, res) => {
    upperPlural.find()
        .then(allDaupperPlural => res.json({ lowerPlural: allDaupperPlural }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleupperSingular = (req, res) => {
    upperPlural.findOne({ _id: req.params.id })
        .then(oneSingleupperSingular => res.json({ lowerPlural: oneSingleupperSingular }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewupperSingular = (req, res) => {
    upperPlural.create(req.body)
        .then(newlyCreatedupperPlural => res.json({ lowerPlural: newlyCreatedupperPlural }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingupperSingular = (req, res) => {
    upperPlural.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedupperPlural => res.json({ lowerPlural: updatedupperPlural }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingupperSingular = (req, res) => {
    upperPlural.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
//**************TEMPLATE CONTROLLER DOC*********** */
// swap Project
// swap Projects
// swap projects
const Projects = require('../models/projects.model');

module.exports.index = (request, response) =>{
    response.json({
        message: "hello world"
    })
}
module.exports.findAllProjects = (req, res) => {
    Projects.find()
        .then(allDaProjects => res.json({ projects: allDaProjects }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleProject = (req, res) => {
    Projects.findOne({ _id: req.params.id })
        .then(oneSingleProject => res.json({ projects: oneSingleProject }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewProject = (req, res) => {
    Projects.create(req.body)
        .then(newlyCreatedProjects => res.json({projects: newlyCreatedProjects }))
        .catch(err => res.json({ message: 'Something went wrong on create', error: err }));
}

module.exports.updateExistingProject = (req, res) => {
    Projects.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProjects => res.json({ projects: updatedProjects }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingProject = (req, res) => {
    Projects.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
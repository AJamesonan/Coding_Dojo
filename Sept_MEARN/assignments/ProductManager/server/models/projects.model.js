//**************TEMPLATE MODEL DOC*********** */
// swap upperSingular
// swap Projects
// swap projects

const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema(
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
    }
    // {timestamps: true}
);

const Projects = mongoose.model('projects', ProjectsSchema);

module.exports = Projects;
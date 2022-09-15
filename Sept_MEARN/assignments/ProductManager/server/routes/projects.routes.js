//**************TEMPLATE ROUTES DOC*********** */
// swap Project
// swap Projects
// swap projects
const ProjectsController = require('../controllers/projects.controller');

module.exports = app => {
    app.get('/api',ProjectsController.index)
    app.get('/api/projects', ProjectsController.findAllProjects);
    app.get('/api/projects/:id', ProjectsController.findOneSingleProject);
    app.put('/api/projects/:id', ProjectsController.updateExistingProject);
    app.post('/api/projects', ProjectsController.createNewProject);
    app.delete('/api/projects/:id', ProjectsController.deleteAnExistingProject);
}

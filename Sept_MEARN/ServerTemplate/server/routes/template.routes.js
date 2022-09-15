//**************TEMPLATE ROUTES DOC*********** */
// swap upperSingular
// swap upperPlural
// swap lowerPlural
const upperPluralController = require('../controllers/lowerPlural.controller');

module.exports = app => {
    app.get('/api/lowerPlural', upperPluralController.findAllupperPlural);
    app.get('/api/lowerPlural/:id', upperPluralController.findOneSingleupperSingular);
    app.put('/api/lowerPlural/:id', upperPluralController.updateExistingupperSingular);
    app.post('/api/lowerPlural', upperPluralController.createNewupperSingular);
    app.delete('/api/lowerPlural/:id', upperPluralController.deleteAnExistingupperSingular);
}

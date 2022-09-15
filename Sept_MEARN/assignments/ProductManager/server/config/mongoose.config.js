//**************TEMPLATE config DOC*********** */
// swap upperSingular
// swap upperPlural
// swap lowerPlural

const mongoose = require('mongoose');
const database = 'projectmanager'

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the database ${database}`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

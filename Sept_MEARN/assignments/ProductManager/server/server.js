//************** SERVER DOC*********** */
// swap upperSingular
// swap upperPlural
// swap lowerPlural
const cors = require('cors')
const express = require("express");
const app = express();

const port = 8000

require("./config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routes/projects.routes")(app)
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));




//**************TEMPLATE SERVER DOC*********** */
// swap upperSingular
// swap upperPlural
// swap lowerPlural

const express = require("express");
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyupperSingularRoutes = require("./routes/lowerPlural.routes");
AllMyupperSingularRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

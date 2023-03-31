const express = require("express"); 
const app = express();
const PORT = 3000;
const path = require("path");
const mongoose = require("mongoose"); 
const dadosRoute = require("./routes/dadosRoute");

mongoose.connect('mongodb://localhost/estoque'), {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}

let db = mongoose.connection; 

db.on("error", () => { console.log("Houve um erro.")}); 
db.once("open", () => { console.log("Banco Carregado");});

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "templates"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", dadosRoute);

app.listen(PORT, () => console.log(`Server on running! ${PORT}`));

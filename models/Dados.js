const mongoose = require("mongoose"); 

const EstoSchema = new mongoose.Schema ({
    funcionario: { type: String, required: true },
    codigo: { type: String, required: true }, 
    nome: { type: String, required: true}, 
    ordem: { type: String, required: true}, 
    quantidade: { type: Number, default: 0}, 
    descricao: { type: String, required: true}
}); 


module.exports = mongoose.model("Dados", EstoSchema); 
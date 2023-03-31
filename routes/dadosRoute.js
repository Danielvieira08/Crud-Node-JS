const express = require("express"); 
const router = express.Router(); 
var methodOverride = require('method-override');

router.use(methodOverride('_method'));
const dadosControllers = require("../controller/dadosControllers");

router.get("/", dadosControllers.allDados);
router.get("/add", (req, res) => res.render('add', { error: false, body: {} }));
router.get("/edit/:id", dadosControllers.loadDados);


router.post("/", express.urlencoded({ extended: true }), dadosControllers.addDados); 
router.post("/edit/:id", express.urlencoded({ extended: true }), dadosControllers.editDados);

router.delete("/:id", dadosControllers.deleteDados);
router.delete("/", express.urlencoded({ extended: true }), dadosControllers.deleteDados);

module.exports = router;
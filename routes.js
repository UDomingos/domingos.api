const express = require("express");
const router = express.Router();
const multer = require("multer")

const uploadartistas = multer({dest:"uploads/artistas/"})
const uploadmusicas = multer({dest:"uploads/musicas/"})

const artistasController = require("./controllers/artistas");
const musicasController = require("./controllers/musicas");

router.get("/artistas",artistasController.getAll);
router.get("/musicas/:id/artistas",artistasController.getBymusica);
router.get("/artistas/:id",artistasController.getOne);
router.post(
    "/artistas",
    uploadartistas.single('imagem'), 
    artistasController.create
    );
router.put("/artistas/:id",artistasController.update);
router.delete("/artistas/:id", artistasController.remove);

router.get("/musicas",musicasController. getAll);
router.get("/artistas/:id/musicas",musicasController. getByartista);
router.get("/musicas/:id",musicasController. getOne);
router.post("/musicas",uploadmusicas.single("imagem"), musicasController.create);
router.put("/musicas/:id",musicasController.update);
router.delete("/musicas/:id", musicasController.remove);

module.exports= router;



const {Router} = require('express')
const ruts = Router();
const {respuestaGet, respuestaPost} = require('../controllers/resGet');


ruts.get('/get', respuestaGet);


ruts.put('/put/:nombre',respuestaPost);




   module.exports = ruts
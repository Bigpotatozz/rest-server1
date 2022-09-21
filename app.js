const dotenv = require('dotenv');
const server = require('./server');

dotenv.config();
const serv = new server();



serv.puerto();




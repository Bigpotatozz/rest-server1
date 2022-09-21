const express = require('express');
const cors = require('cors');

class servidor {


    constructor(){

        this.app = express();

        this.middleware();

        this.paginas();

        this.port = process.env.PORT
        
   



    }

    middleware(){

        this.app.use(cors());
        this.app.use(express.json());

        this.app.use(express.static('public'))


    }
            
    paginas(){

        this.app.use(require('./rutas/ubicacion.rutas'));
      
    }

    puerto(){

        this.app.listen(this.port, ()=> {

            console.log('servidor en linea en' + this.port)


        })
    }


}

module.exports = servidor;
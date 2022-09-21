const {response} = require('express');


const respuestaGet = (req,res) => {


        const params = req.query;

    res.json({

        params
            

    })


   }

const respuestaPost = (req,res) => {

   const nombre = req.params.nombre

        res.json({

                nombre
        

        })


}

   module.exports = { respuestaGet, respuestaPost}
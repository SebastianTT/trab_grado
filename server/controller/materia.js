//controlador tabla usuarios
const Materia = require('../models').materia;

module.exports = {

    async listarmaterias(req,res) {
        try {
            const coleccion = await Materia.findAll({
            });
            res.status(201).send(coleccion);
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }

    },

    async crearmaterias(req,res) {
        try {
            const coleccion = await Materia.create({
                mat_nombre : req.body.mat_nombre,
            });

            res.status(201).send(coleccion);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async buscarporid(req,res){
        try{
            const coleccion = await Materia.findByPk(req.params.id);
            res.status(201).send(coleccion);
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    },

    async update(req,res) {

        try{
           const coleccion = await Materia.findByPk(req.params.id);
           res.status(201).send(coleccion);

            if(coleccion){
                const actualizar = await Materia.update({
                    mat_nombre : req.params.mat_nombre
                } ,{where :{id:coleccion.id}});

                res.status(201).send(actualizar)

            }
            else{

                res.status(404).send("Usuario no encontrado");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    },
    //eliminar por id
    async eliminarporid(req,res) {  
        Materia.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function (deletedRecord) {
            if(deletedRecord === 1){
                res.status(200).json({message:"Deleted successfully"});          
            }
            else
            {
                res.status(404).json({message:"record not found"})
            }
        })
        .catch(function (error){
            res.status(500).json(error);
        });
    }
}
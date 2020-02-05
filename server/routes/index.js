//index.js
const materias = require('../controller').materia;


module.exports = (app) => {
    app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    })
    app.get('/api/materia', materias.listarmaterias);
    app.post('/api/materia', materias.crearmaterias);
    /*app.put('/api/usuarios/:id', userController.update);
    app.get('/api/usuarios/:id',  userController.searchByPk);
    app.delete('/api/usuarios/:id', userController.deleteByPk);*/
}
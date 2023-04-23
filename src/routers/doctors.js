// const doctorService = require('../services/doctorService');


module.exports = (app) => {
    const api_version = 'v1';
    const namespace = 'doctors';

    app.router.get(`/${api_version}/${namespace}/list`, async(res, res) => {
        // ToDo Chamar service
        return res.json('Funcionando')
    });
};




// router.get('/psicologos/list', psicologoController.listar);
// router.get('/psicologos/:id', psicologoController.buscarPsicologo);
// router.post('/psicologos', async (req, res) => {
//     psicologoController.register(req, res)
// });

const doctorService = require('../services/doctorService');

module.exports = (app) => {
    const api_version = 'v1';
    const namespace = 'doctors';

    app.get("/", async (response) => {
        return response.status(200).json({"api_status": "Ok"});
    });
    app.get(`/${api_version}/${namespace}/list`, async (request, response) => {
        // ToDo Chamar service
        return response.json('Funcionando')
    });
};




// router.get('/psicologos/list', psicologoController.listar);
// router.get('/psicologos/:id', psicologoController.buscarPsicologo);
// router.post('/psicologos', async (req, res) => {
//     psicologoController.register(req, res)
// });

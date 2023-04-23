const doctorRepository = require('../database/repositories/doctorRepositoy');

const doctor = {
    async list(req, res) {
        try{
            const result = await doctorRepository.list()
        } catch(error) {
            console.error(error);
            res.status(500).json(`Failed in doctor list. Error: ${error}`);
        } 
    }
}

module.exports = doctor;
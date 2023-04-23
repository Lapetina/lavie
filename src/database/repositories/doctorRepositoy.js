import doctorModel from '../models/doctorModel'

const doctorRepository = {
    async list(res) {
        try{
            const result_list = await doctorModel.findAll();
            return result_list
        } catch(error) {
            console.error(error);
            return res.json(error)
        }
    }
}

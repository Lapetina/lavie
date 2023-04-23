const app = require('express')().router();
require('express-group-routes');
//const cors = require('cors');
const doctorRoutes = require('./routers/doctors');

// doctorRoutes(app);
app.use(doctorRoutes);

module.exports = app; 

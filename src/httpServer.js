require('dotenv').config()

const settings = require('./settings');
const app = require('./app');

const port = settings.servicePort;

app.listen(port);
console.log(`Running on port ${port}`);

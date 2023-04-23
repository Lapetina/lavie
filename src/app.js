const express = require('express');
const app = require('express')();
const doctorRoutes = require('./routers/doctors');

app.use(express.json());
doctorRoutes(app);

module.exports = app; 

const express = require("express");
const { handleAddSchool, handleListSchools } = require("../controller/school");
const Router = express.Router()



// Route to insert a school
Router.post('/addSchool',handleAddSchool);

// GET /listSchools
Router.get('/listSchools',handleListSchools);




module.exports = Router
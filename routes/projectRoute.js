const express = require('express');
const { getAllProjects ,getProjectDetails,getProjectsActive} = require('../controllers/hotelController');

const router = express.Router();

router.route('/projects').get(getAllProjects)
router.route('/project/:id').get(getProjectDetails)
router.route('/project/activeProjects').get(getProjectsActive)

module.exports = router;
// routes/index.js

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const projectController = require('../controllers/projectController');
const experienceController = require('../controllers/experienceController');

// Routes d'accueil
router.get('/', homeController.getHome);

// Routes des projets
router.get('/projects', projectController.getProjects);
router.get('/projects/:id', projectController.getProjectDetail);

// Routes d'expériences et contact
router.get('/experience', experienceController.getExperience);
router.get('/contact', experienceController.getContact);
router.post('/contact', experienceController.submitContact);

module.exports = router;


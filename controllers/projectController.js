// controllers/projectController.js

const ProjectModel = require('../models/Project');

exports.getProjects = (req, res) => {
  const projects = ProjectModel.getAll();

  res.render('projects', {
    title: 'Mes Projets - Portfolio',
    projects,
    page: 'projects'
  });
};

exports.getProjectDetail = (req, res) => {
  const projectId = req.params.id;
  const project = ProjectModel.getById(projectId);

  if (!project) {
    return res.status(404).render('404', {
      title: 'Projet non trouvé',
      page: 'error'
    });
  }

  const allProjects = ProjectModel.getAll();

  res.render('project-detail', {
    title: `${project.title} - Portfolio`,
    project,
    allProjects,
    page: 'projects'
  });
};


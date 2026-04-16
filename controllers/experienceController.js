// controllers/experienceController.js

const ExperienceModel = require('../models/Experience');
const Portfolio = require('../models/Portfolio');

exports.getExperience = (req, res) => {
  const experiences = ExperienceModel.getAll();
  const skills = ExperienceModel.getSkills();
  const softSkills = ExperienceModel.getSoftSkills();
  const stats = ExperienceModel.getStats();
  const portfolio = Portfolio.getInfo();

  res.render('experience', {
    title: 'Expériences & CV - Portfolio',
    experiences,
    skills,
    softSkills,
    stats,
    portfolio,
    page: 'experience'
  });
};

exports.getContact = (req, res) => {
  const portfolio = Portfolio.getInfo();

  res.render('contact', {
    title: 'Contact & CV - Portfolio',
    portfolio,
    page: 'contact'
  });
};

exports.submitContact = (req, res) => {
  const { name, email, message } = req.body;

  // Ici vous pouvez ajouter la logique pour envoyer un email
  // ou stocker le message dans une base de données

  console.log('Message reçu:', { name, email, message });

  res.json({
    success: true,
    message: 'Votre message a été envoyé avec succès!'
  });
};


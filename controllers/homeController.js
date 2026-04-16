// controllers/homeController.js

const Portfolio = require('../models/Portfolio');
const ExperienceModel = require('../models/Experience');

exports.getHome = (req, res) => {
  const portfolio = Portfolio.getInfo();
  const stats = ExperienceModel.getStats();

  res.render('home', {
    title: 'Accueil - Portfolio',
    portfolio,
    stats,
    page: 'home'
  });
};


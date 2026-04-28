const serverless = require('serverless-http');
const app = require('../../app');

// Forcer Netlify à inclure EJS dans le bundle de la fonction
require('ejs');

module.exports.handler = serverless(app);
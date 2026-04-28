// app.js

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');

// Routes
app.use('/', require('./routes/index'));

// 404 Handler
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page non trouvée',
        page: 'error'
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('404', {
        title: 'Erreur serveur',
        page: 'error'
    });
});

// Start server
if (!process.env.NETLIFY) {
    app.listen(PORT, () => {
        console.log(`🚀 Portfolio démarré sur http://localhost:${PORT}`);
        console.log(`📱 Accédez au portfolio sur http://localhost:${PORT}`);
        console.log(`🛑 Appuyez sur Ctrl+C pour arrêter le serveur`);
    });
}

module.exports = app;


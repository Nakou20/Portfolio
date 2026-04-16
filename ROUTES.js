#!/usr/bin/env node

/**
 * URLS DISPONIBLES - Portfolio MVC
 * ================================
 *
 * Accédez à ces URLs une fois que le serveur est lancé:
 * npm start
 *
 * Puis ouvrez: http://localhost:3000
 */

const ROUTES = {
  // Pages principales
  HOME: "http://localhost:3000",
  PROJECTS: "http://localhost:3000/projects",
  PROJECT_1: "http://localhost:3000/projects/1",
  PROJECT_2: "http://localhost:3000/projects/2",
  PROJECT_3: "http://localhost:3000/projects/3",
  EXPERIENCE: "http://localhost:3000/experience",
  CONTACT: "http://localhost:3000/contact",

  // Erreur
  NOT_FOUND: "http://localhost:3000/404"
};

// Afficher les routes disponibles
console.log("\n");
console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║         🎉 PORTFOLIO MVC - ROUTES DISPONIBLES 🎉             ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("\n");

console.log("🏠  ACCUEIL (Hero + Stack Technique)");
console.log("   " + ROUTES.HOME);
console.log("\n");

console.log("📁  PROJETS (Grille de tous les projets)");
console.log("   " + ROUTES.PROJECTS);
console.log("\n");

console.log("🔍  DÉTAIL DES PROJETS:");
console.log("   Projet 1 (Nexus ERP Core):");
console.log("   " + ROUTES.PROJECT_1);
console.log("   ");
console.log("   Projet 2 (La Solution):");
console.log("   " + ROUTES.PROJECT_2);
console.log("   ");
console.log("   Projet 3 (Stack Technique Écosystème):");
console.log("   " + ROUTES.PROJECT_3);
console.log("\n");

console.log("💼  EXPÉRIENCES (Timeline + Compétences)");
console.log("   " + ROUTES.EXPERIENCE);
console.log("\n");

console.log("📧  CONTACT (Formulaire + Infos)");
console.log("   " + ROUTES.CONTACT);
console.log("\n");

console.log("═══════════════════════════════════════════════════════════════");
console.log("\n");

console.log("📝 PAGES DISPONIBLES:");
console.log("   • Home                   (Présentation + CTA)");
console.log("   • Projects               (Grille responsive)");
console.log("   • Project Detail         (Page complète projet)");
console.log("   • Experience             (Timeline + Skills)");
console.log("   • Contact                (Formulaire + Links)");
console.log("   • 404 Error              (Page non trouvée)");
console.log("\n");

console.log("🎨 DESIGN:");
console.log("   • Responsive Design      (Mobile ✓ Tablet ✓ Desktop ✓)");
console.log("   • Dark Theme             (Slate 900 + Indigo/Cyan)");
console.log("   • TailwindCSS            (Utility-first CSS)");
console.log("   • Smooth Animations      (Transitions fluides)");
console.log("\n");

console.log("⚙️  FONCTIONNALITÉS:");
console.log("   • Navigation fluide      (Smooth scrolling)");
console.log("   • Menu mobile            (Hamburger responsive)");
console.log("   • Formulaire contact     (Validation + Envoi)");
console.log("   • Animations CSS         (Hover effects)");
console.log("   • Barres compétences     (Visualisation skills)");
console.log("   • Timeline expériences   (Chronologie professionnelle)");
console.log("\n");

console.log("═══════════════════════════════════════════════════════════════");
console.log("\n");

console.log("🚀 DÉMARRAGE RAPIDE:");
console.log("   npm start");
console.log("   Puis accédez à: http://localhost:3000");
console.log("\n");

console.log("═══════════════════════════════════════════════════════════════");
console.log("\n");

console.log("📊 STRUCTURE MVC:");
console.log("   Models      → models/");
console.log("   Views       → views/");
console.log("   Controllers → controllers/");
console.log("   Routes      → routes/");
console.log("   Static      → public/");
console.log("\n");

console.log("═══════════════════════════════════════════════════════════════\n");


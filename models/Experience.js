// models/Experience.js

class Experience {
  constructor(title, company, description, technologies, duration, achievements) {
    this.title = title;
    this.company = company;
    this.description = description;
    this.technologies = technologies;
    this.duration = duration;
    this.achievements = achievements;
  }
}

class ExperienceModel {
  constructor() {
    this.experiences = [
      new Experience(
        "Développeur Web",
        "Saint Aubin La Salle",
        "Développement et maintenance de solutions web pour la gestion scolaire",
        ["WordPress", "PHP", "MySQL", "JavaScript"],
        "2025 - Présent",
        [
          "Création de sites web pour l'établissement scolaire",
          "Maintenance et mises à jour régulières de la plateforme existante",
          "Formation du personnel à l'utilisation des outils numériques",
        ]
      ),
    ];

    this.skills = {
      frontend: ["React", "Vue.js", "Next.js", "TailwindCSS", "TypeScript", "JavaScript"],
      backend: ["Node.js", "Express", "Java","Python"],
      database: ["PostgreSQL", "MongoDB", "MySQL"],
      tools: ["Docker", "AWS", "Git", "GitHub Actions", "Vercel"]
    };

    this.softSkills = [
      "Résolution de problèmes",
      "Gestion de projet",
      "Travail d'équipe",
    ];
  }

  getAll() {
    return this.experiences;
  }

  getSkills() {
    return this.skills;
  }

  getSoftSkills() {
    return this.softSkills;
  }

  getStats() {
    return {
      yearsExperience: 2,
      projectsCompleted: 3,
    };
  }
}

module.exports = new ExperienceModel();


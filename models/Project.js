// models/Project.js

class Project {
  constructor(id, title, description, image, technologies, link, details) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.technologies = technologies;
    this.link = link;
    this.details = details;
  }
}

class ProjectModel {
  constructor() {
    this.projects = [
      new Project(
        1,
        "French Legacy website",
        "Site vitrine pour un server communautaire nommée French Legacy",
        "/images/nexus-erp.jpg",
        ["Next.js", "Node.js","TailwindCSS"],
        "#",
        {
          problem: "Nécessité d'un système ERP moderne et scalable",
          solution: "Développement d'une plateforme web complète avec architecture microservices",
          features: ["Rapports en temps réel", "API RESTful"],
          team: "3 développeurs",
          duration: "2 mois"
        }
      ),
      new Project(
        2,
        "Blog Laravel",
        "Blog personnel développé avec Laravel pour partager des articles techniques",
        "/images/la-solution.jpg",
        ["Laravel", "JavaScript", "MySQL", "Docker"],
        "#",
        {
          problem: "Besoin d'une plateforme de blogging personnalisée et facile à gérer",
          solution: "Création d'un blog avec un CMS intégré pour une gestion simplifiée du contenu",
          features: ["Système de gestion de contenu", "Commentaires intégrés", "Likes"],
          team: "Seul",
          duration: "3 semaines"
        }
      ),
      new Project(
        3,
        "Angers Scoot",
        "Application administrative de location de scooters électriques pour la ville d'Angers",
        "/images/stack-ecosystem.jpg",
        ["C#", "SQL Server", "Windows Forms"],
        "#",
        {
          problem: "Gestion inefficace des locations de scooters électriques avec des outils obsolètes",
          solution: "Développement d'une application desktop pour automatiser les processus de location et de gestion des scooters",
          features: ["Gestion des utilisateurs", "Suivi des locations en temps réel", "Rapports de maintenance"],
          team: "2 développeurs",
          duration: "2 mois"
        }
      )
    ];
  }

  getAll() {
    return this.projects;
  }

  getById(id) {
    return this.projects.find(p => p.id === parseInt(id));
  }

  getCount() {
    return this.projects.length;
  }
}

module.exports = new ProjectModel();


// models/Portfolio.js

class Portfolio {
  constructor() {
    this.name = "Futur Data Analyst";
    this.title = "Analyste de Données";
    this.description = "Passionné par l'analyse de données et les technologies innovantes. Expertise en création de rapports et de visualisations de données.";
    this.email = "sashamangin2006@gmail.com";
    this.location = "France";
    this.socials = {
      linkedin: "https://www.linkedin.com/in/sasha-mangin-95ba8036b/",
      github: "https://github.com/Nakou20",
    };
  }

  getInfo() {
    return {
      name: this.name,
      title: this.title,
      description: this.description,
      contact: {
        email: this.email,
        phone: this.phone,
        location: this.location
      },
      socials: this.socials
    };
  }
}

module.exports = new Portfolio();


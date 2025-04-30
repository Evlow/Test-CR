import { LitElement, html } from "lit";
// Importation des composants enfants (header et container de cartes)
import "./components/header/header-component.js";
import "./components/cards/cards-container/cards-container.js";
// Importation du style global
import "./scss/style.scss" assert { type: "css" };

// Définition du composant principal
export class MainApplication extends LitElement {
  // Déclaration des propriétés observables
  static properties = {
    cards: { type: Array },
    allCards: { type: Array },
    displayedCards: { type: Array },
  };

  constructor() {
    super();
    this.cards = [];
    this.allCards = [];
    this.displayedCards = [];
    this.initializeCards();
    this.addCard();
  }

  // Méthode pour initialiser les cartes
  initializeCards() {
    this.allCards = [
      {
        id: "056a3b1b-0ce7-11ed-81fc-71bc641d1d18",
        name: "Paris",
        userName: "Morgane",
        description:
          "Capitale de la France, Paris est célèbre pour son histoire, sa culture et sa mode.",
        photoUrl: "/public/assets/paris.webp",
        avatar: "/public/assets/morgane.jpg",
        edit: "2024-12-10T14:30:00Z",
        application: "Application de Paris",
      },
      {
        id: "1f6b7c9a-0ce7-11ed-81fc-71bc641d1d18",
        name: "Marseille",
        userName: "Karim",
        description:
          "Ville portuaire méditerranéenne, Marseille est un mélange de cultures et d'histoire.",
        photoUrl: "/public/assets/marseille.webp",
        avatar: "/public/assets/karim.jpg",
        application: "Application de Marseille",
        edit: "2024-12-10T14:30:00Z",
      },
      {
        id: "2a9c8d5e-0ce7-11ed-81fc-71bc641d1d18",
        name: "Lyon",
        userName: "June",
        description:
          "Célèbre pour sa cuisine et son patrimoine historique, Lyon est un centre gastronomique.",
        photoUrl: "/public/assets/lyon.webp",
        avatar: "/public/assets/june.jpg",
        application: "Application de Lyon",
        edit: "2024-12-10T14:30:00Z",
      },
      {
        id: "3b3d9e7f-0ce7-11ed-81fc-71bc641d1d18",
        name: "Nice",
        userName: "Bernard",
        description:
          "Nice, sur la Côte d'Azur, est connue pour ses plages, son climat et sa promenade des Anglais.",
        photoUrl: "/public/assets/nice.webp",
        avatar: "/public/assets/bernard.jpg",
        application: "Application de Nice",
        edit: "2024-12-10T14:30:00Z",
      },
      {
        id: "4c4e0f0a-0ce7-11ed-81fc-71bc641d1d18",
        name: "Toulouse",
        userName: "Camille",
        description:
          "Ville rose, Toulouse est reconnue pour son architecture et son aérospatial.",
        photoUrl: "/public/assets/toulouse.webp",
        avatar: "/public/assets/camille.jpg",
        application: "Application de Toulouse",
        edit: "2024-12-10T14:30:00Z",
      },
      {
        id: "5d5f1a1b-0ce7-11ed-81fc-71bc641d1d18",
        name: "Bordeaux",
        userName: "Kévin",
        description:
          "Bordeaux est célèbre pour son vin et son architecture classée au patrimoine mondial.",
        photoUrl: "/public/assets/bordeaux.webp",
        avatar: "/public/assets/kevin.jpg",
        application: "Application de Bordeaux",
        edit: "2024-12-10T14:30:00Z",
      },
      {
        id: "6e6f2b2c-0ce7-11ed-81fc-71bc641d1d18",
        name: "Lille",
        userName: "Sylvie",
        description:
          "Lille est une ville dynamique, alliant culture flamande et architecture typique du nord.",
        photoUrl: "/public/assets/lille.webp",
        avatar: "/public/assets/sylvie.png",
        application: "Application de Lille",
        edit: "2024-12-10T14:30:00Z",
      },
      {
        id: "d3m9i9j3-0ce7-11ed-81fc-71bc641d1d18",
        name: "Cannes",
        userName: "Justine",
        description:
          "Cannes est une ville mondialement connue pour son festival du film et ses plages.",
        photoUrl: "/public/assets/cannes.webp",
        avatar: "/public/assets/justine.png",
        iconClass: "my-icon-class",
        application: "Application de Cannes",
        edit: "2024-12-10T14:30:00Z",
      },
    ];
  }

  // Retourne une carte aléatoire
  getRandomCard() {
    return Math.floor(Math.random() * this.allCards.length);
  }

  // Ajoute une carte aléatoire
  addCard() {
    const randomIndex = this.getRandomCard();
    const addCard = this.allCards[randomIndex];
    this.displayedCards = [...this.displayedCards, addCard];
    this.cards = [...this.displayedCards];
  }

  // Gestionnaire pour l'événement personnalisé "create-card"
  handleCreateCard() {
    this.addCard();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("create-card", this.handleCreateCard);
    this.debounceSearch = this.debounce(this.searchCards, 300);
    this.addEventListener("search-input", (e) =>
      this.debounceSearch(e.detail.query)
    );
  }

  // Fonction pour limiter la fréquence d'éxécution
  debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  // Effectue une recherche dans les cartes affichées
  searchCards(query) {
    query = query.toLowerCase().trim();
    // Si la recherche est vide, afficher les cartes qui ont déja été ajoutées
    this.cards = !query
      ? [...this.displayedCards]
      : this.displayedCards.filter((card) =>
          card.name.toLowerCase().includes(query)
        );
  }

  render() {
    return html`
      <header-component></header-component>
      <cards-container .cards="${this.cards}"> </cards-container>
    `;
  }
}

customElements.define("main-application", MainApplication);

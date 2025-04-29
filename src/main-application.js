import { LitElement, html } from "lit";
import "./components/header/header-component.js";
import "./components/cards/cards-container/cards-container.js";
import "./scss/style.scss" assert { type: "css" };

export class MainApplication extends LitElement {
  static properties = {
    cards: { type: Array },
    allCards: { type: Array },
    cardIndex: { type: Number },
    displayedCards: { type: Array },
  };

  constructor() {
    super();
    this.cards = [];
    this.allCards = [];
    this.cardIndex = 0;
    this.displayedCards = [];
    this.initializeCards();
  }

  initializeCards() {
    this.allCards = [
      {
        id: "056a3b1b-0ce7-11ed-81fc-71bc641d1d18",
        name: "Paris",
        userName: "Morgane",
        description: "Aliqua voluptate laboris eiusmod sit occaecat. Dolor irure incididunt labor ...",
        photoUrl: "/public/assets/picture.webp",
        
      },
      {
        id: "1f6b7c9a-0ce7-11ed-81fc-71bc641d1d18",
        name: "Marseille",
        userName: "Sylvie",
        description: "La deuxième plus grande ville de France.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "2a9c8d5e-0ce7-11ed-81fc-71bc641d1d18",
        name: "Lyon",
        userName: "June",
        description: "Célèbre pour sa cuisine.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "3b3d9e7f-0ce7-11ed-81fc-71bc641d1d18",
        name: "Nice",
        userName: "Charles",
        description: "Célèbre pour ses plages.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "4c4e0f0a-0ce7-11ed-81fc-71bc641d1d18",
        name: "Toulouse",
        userName: "Camille",
        description: "Ville rose avec une grande histoire.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "5d5f1a1b-0ce7-11ed-81fc-71bc641d1d18",
        name: "Bordeaux",
        userName: "Kévin",
        description: "Célèbre pour son vin.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "6e6f2b2c-0ce7-11ed-81fc-71bc641d1d18",
        name: "Lille",
        userName: "Mathis",
        description: "Culture flamande et architecture.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "7f7g3c3d-0ce7-11ed-81fc-71bc641d1d18",
        name: "Strasbourg",
        userName: "Carole",
        description: "Cathédrale gothique et quartier historique.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "8h8i4d4e-0ce7-11ed-81fc-71bc641d1d18",
        name: "Nantes",
        userName: "Sylvie",
        description: "Ville portuaire et culturelle.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "9i9j5e5f-0ce7-11ed-81fc-71bc641d1d18",
        name: "Montpellier",
        userName: "Alain",
        description: "Ville universitaire et médiévale.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "a0j6f6g0-0ce7-11ed-81fc-71bc641d1d18",
        name: "Rennes",
        userName: "Véronique",
        description: "Ville avec un centre historique.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "b1k7g7h1-0ce7-11ed-81fc-71bc641d1d18",
        name: "Aix-en-Provence",
        userName: "Louis",
        description: "Célèbre pour ses marchés provençaux.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "c2l8h8i2-0ce7-11ed-81fc-71bc641d1d18",
        name: "Avignon",
        userName: "Léa",
        description: "Palais des Papes et festival de théâtre.",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "d3m9i9j3-0ce7-11ed-81fc-71bc641d1d18",
        name: "Cannes",
        userName: "Amélie",
        description: "Célèbre pour son festival du film.",
        photoUrl: "/public/assets/picture.webp",
      },
    ];
  }
  getRandomIndex() {
    return Math.floor(Math.random() * this.allCards.length);
  }

  revealNextCard() {
    const randomIndex = this.getRandomIndex();
    const nextCard = this.allCards[randomIndex];
    this.cards = [...this.cards, nextCard];
  }


  handleCreateCard() {
    this.revealNextCard();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("create-card", this.handleCreateCard);
    this.addEventListener("search-input", this.handleSearchInput);
  }

  // Fonction de gestion de la recherche
  handleSearchInput(event) {
    const query = event.detail.query.toLowerCase();
    if (!query) {
      this.cards = [...this.displayedCards];
    } else {
      this.cards = this.displayedCards.filter(
        (card) =>
          card.name.toLowerCase().includes(query)
      );
    }
  }

  render() {
    return html`
      <header-component></header-component>
      <cards-container .cards="${this.cards}"></cards-container>
    `;
  }
}

customElements.define("main-application", MainApplication);

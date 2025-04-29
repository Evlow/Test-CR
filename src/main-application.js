import { LitElement, html } from 'lit';
import './components/header/header-component.js';
import './components/cards/cards-container/cards-container.js';
import './scss/style.scss' assert { type: 'css' };

export class MainApplication extends LitElement {
  static properties = {
    cards: { type: Array },
    allCards: { type: Array },
    cardIndex: { type: Number },
  };

  constructor() {
    super();
    this.cards = [];
    this.allCards = [];
    this.cardIndex = 0;
    this.initializeCards();       // Initialise les 15 cartes
  }

  // Initialise les cartes avec 15 villes prédéfinies
  initializeCards() {
    this.allCards = [
      {
        id: "1",
        modificationDate: "1658843778707",
        userName: "Alice",
        name: "Paris",
        description: "La capitale de la France, célèbre pour sa culture, son art et ses monuments emblématiques comme la Tour Eiffel.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/paris.webp",
      },
      {
        id: "2",
        modificationDate: "1658843778708",
        userName: "Bob",
        name: "Marseille",
        description: "La deuxième plus grande ville de France, célèbre pour son vieux port et sa culture méditerranéenne.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/marseille.webp",
      },
      {
        id: "3",
        modificationDate: "1658843778709",
        userName: "Charlie",
        name: "Lyon",
        description: "Connue pour sa cuisine, son patrimoine historique et ses quartiers classés à l'UNESCO.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/picture.webp",
      },
      {
        id: "4",
        modificationDate: "1658843778710",
        userName: "Diane",
        name: "Nice",
        description: "Située sur la Côte d'Azur, célèbre pour ses plages et son climat agréable.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/nice.webp",
      },
      {
        id: "5",
        modificationDate: "1658843778711",
        userName: "Elliot",
        name: "Toulouse",
        description: "La ville rose, connue pour son architecture en briques et son rôle important dans l'industrie aérospatiale.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/toulouse.webp",
      },
      {
        id: "6",
        modificationDate: "1658843778712",
        userName: "Francis",
        name: "Bordeaux",
        description: "Célèbre pour son vin, son architecture élégante et ses quais pittoresques.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/bordeaux.webp",
      },
      {
        id: "7",
        modificationDate: "1658843778713",
        userName: "Grace",
        name: "Lille",
        description: "Une ville dynamique, connue pour sa culture flamande et sa grande place du Général-de-Gaulle.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/lille.webp",
      },
      {
        id: "8",
        modificationDate: "1658843778714",
        userName: "Henry",
        name: "Strasbourg",
        description: "Célèbre pour sa cathédrale gothique et son quartier historique, classé au patrimoine mondial de l'UNESCO.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/strasbourg.webp",
      },
      {
        id: "9",
        modificationDate: "1658843778715",
        userName: "Irene",
        name: "Nantes",
        description: "Ville portuaire et culturelle, célèbre pour ses machines géantes et son château des Ducs de Bretagne.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/nantes.webp",
      },
      {
        id: "10",
        modificationDate: "1658843778716",
        userName: "Jack",
        name: "Montpellier",
        description: "Ville universitaire avec une architecture médiévale et une vie culturelle animée.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/montpellier.webp",
      },
      {
        id: "11",
        modificationDate: "1658843778717",
        userName: "Karen",
        name: "Rennes",
        description: "Célèbre pour son centre historique et son rôle important dans la région Bretagne.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/rennes.webp",
      },
      {
        id: "12",
        modificationDate: "1658843778718",
        userName: "Louis",
        name: "Aix-en-Provence",
        description: "Ville provençale charmante, connue pour ses marchés et son patrimoine roman.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/aix-en-provence.webp",
      },
      {
        id: "13",
        modificationDate: "1658843778719",
        userName: "Michel",
        name: "Avignon",
        description: "Ville historique, connue pour son Palais des Papes et son festival de théâtre.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/avignon.webp",
      },
      {
        id: "14",
        modificationDate: "1658843778720",
        userName: "Nathalie",
        name: "Cannes",
        description: "Célèbre pour son festival du film et ses plages de luxe.",
        iconClass: "my-icon-class",
        photoUrl: "/public/assets/cannes.webp",
      },
    ];
  }

  revealNextCard() {
    if (this.cardIndex < this.allCards.length) {
      const nextCard = this.allCards[this.cardIndex];
      this.cards = [...this.cards, nextCard];
      this.cardIndex++;
    }
  }

  handleCreateCard() {
    this.revealNextCard();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('create-card', this.handleCreateCard);
    this.addEventListener('search-input', this.handleSearchInput);
  }
  
  handleSearchInput(event) {
    const query = event.detail.query.toLowerCase();
    if (!query) {
      this.cards = [...this.allCards];  
    } else {
      this.cards = this.allCards.filter(
        (card) =>
          card.name.toLowerCase().includes(query) ||
          card.description.toLowerCase().includes(query)
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

customElements.define('main-application', MainApplication);

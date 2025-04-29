import { LitElement, html } from 'lit';
import './components/header/header-component.js';
import './components/cards/cards-container/cards-container.js';
import './scss/style.scss' assert { type: 'css' };

export class MainApplication extends LitElement {
  static properties = {
    cards: { type: Array },
    allCards: { type: Array },  // Contient toutes les cartes
  };

  constructor() {
    super();
    this.cards = [];    // Contient les cartes affichées actuellement
    this.allCards = []; // Contient toutes les cartes
    this.generateRandomCards(5); // Générer 5 cartes aléatoires au démarrage
  }

  // Fonction pour générer une carte aléatoire avec les propriétés définies
  generateRandomCard() {
    return {
      id: crypto.randomUUID(), // Générer un identifiant unique
      modificationDate: Date.now().toString(), // Date actuelle en millisecondes
      userName: "John Doe", // Nom d'utilisateur fixe (ou aléatoire si tu préfères)
      name: `Titre de carte ${Math.floor(Math.random() * 1000)}`, // Titre aléatoire
      description: `Une description générée dynamiquement pour la carte ${Math.floor(Math.random() * 1000)}.`, // Description dynamique
      iconClass: "icon-default", // Icône par défaut
      photoUrl: `/assets/picture${Math.floor(Math.random() * 5) + 1}.webp`, // URL d'image aléatoire
    };
  }

  // Fonction pour générer plusieurs cartes aléatoires
  generateRandomCards(number) {
    const newCards = [];
    for (let i = 0; i < number; i++) {
      newCards.push(this.generateRandomCard()); // Ajouter une carte aléatoire
    }
    this.allCards = [...this.allCards, ...newCards];  // Mettre à jour le tableau de toutes les cartes
    this.cards = [...this.allCards];  // Par défaut, afficher toutes les cartes
  }

  // Méthode pour ajouter une nouvelle carte
  addCard() {
    const newCard = this.generateRandomCard(); // Générer une carte aléatoire
    this.allCards = [...this.allCards, newCard]; // Ajouter la carte à toutes les cartes
    this.cards = [...this.allCards]; // Mettre à jour les cartes affichées
    this.requestUpdate(); // Demander une mise à jour pour le rendu
  }

  // Méthode pour gérer la création de carte
  handleCreateCard() {
    this.addCard(); // Ajouter une carte
  }

  // Méthode pour gérer l'événement de recherche (si nécessaire)
  handleSearch(query) {
    if (!query) {
      this.cards = [...this.allCards]; // Réinitialiser à toutes les cartes
      return;
    }
    const filtered = this.cards.filter(
      (card) =>
        card.name.toLowerCase().includes(query.toLowerCase()) ||
        card.description.toLowerCase().includes(query.toLowerCase())
    );
    this.cards = filtered;
  }

  connectedCallback() {
    super.connectedCallback();
    // Écouter l'événement de création de carte depuis le header-component
    this.addEventListener('create-card', this.handleCreateCard);
    // Écouter l'événement de recherche depuis le search-bar
    this.addEventListener('search-input', (e) => this.handleSearch(e.detail.query));
  }

  render() {
    return html`
      <header-component></header-component>
      <cards-container .cards="${this.cards}"></cards-container>
    `;
  }
}

customElements.define('main-application', MainApplication);

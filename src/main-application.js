import { LitElement, html } from 'lit';
import './components/header/header-component.js';
import './components/cards/cards-container/cards-container.js';
import './scss/style.scss' assert { type: 'css' };

export class MainApplication extends LitElement {
    static properties = {
        cards: { type: Array },
    };

    constructor() {
        super();
        const savedCards = localStorage.getItem('cards');
        this.cards = savedCards ? JSON.parse(savedCards) : [];
    }

    addCard() {
        const newCard = {
            title: `Carte ${this.cards.length + 1}`,
            description: 'Description générée dynamiquement.',
            photoUrl: `/assets/picture.webp`,
        };

        this.cards = [...this.cards, newCard];
        localStorage.setItem('cards', JSON.stringify(this.cards));
    }

    handleCreateCard() {
        this.addCard();
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('create-card', this.handleCreateCard);
    }

    render() {
        return html`
      <header-component></header-component>
      <cards-container .cards="${this.cards}"></cards-container>
    `;
    }
}

customElements.define('main-application', MainApplication);

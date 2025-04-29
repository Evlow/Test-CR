import { LitElement, html } from 'lit';
import '../item-card/item-card';  // Importation du composant ItemCard
import styles from './cards-container.scss' assert { type: 'css' };

export class CardsContainer extends LitElement {
  static styles = styles;

  static properties = {
    cards: { type: Array },
  };

  constructor() {
    super();
    this.cards = [];  // Initialiser un tableau vide de cartes
  }

  render() {
    return html`
      <div class="cards-container">
        <h2 class="cards-container__title">Mes ressources</h2>

        ${this.cards.length > 0
          ? html`
              <div class="cards-container__list">
                ${this.cards.map(
                  (card) => html`
                    <item-card
                      .title="${card.title}"
                      .description="${card.description}"
                      .photoUrl="${card.photoUrl}"
                    ></item-card>
                  `
                )}
              </div>
            `
          : html`
              <p class="cards-container__empty-message">
                Aucune carte disponible.
              </p>
            `}
      </div>
    `;
  }
}

customElements.define('cards-container', CardsContainer);

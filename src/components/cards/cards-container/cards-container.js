import { LitElement, html } from "lit";
import "../item-card/item-card";
import styles from "./cards-container.scss" assert { type: "css" };

export class CardsContainer extends LitElement {
  static styles = styles;

  static properties = {
    cards: { type: Array },
  };

  constructor() {
    super();
    this.cards = [];
  }

  render() {
    return html`
      <div
        class="cards-container"
        aria-label="Liste des cartes"
        aria-live="polite"
        aria-relevant="additions removals"
      >
        ${this.cards.length === 0
          ? html`<p>Aucune carte trouvée.</p>`
          : this.cards.map(
              (card) => html`
                <item-card
                  .card="${card}"
                  role="listitem"
                  aria-label="${card.name}: ${card.description}"
                ></item-card>
              `
            )}
      </div>
    `;
  }
}

customElements.define("cards-container", CardsContainer);

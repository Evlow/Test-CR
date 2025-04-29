import { LitElement, html } from "lit";
import styles from "./item-card.scss" assert { type: "css" };

class ItemCard extends LitElement {
  static styles = styles;

  static properties = {
    title: { type: String },
    description: { type: String },
    photoUrl: { type: String },
  };

  constructor() {
    super();
    this.title = "Titre de la carte";
    this.description = "Description de la carte";
    this.photoUrl =' /assets/picture.webp';
  }

  render() {
    return html`
      <div class="card-container">
        <div class="card">
          <div class="content">
            <img src="${this.photoUrl}" alt="${this.title}" />
            <div class="title">${this.title}</div>
            <div class="description">${this.description}</div>
          </div>
        </div>
      </div>
    `;
  }
}

// Nom du composant personnalisé mis à jour
customElements.define("item-card", ItemCard);

import { LitElement, html } from "lit";
import styles from "./item-card.scss" assert { type: "css" };
import "../../icons/icons-component.js";
class ItemCard extends LitElement {
  static styles = styles;

  static properties = {
    userName: { type: String },
    title: { type: String },
    description: { type: String },
    photoUrl: { type: String },
    edit: { type: Object },
  };

  constructor() {
    super();
    this.userName = "Nom d'utilisateur";
    this.title = "Titre de la carte";
    this.description = "Description de la carte";
    this.photoUrl = "/assets/picture.webp";
    this.edit = new Date();

    this.icons = [
      { name: "eye", path: "/assets/eye.svg" },
      { name: "brush", path: "/assets/brush.svg" },
      { name: "copy", path: "/assets/copy.svg" },
      { name: "delete", path: "/assets/delete.svg" },
      { name: "more", path: "/assets/more.svg" },
    ];
  }

  formatDate(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("fr-FR", options).format(date);
  }

  render() {
    const formattedDate = this.formatDate(this.edit);

    return html`
      <div class="card-container">
        <div class="card">
          <div class="content">
            <img src="${this.photoUrl}" alt="${this.title}" />
            <div class="title">${this.title}</div>
            <div class="description">${this.description}</div>
            <div class="edit">Modifier le ${formattedDate}</div>

            <icons-component .icons="${this.icons}"></icons-component>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("item-card", ItemCard);

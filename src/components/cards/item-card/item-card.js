import { LitElement, html, css } from "lit";
import styles from "./item-card.scss" assert { type: "css" };
import "../../icons/icons-component.js";

class ItemCard extends LitElement {
  static styles = styles;

  static properties = {
    userName: { type: String },
    name: { type: String },
    description: { type: String },
    photoUrl: { type: String },
    edit: { type: Object },
    avatar: { type: String },
    application: { type: String },
  };

  constructor() {
    super();
    this.userName = "Nom d'utilisateur";
    this.name = "Titre de la carte";
    this.description = "Description de la carte";
    this.photoUrl = "/assets/picture.webp";
    this.edit = new Date();
    this.avatar = "/assets/vector.svg";
    this.application = "Mon Application";

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
          <!-- Card Header -->
          <div class="card-header">
            <input type="checkbox" class="checkbox" />
            <div class="avatar">
              <img src="${this.avatar}" alt="${this.userName}" />
              <div class="username">${this.userName}</div>
            </div>
          </div>

          <!-- Card Media -->
          <div class="card-media">
            <img src="${this.photoUrl}" alt="${this.name}" />
          </div>

          <!-- Card Content -->
          <div class="card-content">
            <h2 class=name>${this.name}</h2>
            <p class="description">${this.description}</p>
            <div class="meta">
              <div class="meta-labels">
                <span>Modifier le</span>
                <span>Application</span>
              </div>
              <div class="meta-values">
                <span>${formattedDate}</span>
                <span>${this.application}</span>
              </div>
            </div>
          </div>
          <icons-component .icons="${this.icons}"></icons-component>
        </div>
      </div>
    `;
  }
}

customElements.define("item-card", ItemCard);

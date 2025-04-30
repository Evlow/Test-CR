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
      { name: "eye", path: "/assets/eye.svg", label: "Aperçu" },
      { name: "brush", path: "/assets/brush.svg", label: "Modifier" },
      { name: "copy", path: "/assets/copy.svg", label: "Copier" },
      { name: "delete", path: "/assets/delete.svg", label: "Supprimer" },
      { name: "more", path: "/assets/more.svg", label: "Plus d’options" },
    ];
  }

  formatDate(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("fr-FR", options).format(date);
  }

  render() {
    const formattedDate = this.formatDate(this.edit);

    return html`
      <article class="card-container">
        <section class="card">

          <div class="card-header">
            <label class="checkbox-label">
              <input type="checkbox" class="checkbox" />
              <span class="sr-only">Sélectionner cette carte</span>
            </label>
            <div class="avatar">
              <img src="${this.avatar}" alt="Avatar de ${this.userName}" />
              <div class="username">${this.userName}</div>
            </div>
          </div>

          <div class="card-media">
            <img src="${this.photoUrl}" alt="${this.name}" loading="lazy" />
          </div>

          <div class="card-content">
            <h2 class="name">${this.name}</h2>
            <p class="description">${this.description}</p>
            <div class="meta">
              <div class="meta-labels">
                <span>Modifié le</span>
                <span>Application</span>
              </div>
              <div class="meta-values">
                <span>${formattedDate}</span>
                <span>${this.application}</span>
              </div>
            </div>
          </div>
          <icons-component .icons="${this.icons}"></icons-component>
        </section>
      </article>
    `;
  }
}

customElements.define("item-card", ItemCard);

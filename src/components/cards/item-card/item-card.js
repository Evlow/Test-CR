import { LitElement, html } from "lit";
import styles from "./item-card.scss" assert { type: "css" };
import "../../icons/icons-component.js";

class ItemCard extends LitElement {
  static styles = styles;

  static properties = {
    card: { type: Object },
  };

  constructor() {
    super();
    this.card = {};
    this.icons = [
      { name: "eye", path: "/assets/eye.svg", label: "Aperçu" },
      { name: "brush", path: "/assets/brush.svg", label: "Modifier" },
      { name: "copy", path: "/assets/copy.svg", label: "Copier" },
      { name: "delete", path: "/assets/delete.svg", label: "Supprimer" },
      { name: "more", path: "/assets/more.svg", label: "Plus d’options" },
    ];
  }

  formatDate(date) {
    if (!date) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("fr-FR", options).format(new Date(date));
  }

  render() {
    const { name, userName, description, photoUrl, edit, application, avatar } =
      this.card;

    return html`
      <article class="card-container">
        <section class="card">
          <div class="card-header">
            <label class="checkbox-label">
              <input type="checkbox" class="checkbox" />
              <span class="sr-only">Sélectionner cette carte</span>
            </label>
            <div class="avatar">
              <img src="${avatar}" alt="Avatar de ${userName}" />
              <h1 class="username">${userName}</h1>
            </div>
          </div>

          <div class="card-media">
            <img src="${photoUrl}" alt="${name}" loading="lazy" />
          </div>

          <div class="card-content">
            <h2 class="name">${name}</h2>
            <p class="description">${description}</p>
            <div class="meta">
              <div class="meta-labels">
                <span>Modifié le</span>
                <span>Application</span>
              </div>
              <div class="meta-values">
                <span>${this.formatDate(edit)}</span>
                <span>${application}</span>
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

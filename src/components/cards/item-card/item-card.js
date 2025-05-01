import { LitElement, html, css } from "lit";
import styles from "./item-card.scss" assert { type: "css" };
import "../card-header/card-header.js";
import "../card-media/card-media.js";
import "../card-content/card-content.js";
import "../card-footer/card-footer.js";


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

  render() {
    const { name, userName, description, photoUrl, edit, application, avatar } = this.card;

    return html`
      <article class="card-container">
        <section class="card">
          <card-header .userName="${userName}" .avatar="${avatar}"></card-header>
          <card-media .photoUrl="${photoUrl}" .name="${name}"></card-media>
          <card-content .name="${name}" .description="${description}" .edit="${edit}" .application="${application}"></card-content>
          <card-footer .icons="${this.icons}"></card-footer>
        </section>
      </article>
    `;
  }
}

customElements.define("item-card", ItemCard);

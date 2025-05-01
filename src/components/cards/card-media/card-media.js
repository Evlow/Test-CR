import { LitElement, html, css } from "lit";
import styles from "./card-media.scss" assert { type: "css" };

class CardMedia extends LitElement {
  static styles = styles;

  static properties = {
    photoUrl: { type: String },
    name: { type: String },
  };

  render() {
    return html`
      <div class="card-media">
        <img src="${this.photoUrl}" alt="${this.name}" loading="lazy" />
      </div>
    `;
  }
}

customElements.define("card-media", CardMedia);

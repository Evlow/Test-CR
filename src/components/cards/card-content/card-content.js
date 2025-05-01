import { LitElement, html, css } from "lit";
import "../../meta/meta-info.js";
import styles from "./card-content.scss" assert { type: "css" };

class CardContent extends LitElement {
  static styles = styles;
  static properties = {
    name: { type: String },
    description: { type: String },
    edit: { type: String },
    application: { type: String },
  };

  render() {
    return html`
      <div class="card-content">
        <h2 class="name">${this.name}</h2>
        <p class="description">${this.description}</p>
        <meta-info
          .edit="${this.edit}"
          .application="${this.application}"
        ></meta-info>
      </div>
    `;
  }
}

customElements.define("card-content", CardContent);

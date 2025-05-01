import { LitElement, html } from "lit";
import styles from "./meta-info.scss" assert { type: "css" };


class MetaInfo extends LitElement {
  static styles = styles;
  static properties = {
    edit: { type: String },
    application: { type: String },
  };

  formatDate(date) {
    if (!date) return '';
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat('fr-FR', options).format(new Date(date));
  }

  render() {
    return html`
      <div class="meta">
        <div class="meta-labels">
          <span>Modifié le</span>
          <span>Application</span>
        </div>
        <div class="meta-values">
          <span>${this.formatDate(this.edit)}</span>
          <span>${this.application}</span>
        </div>
      </div>
    `;
  }

 
}

customElements.define("meta-info", MetaInfo);
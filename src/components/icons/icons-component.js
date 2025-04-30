import { LitElement, html, css } from "lit";
import styles from "./icons-component.scss" assert { type: "css" };

export class IconsComponent extends LitElement {
  static styles = styles;

  static properties = {
    icons: { type: Array },
    iconSize: { type: String },
  };

  constructor() {
    super();
    this.icons = [];
    this.iconSize = "24px";
  }

  render() {
    return html`
      <button class="icons-container">
        ${this.icons.map(
          (icon) => html`
            <img
              src="${icon.path}"
              alt="${icon.name}"
              aria-label="${icon.label}"
              style="width: ${this.iconSize}; height: ${this.iconSize};"
            />
          `
        )}
      </button>
    `;
  }
}

customElements.define("icons-component", IconsComponent);

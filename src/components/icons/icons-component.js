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
      <div class="icons-container">
        ${this.icons.map(
          (icon) => html`
            <button
              type="button"
              class="icon-button"
              @click="${() => this.handleIconClick(icon)}"
              aria-label="${icon.label}"
            >
              <img
                src="${icon.path}"
                alt=""
                style="width: ${this.iconSize}; height: ${this.iconSize};"
              />
            </button>
          `
        )}
      </div>
    `;
  }
}

customElements.define("icons-component", IconsComponent);

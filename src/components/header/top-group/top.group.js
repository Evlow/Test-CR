import { LitElement, html } from 'lit';
import styles from "./top.group.scss" assert { type: "css" };

export class TopGroup extends LitElement {
static styles = styles;
  icons = [
    { name: "home", path: "/assets/home.svg", alt: "Aller à la page d'accueil", className: "icon-home" },
  ];

  activeIcon = "home";

  handleIconClick(iconName) {
    if (iconName !== this.activeIcon) {
      this.activeIcon = iconName;
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <div class="top-group">
        <nav aria-label="Navigation gauche">
          ${this.icons.map((icon) => html`
            <button
              class="icon-button ${this.activeIcon === icon.name ? "active" : ""}"
              @click="${() => this.handleIconClick(icon.name)}"
              aria-label="${icon.alt}"
            >
              <img src="${icon.path}" class="${icon.className}" aria-hidden="true" />
            </button>
          `)}
        </nav>
      </div>
    `;
  }
}

customElements.define('top-group', TopGroup);

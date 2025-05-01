import { LitElement, html } from "lit";
import styles from "./header-component.scss" assert { type: "css" };
import "./top-tools/top-tools.js";
import "./top-content-tools/top-content-tools.js";

export class HeaderComponent extends LitElement {
  static styles = styles;

  icons = [
    { name: "home", path: "/assets/home.svg", alt: "Accueil", position: "left", className: "icon-home" },
    { name: "star", path: "/assets/star.svg", alt: "Favoris", position: "right", className: "icon" },
    { name: "settings", path: "/assets/settings.svg", alt: "Paramètres", position: "right", className: "icon" },
    { name: "support", path: "/assets/support.svg", alt: "Aide", position: "right", className: "icon" },
    { name: "mail", path: "/assets/mail.svg", alt: "Messages", position: "right", className: "icon", mailNumber: 4 },
    { name: "notifications", path: "/assets/notifications.svg", alt: "Notifications", position: "right", className: "icon" },
    { name: "profil", path: "/assets/avatar.svg", alt: "Profil", position: "right", className: "icon-profile" },
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
      <header>
        <div class="left">
          <div class="top-left">
            <nav aria-label="Navigation gauche">
              ${this.icons
                .filter((icon) => icon.position === "left")
                .map(
                  (icon) => html`
                    <button
                      class="icon-button ${this.activeIcon === icon.name ? "active" : ""}"
                      @click="${() => this.handleIconClick(icon.name)}"
                      aria-label="${icon.alt}"
                    >
                      <img src="${icon.path}" class="${icon.className}" aria-hidden="true" />
                    </button>
                  `
                )}
            </nav>
          </div>
        </div>

        <div class="home-container ${this.activeIcon === "home" ? "show" : ""}">
          <top-content-tools></top-content-tools>
          <top-tools></top-tools>
        </div>

        <div class="right">
          <nav aria-label="Navigation droite">
            ${this.icons
              .filter((icon) => icon.position === "right")
              .map(
                (icon, index, array) => html`
                  <button
                    class="icon-button ${this.activeIcon === icon.name ? "active" : ""}"
                    aria-label="${icon.alt}"
                  >
                    <img src="${icon.path}" alt="${icon.alt}" class="${icon.className}" aria-hidden="true" />
                    ${icon.name === "mail" && icon.mailNumber
                      ? html`<div class="notification-badge">${icon.mailNumber}</div>`
                      : ""}
                  </button>
                  ${index < array.length - 2
                    ? html`<img src="/assets/spacers.svg" aria-hidden="true" class="spacer-icon" />`
                    : ""}
                `
              )}
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);

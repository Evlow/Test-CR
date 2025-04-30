import { LitElement, html } from "lit";
import styles from "./header-component.scss" assert { type: "css" };
import "../search-bar/search-bar.js";

export class HeaderComponent extends LitElement {
  static styles = styles;

  // tableau des icônes
  icons = [
    {
      name: "home",
      path: "/assets/home.svg",
      alt: "Aller à la page d'accueil",
      position: "left",
      className: "icon-home",
    },
    {
      name: "star",
      path: "/assets/star.svg",
      alt: "Accéder aux favoris",
      position: "right",
      className: "icon",
    },
    {
      name: "settings",
      path: "/assets/settings.svg",
      alt: "Accéder aux paramètres",
      position: "right",
      className: "icon",
    },
    {
      name: "support",
      path: "/assets/support.svg",
      alt: "Obtenir de l'aide",
      position: "right",
      className: "icon",
    },
    {
      name: "mail",
      path: "/assets/mail.svg",
      alt: "Accéder à vos messages",
      position: "right",
      className: "icon",
      mailNumber: 4,
    },
    {
      name: "notifications",
      path: "/assets/notifications.svg",
      alt: "Voir les notifications",
      position: "right",
      className: "icon",
    },
    {
      name: "profil",
      path: "/assets/avatar.svg",
      alt: "Accéder à votre profil",
      position: "right",
      className: "icon-profile",
    },
  ];

  // États pour gérer l'icône active
  activeIcon = "home";

  // Méthode pour gérer le clic sur une icône
  handleIconClick(iconName) {
    if (iconName !== this.activeIcon) {
      this.activeIcon = iconName;
    }
    this.requestUpdate();
  }

  // Méthode pour gérer le clic sur le bouton "Créer"
  handleCreateClick() {
    const createEvent = new CustomEvent("create-card", {
      detail: { message: "Créer une nouvelle carte" },
      bubbles: true, // Permet à l'événement de remonter à l'élément parent
      composed: true, // L'événement peut traverser le shadow DOM
    });
    this.dispatchEvent(createEvent);
  }

  handleSearch(event) {
    const query = event.detail.query;
    const searchEvent = new CustomEvent("search-input", {
      detail: { query },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(searchEvent);
  }

  render() {
    return html`
      <header>
        <div class="left">
          <div class="top-left">
            <!-- Navigation pour les icônes à gauche -->
            <nav aria-label="Navigation gauche">
              ${this.icons
                .filter((icon) => icon.position === "left")
                .map(
                  (icon) => html`
                    <button
                      class="icon-button ${this.activeIcon === icon.name
                        ? "active"
                        : ""}"
                      @click="${() => this.handleIconClick(icon.name)}"
                      aria-label="${icon.alt}"
                    >
                      <img
                        src="${icon.path}"
                        class="${icon.className}"
                        aria-hidden="true"
                      />
                    </button>
                  `
                )}
            </nav>
          </div>
        </div>

        <!-- Menu sous l'icône home -->
        <div class="home-container ${this.activeIcon === "home" ? "show" : ""}">
          <div class="create-search-container">
            <div class="create-content">
              <span class="create-text">Créer</span>
              <button class="create-button" @click="${this.handleCreateClick}">
                <img
                  src="/assets/button.svg"
                  alt="Créer une ressource"
                  class="create-icon-img"
                />
              </button>
            </div>

            <img
              src="/assets/spacers.svg"
              aria-hidden="true"
              class="spacer-icon-top-bar"
            />
            <search-bar @search-input="${this.handleSearch}"></search-bar>
          </div>
        </div>

        <div class="right">
          <!-- Navigation pour les icônes à droite -->
          <nav aria-label="Navigation droite">
            ${this.icons
              .filter((icon) => icon.position === "right")
              .map(
                (icon, index, array) => html`
                  <button
                    class="icon-button ${this.activeIcon === icon.name
                      ? "active"
                      : ""}"
                    aria-label="${icon.alt}"
                  >
                    <img
                      src="${icon.path}"
                      alt="${icon.alt}"
                      class="${icon.className}"
                      aria-hidden="true"
                    />
                    ${icon.name === "mail" && icon.mailNumber
                      ? html`
                          <div class="notification-badge">
                            ${icon.mailNumber}
                          </div>
                        `
                      : ""}
                  </button>
                  ${index < array.length - 2
                    ? html`
                        <img
                          src="/assets/spacers.svg"
                          aria-hidden="true"
                          class="spacer-icon"
                        />
                      `
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

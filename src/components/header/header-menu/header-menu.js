import { LitElement, html } from 'lit';
import styles from './header-menu.scss' assert { type: 'css' };

export class HeaderMenu extends LitElement {
  static styles = styles

  icons = [
    { name: "star", path: "/assets/star.svg", alt: "Accéder aux favoris", className: "icon" },
    { name: "settings", path: "/assets/settings.svg", alt: "Accéder aux paramètres", className: "icon" },
    { name: "support", path: "/assets/support.svg", alt: "Obtenir de l'aide", className: "icon" },
    { name: "mail", path: "/assets/mail.svg", alt: "Accéder à vos messages", className: "icon", mailNumber: 4 },
    { name: "notifications", path: "/assets/notifications.svg", alt: "Voir les notifications", className: "icon" },
    { name: "profil", path: "/assets/avatar.svg", alt: "Accéder à votre profil", className: "icon-profile" },
  ];


  render() {
    return html`
      <div class="header-menu">
        <nav aria-label="Navigation droite">
          ${this.icons.map((icon, index, array) => html`
            <button
              class="icon-button ${this.activeIcon === icon.name ? "active" : ""}"
              @click="${() => this.handleIconClick(icon.name)}"
              aria-label="${icon.alt}"
            >
              <img src="${icon.path}" alt="${icon.alt}" class="${icon.className}" aria-hidden="true" />
              ${icon.name === "mail" && icon.mailNumber ? html`
                <div class="notification-badge">${icon.mailNumber}</div>
              ` : ''}
            </button>
            ${index < array.length - 1 ? html`<img src="/assets/spacers.svg" aria-hidden="true" class="spacer-icon" />` : ''}
          `)}
        </nav>
      </div>
    `;
  }
}

customElements.define('header-menu', HeaderMenu);

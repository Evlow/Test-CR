import { LitElement, html, css } from 'lit';
import styles from './header-component.scss' assert { type: 'css' };

export class HeaderComponent extends LitElement {
  static styles = styles;

  icons = [
    { name: 'home', path: '/assets/home.svg', alt: 'icone d\'accueil', position: 'left', className: 'icon' },
    { name: 'star', path: '/assets/star.svg', alt: 'icone favoris', position: 'right', className: 'icon' },
    { name: 'settings', path: '/assets/settings.svg', alt: 'icone réglages', position: 'right', className: 'icon' },
    { name: 'support', path: '/assets/support.svg', alt: 'icone aide', position: 'right', className: 'icon' },
    { name: 'mail', path: '/assets/mail.svg', alt: 'icone mail', position: 'right', className: 'icon' },
    { name: 'notifications', path: '/assets/notifications.svg', alt: 'icone notifications', position: 'right', className: 'icon' },
    { name: 'profil', path: '/assets/avatar.svg', alt: 'icone profil', position: 'right', className: 'icon-profile' },
  ];

  render() {
    return html`
      <header>
        <div class="left">
          ${this.icons.filter(icon => icon.position === 'left').map(icon => html`
            <button class="icon-button">
              <img src="${icon.path}" alt="${icon.alt}" class="${icon.className}" />
            </button>
          `)}
        </div>

        <div class="right">
          ${this.icons.filter(icon => icon.position === 'right').map((icon, index, array) => html`
            <button class="icon-button">
              <img src="${icon.path}" alt="${icon.alt}" class="${icon.className}" />
            </button>
            ${index < array.length - 2 ? html`
              <img src="/assets/spacers.svg" alt="spacer" class="spacer-icon" />
            ` : ''}
          `)}
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);

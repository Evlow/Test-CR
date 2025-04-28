import { LitElement, html } from "lit";
import styles from "./header-component.scss" assert { type: "css" };

export class HeaderComponent extends LitElement {
  static styles = styles;

  // tableau des icônes
  icons = [
    {
      name: "home",
      path: "/assets/home.svg",
      alt: "icone d'accueil",
      position: "left",
      className: "icon",
    },
    {
      name: "star",
      path: "/assets/star.svg",
      alt: "icone favoris",
      position: "right",
      className: "icon",
    },
    {
      name: "settings",
      path: "/assets/settings.svg",
      alt: "icone réglages",
      position: "right",
      className: "icon",
    },
    {
      name: "support",
      path: "/assets/support.svg",
      alt: "icone aide",
      position: "right",
      className: "icon",
    },
    {
      name: "mail",
      path: "/assets/mail.svg",
      alt: "icone mail",
      position: "right",
      className: "icon",
    },
    {
      name: "notifications",
      path: "/assets/notifications.svg",
      alt: "icone notifications",
      position: "right",
      className: "icon",
    },
    {
      name: "profil",
      path: "/assets/avatar.svg",
      alt: "icone profil",
      position: "right",
      className: "icon-profile",
    },
  ];

  // État pour afficher ou masquer le bouton "Créer"
  showCreateButton = false;

  // Méthode pour gérer le clic sur l'icône d'accueil
  handleHomeClick() {
    this.showCreateButton = !this.showCreateButton;
    this.requestUpdate(); // Force la mise à jour du composant
  }

  render() {
    return html`
     <header>
        <div class="left">
          <div class="top-left">
            ${this.icons
              .filter((icon) => icon.position === "left")
              .map(
                (icon) => html`
                  <button 
                    class="icon-button ${this.showCreateButton ? 'active' : ''}"
                    @click="${this.handleHomeClick}"
                  >
                    <img
                      src="${icon.path}"
                      alt="${icon.alt}"
                      class="${icon.className}"
                    />
                  </button>
                `
              )}
            
            <!-- Container principal avec classe conditionnelle -->
            <div class="home-container ${this.showCreateButton ? "show" : ""}">
              ${this.showCreateButton
                ? html`
                    <!-- Container pour Créer et Rechercher côte à côte -->
                    <div class="create-search-container">
                      <!-- Créer -->
                      <div class="create-content">
                        <span class="create-text">Créer une carte</span>
                        <button
                          class="create-button"
                          @click="${this.handleCreateClick}"
                        >
                          <img
                            src="/assets/button.svg"
                            alt="icone créer"
                            class="create-icon-img"
                          />
                        </button>
                      </div>
                      
                      <!-- Séparateur -->
                      <img
                        src="/assets/spacers.svg"
                        alt="spacer"
                        class="spacer-icon-top-bar"
                      />
                      
                      <!-- Rechercher -->
                      <div class="search-bar">
                        <span class="create-text">Rechercher</span>
                        <div>
                          <input
                            type="text"
                            placeholder="Nom d'une ressource"
                            @input="${this.handleSearchInput}"
                          />
                          <button
                            class="search-button"
                            @click="${this.handleSearchClick}"
                          >
                            <img
                              src="/assets/search.svg"
                              alt="icone recherche"
                              class="search-icon"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Barre Top en dessous -->
                    <div class="top-bar">
                      <span class="create-text">Top</span>
                    </div>
                  `
                : ""}
            </div>
          </div>
        </div>

        <!-- Partie droite du header -->
        <div class="right">
          ${this.icons
            .filter((icon) => icon.position === "right")
            .map(
              (icon, index, array) => html`
                <img
                  src="${icon.path}"
                  alt="${icon.alt}"
                  class="${icon.className}"
                />
                <!-- Ajout d'un séparateur après certaines icônes -->
                ${index < array.length - 2
                  ? html`
                      <img
                        src="/assets/spacers.svg"
                        alt="spacer"
                        class="spacer-icon"
                      />
                    `
                  : ""}
              `
            )}
        </div>
      </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);

import { LitElement, html } from "lit";
import "../../search-bar/search-bar.js";
import styles from "./top-content-tools.scss" assert { type: "css" };

export class TopContentTools extends LitElement {
  static styles = styles
  handleCreateClick() {
    this.dispatchEvent(new CustomEvent("create-card", { bubbles: true, composed: true }));
  }

  handleSearch(event) {
    this.dispatchEvent(new CustomEvent("search-input", {
      detail: { query: event.detail.query },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="top-content-tool">
        <div class="create-content">
          <span class="create-text">Créer</span>
          <button class="create-button" @click="${this.handleCreateClick}">
            <img src="/assets/button.svg" alt="Créer une ressource" class="create-icon-img" />
          </button>
        </div>
        <img src="/assets/spacers.svg" aria-hidden="true" class="spacer-icon-top-bar" />
        <search-bar @search-input="${this.handleSearch}"></search-bar>
      </div>
    `;
  }
}

customElements.define("top-content-tools", TopContentTools);

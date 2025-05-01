import { LitElement, html } from "lit";
import styles from "./header-component.scss" assert { type: "css" };
import "./top-tools/top-tools.js";
import "./top-content-tools/top-content-tools.js";
import "./top-group/top.group.js";
import "./header-menu/header-menu.js";

export class HeaderComponent extends LitElement {
  static styles = styles;


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
          <top-group></top-group> 
        </div>

        <div class="home-container ${this.activeIcon === "home" ? "show" : ""}">
          <top-content-tools></top-content-tools> 
          <top-tools></top-tools> 
        </div>

        <div class="right">
          <header-menu></header-menu> 
        </div>
      </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);

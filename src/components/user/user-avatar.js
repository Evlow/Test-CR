import { LitElement, html, css } from "lit";
import styles from "./user-avatar.scss" assert { type: "css" };


class UserAvatar extends LitElement {
  static styles = styles;
  static properties = {
    avatar: { type: String },
    userName: { type: String },
  };

  render() {
    return html`
      <div class="avatar">
        <img src="${this.avatar}" alt="Avatar de ${this.userName}" />
        <h1 class="username">${this.userName}</h1>
      </div>
    `;
  }
}

customElements.define("user-avatar", UserAvatar);
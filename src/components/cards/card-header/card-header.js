import { LitElement, html, css } from "lit";
import "../../user/user-avatar.js";
import "../../checkbox/checkbox.js";
import styles from "./card-header.scss" assert { type: "css" };

class CardHeader extends LitElement {
  static styles = styles;
  static properties = {
    userName: { type: String },
    avatar: { type: String },
  };

  render() {
    return html`
      <div class="card-header">
        <checkbox-select></checkbox-select>
        <user-avatar
          .avatar="${this.avatar}"
          .userName="${this.userName}"
        ></user-avatar>
      </div>
    `;
  }
}

customElements.define("card-header", CardHeader);

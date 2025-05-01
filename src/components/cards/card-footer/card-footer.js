import { LitElement, html } from "lit";
import "../../icons/icons-component.js";
import styles from "./card-footer.scss" assert { type: "css" };

class CardFooter extends LitElement {
  static styles = styles;
  static properties = {
    icons: { type: Array },
  };

  render() {
    return html` <icons-component .icons="${this.icons}"></icons-component> `;
  }
}

customElements.define("card-footer", CardFooter);

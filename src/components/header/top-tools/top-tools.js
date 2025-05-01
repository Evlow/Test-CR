import { LitElement, html, css } from "lit";

class TopTools extends LitElement {
  static styles = css`
    .top-tools {
      height: 32px;
    }
  `;

  render() {
    return html` <div class="top-tools"></div> `;
  }
}
customElements.define("top-tools", TopTools);

import { LitElement, html } from "lit";
import styles from "./checkbox.scss" assert { type: "css" };

class CheckboxSelect extends LitElement {
  static styles = styles;
  render() {
    return html`
      <label class="checkbox-label">
        <input type="checkbox" class="checkbox" />
        <span class="sr-only">Sélectionner cette carte</span>
      </label>
    `;
  }
}
customElements.define("checkbox-select", CheckboxSelect);

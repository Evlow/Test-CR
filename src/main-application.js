import { LitElement, html } from "lit";
import "./components/header/header-component.js";
import "./scss/style.scss";

export class MainApplication extends LitElement {

    render() {
        return html`
       <header-component></header-component>
    `;
    }
}

customElements.define("main-application", MainApplication);
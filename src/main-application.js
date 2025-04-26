import { LitElement, html } from "lit";
import "./components/header/header-component.js";
import "./styles/global.css";
export class MainApplication extends LitElement {

    render() {
        return html`
    <section class="container">
       <header-component></header-component>
    </section>
    `;
    }
}

customElements.define("main-application", MainApplication);
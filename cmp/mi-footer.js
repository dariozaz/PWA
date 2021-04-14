class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Andres Espinoza christian Dario.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);

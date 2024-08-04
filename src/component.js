import { LitElement, html, css } from 'lit';

export class LitComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`Hello`;
  }
}
customElements.define('lit-component', LitComponent);

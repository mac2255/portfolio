import {mount} from './base.js';
customElements.define('scarlett-alert',class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;const root=mount(this,`div{padding:16px;border-radius:12px;background:var(--soft);color:var(--primary)}:host([kind="error"]) div{background:#fbedea;color:var(--error)}`,'<div><slot></slot></div>');root.querySelector('div').setAttribute('role',this.getAttribute('kind')==='error'?'alert':'status')}});


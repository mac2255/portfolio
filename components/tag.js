import {mount} from './base.js';
customElements.define('scarlett-tag',class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;mount(this,':host{display:inline-block}span{display:inline-flex;align-items:center;min-height:28px;padding:2px 10px;border-radius:999px;background:var(--soft);color:var(--primary);font-size:14px}','<span><slot></slot></span>')}});


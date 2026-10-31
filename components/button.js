import {mount} from './base.js';
export class ScarlettButton extends HTMLElement {
 static observedAttributes=['disabled','loading'];
 connectedCallback(){
 if(this.shadowRoot)return;
 const root=mount(this,`:host{display:inline-block}button{display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 20px;border:1px solid transparent;border-radius:12px;background:var(--primary);color:white;font-weight:600;white-space:normal;transition:background 160ms}button:hover{background:var(--hover)}button:active{background:var(--active)}:host([variant="secondary"]) button{background:transparent;color:var(--primary);border-color:var(--control)}:host([variant="danger"]) button{background:var(--error)}:host([size="small"]) button{min-height:44px;padding:10px 16px;font-size:14px}:host([size="large"]) button{min-height:52px;padding:12px 24px}button:disabled{background:#eae8e1;color:var(--muted);border-color:var(--control)}`, '<button type="button"><slot></slot><span hidden>처리 중…</span></button>');
 this.sync();
 }
 attributeChangedCallback(){this.sync()}
 sync(){const button=this.shadowRoot?.querySelector('button');if(!button)return;const busy=this.hasAttribute('loading');button.disabled=busy||this.hasAttribute('disabled');button.setAttribute('aria-busy',String(busy));button.querySelector('span').hidden=!busy}
}
customElements.define('scarlett-button',ScarlettButton);


import {mount} from './base.js';
export class ScarlettField extends HTMLElement {
 connectedCallback(){
 if(this.shadowRoot)return;
 const multiline=this.hasAttribute('multiline');
 const root=mount(this,`:host{display:block}label{display:block;font-size:14px;font-weight:600;margin-bottom:8px}input,textarea{width:100%;min-height:48px;border:1px solid var(--control);border-radius:12px;background:white;color:var(--text);padding:10px 14px}textarea{min-height:160px;resize:vertical}small{display:block;margin-top:8px;color:var(--muted)}[aria-invalid="true"]{border-color:var(--error)}.error{color:var(--error)}`,'<label for="control"></label>'+(multiline?'<textarea id="control"></textarea>':'<input id="control">')+'<small id="help"></small><small id="error" class="error" role="alert"></small>');
 const control=root.querySelector('#control');
 root.querySelector('label').textContent=this.getAttribute('label')||'';
 root.querySelector('#help').textContent=this.getAttribute('help')||'';
 control.setAttribute('aria-describedby','help error');
 if(!multiline)control.type=this.getAttribute('type')||'text';
 control.value=this.getAttribute('value')||'';
 control.required=this.hasAttribute('required');
 if(this.hasAttribute('maxlength'))control.maxLength=Number(this.getAttribute('maxlength'));
 control.addEventListener('input',()=>this.dispatchEvent(new CustomEvent('value-change',{detail:{value:this.value},bubbles:true})));
 }
 get value(){return this.shadowRoot?.querySelector('#control').value||''}
 set value(value){if(this.shadowRoot)this.shadowRoot.querySelector('#control').value=value}
 setError(message){this.shadowRoot.querySelector('#error').textContent=message;this.shadowRoot.querySelector('#control').setAttribute('aria-invalid',String(Boolean(message)))}
}
customElements.define('scarlett-field',ScarlettField);


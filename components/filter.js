import {mount} from './base.js';
customElements.define('scarlett-filter',class extends HTMLElement{
 connectedCallback(){if(this.shadowRoot)return;const root=mount(this,`div{display:flex;flex-wrap:wrap;gap:8px}button{min-height:44px;padding:8px 16px;border:1px solid var(--control);border-radius:999px;background:white;color:var(--primary)}button[aria-pressed="true"]{background:var(--primary);color:white}`,'<div role="group" aria-label="기록 카테고리"></div>');
 ['전체','여행 · Travel','음악 · Music','아웃도어 · Outdoor'].forEach((label,index)=>{const button=document.createElement('button');button.type='button';button.textContent=label;button.setAttribute('aria-pressed',String(index===0));button.onclick=()=>{root.querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));this.dispatchEvent(new CustomEvent('filter-change',{detail:{category:label.split(' · ')[0]},bubbles:true}))};root.querySelector('div').append(button)});
 }
});


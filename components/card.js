import {mount} from './base.js';
customElements.define('scarlett-card',class extends HTMLElement{
 connectedCallback(){if(this.shadowRoot)return;
 const root=mount(this,`:host{display:block;min-width:0}a{display:block;height:100%;text-decoration:none;color:inherit;background:white;border:1px solid var(--border);border-radius:16px;overflow:hidden}a:hover{box-shadow:0 6px 20px #25292514}.photo{aspect-ratio:4/3;background:var(--soft);display:grid;place-items:center;color:var(--muted)}img{width:100%;height:100%;object-fit:cover}.body{padding:24px}small{color:var(--primary)}h3{font-family:var(--font-display,sans-serif);font-size:20px;line-height:1.5;font-weight:600;margin:8px 0}p{color:var(--muted);margin:8px 0}h3,p{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}`,'<a><div class="photo">사진 준비 중</div><div class="body"><small></small><h3></h3><p></p></div></a>');
 const href=this.getAttribute('href')||'#';root.querySelector('a').href=/^(https?:|[./#])/.test(href)?href:'#';
 root.querySelector('small').textContent=this.getAttribute('category')||'';
 root.querySelector('h3').textContent=this.getAttribute('title')||'';
 root.querySelector('p').textContent=this.getAttribute('summary')||'';
 if(this.hasAttribute('src')){const img=document.createElement('img');img.src=this.getAttribute('src');img.alt=this.getAttribute('alt')||'';img.loading='lazy';img.addEventListener('error',()=>{root.querySelector('.photo').textContent='사진을 불러오지 못했습니다.'});root.querySelector('.photo').replaceChildren(img)}
 }
});




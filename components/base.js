export const styles = `
:host{font:inherit;color:var(--text,#252925);box-sizing:border-box}*{box-sizing:border-box}button,input,textarea{font:inherit}button,a,input,textarea{outline-offset:3px} :focus-visible{outline:2px solid var(--primary,#355f4b)}a{color:var(--primary,#355f4b)}button{cursor:pointer}button:disabled{cursor:not-allowed} @media(prefers-reduced-motion:reduce){*{transition:none!important}}
`;
export function mount(element, css, markup) {
 const root = element.attachShadow({mode:'open'});
 root.innerHTML = '<style>'+styles+css+'</style>'+markup;
 return root;
}


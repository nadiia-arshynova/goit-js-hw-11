import{a as m,S as p,i as l}from"./assets/vendor-Cm9gDZN8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="19917626-ad117b4262bded0ead70af2db",g="https://pixabay.com/api/";async function h(o){if(!o||typeof o!="string")throw new Error("Query must be a non-empty string");const r={key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:r})).data}const c=document.querySelector(".gallery"),a=document.querySelector(".loader"),u=new p(".gallery a",{captionsData:"title",captionDelay:250});function b(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${i}" alt="${e}" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${t}</li>
          <li><b>Views:</b> ${n}</li>
          <li><b>Comments:</b> ${f}</li>
          <li><b>Downloads:</b> ${d}</li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),u.refresh()}function L(){c&&(c.innerHTML="",u.refresh())}function w(){a&&(a.hidden=!1)}function S(){a&&(a.hidden=!0)}const P=document.querySelector(".form"),O=document.querySelector("input");P.addEventListener("submit",async o=>{o.preventDefault();const r=O.value.trim();if(!r){l.warning({title:"Oops!",message:"Please enter a search term!",position:"topRight"});return}L(),w();try{const i=await h(r);if(!i.hits.length){l.info({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i.hits)}catch{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map

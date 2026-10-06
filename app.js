// Editable outlet data: replace names and details after owner confirmation.
const outlets=[
 {name:'Outlet 01',area:'Jabalpur · Madhya Pradesh',url:'https://www.google.com/maps/place/The+Highbrooks+Cafe/@23.1742838,79.9097976,14z/data=!4m10!1m2!2m1!1shighbrooks+cafe+jabalpur!3m6!1s0x3981b129f4c52ab5:0xef75db024bb68951!8m2!3d23.1742844!4d79.9097487!15sChhoaWdoYnJvb2tzIGNhZmUgamFiYWxwdXJaGiIYaGlnaGJyb29rcyBjYWZlIGphYmFscHVykgEEY2FmZeABAA!16s%2Fg%2F11gw2q24pp?entry=ttu',embed:'https://maps.google.com/maps?q=23.1742844,79.9097487&z=15&output=embed'},
 {name:'Outlet 02',area:'Jabalpur · Madhya Pradesh',url:'https://www.google.com/maps/place/The+Highbrooks+Cafe/@23.129364,79.8901722,14z/data=!4m10!1m2!2m1!1shighbrooks+cafe+jabalpur!3m6!1s0x3981ad2d3f66a07d:0x91081b4d1dab82e9!8m2!3d23.129364!4d79.928281!15sChhoaWdoYnJvb2tzIGNhZmUgamFiYWxwdXJaGiIYaGlnaGJyb29rcyBjYWZlIGphYmFscHVykgEEY2FmZeABAA!16s%2Fg%2F11v0gs4gb9?entry=ttu',embed:'https://maps.google.com/maps?q=23.129364,79.928281&z=15&output=embed'}
];
document.querySelector('#outlet-grid').innerHTML=outlets.map((o,i)=>`<article class="outlet"><div class="outlet-map"><iframe title="Map for ${o.name}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${o.embed}"></iframe></div><div class="outlet-body"><span class="outlet-overline">HIGHBROOKS · ${String(i+1).padStart(2,'0')}</span><h3>${o.name}</h3><p>${o.area} · Address, hours and phone details to be confirmed</p><div class="outlet-actions"><a href="${o.url}" target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a><a href="${o.url}" target="_blank" rel="noreferrer">VIEW ON MAPS</a></div></div></article>`).join('');
// Example menu data only; update with owner-approved items, photos and prices.
const items=[
 {name:'Coffee, your way',category:'Coffee',desc:'Espresso, milk coffee and slow brewed favourites.',img:'photo-1509042239860-f550ce710b93'},
 {name:'Something chilled',category:'Coffee',desc:'Cold coffee for longer, warmer afternoons.',img:'photo-1461023058943-07fcbe16d735'},
 {name:'A good table lunch',category:'Food',desc:'A satisfying cafe classic, made for a proper pause.',img:'photo-1547592180-85f173990554'},
 {name:'A little something sweet',category:'Sweet',desc:'The perfect reason to order one more coffee.',img:'photo-1488477181946-6428a0291777'},
 {name:'Fresh from the oven',category:'Food',desc:'Warm, generous and best shared around the table.',img:'photo-1547592180-85f173990554'},
 {name:'The afternoon pour',category:'Coffee',desc:'Take your time over a cup made just right.',img:'photo-1514432324607-a09d9b4aefdd'}
];
const menuGrid=document.querySelector('#menu-grid');
function renderMenu(){const f=document.querySelector('.filter.active').dataset.filter,q=document.querySelector('#menu-search').value.toLowerCase();const filtered=items.filter(x=>(f==='All'||x.category===f)&&(x.name+x.desc+x.category).toLowerCase().includes(q));menuGrid.innerHTML=filtered.length?filtered.map(x=>`<article class="menu-item"><div class="menu-thumb" style="background-image:url('https://images.unsplash.com/${x.img}?auto=format&fit=crop&w=700&q=80')"><span>${x.category.toUpperCase()}</span></div><div class="menu-info"><small>HIGHBROOKS FAVOURITE</small><h3>${x.name}</h3><p>${x.desc}</p></div></article>`).join(''):'<p class="menu-note">Nothing found just yet. Try another search.</p>'}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');b.classList.add('active');renderMenu()}));document.querySelector('#menu-search').addEventListener('input',renderMenu);renderMenu();
const toggle=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.textContent=open?'×':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));window.addEventListener('scroll',()=>document.querySelector('.nav').classList.toggle('scrolled',window.scrollY>20));
const date=document.querySelector('[name=date]');date.min=new Date().toISOString().slice(0,10);document.querySelector('#booking-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget,data=Object.fromEntries(new FormData(form));const feedback=form.querySelector('.form-feedback');feedback.textContent=`Thanks, ${data.name}. Your table request is ready. Please contact the outlet directly to confirm; online requests are not sent until a booking service is connected.`;form.reset();date.min=new Date().toISOString().slice(0,10)});document.querySelector('#year').textContent=new Date().getFullYear();

// GSAP enhancement: subtle entrances, progress, spotlight and magnetic CTA.
if(window.gsap){
  if(window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);}
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion){
    gsap.from('.hero-content > *',{y:22,opacity:0,duration:.8,stagger:.11,ease:'power2.out',delay:.12});
    if(window.ScrollTrigger){
      gsap.utils.toArray('.intro-copy,.section-heading,.moment-card,.menu-item,.outlet,.event-copy,.social-tile,.contact-details').forEach((el)=>gsap.from(el,{y:28,opacity:0,duration:.7,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
      gsap.to('#scroll-progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.25}});
    }
    document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.12,y:(e.clientY-r.top-r.height/2)*.18,duration:.25,ease:'power2.out'})});el.addEventListener('pointerleave',()=>gsap.to(el,{x:0,y:0,duration:.45,ease:'elastic.out(1,.45)'}));});
    document.querySelectorAll('.menu-item').forEach(el=>{el.classList.add('spotlight');el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--spot-x',`${e.clientX-r.left}px`);el.style.setProperty('--spot-y',`${e.clientY-r.top}px`)});});
  }
}

// Gallery cursor and accessible image dialog.
const galleryCursor=document.querySelector('.photo-cursor'),lightbox=document.querySelector('.lightbox'),lightboxImage=lightbox.querySelector('img');
document.querySelectorAll('.social-tile').forEach(tile=>{
  tile.addEventListener('pointerenter',()=>galleryCursor.classList.add('visible'));
  tile.addEventListener('pointerleave',()=>galleryCursor.classList.remove('visible'));
  tile.addEventListener('pointermove',e=>{galleryCursor.style.left=`${e.clientX}px`;galleryCursor.style.top=`${e.clientY}px`});
  tile.addEventListener('click',()=>{lightboxImage.src=tile.dataset.photo;lightboxImage.alt='Cafe and coffee moment at The Highbrooks Cafe';lightbox.showModal()});
});
document.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});

// Demo ordering flow. Prices are sample values and checkout stays in-browser.
const demoProducts=[
 {id:'hot-coffee',name:'House cappuccino',category:'COFFEE',description:'Espresso with steamed milk.',price:160,image:'photo-1509042239860-f550ce710b93'},
 {id:'cold-coffee',name:'Classic cold coffee',category:'COLD COFFEE',description:'A chilled coffee shop favourite.',price:190,image:'photo-1461023058943-07fcbe16d735'},
 {id:'cafe-sandwich',name:'Grilled cafe sandwich',category:'FROM THE KITCHEN',description:'A warm, easy lunch to enjoy here or to go.',price:240,image:'photo-1528735602780-2552fd46c7af'},
 {id:'waffle',name:'Warm waffle',category:'SOMETHING SWEET',description:'A little treat for the table.',price:220,image:'photo-1562376552-0d160a2f238d'}
];
const cart=new Map();let orderMode='dine-in';
const rupees=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
const productsNode=document.querySelector('#order-products'),cartNode=document.querySelector('#cart-items'),totalNode=document.querySelector('#cart-total'),countNode=document.querySelector('#cart-count');
productsNode.innerHTML=demoProducts.map(p=>`<article class="order-product"><div class="order-product-image" style="background-image:url('https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=450&q=78')"></div><div class="order-product-info"><small>${p.category}</small><h3>${p.name}</h3><p>${p.description}</p><div class="order-product-bottom"><strong>${rupees(p.price)}</strong><button class="add-button" type="button" data-add="${p.id}">ADD +</button></div></div></article>`).join('');
function renderCart(){const lines=[...cart.entries()].filter(([,qty])=>qty>0);const count=lines.reduce((sum,[,qty])=>sum+qty,0);const total=lines.reduce((sum,[id,qty])=>sum+demoProducts.find(p=>p.id===id).price*qty,0);countNode.textContent=`${count} ${count===1?'ITEM':'ITEMS'}`;totalNode.textContent=rupees(total);cartNode.innerHTML=lines.length?lines.map(([id,qty])=>{const p=demoProducts.find(item=>item.id===id);return `<div class="cart-row"><strong>${p.name}</strong><small>${rupees(p.price)} each · ${rupees(p.price*qty)}</small><div class="quantity-controls"><button type="button" data-qty="${id}" data-delta="-1" aria-label="Remove one ${p.name}">−</button><span>${qty}</span><button type="button" data-qty="${id}" data-delta="1" aria-label="Add one ${p.name}">+</button></div></div>`}).join(''):'<p class="cart-empty">Your bag is waiting for something good.</p>'}
productsNode.addEventListener('click',e=>{const button=e.target.closest('[data-add]');if(!button)return;const id=button.dataset.add;cart.set(id,(cart.get(id)||0)+1);renderCart();button.textContent='ADDED ✓';setTimeout(()=>button.textContent='ADD +',900)});
cartNode.addEventListener('click',e=>{const button=e.target.closest('[data-qty]');if(!button)return;const id=button.dataset.qty,next=(cart.get(id)||0)+Number(button.dataset.delta);if(next<=0)cart.delete(id);else cart.set(id,next);renderCart()});
document.querySelectorAll('.mode-button').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.mode-button.active').classList.remove('active');button.classList.add('active');orderMode=button.dataset.mode}));
document.querySelector('#order-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget,feedback=form.querySelector('.order-feedback');if(cart.size===0){feedback.textContent='Add at least one item before placing your demo order.';return}const data=Object.fromEntries(new FormData(form));const orderNumber=`HB-${Math.random().toString(36).slice(2,7).toUpperCase()}`;const label=orderMode==='dine-in'?'Dine in':'Takeaway';const payment=data.payment==='demo'?'Demo payment selected — no charge was made.':'Pay at cafe selected — no payment was made.';feedback.textContent=`Demo order ${orderNumber} prepared for ${label} at ${data.outlet}. ${payment} This order was not sent to the cafe.`;cart.clear();renderCart();form.reset();document.querySelector('#order').scrollIntoView({behavior:'smooth',block:'center'})});
renderCart();

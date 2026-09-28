window.addEventListener("load",function(){
  const loader=document.getElementById("preloader");
  setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),500)},350);

  if(window.WOW){
    new WOW({
      boxClass:"wow",
      animateClass:"animate__animated",
      offset:70,
      mobile:true,
      live:true
    }).init();
  }

  document.getElementById("year").textContent=new Date().getFullYear();

  const back=document.getElementById("back");
  window.addEventListener("scroll",()=>{back.style.display=window.scrollY>500?"grid":"none"});
  back.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

  document.querySelectorAll(".nav-link").forEach(link=>{
    link.addEventListener("click",()=>{
      const nav=document.getElementById("nav");
      const collapse=bootstrap.Collapse.getInstance(nav);
      if(collapse) collapse.hide();
    });
  });

  document.getElementById("form").addEventListener("submit",e=>{
    e.preventDefault();
    alert("Thank you! Your enquiry has been received. Connect this form to your Node.js API for production.");
  });

  document.querySelector(".subscribe").addEventListener("submit",e=>{
    e.preventDefault();
    alert("Thank you for subscribing to Modeva Spice.");
  });
});
document.querySelectorAll(".product-real").forEach(card=>{card.addEventListener("click",e=>{if(card.dataset.image){e.preventDefault();document.getElementById("modalProductImage").src=card.dataset.image;document.getElementById("modalProductImage").alt=card.dataset.product;document.getElementById("modalProductName").textContent=card.dataset.product;new bootstrap.Modal(document.getElementById("productModal")).show();}})});

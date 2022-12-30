const menu = [
    {
      id: 1,
      title: "Operators in JavaScript",
      category: "JS",
      price: 15.99,
      img: "img5.jpg.png",
      desc: ` `,
    },
    {
      id: 2,
      title: "What is PHP?",
      category: "PHP",
      price: 13.99,
      img: "img4.jpg.png",
      desc: ` `,
    },
    {
      id: 3,
      title: "JavaScript Events",
      category: "JS",
      price: 6.99,
      img: "img3.jpg.png",
      desc: ``,
    },
    {
      id: 4,
      title: "CSS Units",
      category: "Css",
      price: 20.99,
      img: "img12.jpg.png",
      desc: ` `,
    },
    {
      id: 5,
      title: "JavaScript",
      category: "JS",
      price: 22.99,
      img: "img13.jpg.png",
      desc: ` `,
    },
    {
      id: 6,
      title: "HTML5",
      category: "Html",
      price: 18.99,
      img: "img8.jpg.PNG",
      desc: ``,
    },
    {
      id: 7,
      title: "What is JavaScript?",
      category: "JS",
      price: 8.99,
      img: "img19.jpg.png",
      desc: ` `,
    },
    {
      id: 8,
      title: "Color in CSS",
      category: "Css",
      price: 12.99,
      img: "img9.jpg.png",
      desc: `  `,
    },
    {
      id: 9,
      title: "HTML tags",
      category: "Html",
      price: 16.99,
      img: "img20.jpg.png",
      desc: ``,
    },
  ];
  const grille = document.querySelector(".img-gallery");
const n1=  Math.floor(Math.random() * (2 + 1));
const n2=  Math.floor(Math.random() * (6- 3 + 1)) + 3;
const n3=  Math.floor(Math.random() * (10 - 7 + 1)) + 7;
window.addEventListener("DOMContentLoaded", function () {
   grille.innerHTML = `<div class="img-gallery">
<div ><img src=${menu[n1].img} alt="" >
      <p class="coursename" >${menu[n1].title} </p> 
      <span class="price">${menu[n1].price}</span></div>
 
</div>
<div class="img-gallery">
<div ><img src=${menu[n2].img} alt="" >
      <p class="coursename" >${menu[n2].title} </p> 
      <span class="price">${menu[n2].price}</span></div>
 
</div>
<div class="img-gallery">
<div ><img src=${menu[n3].img} alt="" >
      <p class="coursename" >${menu[n3].title} </p> 
      <span class="price">${menu[n3].price}</span></div>
 
</div>`;
  
});
function clic(){
  document.location.href="Courese1.html";
}



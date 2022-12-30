const menu = [
    {
        id: 1,
        title: "Operators in JavaScript",
        category: 'JS',
        price: 10.75,
        img: "img5.jpg.png",
        desc: ` `,
      },
      {
        id: 2,
        title: "What is PHP?",
        category: 'PHP',
        price: 76.5,
        img: "img4.jpg.png",
        desc: ` `,
      },
      {
        id: 3,
        title: "JavaScript Events",
        category: 'JS',
        price: 11.5,
        img: "img3.jpg.png",
        desc: ``,
      },
      {
        id: 4,
        title: "CSS Units",
        category: 'CSS',
        price: 58,
        img: "img12.jpg.png",
        desc: ` `,
      },
      {
        id: 5,
        title: "JavaScript",
        category: 'JS',
        price: 46.25,
        img: "img13.jpg.png",
        desc: ` `,
      },
      {
        id: 6,
        title: "HTML5",
        category: 'HTML',
        price: 35.75,
        img: "img8.jpg.PNG",
        desc: ``,
      },
      {
        id: 7,
        title: "What is JavaScript?",
        category: 'JS',
        price: 29.25,
        img: "img19.jpg.png",
        desc: ` `,
      },
      {
        id: 8,
        title: "Color in CSS",
        category: 'CSS',
        price: 15.75,
        img: "img9.jpg.png",
        desc: `  `,
      },
      {
        id: 9,
        title: "HTML tags",
        category: 'HTML',
        price: 24,
        img: "img20.jpg.png",
        desc: ``,
      },
      {
        id: 10,
        title: "PHP",
        category: 'PHP',
        price: 99.5,
        img: "img21.jpg.png",
        desc: ``,
      },
      {
        id: 11,
        title: "Important CSS",
        category: 'CSS',
        price: 12.25,
        img: "img11.jpg.png",
        desc: ``,
      },
      {
        id: 12,
        title: "JS variables",
        category: 'JS',
        price: 3.5,
        img: "img17.jpg.png",
        desc: ``,
      },
    ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img}  alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
              
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join(" ");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  
  //filtrage//
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["All"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (m) {
  
        const category = m.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
  
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  
  const searchInput = document.getElementById('input');
  
  input.addEventListener('keyup', function() {
    const input = searchInput.value ;
    const result = menu.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
    console.log(input);
    diplayMenuItems(result);
  });
  
  //price//
  const rangeV = document.getElementById('range');
  const indispo = document.getElementById('priceindispo');
  rangeV.addEventListener('click', function(){
    
    const rValue = rangeV.value ;
    console.log(rValue);
    const hold = document.getElementById('rvalue');
    hold.innerHTML =  + rValue + "$";
    const menuRange = menu.filter(function (menuItem) {
      
      if (menuItem.price <= rValue) {
        indispo.style.display = 'none';
        return menuItem;
        
        }
      else if( rValue<1){
        indispo.style.display = 'block';
        indispo.innerHTML = 'Passwords not identical';
      }
        })
      diplayMenuItems(menuRange);
    
  })
  
      const slide = document.querySelector("slide");
      const output = document.querySelector("output");
      let valeur = document.getElementById('slide').Value;
      
      console.log(valeur);
  
  
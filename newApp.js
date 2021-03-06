const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

// html dosyas??ndaki b??l??mleri al??yoruz.
const btnContainer = document.querySelector(".btn-container");
const menuContainer = document.querySelector(".section-center");

// ??ncelikle sayfadaki butonlar?? olu??turuyoruz.
const createButton = (buttonName) => {
    let button = `<button type="button" id="${buttonName}" class="btn btn-outline-dark btn-item">${buttonName}</button>`;
    return button;
};
// olu??turdu??umuz butonlar?? html dosyas??ndaki b??l??me ekliyoruz..
const buttons = () => {
    btnContainer.innerHTML = createButton("All") + " " + createButton("Korea") + " " + createButton("Japan") + " " + createButton("China")
};

buttons(); // butonlar?? ??a????r??yoruz.


// butonlara t??kland??????ndaki ??al????acak fonksiyolar?? atama i??lemi.
const allButton = document.getElementById("All").addEventListener("click", getAllFoods);
const koreaButton = document.getElementById("Korea").addEventListener("click", getKoreaFoods);
const japanButton = document.getElementById("Japan").addEventListener("click", getJapanFoods);
const chinaButton = document.getElementById("China").addEventListener("click", getChinaFoods);


//butonlara atad??????m??z fonksiyonlar?? olu??turuyoruz.
function getAllFoods() {
    let Allmenu = "";
    menu.map((e)=>{
        Allmenu += showFoods(e);
    });
    menuContainer.innerHTML = Allmenu;
    console.log("YESSS");
}

function getKoreaFoods() {
  let Allmenu = "";
  menu.map((e)=>{
    if(e.category == "Korea") {
      Allmenu += showFoods(e);
    }
  });
  menuContainer.innerHTML=Allmenu;
  console.log("YESSS");
}
function getChinaFoods() {
  let Allmenu = "";
  menu.map((e)=>{
    if(e.category == "China") {
      Allmenu += showFoods(e);
    }
  });
  menuContainer.innerHTML=Allmenu;
  console.log("YESSS");
}
function getJapanFoods() {
  let Allmenu = "";
  menu.map((e)=>{
    if(e.category == "Japan") {
      Allmenu += showFoods(e);
    }
  });
  menuContainer.innerHTML=Allmenu;
  console.log("YESSS");
}


// men??deki yemekleri sayfada g??stermeye yarayan fonskiyon.
function showFoods(food) {
    let item = 
    `<div class="menu-items col-lg-6 col-sm-12">
        <img src="${food.img}" alt="${food.title}" ramen="" class="photo">
        <div class="menu-info">
            <div class="menu-title">
                <h4>${food.title} Ramen</h4>
                <h4 class="price">${food.price}</h4>
            </div>
            <div class="menu-text">${food.desc}</div>
        </div>
    </div>`;
    return item;
}
getAllFoods(); // sayfada default olarak ilk a????l????ta b??t??n men??n??n g??z??kmesi i??in bu fonksiyonu ??a????r??yoruz.

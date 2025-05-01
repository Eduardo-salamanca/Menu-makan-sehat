const menusOtak = {
  "Day 1": {
    "Menu 1": `Nasi Merah + Dada Ayam Panggang + Tumis Brokoli + Susu<br><br>
Kalori: 520 kcal<br>Karbohidrat: 45 g<br>Protein: 38 g<br>Lemak: 18 g<br><br>
<b>Cara Membuat:</b><br>
- Masak nasi merah hingga matang.<br>
- Lumuri dada ayam dengan garam, lada, panggang hingga matang.<br>
- Tumis brokoli dengan bawang putih sedikit minyak.<br>
- Sajikan bersama segelas susu.`,
    "Menu 2": `Roti Gandum + Telur Rebus + Salad Sayur<br><br>
Kalori: 450 kcal<br>Karbohidrat: 40 g<br>Protein: 22 g<br>Lemak: 15 g<br><br>
<b>Cara Membuat:</b><br>
- Rebus telur hingga matang.<br>
- Sajikan dengan roti gandum dan salad sayur segar.`,
    "Menu 3": `Quinoa + Salmon Panggang + Sayur Kukus<br><br>
Kalori: 580 kcal<br>Karbohidrat: 35 g<br>Protein: 40 g<br>Lemak: 25 g<br><br>
<b>Cara Membuat:</b><br>
- Masak quinoa hingga empuk.<br>
- Panggang salmon dengan minyak zaitun.<br>
- Kukus wortel, buncis, dan jagung.`,
    "Snack": `Yogurt Greek + Madu<br><br>
Kalori: 150 kcal<br>Karbohidrat: 18 g<br>Protein: 12 g<br>Lemak: 2 g<br><br>
<b>Cara Membuat:</b><br>
- Campurkan yogurt Greek dengan madu alami.<br>
- Sajikan dingin.`
  }
};

const selector = document.getElementById("daySelector");
const dropdownContainer = document.querySelector(".dropdown-container");
const menuButtons = document.getElementById("mainButtons");
const subButtons = document.getElementById("subMenu");
const menuContent = document.getElementById("menuContent");

selector.addEventListener("change", () => {
  const day = selector.value;
  if (!menusOtak[day]) {
    alert("Menu belum tersedia.");
    return;
  }

  dropdownContainer.innerHTML = `<h2>${day}</h2>`;
  menuButtons.innerHTML = '';

  const btnOtak = document.createElement("button");
  btnOtak.className = "btn";
  btnOtak.innerText = "Menu Otak";
  btnOtak.onclick = () => showMenus(day, "otak");
  menuButtons.appendChild(btnOtak);

  const btnOtot = document.createElement("button");
  btnOtot.className = "btn";
  btnOtot.innerText = "Menu Otot (Coming Soon)";
  menuButtons.appendChild(btnOtot);

  menuButtons.style.display = "flex";
});

function showMenus(day, type) {
  menuButtons.innerHTML = `<h2>Menu ${type === 'otak' ? 'Otak' : 'Otot'}</h2>`;
  subButtons.innerHTML = '';
  menuContent.innerHTML = '';
  subButtons.style.display = "flex";

  const menus = menusOtak[day];
  Object.keys(menus).forEach(menuTitle => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = menuTitle;
    btn.onclick = () => {
      subButtons.innerHTML = `<h2>${menuTitle}</h2>`;
      menuContent.innerHTML = menus[menuTitle];
      menuContent.style.display = "block";
    };
    subButtons.appendChild(btn);
  });
      }

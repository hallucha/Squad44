const btnEscuro = document.getElementById('btnEscuro');
const btnClaro = document.getElementById('btnClaro');

btnEscuro.addEventListener('click', checkedRadio);
btnClaro.addEventListener('click', checkedRadio);


const cssTheme = document.getElementById('color-theme');

function lightToDark() {
    cssTheme.href = "./src/css/color_dark.css";
}

function darkToLight() {    
    cssTheme.href = "./src/css/color_light.css";
}

function checkedRadio() {
  if (btnClaro.checked) {
    darkToLight();
  } else  {
    lightToDark();
  }
}

function checkUserPreference() {
  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (prefersLightTheme) {
    btnClaro.checked = true;
  } else {
    btnEscuro.checked = true;
  }
  checkedRadio() 
}

checkUserPreference();

const toggleMenu = document.getElementById('toggleMenu');
const navIco = document.querySelector('#nav-icon1');
toggleMenu.addEventListener('click', ()=>{
    const ariaExpanded = toggleMenu.getAttribute('aria-expanded');
    console.log(ariaExpanded)
    if (ariaExpanded==='true') {
        console.log('open')
        navIco.classList.add('open');
    } 
    else {
        console.log('close')
        navIco.classList.remove('open') ;
    }
})



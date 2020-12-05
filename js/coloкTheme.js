import refs from "../js/refs"
const{checkBox, body} = refs;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
 const сheckBoxEvent = checkBox.addEventListener('change', changeColor);
 if(localStorage.class === `${Theme.DARK}`){
  body.classList.add(`${Theme.DARK}`);
   checkBox.checked = true;
}
 function changeColor(e) {
  if(e.target.checked){
    body.classList.add(`${Theme.DARK}`);
    body.classList.remove(`${Theme.LIGHT}`)
    localStorage.setItem("class", `${Theme.DARK}`);
  }else{
    body.classList.add(`${Theme.LIGHT}`);
    body.classList.remove(`${Theme.DARK}`);
    localStorage.setItem("class", `${Theme.LIGHT}`);
  }
 }
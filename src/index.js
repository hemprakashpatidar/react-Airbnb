import ReactDOM  from "react-dom/client"
import {  NavBarComponent, CardComponent, HeaderComponent} from "./components.js"
import { handleEvent} from "./app.js"
import "./index.css"
import { cardDetails, navDetails} from "./constants.js"
import { getFromLocalStorage } from "./localStorageUtils.js"
/**
 * Function to render favourites
 */
 const renderFavourite = () =>{
   const _favourites=getFromLocalStorage('favourite')
   cardContainer.render(CardComponent(_favourites))
}
const navContainer = ReactDOM.createRoot(document.getElementById('nav-container'))
const cardContainer = ReactDOM.createRoot(document.getElementById('cardContainer'))
const headercontainer = ReactDOM.createRoot(document.getElementById('header_container'))
navContainer.render(NavBarComponent(navDetails))
cardContainer.render(CardComponent(cardDetails))
headercontainer.render(HeaderComponent())
export{renderFavourite}
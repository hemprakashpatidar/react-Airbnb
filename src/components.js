import React from "react"
import { cardDetails, cardImageProp,searchButtonProps, navDetails, favouriteImageProps, languageImageProps, searchImageProps} from "./constants.js";
import { useState } from "react";
import "./index.css"

const App = () =>{
    const [favourite, setFav]=useState([])
    const AddToFav = (props) =>{
        if (props.isFavourite==false){
            setFav((temp) => [...temp, props])
        }
        else{
            setFav((temp) => temp.filter(value => value.id != props.id))
        }
    };
    const renderFav = (props) =>{
       showFavCards(CardComponent(favourite,AddToFav))
    }
    const cards=CardComponent(cardDetails,AddToFav)
    const [cardList, showFavCards] =useState(cards)

    return (
        <div>
            <div  id="header_container">{HeaderComponent(renderFav)}</div>
            <div class="nav-container" id="nav-container">{NavBarComponent(navDetails)}</div>
            <div class="cardContainer" id="cardContainer">{cardList} </div>
        </div>
    )
}

const NavComponent = (props) => {
    const imageProps={
        imageSrc: props.iconUrl,
        id: `navIcon ${props.id}`,
        class: 'navIcon',
        width: 24,
        height: 24
    }
    return(
            <button className="navButton">
                <div className="iconContainer" id={props.id}>
                <img src={imageProps.imageSrc} className={imageProps.imageClass} id={imageProps.id} width={imageProps.width} height={imageProps.height}/>
                    <div id={props.id} className="navName">{props.iconName}</div>
                </div>
            </button>
    )
}

const NavBarComponent = (props) => {
    const option=props.map(element => {
        return NavComponent(element)
    });
    return (option)
}

const CardItemComponent = (props, AddToFav) => {
    const handleEvent =(props)=>{
        if (props.isFavourite==false){
            AddToFav(props)
            props.isFavourite=true
        }
        else{
            AddToFav(props)
            props.isFavourite=false
        }
    }
    const imageProps={ 
        imageSrc: props.imageSrc,
        id: cardImageProp.id,
        imageClass: cardImageProp.class,
        width: cardImageProp.width,
        height: cardImageProp.height
    }
    const buttonProps={
        buttonClass: 'btn',
        buttonID:`AddToFav ${props.id}`,
        buttonText: 'Add To Favourite'
    }
    if(props.isFavourite==true){
       buttonProps.buttonClass='removeBtn'
       buttonProps.buttonID=`removeFavourite ${props.id}`
       buttonProps.buttonText='Remove From Favourite'  
    }

   return (
    <div id={props.id} className="card">
        <img src={imageProps.imageSrc} className={imageProps.imageClass} id={imageProps.id} width={imageProps.width} height={imageProps.height}/>
        <button id={buttonProps.buttonID} className={buttonProps.buttonClass} onClick={() => handleEvent(props)}>{buttonProps.buttonText}</button>
        <div id="name_rating" className="cardItem">
            <div id="name" className="name">{props.description.name}</div>
            <div id="rating" className="rating">{props.description.rating}</div>
        </div>
        <div id="distance" className="distance">{props.description.distance}</div>
        <div id="date" className="date">{props.description.date}</div>
        <div id="rate" className="rate">{props.description.rate}</div>
    </div>
   )
    
}

const CardComponent = (props,AddToFav) => {
    const option=props.map(element => {
        return CardItemComponent(element, AddToFav)
    });
    return (option)
}

const LogoComponent = () => {
    return (<div id="logo_box" className="logo_container">airbnb</div>)
}

const SearchBoxComponent = () => {
    return (
        <div id="searchBox" className="searchBar">
            <button id={searchButtonProps[0].buttonID} className={searchButtonProps[0].buttonClass}>{searchButtonProps[0].buttonText}</button>
            <button id={searchButtonProps[1].buttonID} className={searchButtonProps[1].buttonClass}>{searchButtonProps[1].buttonText}</button>
            <button id={searchButtonProps[2].buttonID} className={searchButtonProps[2].buttonClass}>{searchButtonProps[2].buttonText}</button>
            <button id={searchButtonProps[3].buttonID} className={searchButtonProps[3].buttonClass}>
                <img src={searchImageProps.imageSrc} className={searchImageProps.imageClass} id={searchImageProps.id} width={searchImageProps.width} height={searchImageProps.height}/>
            </button>
        </div>
    )
}

const LanguageComponent = () => {
    return (
        <div id='language' className="language">
            <button id="languageButton" className="button">
            <img src={languageImageProps.imageSrc} className={languageImageProps.imageClass} id={languageImageProps.id} width={languageImageProps.width} height={languageImageProps.height}/>
            </button>
        </div>
    )
}

const FavouriteComponent = (props) => { 
    return(
        <div id="favourite" className="favourite">
        <button id="fvt" className="button" onClick={props}>
        <img src={favouriteImageProps.imageSrc} className={favouriteImageProps.imageClass} id={favouriteImageProps.id} width={favouriteImageProps.width} height={favouriteImageProps.height}/>
        </button>
    </div>
    )
}

const SideBoxComponent = (props) => {
    return (
    <div id="sideBox" className="sideBar">
        <div id="home" className="home">airbnb your home</div>
        {LanguageComponent()}
        {FavouriteComponent(props)}
    </div>)
}

const HeaderComponent = (props) => {
    return(
    <div className="header_container" id="header_item">
        {LogoComponent()}
        {SearchBoxComponent()}
        {SideBoxComponent(props)}
    </div>
    )
}
export {App}
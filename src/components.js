import React  from "react"
import { cardImageProp,searchButtonProps } from "./constants.js";
import { renderFavourite } from "./index.js";


const DivComponent = (props) => {
    return React.createElement(
        "div",
        { 
            id: props.id, 
            className: props.class
        },
            props.text
        );
}
const ImageComponent = (props) => {
    return React.createElement("img",
    {
        src: props.imageSrc, 
        id: props.id, 
        className: props.imageClass, 
        width: props.width, 
        height:props.height
    })
}
const ButtonComponent = (props) => {
    return React.createElement('button',
    {
        id: props.buttonID,
        className: props.buttonClass
    },
        props.buttonText
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
                    {ImageComponent(imageProps)}
                    {DivComponent({id: props.id, class: 'navName',text: props.iconName})}
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

const CardItemComponent = (props) => {
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
        {ImageComponent(imageProps)}
        {ButtonComponent(buttonProps)}
        <div id="name_rating" className="cardItem">
            {DivComponent({id: 'name', class: 'name', text: props.description.name})}
            {DivComponent({id: 'rating', class: 'rating', text: props.description.rating})}
        </div>
        {DivComponent({id:'distance', class: 'distance',text: props.description.distance})}
        {DivComponent({id:'date', class: 'date',text: props.description.date})}
        {DivComponent({id:'rate', class: 'rate',text: props.description.rate})}
    </div>
   )
    
}

const CardComponent = (props) => {
    const option=props.map(element => {
        return CardItemComponent(element)
    });
    return (option)
}

const LogoComponent = () => {
    return (<div id="logo_box" className="logo_container">airbnb</div>)
}

const SearchBoxComponent = () => {
    const searchImageProps={ 
        imageSrc: "https://cdn.iconscout.com/icon/premium/png-256-thumb/search-url-1086249.png",
        id: 'searchIcon',
        imageClass: 'searchIcon',
        width: 10,
        height: 10
    }
    return (
        <div id="searchBox" className="searchBar">
            {ButtonComponent(searchButtonProps[0])}
            {ButtonComponent(searchButtonProps[1])}
            {ButtonComponent(searchButtonProps[2])}
            <button id={searchButtonProps[3].buttonID} className={searchButtonProps[3].buttonClass}>
                {ImageComponent(searchImageProps)}
            </button>
        </div>
    )
}

const LanguageComponent = () => {
    const languageImageProps={
        imageSrc: "./AirBnB_files/browser.png",
        id: 'languageIcon',
        imageClass: 'languageIcon',
        width: 20,
        height: 20
    }
    return (
        <div id='language' className="language">
            <button id="languageButton" className="button">
                {ImageComponent(languageImageProps)}
            </button>
        </div>
    )
}

const FavouriteComponent = () => {
    const favouriteImageProps={
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiBAAwQbSpoCULq55HwzqJKTC3GP4UGeUcg&usqp=CAU",
        id: 'favIcon',
        imageClass: 'favIcon',
        width: 20,
        height: 20
    }
    return(
        <div id="favourite" className="favourite">
        <button id="fvt" className="button" onClick={renderFavourite}>
            {ImageComponent(favouriteImageProps)}
        </button>
    </div>
    )
}

const SideBoxComponent = (props) => {
    return (
    <div id="sideBox" className="sideBar">
        {DivComponent({id: 'home', class: 'home', text: 'airbnb your home'})}
        {LanguageComponent()}
        {FavouriteComponent()}
    </div>)
}

const HeaderComponent = (props) => {
    return(
    <div className="header_container" id="header_item">
        {LogoComponent()}
        {SearchBoxComponent()}
        {SideBoxComponent()}
    </div>
    )
}
export {NavBarComponent,CardComponent, HeaderComponent}
import "./styles/root-layout.css"
import userImg from "../assests/images/profileIcon.png"
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import PartC from "../components/PartC.jsx"
import mo3Shop from "../assests/images/mo3shop.PNG"
import blackDash from "../assests/images/black-dash-1.jpg"
import vuertfolio from "../assests/images/vuertfolio-light.PNG"
import avatar from "../assests/images/avatar.png"
import wall from "../assests/images/pexels-kaique-rocha-331986.jpg"
import iphone from "../assests/images/pexels-ovan-62689.jpg"
import cards from "../assests/images/pexels-lukas-1420707.jpg"
import ipad from "../assests/images/pexels-olia-danilevich-5088022.jpg"
import magazine from "../assests/images/pexels-karolina-grabowska-4397925.jpg"
import manInNatureOne from "../assests/images/guilherme-stecanella-R5BW2qgV5I8-unsplash.jpg"
import manInNatureTwo from "../assests/images/warren-7m1L_6-yoXw-unsplash.jpg"
import bgSvg from "../assests/images/low-poly-grid-haikei.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { toggle } from "../store/theme/themeSlice.js"


library.add(fas, faXTwitter, faFontAwesome)

const RootLayout = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch()

  let ulToggle = () => {
    document.querySelectorAll(".root-layout .main ul li").forEach((li,index) => {
      li.onclick = () => {
        document.querySelectorAll(".root-layout .main ul li").forEach((li) => {
          li.classList.remove("active")
        })
        li.classList.add("active")
        document.querySelector(".root-layout .main > div").style.cssText = `
          transform: translateX(${-100 * index}%)
        `
        document.querySelectorAll(".root-layout .main > div .img").forEach((img,index) => {
          img.classList.remove("active")
        })
        document.querySelectorAll(".root-layout .main > div .img")[index].classList.add("active")
      }
    })
  }

  let index = 0;
  let mainAnimation = setInterval(() => {
    if(index === document.querySelectorAll(".root-layout .main ul li").length){
      index = 0;      
    }
    document.querySelectorAll(".root-layout .main ul li")[index].click();
    index++
  }, 5000);

  let themesToggle = () => {
    document.querySelectorAll(".root-layout .right .themes > div").forEach((btn) => {
      btn.onclick = () => {
        document.querySelectorAll(".root-layout .right .themes > div").forEach((btn) => {
          btn.classList.remove("active")
        })
        btn.classList.add("active")
      }
    })
  }

  useEffect(() => {
    document.querySelectorAll(".root-layout .main > div .img").forEach((img,index) => {
      img.style.cssText = `
        left: ${100 * index}%;
      `
    })
  },[])
  useEffect(() => {
    var root = document.querySelector(":root")
    var parts = document.querySelectorAll(".part")
    if(theme === "dark"){
      root.style.setProperty("--bg-color", "#191919");
      root.style.setProperty("--part-bg-color","#000000");
      root.style.setProperty("--text-darker-color","#c0c0c0");
      root.style.setProperty("--btn-hover-color","#858585");
      root.style.setProperty("--themes-hover-color","#272727");
      root.style.setProperty("--text-color","#f8f8f8");
      root.style.setProperty("--main-color","#1d9bf0");
      root.style.setProperty("--main-text-gradient",`linear-gradient(270deg, hsl(234deg 84% 75%) 0%, hsl(211deg 89% 69%) 52%, hsl(201deg 78% 66%) 68%, hsl(193deg 59% 69%) 100%)`);
      parts.forEach((part) => {
        part.style.setProperty("box-shadow","5px 8px 38px -33px var(--text-color)");
        part.style.setProperty("box-shadow","none");
      })
    }else if(theme === "light"){
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--part-bg-color","#aaa");
      root.style.setProperty("--text-darker-color","#020202");
      root.style.setProperty("--btn-hover-color","#0f141a");
      root.style.setProperty("--themes-hover-color","#cacaca");
      root.style.setProperty("--text-color","#000000");
      root.style.setProperty("--main-color","#136094");
      root.style.setProperty("--main-text-gradient",`linear-gradient(270deg, hsl(234deg 98.95% 55.13%) 0%, hsl(211deg 62.1% 55.51%) 52%, hsl(201deg 42.07% 43.89%) 68%, hsl(193deg 94.47% 24.94%) 100%)`)
      parts.forEach((part) => {
        part.style.setProperty("box-shadow","5px 8px 64px -33px var(--text-color)");
      })
    }
  },[theme])
  
  return (
    <div className="root-layout">
    <div className="left">
        <div className="part twitter">
          <div className="post-header">
              <div className="user-info">
              <div className="img"><img src={userImg} alt="post twitter img"/></div>
              <div className="username">
                  <h5>Connelly Rader</h5>
                  <span>@connellyrader</span>
              </div>
              </div>
              <div className="twitter-icon"><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></div>
          </div>
          <p>Husband to Lauren. Father to Violet & Cosdog. Product Designer @ GiANT</p>
          <div className='btns'>
              <Link to="/"><FontAwesomeIcon icon="fa-solid fa-envelope" /></Link>
              <Link to="/">Follow</Link>
          </div>
        </div>
        <div className="part notification">
          <Link to="/">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-bell" />
              <p>He has notifications silenced.</p>
              <span> Notify anyway?</span>
            </div>
          </Link>
        </div>
        <div className="part">
          <PartC topHeading="Currently" main="Design Lead" bottomHeading="at Dumbpunk"/>
        </div>
        <div>
          <div className="part icon">
            <Link><FontAwesomeIcon icon="fa-solid fa-sheet-plastic" /></Link>
            <Link><FontAwesomeIcon icon="fa-solid fa-sheet-plastic" /></Link>
            <Link><FontAwesomeIcon icon="fa-solid fa-sheet-plastic" /></Link>
          </div>
          <div className="part icon">
            <Link><FontAwesomeIcon icon="fa-solid fa-file" /></Link>
          </div>
        </div>
        <div className="part">
          <Link to="/">
            <div className="top">
              <p>Shop my templates</p>
              <p>Order One</p>
            </div>
            <div className="projects-imgs">
              <div className="img"><img src={vuertfolio} alt="" /></div>
              <div className="img"><img src={blackDash} alt="" /></div>
              <div className="img"><img src={mo3Shop} alt="" /></div>
            </div>
          </Link>
        </div>
    </div>
    <div className="middle">
      <div className="part currently">
        <div className="bg"><img src={bgSvg} alt="" /></div>
        <Link to="https://moatasim-ashraf.netlify.app" target="_blank">
          <h3>
            By: Moatasim
          </h3>
          <p>
            <span>https://</span>
            <span>moatasim-ashraf.netlify.app</span>
          </p>
        </Link>
      </div>
      <div className="part main">
        <div className="imgs">
          <div className="img">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <h3>Welcome</h3>
            <p>Take a look around</p>
          </div>
          <div className="img">
            <img src={wall} alt="e-commerce" />
          </div>
          <div className="img">
            <img src={iphone} alt="e-commerce" />
          </div>
          <div className="img">
            <img src={cards} alt="e-commerce" />
          </div>
          <div className="img">
            <img src={ipad} alt="e-commerce" />
          </div>
          <div className="img">
            <img src={magazine} alt="e-commerce" />
          </div>
        </div>
        <ul>
            <li onClick={() => {ulToggle()}} className="active"></li>
            <li onClick={() => {ulToggle()}}></li>
            <li onClick={() => {ulToggle()}}></li>
            <li onClick={() => {ulToggle()}}></li>
            <li onClick={() => {ulToggle()}}></li>
            <li onClick={() => {ulToggle()}}></li>
          </ul>
      </div>
      <div className="parts-wrapper">
        <div className="part">
          <Link to="/">
            <FontAwesomeIcon icon="fa-solid fa-burst" />
            <span>Framer Export</span>
          </Link>
        </div>
        <div className="part">
          <Link to="">
            <span>Remix</span>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </Link>
            <div className="img"><img src={blackDash} alt="blackDash" /></div>
        </div>
      </div>
    </div>
    <div className="right">
      <div className="part">
        <iframe className="map" title="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27557.911662179602!2d31.757407803824236!3d30.301492230909638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1707115413464!5m2!1sen!2seg" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="part">
          <PartC topHeading="Raising a family in" main="Guthrie, OK"/>
      </div>
      <div>
        <div className="part">
          <img src={manInNatureOne} alt="" />
        </div>
        <div className="part">
          <img src={manInNatureTwo} alt="" />
        </div>
      </div>
      <div className="part themes">
        <div onClick={() => {themesToggle(); dispatch(toggle())}} className="light">
          <FontAwesomeIcon icon="fa-solid fa-sun" />
        </div>
        <div onClick={() => {themesToggle(); dispatch(toggle())}} className="dark active">
          <FontAwesomeIcon icon="fa-solid fa-moon" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default RootLayout
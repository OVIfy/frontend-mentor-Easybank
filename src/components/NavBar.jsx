import React,{useEffect,useState} from "react";
import  NavItem  from "./NavItem";
import Button from "./Button";
import './style.css'

function NavBar(props){
  
  let [isMobile , setisMobile] = useState(false)
  let [isNav , setisNav] = useState(false)
  let mql = false;
  
   window.addEventListener('resize',()=>{
          mql = window.matchMedia(`(max-width: ${props.max || '700px'})`)
          setisMobile(mql.matches)
          // console.log(isMobile)
    })

    useEffect(()=>{
      mql = window.matchMedia(`(max-width: ${props.max || '700px'})`)
      setisMobile(mql.matches)
      
    },[])

    function handleNav(){
       setisNav(!isNav)
    }
   
    if(!isMobile){
      document.querySelector('body').classList.remove('hide')
   }else{
      if(isNav){
        document.querySelector('body').classList.add('hide')
      }
      else{
        document.querySelector('body').classList.remove('hide')
      }
   }
   

    return(
        <nav   className={"fr c nav white"}>
         <div className="fr fb1">

            <span>
             <img className="mx10 my20" src={props.logo} />
            </span>

            {isMobile === true ?  <ul className={`ib nav-mobile ${ !isNav && 'dn'}`}>
             {props.items.map((item,i)=> <NavItem key={i} text={item} classes="ib mx10 my20 nav-item-mobile nav-item"/>)}
              </ul> 
              :  
            <ul className="ib">
             {props.items.map((item,i)=> <NavItem key={i} text={item} classes="ib mx10 my20 nav-item"/>)}
            </ul>}
          
           

            <Button clicked={handleNav} text={!isMobile && "Request Invite"} classes={`${isMobile? `hamburger ${isNav && 'close'}` : "btn"} my20 mx20`}/>
          </div>
        
        </nav>
    )
}

export default NavBar;
import React from 'react'
import Cartwdidget from '../CartWidget/Index';
import {styles} from './styles'
import {useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Logotienda from '../Logotienda/Logotienda'

const Secciones = [
    {id:1, name: "Home", url:"/"},
    {id:2, name: "Series", url:"/section/Series"},
    {id:3, name: "Movies", url:"/section/Movies"},
    {id:4, name: "Comics", url:"/section/Comics"},
    {id:5, name: "Cart", url:"/cart"}
]

const Navbar = ({url,name}) => { 
    const [secciones,setSecciones] = useState([]);  

    useEffect(() => {
        const promesaSecciones = new Promise((res,rej)=>{
            res(Secciones)
        });
    
        promesaSecciones.then(res => setSecciones(res))
    },[]);
   
  
    
    return (
        <>
        <div style={styles.navbar}>
        <Logotienda />
            <div style={styles.nav}>
                {secciones.map((seccion)=>{
                return(
                   <div key={seccion.id}>
                       <NavLink style={styles.link} to={seccion.url}>{seccion.name}</NavLink> 
                    </div> 
                        )
                    })}
            <Cartwdidget></Cartwdidget>
            </div>       
        </div>
        </> 
            
          
          );
}
export default Navbar
import React, {useState,useEffect} from 'react'
import {styles} from './styles'
import { reject } from 'q';

const Secciones = [
    {id:1, name: "Home", url:"/"},
    {id:2, name: "Series", url:"/section/series"},
    {id:3, name: "Movies", url:"/section/movies"},
    {id:4, name: "Comics", url:"/section/comics"},
    {id:5, name: "Contact", url:"/section/contact"},
    {id:6, name: "Cart", url:"/cart"}
]



const Link = ({url,name}) => { 
    const [secciones,setSecciones] = useState([]);  

    useEffect(() => {
        const promesaSecciones = new Promise((res,rej)=>{
            res(Secciones)
        });
    
        promesaSecciones.then(res => setSecciones(res))
    },[]);
   
    console.log(secciones)
    const [hover,setHover] = useState(false) 
    
    return (
        <>
            {secciones.map((seccion)=>{
                return(
                <li key={seccion.id}><a style={styles.link} href={seccion.url}>{seccion.name}</a></li>
                )
            })}
            </>
          );
}
export default Link
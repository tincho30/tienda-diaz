import React, {useContext} from 'react'
import {styles} from './styles'
import {Link} from 'react-router-dom'


const Item = ({prodId,title,year,pictureUrl,price,category}) => {
    return(
        <>
        <Link to={`/product/${prodId}`}>
             <ul style={styles.product}>
                 <li style={styles.productTitle}>{title}</li>
                 <li>{category}</li>
                 <li style={styles.picture}></li>
                 <li>{"Año: "+year}</li>
                 <li><img style={styles.picture} src={pictureUrl} alt={title}/></li>
                 <li style={styles.price}>{"$"+price}</li>
                 
             </ul> 
             
        </Link>
        </> 
    )
 }
 
export default Item

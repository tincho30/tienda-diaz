import React, {useState, useContext} from 'react'
import {styles} from './styles'
import ItemCount from '../ItemCount';
import Button from 'react-bootstrap/Button'
import CartContext from '../../context/CartContext';
import { NavLink } from 'react-bootstrap';

const Index = ({prodId,title,year,pictureUrl,price,category}) => {

    
    return (
        <>
        <table style={styles.detailCard}>
        <th rowspan="4"><img style={styles.detailImg} src={pictureUrl} alt={title}/>
        </th>
        <th>
            <tr>
                <span style={styles.detailTitle}>{title}</span><br></br>
                <span style={styles.detailPrice}>{"$"+price}</span><br></br>
                {category}
            </tr>
        </th>
        <th> 
        <ItemCount></ItemCount>
        </th>
        </table>
        </>
    )
}

export default Index

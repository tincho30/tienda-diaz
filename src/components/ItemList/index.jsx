import React from 'react'
import Item from '../Item';
import {styles} from './styles'


const ItemList = ({products}) => {
        return(
            <>
                <div className="container d-flex justify-content-center" style={styles.productList}>
                    <div className="row"> {products.map((product)=>{
                        return(
                            <div className="col-md-4">
                                <Item key={product.id} {...product}></Item>
                            </div>
                            );     
                        })}
                    </div>
                </div>
            </>
        )
            
    
}
export default ItemList
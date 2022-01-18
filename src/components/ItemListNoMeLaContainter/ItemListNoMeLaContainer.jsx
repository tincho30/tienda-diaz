import React,{useState,useEffect} from 'react'
import {styles} from './styles'
import ItemList from '../ItemList';
import {data} from '../../data/data';
import {useParams} from 'react-router-dom'

const ItemListNoMeLaContainer = ({titulo}) => {

    const [products,setProducts] = useState([]); 
    const [loading,setLoading] = useState(true);
    const { secId } = useParams();

    useEffect(() => {
        setLoading(true)
        const promesaProducts = new Promise((res)=>{
            setTimeout(function(){
                const myData = secId
                ? data.filter((item)=>item.category ===
                secId)
                :data;
                res(myData)
            },500)
           
        });
        promesaProducts.then((res) => {

            setProducts(res);
            setLoading(false);
        })
    },[secId]);
    return (
        loading ? <h3>CARGANDO...</h3> :
        <>
            <h3 style={styles.title}>{titulo}</h3>
            <ItemList style={styles.itemList} products={products}></ItemList>
         </>
          );
}

export default ItemListNoMeLaContainer

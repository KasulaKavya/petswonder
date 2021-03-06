import React, {useState, useEffect} from 'react'
import Layout from '../core/Layout'
import {getCart} from './cartApi'
import Card from '../core/Card'
import CheckOut from '../core/CheckOut'
import { Link } from 'react-router-dom'
import { isAuthenticated } from "../auth/index";
import emptycart from '../../images/emptycart.png'


const Cart = () => {

    const [items, setItems] = useState([]);

    const {user:{userNumber}} = isAuthenticated();
    console.log(userNumber);

    const getItemsInCart = () =>{
        getCart(userNumber)
        .then(data => {
            (setItems(data.cart))
        })
        .catch(err=> {
            console.log(err);
        })
    }

    useEffect(()=>{
        getItemsInCart();
      
    }, []);

    // console.log(items);


    const showItems = (items) =>{
        console.log(items);
        return <div>
            <h2>Your Cart has {`${items.length}`} items</h2>
            <hr/>
            {/* {items.map((product, i)=>{
                return product && <Card key={i} product={product} showAddToButton={false} cartUpdate={true} showRemoveProductButton = {true} />          
            })} */}
          
            {items.map((p,i)=>{
                return p && <div key={i} className="col-xl-4 col-lg-6 col-6 product" style={{display:"inline-block"}}>
                    <Card data={p} cartUpdate={true}/>
                </div>}
            )}
        </div>
    }

    
    const noItemsMessage = () =>{
        console.log(items);
        return <h3>Your Cart is Empty<br/><br/><span class="badge badge-warning"><Link to="/shopping">Shop Now</Link></span></h3>
    }



    return (
         <Layout title="Cart" description="View products added to cart" className="container-fluid" > 
                <div className="row">
                  
                    <div className="col-md-3 col-12">
                        <h2 className="mb-4">Your Cart Summary</h2>
                        {items.length>0 ?<CheckOut products={items} /> : 
                            <img src={emptycart} alt=""/>
                        }
                        {/* <p>show checkout options, payent options</p> */}
                    </div>
                    <div className="col-md-9 col-12">
                        {/* {JSON.stringify(items[4])} */}
                        {items.length>0 ? showItems(items) : noItemsMessage()}
                    </div>)
                </div>

                {/* {showItems(items)} */}
             
                
         </Layout>
    )
}

export default Cart

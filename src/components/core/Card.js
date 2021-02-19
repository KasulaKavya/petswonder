import React, {Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {addToCart, updateItem} from '../cart/cartApi'
import { isAuthenticated } from "../auth/index";
import notFound from '../../images/notfound.jpg'

const Card = ({ data, showViewButton = true, showAddToButton=true, cartUpdate=false, showRemoveProductButton=false}) => {

   // console.log(data);
   const [count, setCount] = useState(data.quantity);
   const {jwt, user:{userNumber}} = isAuthenticated();
   const productId = data.productId;
   const id = data.productId;

   const handleClick = () =>{
       console.log(userNumber, id);
       addToCart({userNumber, id})
       .then(data=>{
            if(data.status==="Product added to cart"){
                alert("Product added to cart succesfully!")
            }
          
       })
       .catch(err=>{
           console.log(err);
       })
   }    

    // console.log(data);

    const handleChange = productId => e=>{

        // setCount(e.target.value< 1 ? 1 : e.target.value);
        // if(e.target.value>1){

        //     updateItem({userNumber, productId, count})
        //     .then(data=>{
        //         console.log(data)
        //     })
        //     .catch(err=>{
        //         console.log(err);
        //     })
        // }
    }

    const decrease = () =>{
        count>1 && setCount(count-1);
    }

    const increase = () =>{
        setCount(count+1);
    }
    
    useEffect(()=>{
        if(count>=1){
            cartUpdate && updateItem({userNumber, productId, count})
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err);
            })
        }

    },[count])



    const showCartUpdateOptions = cartUpdate =>{
        return cartUpdate && <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button onClick={decrease} className="input-group-text btn btn-warning">-</button>
                </div>
                <input type="number" className="form-control" value={count} onChange={handleChange(data.productId)} />
                <div className="input-group-prepend">
                    <button onClick={increase} className="input-group-text btn btn-warning">+</button>
                    
                </div>
            </div>
        </div>
    }

    return <div className="single_courses">
        <div className="thumb">
            <a className="akruti-a">
                <img className="akruti-img" src={`https://s3.ap-south-1.amazonaws.com/petswonder.productimages/${data.productId}.PNG`}  />
            </a>
        </div>
        <div className="courses_info">
            <h3 className="akruti-h3">{data.title} <br></br></h3>
            {/* <p className="d-sm-none d-md-block d-none d-sm-block">
                {data.description.slice(0,95)}
                {data.description.length>95 && <Fragment>.....</Fragment>}
            </p> */}
            <div className="star_prise justify-content-between">
                <div className="star col-sm-8 col-12 lol" >
                    <div className="prise col-sm-4 col-12 lol" style={{display:"inline-block"}}>
                        <span className="offer">
                            ₹{data.price}
                        </span>
                        <span className="active_prise">
                            ₹{data.price-((data.price)*data.discount)/100}
                        </span>
                    
                    </div>
                </div>
                <div className="mb-3 ">
                    <Link className=" addcart" onClick={handleClick} style={{textDecorationLine:"none"}}>
                    Add to Cart </Link> {'  '}
                    
                    {/* <a href="#"><span ><i class="far fa-lg fa-heart" style={{paddingRight:"20px"}}></i></span></a>{' '} */}
                        
                    <Link to ={{pathname:`/product/${data.productId}`, productProps: data }}
                        className=" buy-btn " style={{textDecorationLine:"none"}} >{' '} Buy Now </Link>

                </div>
            </div>
            {showCartUpdateOptions(cartUpdate)}
        </div>
    </div>
      
}

export default Card

import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'

function product({name,image,ratings,price,id}) {
    // console.log("props :",props.price);
    const addToCart = () =>{
        const cartItem = db.collection('cart-details').doc(id);
        // console.log("btn clicked" ,id);
        cartItem.get()
        .then((doc)=>{
            console.log("doc ",doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cart-details").doc(id).set({
                    name: name,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }
    return (
        <Container>
           <img src={image}/>
           <p id="title">
           {name}
           </p>
           <span>{ratings} <i className="fa  fas fa fa-star fa-1x"></i></span>
           <p id="price">₹ {price} </p>
            <button onClick={addToCart}>Add to cart</button>
        </Container>
    )
}

export default product

const Container = styled.div`
    
    padding:20px;
    width:250px;
    background-color:white;
    border-radius:10px;
    font-size:14px;

    button{
        margin:15px 0px 15px 0;
        background-color:#febd69;
        border:none;
        padding:10px;
        cursor:pointer;
        :focus{
            outline:none;
        }
        :hover{
            background:orange;
        }
    }
    img{
        height:150px;
        width:150px;
        padding-bottom:16px;
    }
    #title{
        width:188px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        margin-bottom:10px;
    }
    span{
        
        background-color:#64dd17;
        color:white;
        padding:5px;
        font-size:12px;
        border-radius:5px
    }
    #price{
        margin-top:10px;
        font-size:16px;
    }
`
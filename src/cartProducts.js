import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'
import cart from './Cart'

function cartProducts(props) {
    console.log("props",props);

    const deleteItem = (e) => {
        e.preventDefault()
        db.collection('cart-details').doc(props.id).delete();
    }

    const changeQuantity =(newQuantity) =>{
        console.log("newQuantity ",newQuantity);
        console.log(props.id);
        db.collection('cart-details').doc(props.id).update({
            quantity: parseInt(newQuantity)
        })
       
    }
    let options = []

    for (let i = 1; i <= Math.max(props.quantity + 1, 5); i++) {
        options.push(<option value={i}> Qty: {i}</option>)
    }
    return (
        <Container>
        <CartProductContainer>
                <img src={props.image}></img>
                <ProductName>
                    <p>{props.name}</p>
                    <select id="qty" 
                    value={props.quantity}
                    onChange={(e) => changeQuantity(e.target.value)}
                    >
                    {options}
                    </select>
                    <span id="delete" onClick={deleteItem}> Delete</span>
                    
                </ProductName>
                <ProductPrice>₹{props.price}</ProductPrice>
               
        </CartProductContainer>
        <hr></hr>
        </Container>
    )
}

export default cartProducts
const Container = styled.div`
    
`
const CartProductContainer = styled.div`
    display:flex;
    select{
        padding:5px;
        border-radius:5px;
        background-color:#E3E6E6;
        :focus{
            outline:none;
        }
    }
    img{
        width:150px;
        height:150px;
    }
`
const ProductName = styled.div`
    padding:20px;
    flex-grow:1;
    
    p{
        font-weight:600;
        font-size:20px;
        margin-bottom:10px;
    }
    #delete{
        margin-left:10px;
        cursor:pointer;
        color:blue;
    }

`
const ProductPrice = styled.div`
    padding:15px;
    font-size:20px;
`
import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
import CartProducts from './cartProducts'

function cart() {
    return (
        <Container>
            <CartInfoContainer>
           {/* <EmptyCart>
                <h3>Your Amazon Cart is empty.</h3>
                <button>Explore Products</button>
           </EmptyCart> */}
           <ShoppingCart>
             <h2>
             Shopping Cart
             </h2>
             <h3>Price</h3>
             <hr></hr>
            <CartProducts/>
            <CartProducts/>
            <CartProducts/>
            <CartProducts/>
            <h3>Subtotal (1 item):   24,999.00</h3>
           </ShoppingCart>
            <Subtotal>
                <h4>Subtotal(1 item):   ₹24,999.00 </h4>
                <button>Proceed to Buy</button>
            </Subtotal>
            </CartInfoContainer>
            <Footer/>
        </Container>
        
    )
}

export default cart
const Container = styled.div`
    
`
const CartInfoContainer = styled.div`
    display:flex;
    padding:50px;
`
const EmptyCart = styled.div`

`
const ShoppingCart = styled.div`
    background-color:white;
    flex-grow:1;
    margin:20px;
    padding:30px;
    border-radius:10px;
    hr{
        margin:30px 0px 30px 0px;
    }
    h3{
        float:right;
    }
`
const Subtotal = styled.div`
    margin:20px;
    padding:20px;
    background-color:white;
    border-radius:10px;
    height:100px;
    button{
        margin:15px 0px 15px 0;
        background-color:#FA8800;
        border:none;
        padding:10px;
        width:100%;
        border-radius:10px;
    }
`
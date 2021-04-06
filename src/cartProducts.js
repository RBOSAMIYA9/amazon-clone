import React from 'react'
import styled from 'styled-components'

function cartProducts() {
    return (
        <Container>
        <CartProductContainer>
                <img src="https://m.media-amazon.com/images/I/812wg+pfXAL._AC_AA180_.jpg"></img>
                <ProductName>
                    <h3>OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)</h3>
                </ProductName>
                <ProductPrice>  24,999.00</ProductPrice>
               
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
`
const ProductName = styled.div`
    padding:15px;
`
const ProductPrice = styled.div`
    padding:15px;
    font-size:20px;
`
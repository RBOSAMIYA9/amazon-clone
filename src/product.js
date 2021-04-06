import React from 'react'
import styled from 'styled-components'

function product() {
    return (
        <Container>
           <img src="https://images-eu.ssl-images-amazon.com/images/I/811xFHHgiPL._AC_UL160_SR160,160_.jpg"/>
           <p>
            Philips BT3211/15 corded & cordless Beard Trimmer with Fast Charge; 20 settings; 60 min run time
           </p>
           <p>⭐⭐⭐⭐⭐</p>
           <p>₹ 1,597.00 </p>
            <button>Add to cart</button>
        </Container>
    )
}

export default product

const Container = styled.div`
    
    padding:20px;
    width:250px;
    background-color:white;
    border-radius:10px;

    button{
        margin:15px 0px 15px 0;
        background-color:#febd69;
        border:none;
        padding:10px;
    }
`
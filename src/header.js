import React from 'react'
import styled from 'styled-components'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';

const publicUrl = process.env.PUBLIC_URL;
function header(cartItems) {
    const getCount = () => {
        let count = 0;
        // Loop through all cart items

        // console.log("cartItems getCount",cartItems.cartItems);
        cartItems.cartItems.forEach((item) => {
            // add the quantity of the cart item to tota;
            count += item.product.quantity;
            console.log("quantity ",item.product.quantity);
        })
       

        return count;
    }
   
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={publicUrl+"logoAmazon.png"}></img>
                </Link>
                    <span>.in</span>
                
            </HeaderLogo>
            <DeliverTo>
            
                
                <i className="fa  fas fa-map-marker fa-1x"></i>
                <div>
                    <p> Deliver To Ravi</p>
                        <span>
                            Rajkot 360005
                        </span>
                </div>
            </DeliverTo>
            <SearchBarContainer>    
                
                <input type="text"/>
                       
                
                <SearchIcon>
                    <i className="fa  fas fa-search fa-1x"></i>
                </SearchIcon>
                
            </SearchBarContainer>
            <HeaderNavItems>
                <LanguageSelector>
                <i className="fa  fas fa-flag fa-2x"></i>
                </LanguageSelector>
                <AccountInfo>
                    <p>
                        Hello Ravi,
                    </p>
                    <span>
                        Accounts & Lists
                    </span>
                </AccountInfo>
                <ReturnAndOrders>
                    <p>
                        Returns
                    </p>
                    <span>
                        & Orders
                    </span>
                </ReturnAndOrders>
                <Link to="/cart">
                    <Cart>
                        <i className="fa fa-shopping-cart fa-2x"></i>
                        <div>
                            <p>{getCount()}</p>
                            <span>Cart</span>
                        </div>
                        
                    </Cart> 
                </Link>
                
            </HeaderNavItems>
        </Container>
    )
}

export default header
const Container = styled.div`
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  color:white;
  justify-content: space-between;
`
const HeaderLogo = styled.div`
    display:flex;
    padding:10px 0px 0px 10px;
    :hover{
        box-shadow:0 0 0 1px #fff;
        border-radius:5px;
    }
    img{
        height:40px; 
        
    }
    span{
        padding:7px 0px 0px 0px;
    }
    color:white;
    
`
const DeliverTo = styled.div`
    
    padding:0px 20px 0px 20px;
    display:flex;
    :hover{
        box-shadow:0 0 0 1px #fff;
        border-radius:5px;
    }
    align-items: center;
    div{
        padding-left:10px;
    }
    p{
        font-weight:100;
    }
    span{
        font-weight:600;
    }
`

const SearchBarContainer = styled.div`
    display:flex;
    flex-grow:1;
    ${'' /* padding:0px 10px 0px 10px; */}
    height:40px;
    border-radius:5px;
    overflow:hidden;
    :focus-within{
        box-shadow:0 0 0 2px #febd69;
    }
    
    input{
        ${'' /* border-top-left-radius:5px;    
        border-bottom-left-radius:5px;     */}
        flex-grow:1;
        background-color:white;
        border:0;
        :focus{
            outline:none;
        }
    }
`

const SearchIcon = styled.div`

        
        background-color:#febd69;
        width:30px;
        color:black;
        justify-content:center;
        padding:10px 0px 10px 10px;
        ${'' /* border-top-right-radius:5px;    
        border-bottom-right-radius:5px; */}
        
`
const HeaderNavItems = styled.div`
    display:flex;
    padding:0px 10px 0px 10px;
`
const LanguageSelector = styled.div`
    padding:0px 10px 0px 10px;
    :hover{
        box-shadow:0 0 0 1px #fff;
        border-radius:5px;
    }
`
const AccountInfo = styled.div`
    :hover{
        box-shadow:0 0 0 1px #fff;
        border-radius:5px;
    }
    padding:0px 10px 0px 10px;
    p{
        font-weight:100;
    }
    span{
        font-weight:600;
    }
`
const ReturnAndOrders = styled.div`
    :hover{
        box-shadow:0 0 0 1px #fff;
        border-radius:5px;
    }
    padding:0px 10px 0px 10px;
`
const Cart = styled.div`

    text-decoration:none;
    color:white;
    
    
    display:flex;
    :hover{
        box-shadow:0 0 0 1px #fff;
        border-radius:5px;
    }
    padding:0px 10px 0px 10px;
    div{
        padding:0px 10px 0px 10px;
      
    }

    p{
        color:#febd69;
        border-radius:50%;
        padding-left:10px;
        font-weight:700;
        
    }
    span{
        padding-top:0px;
    }
`

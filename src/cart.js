import React ,{ useState ,useEffect} from 'react'
import styled from 'styled-components'
import Footer from './footer'
import CartProducts from './cartProducts'
import {db} from './firebase'

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const getCount = () => {
            let count = 0;
            // Loop through all cart item
            // console.log("cartItems",cartItems);
            cartItems.forEach((item) => {
                // add the quantity of the cart item to tota;
                count += item.product.quantity;
            })
    
            return count;
    }
    const getCartTotal = () => {
        let total = 0;
        // Loop through all cart item
        // console.log("cartItems",cartItems);
        cartItems.forEach((item) => {
            // add the quantity of the cart item to tota;
            total = total + (item.product.price * item.product.quantity);
        })

        return total;
}
    const getCartItems = () =>{
        db.collection('cart-details').onSnapshot((snapshot)=>{
            let tempProducts = [];
            tempProducts = snapshot.docs.map((doc)=>({
                id:doc.id,
                product:doc.data()
            }));
            console.log(tempProducts);
            setCartItems(tempProducts);
            
        })

    }
    useEffect(() => {
        getCartItems();
    }, [])
    
    // console.log("products :",products);


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
             {
                        cartItems.map((data) => (
                            
                                <CartProducts
                                    id={data.id}
                                    name={data.product.name}
                                    price={data.product.price}
                                    image={data.product.image}
                                    quantity={data.product.quantity}
                                />
                            ))
            }
            {/* <CartProducts/> */}
            {/* <CartProducts/>
            <CartProducts/>
            <CartProducts/> */}
            <h3>Subtotal ( {getCount()} items):    ₹{getCartTotal()}</h3>
           </ShoppingCart>
            <Subtotal>
                <h4>Subtotal({getCount()} items):   ₹{getCartTotal()} </h4>
                <button>Proceed to Buy</button>
            </Subtotal>
            </CartInfoContainer>
            <Footer/>
        </Container>
        
    )
}

export default Cart
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
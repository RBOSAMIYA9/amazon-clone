import React ,{ useState ,useEffect} from 'react'
import styled from 'styled-components'
import Product from './product'
import Footer from './footer'
import {db} from './firebase'
import Carousel from 'react-elastic-carousel';


export default function Home() {
    const [products, setProducts] = useState([]);

    
    const getProducts = () =>{
        db.collection('product-details').onSnapshot((snapshot)=>{
            let tempProducts = [];
            tempProducts = snapshot.docs.map((doc)=>({
                id:doc.id,
                product:doc.data()
            }));
            // console.log(tempProducts);
            setProducts(tempProducts);
        })

    }
    useEffect(() => {
        getProducts();
    }, [])
    
    console.log("products :",products);

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                <ProductSlider>
                    <h3>Top Deals</h3>
                    <hr></hr>
                    <ProductSliderContainer>
                    
                    <Carousel itemsToShow={4} disableArrowsOnEnd={false} itemPadding={[10,10,10,10]} pagination={false}>
                        {
                            products.map((data) => (
                                <Product
                                    name={data.product.name}
                                    price={data.product.price}
                                    ratings={data.product.ratings}
                                    image={data.product.image}
                                    id={data.id}
                                />
                            ))
                        }
                    </Carousel>
                    </ProductSliderContainer>
                </ProductSlider>
                

                <InfoBanner>

                </InfoBanner>
                <RecommmendedProducts>
                <h3>Recommended Products</h3>
                    <hr></hr>

                    <Carousel itemsToShow={4} disableArrowsOnEnd={false} itemPadding={[10,10,10,10]} pagination={false}>
                        {
                            products.map((data) => (
                                <Product
                                    title={data.product.name}
                                    price={data.product.price}
                                    ratings={data.product.ratings}
                                    image={data.product.image}
                                />
                            ))
                        }
                    </Carousel>
                </RecommmendedProducts>
            </Content>
            <Footer/>
        </Container>
    )
}
const Container = styled.div`
    
`
const ProductSlider = styled.div`
    h3{
        font-size:25px;
    }
    background-color:white;
    border-radius:10px;
`
const ProductSliderContainer = styled.div`
    padding:20px;
    display:flex;
    
    justify-content:space-between;
    
`
const Banner = styled.div`
    
    background-image:url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/SUD_Mar/M12/D21899870_IN_WLME_Smartphone-UpgradeDays_SamsungM12_DesktopTallHero_1500x600._CB657441611_.jpg');
    min-height:600px; 
    background-position: center;
    background-size: cover;
    

`
const Content = styled.div`
    
    
    ${'' /* background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px); */}
    ${'' /* background-color:white; */}
    margin:20px;
    
    margin-top:-350px;
    padding:15px;
    h3{
        padding:15px;    
    }
`

const InfoBanner = styled.div`
    margin:25px 0px 25px 0;

    background-image:url('https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg');
    background-position: center;
    background-size: cover;
    height:150px;
`

const RecommmendedProducts = styled.div`
    background-color:white;
    border-radius:10px;
    h3{
        font-size:25px;
    }
`
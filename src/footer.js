import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';


const publicUrl = process.env.PUBLIC_URL;

function footer() {
    return (
        <div>
            <FooterContainer>
            <FooterLinkContainer>
                <Pages>
                    <h3>
                        Get to Know Us
                    </h3>
                    <p>
                        About us
                    </p>
                    <p>
                        Carrers
                    </p>
                    <p>
                        Press Relases
                    </p>
                    <p>
                        Gift a smile
                    </p>
                </Pages>
                <ConnectWithUs>
                <h3>
                        Get to Know Us
                    </h3>
                    <p>
                        About us
                    </p>
                    <p>
                        Carrers
                    </p>
                    <p>
                        Press Relases
                    </p>
                    <p>
                        Gift a smile
                    </p>
                </ConnectWithUs>
                <MakeMoneyWithUs>
                <h3>
                        Get to Know Us
                    </h3>
                    <p>
                        About us
                    </p>
                    <p>
                        Carrers
                    </p>
                    <p>
                        Press Relases
                    </p>
                    <p>
                        Gift a smile
                    </p>
                </MakeMoneyWithUs>
                <HelpSection>
                <h3>
                        Get to Know Us
                    </h3>
                    <p>
                        About us
                    </p>
                    <p>
                        Carrers
                    </p>
                    <p>
                        Press Relases
                    </p>
                    <p>
                        Gift a smile
                    </p>
                </HelpSection>
                
                </FooterLinkContainer>
                <hr></hr>
                <FooterLogo>
                
                <Link to="/">
                    <img src={publicUrl+"logoAmazon.png"}></img>
                </Link>
            
                <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                </FooterLogo>
            </FooterContainer>
        </div>
    )
}

export default footer

const FooterContainer = styled.div`
    padding:100px;
    padding-bottom:0px;
    background-color:#232F3E;
    color:white;
    hr{
        margin:35px;
    }
`
const FooterLinkContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    color:white;
`
const Pages = styled.div`
    ${'' /* display: flex; */}
`
const  ConnectWithUs = styled.div`

`
const MakeMoneyWithUs = styled.div`

`
const HelpSection = styled.div`

`
const FooterLogo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom:20px;
`
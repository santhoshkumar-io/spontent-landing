//Modules
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

//Components
import ButtonCompo from "../components/common/Button";
import Footer from "../components/common/Footer";

//Constants
import {HOMETEXT} from "../constant/constant";

const HeadTextWrap=styled.div<any>`
padding-top: 6.25rem;
width:100vw;
height:45.063rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
${props => props.theme.breakpoints.down('sm')} {
    width:100%;
    padding:6.25rem 1.75rem 0;  }
`
const HeadText = styled(Typography)<any>`

        width:61rem;
        height:3rem;
        margin-bottom:1rem;
        ${props => props.theme.breakpoints.down('sm')} {
            width:100%;
            height:25%;
            font-size:40px;
          }
`
const ParaText=styled.p<any>`
width:51.938rem;
height:4.5rem;
margin-bottom:2.5rem;
text-align:center;
${props => props.theme.breakpoints.down('sm')} {
    width:100%;
    height:23%;
    text-align:inherit;
    font-size:20px;
    margin:1.5rem 0.125rem 3.5rem;

  }
`

const BoxOne = styled.div<any>`
height: 721px;
width: 479px;
border-radius: 0px;
position:absolute;
top:6.25rem;
border:1px solid ${(props)=>props.theme.palette.primary.main};
box-shadow: 0px 0px 50px rgba(157, 238, 243, 0.5);
z-index:-10;
left:0;
${props => props.theme.breakpoints.down('sm')} {
    display:none;
     
  }
`
const BoxTwo = styled.div<any>`
height: 597px;
width: 427px;
border-radius: 0px;
position:absolute;
top:26.5rem;
left:66.8rem;
border:1px solid ${(props)=>props.theme.palette.primary.main};
box-shadow: 0px 0px 50px rgba(157, 238, 243, 0.5);
z-index:-10;
${props => props.theme.breakpoints.down('sm')} {
    display:none;
     
  }
`
const ButtonWrap=styled.div<any>`
${props => props.theme.breakpoints.down('sm')} {
  width:100%;
   
}
`
export default function HomePage(props:any){
    return(<>
        <HeadTextWrap>
        <BoxOne></BoxOne>
        <BoxTwo></BoxTwo>
        <HeadText variant="h1">{HOMETEXT.headText}</HeadText>
        <ParaText>{HOMETEXT.pText}</ParaText>
        <ButtonWrap>
        <ButtonCompo variantSize={HOMETEXT.button.bSize} variantColor={HOMETEXT.button.bColor}   text={HOMETEXT.button.bText}></ButtonCompo>
        </ButtonWrap>
        </HeadTextWrap>
        <Footer></Footer>
    </>);
}
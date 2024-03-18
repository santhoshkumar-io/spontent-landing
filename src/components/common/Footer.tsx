import React from "react";
import styled from "@emotion/styled" ;
import { NAVBAR } from "../../constant/constant";
import { Typography } from "@mui/material";
import { AnchorTag, ListTag } from "../../styles/common/common.styles";
import { SERVICECHILD } from "../../constant/footer";
import { FOOTERTEXT } from "../../constant/footer";
import Link from "next/link";
import InputWithButton from "./Input";
const FooterContainer = styled.div<any>`
height:18.75rem;
width:100vw;
background-color:${(props:any)=>props.theme.palette.secondary.main};
display:flex;
margin:auto 0;
justify-content:space-around;
padding-top:1.75rem;
${props => props.theme.breakpoints.down('sm')} {
    display:none;
     
  }
`

const FindHead =styled(Typography)<any>`
height:4.875rem;
width:12.375rem;
font-weight:500;
color:${(props:any)=>props.theme.palette.primary.main};
`
const FooterHead = styled(Typography)<any>`
margin-bottom:1rem;
color:${(props:any)=>props.theme.palette.primary.main};
font-weight:500;`
const FooterText=styled(Typography)<any>`
height:6rem;
max-width:85%;
color:${(props:any)=>props.theme.palette.halfGray.main};
${(props) => {
    console.log(props)
    return ''
} }
`
const AlignedList  = styled(ListTag)<any>`
margin-bottom:0.5rem;`
const FooterService=styled(Typography)<any>`
max-width:17rem;
`
const ServiceChild = SERVICECHILD.map((item:any,index:number)=>{return(<AlignedList key={index}><Link href=" /"><AnchorTag typeAnchor="footerAnchor" colorvariant="halfGray">{item}</AnchorTag></Link></AlignedList>);})
export default function Footer(){
    return(
        <>
        <FooterContainer>
            <div>
            <FindHead variant="body1">{FOOTERTEXT.label}</FindHead>
            <FooterText variant="subtitle1">{FOOTERTEXT.addressStart}<br />{FOOTERTEXT.addressEnd}</FooterText>
            </div>
            <div>
                <FooterHead variant="subtitle1">{NAVBAR[0].label}</FooterHead>
                <FooterService variant="subtitle1">{ServiceChild}</FooterService>
            </div>
            <div>
                <FooterHead variant="subtitle1"><ListTag><AnchorTag colorvariant="primary">{NAVBAR[1].label}</AnchorTag></ListTag></FooterHead>
                <FooterHead variant="subtitle1"><ListTag><AnchorTag colorvariant="primary">{NAVBAR[2].label}</AnchorTag></ListTag></FooterHead>
                <FooterHead variant="subtitle1"><ListTag><AnchorTag colorvariant="primary">{NAVBAR[3].label}</AnchorTag></ListTag></FooterHead>
            </div>
            <div>
                <FooterHead variant="subtitle1">{FOOTERTEXT.alertText}</FooterHead>
                <InputWithButton></InputWithButton>
            </div>
        </FooterContainer>
        </>
    );
}
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { AnchorTag,ListTag } from "../../styles/common/common.styles";
import { NAV } from "../../constant/constant";
import { bool } from 'prop-types';

const StyledMenu=styled.div<any>`
${(props:any) => props.theme.breakpoints.down('sm')} {
display:flex;
flex-direction:column;
justify-content:center;
background:${(props:any)=>props.theme.palette.light.main};
height:100vh;
text-align:left;
padding:2rem;
position:absolute;
top:0;
left:0;
transition:transform 0.3s ease-in-out;

a {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align:center;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${(props:any)=>props.theme.palette.secondary.main};
    text-decoration: none;
    transition: color 0.3s linear;
}}
`
const navItems = NAV.map((item: string, index: number) => (
    <ListTag key={index}>
      <Link href=" /">
        <AnchorTag>{item}</AnchorTag>
      </Link>
    </ListTag>));
    
export default function MenuBar({open, setOpen}:{open: boolean, setOpen:any}){
    return(
    <StyledMenu open={open} >
        {navItems}
    </StyledMenu>
    );
}

MenuBar.propTypes = {
    open: bool.isRequired,
  }

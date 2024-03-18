import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const DashMenuWrap=styled.div<any>`

${props => props.theme.breakpoints.down('sm')} 
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:30px;
    height:1.5rem;
    cursor:pointer;
    transition: all .5s ease-in-out;
    z-index:1000000000;
    flex-direction:column;
    
  
    
  div {
  width: 30px;
  height: 2px;
  background-color: "#ccc";
  border-radius: 10px;
  transform-origin: 1px;
  align-self:left;
  transition: all 0.3s linear;
  &:nth-child(2) {
    width:27px;

  }
}
`


export default function HamBurgerMenu({onToggle, open} : {onToggle: any, open: boolean}){
     
        return(
        <DashMenuWrap open={open} onClick={()=>onToggle(!open)}>
          <div />
          <div /> 
          <div />
        </DashMenuWrap>
    );
    
}

import React from "react";
import Styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = Styled(Button)<any>`
font-size:20px;
border:none;
min-width:${(props:any)=>{
  //  const isButtonTypeLarge = props.sizevariant;;
  //  if(isButtonTypeLarge=="large"){
  //  return("16.063rem")}
  //  else if(isButtonTypeLarge=="verySmall"){
  //    return("1rem")
  // }
  //  else{
  //    return("8.938rem")
  //  }
  return 'auto'
}};
border-radius:0;
height:100%;
width:100%;
padding:${(props:any)=>{
  const isButtonTypeLarge = props.sizevariant;
  if(isButtonTypeLarge=="large"){
  return("0.938rem 2rem")}
  else if(isButtonTypeLarge=="verySmall"){
    return("0rem 0.375rem")
  }
  else{
    return("0.25rem 1.5rem")
  }
}};
line-height:1rem;
background-color: ${(props:any)=>{
  const isButtonType = props.colorvariant;
  if(isButtonType=="primary"){
  return(props.theme.palette.primary.main)}
  else{
    return(props.theme.palette.tertiary.main)
  }
}};
color: ${(props)=>{
  const isButtonType = props.colorvariant;
  if(isButtonType=="primary"){
  return(props.theme.palette.tertiary.main)}
  else{
    return(props.theme.palette.primary.main)
  }
}};



margin:${(props)=>{
  const isIcon=props.isIcon;
  if(isIcon=="iconB"){
    return("0.15rem 0 0 0")
  }
  else{
    return("0 auto")
  }
}}
`
 


export default function ButtonCompo(props:any) {

  return (
    <>
      <StyledButton isView={props.isView} isIcon={props.isIcon} startIcon={props.startIcon} colorvariant={props.variantColor} sizevariant={props.variantSize} btext={props.text} >{props.text}</StyledButton>    
    </>
  );
}

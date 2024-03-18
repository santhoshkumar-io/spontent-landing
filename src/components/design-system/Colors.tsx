//Modules
import React from "react";

//Components
import { Box } from "@mui/material";
import styled from "@emotion/styled";

//Constants
import {COLORS} from "../../constant/designSystem"

interface ColorsProps {
    backgroundColor: string;
    borderColor: string;
  }
  
const Color = styled(Box)<any>`
height:5.125rem;
width:5.125rem;
background-color:${(props:any)=>props.theme.palette[props.bgColor].main};
border:1px solid ${(props:any)=>  props.theme.palette[props.borderColor].main};

`

const ColorPalette = styled.div<any>`
width:36.25rem;
display:flex;
justify-content: space-between;
align-items: space-between;
margin:2rem 0;`
export default function Colors(props:any){
   return( <ColorPalette>
    { COLORS.map((color:ColorsProps,index:number)=>(
        <Color key={index} bgColor={color.backgroundColor} borderColor={color.borderColor}></Color>
    ))}
    </ColorPalette>);


}
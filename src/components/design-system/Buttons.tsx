//Modules
import styled from "@emotion/styled";
import React from "react";
//Components
import ButtonCompo from "../common/Button"
//Constants
import {BUTTONS} from "../../constant/designSystem"

 
// interface ButtonsProps {
//     label: string;
//     textColor: string;
//     backgroundColor: string;
//   }

const ButtonsWrap = styled.div<any>`
display:flex;
justify-content:space-between;
height:2.5rem;
width:23.75rem;
`
const ButtonAlign=styled.div<any>`
margin-right:1.25rem;`
export default function Buttons(props:any){
    return(
        <>
        <ButtonsWrap>
            {BUTTONS.map((colors,index:number)=>(<ButtonAlign key={index}><ButtonCompo   variantsize={colors.size} variantcolor={colors.backgroundColor} text={colors.label}></ButtonCompo></ButtonAlign>))}
        </ButtonsWrap>
        </>
    );
}
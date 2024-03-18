import React from "react";
import { InputUnstyled  } from "@mui/material";
import { FOOTERTEXT } from "../../constant/footer";
import styled from "@emotion/styled";
import ArrowRight from "./ArrowRight";
import ButtonCompo from "./Button";

const InputContainer = styled.div<any>`
display:flex;
width:17.5rem;
height:2.5rem;
align-items:flex-start;
`
const InputBox=styled(InputUnstyled)<any>`
border:none;

& .MuiInput-input {
    width:15rem;
height:2.5rem !important;
}
`
const ButtonWrap=styled.div<any>`
height:2.5rem;
`
export default function InputWithButton(){

    return(
        <InputContainer>
        <InputBox placeholder={FOOTERTEXT.inputHolder} ></InputBox>
        <ButtonWrap><ButtonCompo isIcon={FOOTERTEXT.bType} variant="contained" variantColor={FOOTERTEXT.bColor} align-items="center" variantSize={FOOTERTEXT.bSize} aria-label="submit"  startIcon={<ArrowRight />}></ButtonCompo></ButtonWrap>
        </InputContainer>
    );

}
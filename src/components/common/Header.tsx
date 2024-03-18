//Modules
import * as React from "react";
import Styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
//Components
import { Container } from "../../styles/common/common.styles";
import Navigation from "./navBar";
import ButtonCompo from "./Button";
import { MOBILEVIEW } from "../../constant/mobileView";
import HamBurgerMenu from "./HamBurgerMenu";
import NavMenu from "../navMenu";
import { BUTTONTEXT, NAV } from "../../constant/constant";
import { AnchorTag, ListTag } from "../../styles/common/common.styles";
import Link from "next/link";
const HeaderView = Styled(Box)<any>`
background-color:${ props => props.theme.palette.primary.main};
height:6.25rem;
width:100vw;
position:fixed;
z-index:10000;
border-bottom:2px solid ${props=>props.theme.palette.halfGray.main};
${props => props.theme.breakpoints.down('sm')} {
  width:100%;
  position:fixed;
   
}

`;

const HeaderContainer = Styled(Container)<any>`
width: 100%;
height: 100%;
display:flex;
align-items:center;
justify-content:space-around;
margin:auto 0;
${props => props.theme.breakpoints.down('sm')} {
  max-width:inherit;
  margin:0;
}
`;

const Logo = Styled.img<any>`
    height:auto;
    width:11.2rem;
    margin-right: auto;
    margin: 0 ;
    z-index:10000;

`;

const ButtonWrap= Styled.div<any>`
display:none;
${props => props.theme.breakpoints.down('sm')} {
  display:block;
}
`
const UL = Styled.div<any>`
list-style:none;
display:flex;
flex-flow:row nowrap;
justify-content:space-around;
li{
  padding:18px 10px;
}
${props => props.theme.breakpoints.down('sm')} {
  transform:${({open})=>open? 'translateX(0)':'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  flex-flow:column nowrap;
  padding:100px 0 ;
  width:50%;
  text-align:center;
  right:0px;
  height:455px;
  display:flex;
  flex-direction:column;
  position:fixed;
  top:100px;
  justify-content:space-around;
  background-color: ${(props)=>props.theme.palette.secondary.main};
  z-index:100000;
  color:${(props)=>props.theme.palette.primary.main};
}
`

function RouteTag(props: any) {
  const routeChange = props.routerChange;
  console.log(routeChange);
  if (routeChange) {
    return <Navigation></Navigation>;
  } else {
    return <></>;
  }
}

export default function Header() {
  const router = useRouter();
  const isRouter = router.asPath == "/";
  console.log(isRouter);
  const [open, setOpen] = useState(false);

  const navItems = NAV.map((item: string, index: number) => (
    <ListTag key={index}>
      <Link href=" /">
        <AnchorTag>{item}</AnchorTag>
      </Link>
    </ListTag>));
  return (
    <HeaderView>
      <HeaderContainer>
        <Logo src="/images/Spontant.png" alt="Spontant Logo"></Logo>
        {/*<RouteTag routerChange={isRouter}></RouteTag>*/}
        <ButtonWrap>
          <ButtonCompo 
          isView={MOBILEVIEW.view} 
          isIcon={MOBILEVIEW.bType} 
          variantColor={MOBILEVIEW.bColor} 
          variantSize={MOBILEVIEW.bSize} 
          variant="contained" 
          text={
          <div>  
            <HamBurgerMenu onToggle={(event:any)=> setOpen(event)} open={open} />
             {/* <MenuBar open={open} setOpen={setOpen} /> */}
          </div>} />
          </ButtonWrap>
          <UL open={open}>      
         {navItems}
         </UL>
      </HeaderContainer>
    </HeaderView>
  );
}

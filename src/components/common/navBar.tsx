//Modules
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

//Components
import ButtonCompo from "./Button";
import { BUTTONTEXT } from "../../constant/constant";
import NavMenu from "../navMenu"
//Constant
import { NAV } from "../../constant/constant";
import { MenuItem } from "@mui/material";


const NavBar = styled.div<any>`
  display: flex;
`;
const MenuItems = styled(NavMenu)<any>`
display:flex;`
{/*const navItems = NAV.map((item: string, index: number) => (
  <ListTag key={index}>
    <Link href=" /">
      <AnchorTag>{item}</AnchorTag>
    </Link>
  </ListTag>
));*/}


export default function Navigation(props:any){

    return(
        <NavBar >
          

          <MenuItems></MenuItems>
          {/* {navItems} */}
          <ButtonCompo
            variantSize="tertiaryLarge"
            variantColor="tertiary"
            text={BUTTONTEXT.REACHUS}
          ></ButtonCompo>
        </NavBar>
    );
}
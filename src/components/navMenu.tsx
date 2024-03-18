import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Fade } from "@mui/material";
import { NAVBAR } from "../constant/constant";

import { AnchorTag,ListTag } from "../styles/common/common.styles"

export default function  NavMenu(){
    
    const [anchor, setAnchor] = React.useState<null |HTMLElement>(null);
    const open = Boolean (anchor);
    const handleClick = (event:React.MouseEvent<HTMLElement>)=>{
        setAnchor(event.currentTarget);
    };
    const handleClose=()=>{
        setAnchor(null);
    };

    const NavBar= NAVBAR.map((item,index:number)=>{
        const isMenu = item.child.length;
        if (isMenu>0){
            
        }
        return(<ListTag key={index}><Link  href=" /"><AnchorTag variantcolor={item.variantColor}>{item.label}</AnchorTag></Link></ListTag>);})
return(
    <>
    <Link href=" /">
        <AnchorTag id="service-link" onClick={handleClick}>{NavBar}</AnchorTag></Link>
           <Menu id="service-menu" anchorEl={anchor}
           open={open} onClose={handleClose}TransitionComponent={Fade}>
               <MenuItem onClick={handleClose}>UI / UX Design</MenuItem>
               <MenuItem onClick={handleClose}>Mobile App Development</MenuItem>
               <MenuItem onClick={handleClose}>Web App Development</MenuItem>
               <MenuItem onClick={handleClose}>Backend Development</MenuItem>
            </Menu>
            </>
);
}
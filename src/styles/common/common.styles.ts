import Styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Container = Styled(Box)`

${(props:any) => props.theme.breakpoints.down('sm')} {
    max-width: calc(100vw - 48px);
    min-width: calc(100vw - 48px);
    margin: 0 auto;
    height: 100%;
  }
  ${(props:any) => props.theme.breakpoints.up('sm')} {
    max-width: 1180px;
    min-width: 1180px;
    margin: 0 auto;
    height: 100%;
     
  }
`;
export const AnchorTag = Styled.a<any>`
    text-decoration: none;
    color:${(props:any)=>{
        const iscolorgray= props.colorvariant =="halfGray"
        const iscolorprimary= props.colorvariant=="primary"
        if (iscolorgray){
            return(props.theme.palette.halfGray.main)}
        else if(iscolorprimary){
            return(props.theme.palette.primary.main)
        }
    else{
        return(props.theme.palette.secondary.main)
    }}}
    ;
    ${props => props.theme.breakpoints.down('sm')} {
      color:${(props)=>props.theme.palette.primary.main};
    }
  `;
export const ListTag = Styled.li<any>`
    list-style: none;
    margin-right: 2rem;

  `;

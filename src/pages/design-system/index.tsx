// Modules
import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";


// Components
import Header from "../../components/common/Header";
import DesignSystemComponent from "../../components/design-system/DesignSystemComponent";
import Typographies from "../../components/design-system/Typographies";
import Colors from "../../components/design-system/Colors";
import Buttons from "../../components/design-system/Buttons";


// Styles
import { Container } from "../../styles/common/common.styles"

const PageTitle = styled(Typography)`
  color: ${(props: any) => props.theme.palette.tertiary.main};
  display: block;
  padding-top:6.25rem;
`
const DesignSystemContainer=styled.div<any>`
  padding-bottom: 15rem ;`
const Components = (props:any) => {
  return (
    <DesignSystemContainer>
      <Header />
      <Container >
        <PageTitle variant="h3">Design System</PageTitle>
        <DesignSystemComponent title="Typography" content={<Typographies />} />
        <DesignSystemComponent title="Colors" content={<Colors/>}/>
        <DesignSystemComponent title="Buttons" content={<Buttons/>}/>
      </Container>
    </DesignSystemContainer>
  );
};

export default Components;

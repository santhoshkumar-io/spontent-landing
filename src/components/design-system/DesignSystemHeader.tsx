// Modules
import React from "react";
import styled from "@emotion/styled";
import { Divider, Typography } from "@mui/material";

// Styles
import { Container } from "../../styles/common/common.styles";

const Title = styled(Typography)<any>`
  color: ${(props) => {
    return props.theme.palette.secondary.main;
  }};
`;

const StyledDivider = styled(Divider)`
  border-color: ${(props: any) => {
    return props.theme.palette.halfGray.main;
  }};
  margin-top: 0.5rem;
  border-bottom-width: 2px;
`;

const StyledContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export default function DesignSystemHeader(props: any) {
  return (
    <>
      <StyledContainer>
        <Title variant="h4">{props.title}</Title>
        <StyledDivider />
      </StyledContainer>
    </>
  );
}

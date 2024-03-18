// Modules
import React from "react";
import Styled from "@emotion/styled";
import { Typography } from "@mui/material";

// Common Styles
import { Container } from "../../styles/common/common.styles";

// Constants
import { TYPOGRAPHIES } from "../../constant/designSystem";

interface TypographyProps {
  marginTop: number;
  variant: any;
  lable: string;
}

const StyledTypography = Styled(Typography)`
color: ${(props: any) => props.theme.palette.secondary.main};
display: block;

`

export default function Typographies(props: any) {
  return (
    <>
      <Container>
        {TYPOGRAPHIES.map((typo: TypographyProps, index: number) => (
          <StyledTypography
            key={index}
            mt={typo.marginTop}
            variant={typo.variant}
          >
            {typo.lable}
          </StyledTypography>
        ))}
      </Container>
    </>
  );
}

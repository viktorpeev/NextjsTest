import styled from "styled-components";
import { Button, SectionContainer } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display:flex;
  margin-top:10px;
  border:1px solid #f4f4f4;
  border-radius:15px;
  background-color:#f4f4f4;
  width:60%;
  height:150px;
  margin-top:35px;
`;

export const StyledGetStartedBtn = styled((props) =><Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
  background-color:red;
`;

export const StyledTitle = styled((props) => <h1 {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <p {...props} />)`
  margin: 0;
  font-size:1.22rem;
  strong{
    font-weight:bold;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 53%;
  font-family: sans-serif;
  align-self: center;

  
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledSticker = styled((props) =><p {...props}  />)`
  position: absolute;
  margin-left: 24.2em;
  margin-top: 0em;
  color: red;
  transform: rotate(10deg);
  font-weight: bold;
  font-size:1.5em;
`;

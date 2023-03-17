import styled from "styled-components";

export const CardContainer = styled(({...props}) => <div {...props} />)`
  display:flex;
  margin-top:10px;
  border:1px solid #f4f4f4;
  border-radius:15px;
  background-color:#f4f4f4;
  min-width:360px;
  max-width:605px;
  height:150px;
  margin-top:35px;

  &:hover{
    h1{
      text-decoration:underline;
      color:blue
    }
    border-color:blue;
    cursor:pointer;
    transition:0.3s;
  }
`;

export const StyledTitle = styled((props) => <h1 {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <p {...props} />)`
  margin: 0;
  font-size:1.1rem;
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
  margin-top: -2em;
  color: red;
  transform: rotate(10deg);
  font-weight: bold;
  font-size:1.5em;
  width: 65vw;
  max-width: 710px;
  min-width: 400px;
  text-align: right;
  @media (min-width: 1024px) {
    display:none;
  }
`;


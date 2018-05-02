import styled from 'styled-components'
const StyledButton = (color) => styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 12rem;
  background: ${color};
  color: white;
  border: 2px solid black;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && styled.css`
    background: blue;
    color: palevioletred;
  `}
`
export default StyledButton
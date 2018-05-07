import styled from 'styled-components'
import glamorous from 'glamorous'
const StyledButton = glamorous.a({
  /* This renders the buttons above... Edit me! */
  display: "inline-block",
  borderRadius: "3px",
  padding: "0.5rem 0",
  margin: "0.5rem 1rem",
  width: "12rem",
  background: "blue",
  color: "white",
  border: "2px solid black",

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  // ${props => props.primary && styled.css`
  //   background: blue;
  //   color: palevioletred;
  // `}
},
   ({primary}) => ({
		backgroundColor: primary ? '#003A4B' : 'rgba(255, 255, 255, 0.5)',
		color: primary ? '#fff' : '#DA233C',
		':hover': {
			backgroundColor: primary ? 'rgba(255, 255, 255, 0.5)' : '#CC3A4B',
			color: primary ? '#DA233C' : '#fff',
		}   
}))
 

export default StyledButton
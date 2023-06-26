import { styled } from "@mui/material";
import { getMaxBreakPoint } from "../../../utils/StyledUtil";

export const Header=styled('div')`
background-color: #202020;
display: flex;
justify-content: center;
align-items: center;
width:100%;
height: 10vh;
color:white;
font-size: 1rem;
position: fixed;
z-index: 3;
`

export const SearchBox= styled('input')`
width:65%;
margin:3rem auto 1rem;
`; 


export const Body=styled('div')`
padding-top: 10vh;
display: flex;
width:100%;
height: auto;
color:white;
font-size: 1rem;
`
export const Aside=styled('div')`
background-color: #202020;
display: flex;
width:10%;
height: auto;
color:white;
font-size: 1rem;
`


export const Main= styled('div')`
width:100%;
color:black;
display: flex;
flex-direction: row;

@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
    flex-direction: column-reverse;
}
`;

export const List= styled('div')`
width:65%;
display: flex;
flex-direction: column;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'md')}) {

width:100%;

}
`;

export const Buttons= styled('div')`
width:100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin:0 auto;
& .button{
    margin: 10px
}
`;


export const Details= styled('div')`
width:30%;
aspect-ratio: 2/2;
display: flex;
flex-direction: column;
position: fixed;
right: 0;
font-size: 0.7em;
top:51%;
transform: translate(0, -50%);
justify-content: center;
align-items: center;
border:solid black 2px;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'md')}) {
  position: relative;
  background-color: white;
  transform: translate(0, 0);
  top:0;
  width:100%;
  aspect-ratio: 1/1;
  line-height: 1px;
}

`;

export const GridContainer= styled('div')`
gap: 10px;
display:grid;
grid-template-columns: repeat(3,1fr);
width: 90%;
margin: 30px auto;
font-size: 0.8em;

`

export const CardPK= styled('div')`
width: 70%;
margin:0 auto;
display: flex;
flex-direction: column;
text-align: center;
cursor: pointer;
border-radius: 30px;
box-shadow: rgba(0, 0, 0, 0.15) 3px 4px 4px;
//box-shadow: #452764 0px 5px 10px 0px;


& .image{
width: 50%;
margin: 0 auto;

}
`

export const Component= styled('div')`
display: flex;
width: 100px;
position: relative;
height: 105px;
flex-direction: column;
margin: 20px auto;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  
  width:60px;
  height: 65px;
};

& .white{
    width: 100%;
    aspect-ratio: 10/8;
    background-color:#fff;
    border-radius: 0 0 200px 200px;
    border:solid black 2px;
    
}
& .red{
    background-color:#ff0000 ;
    border-radius:200px 200px 0 0 ;
    width: 100%;
    aspect-ratio: 10/8;
    border:solid black 2px;
}
& .separator{
    background-color: black;
    border:solid black 3px;
    @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
      border:solid black 2px;
      z-index: 1;

};
}
& .ball{
    position: absolute;
    width:19%;
    aspect-ratio: 1/1;
    background-color:#fff;
    border:solid black 4px;
    border-radius: 100%;
top: 50%;
left:41%;
transform: translate(0, -50%);
z-index: 2;
:hover{
  cursor: pointer;
  background-color:#db1111;
}
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
      border:solid black 3px;
      top: 50%;
left:36%;

};
}
`
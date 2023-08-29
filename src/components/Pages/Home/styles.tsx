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
position: relative;
width:100px;
aspect-ratio: 1/1;
flex-direction: column;
margin: 20px auto;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  
  width:60px;
  
};

:hover{
  cursor: pointer;
  
}

`

export const TypePokemonDiv= styled('div')`
display: flex;
justify-content: center;
align-items: center;
font-weight:400;
color:white;

& #name{
padding:0.4em;
aspect-ratio: 8/1;
border-radius:20px;
margin-top: 0.5em;
text-align: center;
};

& .fire{
  background-color: #fd7d24;
}
& .water{
  background-color: #4592c4;
}
& .electric{
  background-color: #eed535;
  color:#212121;
}
& .grass{
  background-color: #9bcc50;
  color:#212121;
}
& .ground{
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  color:#212121;
}
& .bug{
  background-color: #729f3f;
}
& .poison{
  background-color: #b97fc9;
}
& .flying{
  color:#212121;
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}
& .fairy{
  background-color: #fdb9e9;
  color:#212121;
}
& .normal{
  color:#212121;

  background-color: #a4acaf;
  
}& .steel{
  background-color: #9eb7b8;
  color:#212121;
}& .rock{
  background-color: #a38c21;
}& .ghost{
  background-color: #7b62a3;
}
& .psychic{
  background-color: #f366b9;
}
& .ice{
  background-color: #51c4e7;
  color:#212121;
}
& .fighting{
  background-color: #d56723;
}
& .dark{
  background-color: #707070;
}
`

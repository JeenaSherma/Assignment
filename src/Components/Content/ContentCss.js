import styled from 'styled-components';
import { Icon } from '@iconify/react'; 

export const Wholediv = styled.div`
display: flex;
justify-content: space-between;
margin:0.6rem 2rem 0rem 2rem;
`;
export const Leftcontent = styled.div`

width:71%;
`;
export const Topleft = styled.div`
display: flex;
justify-content: space-between;
background:rgb(207,129,129);
padding-top:2rem;
padding-bottom:2rem;
height:18rem;
@media screen and (max-width: 800px) {
    flex-direction:column;
    height:25rem;
    background:none;
    padding-top:0rem;

    img{
        padding:0.5rem;
        height:12rem;
        width:12rem;
    }
  }


`;
export const Downleft = styled.div`
margin-top:2rem;
height:10rem;
.pic5{
  height:13.6rem;
  width:65rem;
  object-fit: cover;
  @media screen and (max-width: 800px) {
    height:12rem;
    
    width:35rem;
    margin-top:10rem;
    
    
   } 
}
@media screen and (max-width: 800px) {
   height:5rem;
   
  }
`;
export const Rightcontent = styled.div`
width:28%;
margin-left:2rem;


`;
export const Topright = styled.div`
background:rgb(207,129,129);
font-size:3rem;
color:white;
.details{
    padding:1.2rem;
    
}
span{
    margin-left:1rem;
}
@media screen and (max-width: 800px) {
    font-size:1rem;
    margin-top:1rem;
    
    
  }
`;
export const Bottomright = styled.div`
background:rgb(206,185,185);
height:2rem;
color:white;
text-align: center;
padding-top:0.5rem;
margin-top:3rem;
@media screen and (max-width: 800px) {
    display:none;
    
  }


`;

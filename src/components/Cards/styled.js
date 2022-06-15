 import styled from '@emotion/styled';

export const CardWrapper = styled('div')(({ theme }) => ({
  display:'flex',
  flexDirection:'column',
  borderRadius:'10px',
  border: '1px solid #E8E9EF',
  backgroundColor:'#E8E9EF',
  width: '250px',
  position:'relative',
  overflow:'hidden',
  cursor: 'pointer',
  margin:'10px',
  height:'470px'
  }));

export const ImgWrapper = styled('div')(({ theme }) => ({
  flex:'2',
  width:'100%',
  minHeight:'40px',
  borderRadius: '10px 10px 0px 0px',
  overflow: 'hidden',
}));    
export const CardAction= styled('div')(({ theme }) => ({
  flex:'1',
  width:'100%',
  minHeight:'40px',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  display:'flex',
  flexDirection:'column'
   }));    
export const CardImage =styled.img`
width: 100%;
object-fit: cover;
height: 100%;
`   
export const CardTitle=styled.div`
font-weight: 700;
color: #2f3c55;
font-size: 18px;
padding: 10px;
font-weight:600;
flex:1;
`;
export const CardItems=styled.div`
padding: 0px 0px 0px 10px;
flex:1;
`;
export const CardInfo=styled.div`
 display:flex;
 flexDirection:row;
 margin:5px;
`;
export const CardButton=styled.div`
 flex:1;
 margin:5px;
`
export const CardDate=styled.div`
flex:1
font-weight: 300;
color: #2f3c55;
font-size: 14px;
padding:10px;
`;
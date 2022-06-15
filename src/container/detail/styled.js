import styled from '@emotion/styled';

export const DetailWrapper = styled('div')(({ theme }) => ({
    width:'100%',
    padding:'25px',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
}));

export const PosterWrapper = styled('div')(({ theme }) => ({
   flex:'1',
   margin:'10px',
   borderRadius:'10px'
}));

export const DetailInfo = styled('div')(({ theme }) => ({
   flex:'3',
   backgroundColor:'#2F3C55',
   margin:'10px',
   borderRadius:'10px',
}));

export const CardImage =styled.img`
width: 100%;
object-fit: cover;
height: 100%;
border-radius: 10px;
`   
export const CardTitle=styled.div`
font-weight: 700;
color: white;
font-size: 18px;
padding: 10px;
font-weight:600;
flex:1;
margin:20px;
`;

export const RatingInfo=styled.div`
margin-left:30px;
`;
export const Description=styled.div`
margin-left:30px;
color: white;
display: flex;
flex-direction: row;
margin:25px;
`;
export const Genres=styled.div`
color:white;
flex:1,
`
export const CarouselWrapper =styled.div`
width: 1200px;
margin: 20px;
`
export const BackButton = styled.button`
margin-left: 90%;
color: white;
margin-top: 10px;
`;
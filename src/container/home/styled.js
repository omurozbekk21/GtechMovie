import styled from '@emotion/styled';

export const SearchWrapper = styled('div')(({ theme }) => ({
    border: '1px solid #E8E9EF',
    backgroundColor:'#E8E9EF',
    borderRadius:'10px',
    width:'100%',
    padding:'20px',
    margin:'25px',
    display:'flex',
    flexDirection:'row',
    }));

export const TextClasses = styled.div`
 flex:1;
 margin:5px;
 & .MuiOutlinedInput-notchedOutline {
    border-color: #121858;
 }
 & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #121858;
 }
`;

export const SideSearch = styled('div')`
flex:1;
margin:5px;
& .MuiOutlinedInput-notchedOutline {
  border-color: #121858;
}
& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: #121858;
}
`;



export const PageName = styled('div')(({ theme }) => ({
   color:'white',
   fontSize:'20px',
   fontWeight:'700',
   marginLeft: '30px',
}));

export const Loading = styled.div`
position: relative;
margin-left: 50%;
`;

export const InfiniteScrollWrapper=styled.div`
height: auto;
overflow: visible;
flex-direction: row;
display: flex;
flex-wrap: wrap;
margin: 70px;
`;
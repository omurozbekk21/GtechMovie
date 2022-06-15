import styled from '@emotion/styled';

export const SearchWrapper = styled('div')(({ theme }) => ({
    border: '1px solid #E8E9EF',
    backgroundColor:'#E8E9EF',
    borderRadius:'10px',
    width:'100%',
    padding:'20px',
    margin:'25px'
    }));

export const TextClasses = styled.div`
 width:100%;
 & .MuiOutlinedInput-notchedOutline {
    border-color: #121858;
 }
 & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #121858;
 }
`;
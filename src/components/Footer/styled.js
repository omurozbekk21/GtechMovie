import { styled } from '@mui/material/styles';


export const FooterWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign:'center',
    justifyContent:'center',
    padding: theme.spacing(0, 1),
    backgroundColor:'#2E3B55',
    color:'#fff',
    position: 'relative',
    height: 'auto',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginTop:'10px',
    marginBottom: '0px',
    flexDirection:'column',
    width:'100%',
    minWidth: '1500px'
  }));


  export const FooterGtechWrapper = styled('img')(({ theme }) => ({
    flex:'1',
    padding:theme.spacing(1),
    width:'180px',
    height:'20px'

}));
   export const IconsWrapper = styled('div')(({ theme }) => ({
    flex:'1',
    display:'flex',
    flexDirection:'row',
    

}));
export const Icons = styled('img')(({ theme }) => ({
   flex:1,
   width:'100%',
   height:'40px',
   padding:theme.spacing(1),
   borderRadius:'10px',
}));
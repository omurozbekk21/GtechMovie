import React from 'react';
import GTECHLogo from '../../assets/GTech_Logo_Gri.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Facebook from '../../assets/facebook.png';
import Linkedin from '../../assets/linkedin.png';
import {FooterWrapper,FooterGtechWrapper,IconsWrapper,Icons} from './styled';
const Footer =()=>{

return(
    <FooterWrapper>
       <FooterGtechWrapper src={GTECHLogo}  alt="GTECH"/>
       <IconsWrapper>
       <a href="https://www.facebook.com/GTechTR/" target='_blank' rel="noreferrer">
       <Icons src={Facebook} />
       </a>
       <a href="https://twitter.com/GTechTR" target='_blank' rel="noreferrer">
       <Icons src={Twitter} />
       </a>
       <a href="https://www.youtube.com/channel/UCvZf3Imch3pLnJ2nC1Rv79A" target='_blank' rel="noreferrer">
       <Icons src={Youtube} />
       </a>
       <a href=" https://www.linkedin.com/company/gtechtr/" target='_blank'>
       <Icons src={Linkedin} />
       </a>
       </IconsWrapper>
    </FooterWrapper>
)
}
export default Footer;
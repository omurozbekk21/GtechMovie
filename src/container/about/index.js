import React from 'react'
import { useTranslation } from 'react-i18next';

const About=()=>{
    const {t} =useTranslation();
    return(
        <div>
            About sayfasında {t('greeting')}
        </div>
    )
}

export default About
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEn from './locales/en/translationEN.json';
import translationTr from './locales/en/translationTR.json';

//the translations

const resources={
    en:{
        translation:translationEn
    },
    tr:{
        translation:translationTr
    }
};

i18n.use(initReactI18next)
.init({
    resources,
    lng:'en',
    keySeparator:false,
    interpolation:{
        escapeValue:false
    }
})


  export default i18n;
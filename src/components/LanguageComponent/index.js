import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {LanguageWrapper} from './styled';
import { useTranslation } from 'react-i18next';



export default function PositionedMenu() {
    const {i18n} =useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeLanguage = (lng)=>{
    i18n.changeLanguage(lng)
    localStorage.setItem('lng',lng)
    handleClose();
    window.location.reload()
  }

  return (
    <LanguageWrapper>
  <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="warning"
      >
       {i18n.language}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => changeLanguage('en')}>EN</MenuItem>
        <MenuItem onClick={() => changeLanguage('tr')}>TR</MenuItem>
      </Menu>
    </LanguageWrapper>
  );
}
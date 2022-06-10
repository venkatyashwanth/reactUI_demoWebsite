import { AppBar, Box, Input, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, {useState} from 'react'
import { flexbox } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,

}))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Kitten Dev
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }}
            src="https://scontent.fvga1-2.fna.fbcdn.net/v/t31.18172-8/10847339_695775250520382_6478741415737965280_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_BcTayI7Jy8AX-bPkxg&_nc_ht=scontent.fvga1-2.fna&oh=00_AT9RN6vWTMxsfhw4AmqyUhra_t8ewEjEg4D4gf3XAZN94g&oe=62C77BA6" 
            onClick = {e => setOpen(true)}
            />
        </Icons>
        <UserBox onClick = {e => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }}
            src="https://scontent.fvga1-2.fna.fbcdn.net/v/t31.18172-8/10847339_695775250520382_6478741415737965280_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_BcTayI7Jy8AX-bPkxg&_nc_ht=scontent.fvga1-2.fna&oh=00_AT9RN6vWTMxsfhw4AmqyUhra_t8ewEjEg4D4gf3XAZN94g&oe=62C77BA6" 
            />
          <Typography variant='span'>Venkat</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
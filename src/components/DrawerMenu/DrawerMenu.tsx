import React from 'react';
import { styled, useTheme } from '@mui/material/styles';

import { Stack, Drawer, List, Divider, IconButton } from '@mui/material';
import ListMenu from './ListMenu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import LogoutIcon from '@mui/icons-material/Logout';
import NAVIGATION from 'routes/navigation';
import { useNavigate } from 'react-router-dom';
import { removeItemLocal, searchItemLocal } from 'utils/helpers';
import { localToken } from 'constants/index';

const MENU = [
  {
    name: 'dashboard',
    path: '/dashboard'
  },
  {
    name: 'usuarios',
    path: '/dashboard/usuarios'
  },
];

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

const DrawerMenu: React.FC<DrawerMenuProps> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const logOut = () => {
    removeItemLocal(localToken);
    navigate(NAVIGATION.LOGIN);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant="persistent"
      anchor="left"
      open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr'
            ? <ChevronLeftIcon />
            : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ flexGrow: '1' }}>
        <ListMenu />;
      </List>
      <Divider />
      <Stack direction={'row'} justifyContent="space-around">
        <IconButton
          onClick={() => logOut()}
          aria-label="cerrar sesion"
          color="primary">
          <LogoutIcon />
        </IconButton>
      </Stack>
    </Drawer>
  );
};

type DrawerMenuProps = {
  open: boolean;
  handleDrawerClose: React.MouseEventHandler<HTMLButtonElement>;
};

export default DrawerMenu;

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CallMissedIcon from '@mui/icons-material/CallMissed'; 
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

//icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CottageIcon from '@mui/icons-material/Cottage';


const drawerWidth = 240;
const navItems = ['Hemsida', 'Om','Logga_in','Skapa_konto'];

const iconsMap = {
  Hemsida: <CottageIcon fontSize='small' />,
  Om: <SpaceDashboardIcon fontSize='small' />,
  Logga_in: <CallMissedIcon fontSize='small'/>,
  Skapa_konto: <CallMissedIcon fontSize='small'/>,
};

function DrawerAppBar(props) {
  const { window, toggleMode, mode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: theme.palette.background.default, height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, color: theme.palette.text.primary }}>
        Investera i Sverige
      </Typography>
      <IconButton color="inherit" onClick={toggleMode} sx={{ mb: 2 }}>
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      <Divider />
      <List>
        {navItems.map((item) => {
          const href = `/${item.toLowerCase()}`;
          const isActive = location.pathname === href;

          return (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component={Link}
  to={href}
                sx={{
                    gap:2,
                  bgcolor: isActive ? theme.palette.action.selected : 'transparent',
                  color: isActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
                  '&:hover': {
                    bgcolor: theme.palette.action.hover,
                  },
                }}
              >
                {iconsMap[item]}
                <ListItemText primary={item} sx={{ ml: 1 }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed" sx={{ bgcolor: theme.palette.background.paper, color: theme.palette.text.primary }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <CallMissedIcon fontSize="large" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Investera i Sverige
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => {
              const href = `/${item.toLowerCase()}`;
              const isActive = location.pathname === href;

              return (
                <Button
                  component={Link}
  to={href}
                  key={item}
                  sx={{
                     gap:1,
                    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                    bgcolor: isActive ? theme.palette.action.selected : 'transparent',
                    '&:hover': {
                      bgcolor: theme.palette.action.hover,
                    },
                    ml: 1,
                  }}
                >
                  {iconsMap[item]}
                  {item}
                </Button>
              );
            })}
            <IconButton color="inherit" onClick={toggleMode} sx={{ ml: 2 }}>
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
        {/* <Toolbar /> */}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default DrawerAppBar;

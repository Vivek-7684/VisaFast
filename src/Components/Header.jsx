import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState, useReducer } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { menus } from '../Static/Menu';

// Reducer for menu state

const initialState = { anchorEl: null, menuKey: "" };// set menu empty

function submenuSet(state, action) {   // open and close submenu  
    switch (action.type) {
        case "OPEN_MENU":
            return { anchorEl: action.anchorEl, menuKey: action.menuKey };
        case "CLOSE_MENU":
            return { anchorEl: null, menuKey: "" };
        default:
            return state;// fallback
    }
}

const Header = () => {
    const theme = useTheme();

    const [activePage, setActivePage] = useState("Home"); // check selected menu

    const [subMenu, dispatch] = useReducer(submenuSet, initialState); // state track for menu and sub menu

    const [mobileOpen, setMobileOpen] = useState(false); // check menu open or not 

    return (
        <>
            {/* Top Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 2,
                    bgcolor: theme.pallete?.main || "#06BBCC",
                    color: "white",
                    fontSize: { xs: "0.75rem", sm: "0.9rem" },
                    position: "sticky",
                    top: 0,
                    p: 0.6,
                    pl: 3
                }}
            >
                <Box sx={{ display: "flex", gap: 1 }}>
                    <LocalPhoneOutlinedIcon />
                    <Typography sx={{ fontFamily: theme.typography?.p?.fontFamily || "Arial" }}>
                        +91 947657444
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <EmailOutlinedIcon />
                    <Typography sx={{ fontFamily: theme.typography?.p?.fontFamily || "Arial", textDecoration: "underline" }}>
                        visafast@gmail.com
                    </Typography>
                </Box>
                <Box sx={{ ml: "auto" }} pr={6}>
                    <Typography sx={{ fontSize: "0.9rem", fontFamily: theme.typography?.p?.fontFamily || "Arial" }}>
                        US visa: Big blow for Indians as new rules end third country appointments.
                    </Typography>
                </Box>
            </Box>

            {/* Header Section */}
            <AppBar position="sticky" sx={{ mt: 1.4, bgcolor: "white", pt: 0.8, mb: 1.4 }} elevation={0}>
                <Toolbar sx={{ display: "flex" }}>
                    {/* Logo */}
                    <Box
                        component="img"
                        src={'./header-logo6 1.png'}
                        width={200}
                        height="auto"
                        sx={{ position: "absolute", top: 0, left: 0, p: 1 }}
                    />

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 9, ml: 25 }}>
                        {/* set menu and sub menu */}
                        {menus.map(menu => (
                            <Box key={menu.key}>
                                <Button
                                    // change color if menu button if menu or submenu selected
                                    sx={{
                                        color: activePage === menu.key || menu.subMenu?.some(sm => sm.key === activePage) ? "#50C878" : "black",
                                        textTransform: "none"
                                    }}
                                    // if submenu exist then open else set menu 
                                    onClick={menu.subMenu ? (e) => dispatch({ type: "OPEN_MENU", anchorEl: e.currentTarget, menuKey: menu.key }) : () => setActivePage(menu.key)}
                                >
                                    <Typography sx={{ fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}>
                                        {menu.label}
                                    </Typography>
                                </Button>

                                {menu.subMenu && (
                                    <Menu
                                        anchorEl={subMenu.anchorEl} // check selected menu button and set submenu
                                        open={subMenu.menuKey === menu.key}
                                        onClose={() => dispatch({ type: "CLOSE_MENU" })}
                                    >
                                        {menu.subMenu.map(sub => (
                                            <MenuItem
                                                key={sub.key}
                                                sx={{ color: activePage === sub.key ? "#50C878" : "black", fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}
                                                // store sub key menu  in store
                                                onClick={() => { setActivePage(sub.key); dispatch({ type: "CLOSE_MENU" }); }}
                                            >
                                                {sub.label}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                )}
                            </Box>
                        ))}
                    </Box>

                    {/* mobile menu Icon*/}
                    <IconButton sx={{
                        display: { xs: 'block', md: 'none' },
                        position: 'absolute',
                        top: 0,
                        right: 20,
                        pt: 3
                    }}
                        onClick={() => { setMobileOpen(true) }}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>

                    {/* Mobile View Menu */}
                    <Drawer
                        anchor="right"
                        open={mobileOpen}
                        onClose={() => { setMobileOpen(false); }}
                        variant="temporary"
                    // width={200}
                    >
                        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 1, ml: 25, maxWidth: "180px" }} >
                            <CloseIcon
                                onClick={() => { setMobileOpen(false); }}
                                sx={{
                                    position: 'absolute',
                                    left: 10,
                                    top: 10
                                }} />
                            {/* set menu and sub menu */}
                            {menus.map(menu => (
                                <Box key={menu.key}>
                                    <Button
                                        // change color if menu button if menu or submenu selected
                                        sx={{
                                            color: activePage === menu.key || menu.subMenu?.some(sm => sm.key === activePage) ? "#50C878" : "black",
                                            textTransform: "none"
                                        }}
                                        // if submenu exist then open else set menu 
                                        onClick={menu.subMenu ? (e) => dispatch({ type: "OPEN_MENU", anchorEl: e.currentTarget, menuKey: menu.key }) : () => setActivePage(menu.key)}
                                    >
                                        <Typography sx={{ fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}>
                                            {menu.label}
                                        </Typography>
                                    </Button>

                                    {menu.subMenu && (
                                        <Menu
                                            anchorEl={subMenu.anchorEl} // check selected menu button and set submenu
                                            open={subMenu.menuKey === menu.key}
                                            onClose={() => dispatch({ type: "CLOSE_MENU" })}
                                        >
                                            {menu.subMenu.map(sub => (
                                                <MenuItem
                                                    key={sub.key}
                                                    sx={{ color: activePage === sub.key ? "#50C878" : "black", fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}
                                                    // store sub key menu  in store
                                                    onClick={() => { setActivePage(sub.key); dispatch({ type: "CLOSE_MENU" }); }}
                                                >
                                                    {sub.label}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Drawer>


                </Toolbar>
            </AppBar >
        </>
    );
};

export default Header;

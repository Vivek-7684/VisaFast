import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import {  useState } from 'react';

const Header = () => {
    // state for menus
    const [anchorElVisa, setAnchorElVisa] = useState(null);
    const [anchorElPricing, setAnchorElPricing] = useState(null);
    const [anchorElLeads, setAnchorElLeads] = useState(null);

    // check Selected Page
    const [activePage, setActivePage] = useState("Home");

    // open handlers
    const handleOpenVisa = (event) => setAnchorElVisa(event.currentTarget);
    const handleOpenPricing = (event) => setAnchorElPricing(event.currentTarget);
    const handleOpenLeads = (event) => setAnchorElLeads(event.currentTarget);

    // close handlers
    const handleCloseVisa = () => setAnchorElVisa(null);
    const handleClosePricing = () => setAnchorElPricing(null);
    const handleCloseLeads = () => setAnchorElLeads(null);

    return (
        <>
            {/* top section */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    bgcolor: "#06BBCC",
                    color: "white",
                    fontSize: "0.9rem",
                    position: "sticky"
                }}
                p={0.6}
                pl={3}>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <LocalPhoneOutlinedIcon /><span>+91 947657444</span>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <EmailOutlinedIcon /><span style={{ textDecoration: "underline" }}>visafast@gmail.com</span>
                </Box>
                <Box sx={{ justifyItems: 'flex-end', ml: "auto", }} pr={6}>
                    <Typography
                        sx={{
                            fontSize: "0.8rem",

                        }}>
                        US visa: Big blow for Indians as new rules end third country appointments.
                    </Typography>
                </Box>
            </Box>

            {/* Header Section */}
            <AppBar
                position="sticky"
                sx={{
                    mt: "2",
                    bgcolor: "white",
                    pt:2
                }}
                elevation={0}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                    }}
                >

                    {/* logo */}
                    <Box sx={{
                        display: "flex",
                        position: "absolute",
                        top: "0",
                        left: "0",
                    }}
                        component="img"
                        src={'./header-logo6 1.png'}
                        width={200}
                        height={'auto'}
                        p={1}>
                        {/* <Typography sx={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "1.3rem",

                        }}
                            component="span">Visa</Typography>
                        <Typography sx={{
                            color: "#06BBCC",
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                        }}
                            component="span">Fast</Typography> */}

                    </Box>

                    {/* Menu Button (Right Side) */}
                    <Box sx={{ display: "flex", gap: 10 }} ml={25} pr={15} >
                        {/* Home */}
                        <Button
                            sx={{ color: activePage === "Home" ? "#50C878" : "black" }}
                            onClick={() => setActivePage("Home")}
                        >
                            <Typography component="p" sx={{ m: 0 }}>
                                Home
                            </Typography>
                        </Button>

                        {/* About Us */}
                        <Button
                            sx={{ color: activePage === "About" ? "#50C878" : "black" }}
                            onClick={() => setActivePage("About")}
                        >
                            <Typography component="p" sx={{ m: 0 }}>
                                About Us
                            </Typography>
                        </Button>

                        {/* Visa */}
                        <Button
                            sx={{
                                color:
                                    anchorElVisa || activePage === "Student Visa" || activePage === "Business Visa"
                                        ? "#50C878"
                                        : "black",
                            }}
                            onClick={handleOpenVisa}
                            component="p"
                        >
                            Visa
                        </Button>
                        <Menu
                            anchorEl={anchorElVisa}
                            open={Boolean(anchorElVisa)}
                            onClose={handleCloseVisa}
                        >
                            <MenuItem
                                sx={{ color: activePage === "Student Visa" ? "#50C878" : "black" }}
                                onClick={() => {
                                    setActivePage("Student Visa");
                                    handleCloseVisa();
                                }}
                                component="p"
                            >
                                Student Visas
                            </MenuItem>
                            <MenuItem
                                sx={{ color: activePage === "Business Visa" ? "#50C878" : "black" }}
                                onClick={() => {
                                    setActivePage("Business Visa");
                                    handleCloseVisa();
                                }}
                                component="p"
                            >
                                Business Visas
                            </MenuItem>
                        </Menu>

                        {/* Pricing */}
                        <Button
                            sx={{
                                color:
                                    anchorElPricing || activePage === "Student Pricing" || activePage === "Business Pricing"
                                        ? "#50C878"
                                        : "black",
                            }}
                            onClick={handleOpenPricing}
                            component="p"
                        >
                            Pricing
                        </Button>
                        <Menu
                            anchorEl={anchorElPricing}
                            open={Boolean(anchorElPricing)}
                            onClose={handleClosePricing}
                        >
                            <MenuItem
                                sx={{ color: activePage === "Student Pricing" ? "#50C878" : "black" }}
                                onClick={() => {
                                    setActivePage("Student Pricing");
                                    handleClosePricing();
                                }}
                                component="p"
                            >
                                Student Visa Pricing
                            </MenuItem>
                            <MenuItem
                                sx={{ color: activePage === "Business Pricing" ? "#50C878" : "black" }}
                                onClick={() => {
                                    setActivePage("Business Pricing");
                                    handleClosePricing();
                                }}
                                component="p"
                            >
                                Business Visa Pricing
                            </MenuItem>
                        </Menu>

                        {/* Case Studies */}
                        <Button
                            sx={{ color: activePage === "Case Studies" ? "#50C878" : "black" }}
                            onClick={() => setActivePage("Case Studies")}
                            component="p"
                        >
                            Case Studies
                        </Button>

                        {/* Leads */}
                        <Button
                            sx={{
                                color:
                                    anchorElLeads || activePage === "Student Leads" || activePage === "Business Leads"
                                        ? "#50C878"
                                        : "black",
                            }}
                            component="p"
                            onClick={handleOpenLeads}
                        >
                            Leads
                        </Button>
                        <Menu
                            anchorEl={anchorElLeads}
                            open={Boolean(anchorElLeads)}
                            onClose={handleCloseLeads}
                        >
                            <MenuItem
                                sx={{ color: activePage === "Student Leads" ? "#50C878" : "black" }}
                                onClick={() => {
                                    setActivePage("Student Leads");
                                    handleCloseLeads();
                                }}
                            >
                                Student Eligibility
                            </MenuItem>
                            <MenuItem
                                sx={{ color: activePage === "Business Leads" ? "#50C878" : "black" }}
                                onClick={() => {
                                    setActivePage("Business Leads");
                                    handleCloseLeads();
                                }}
                            >
                                Business Eligibility
                            </MenuItem>
                        </Menu>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
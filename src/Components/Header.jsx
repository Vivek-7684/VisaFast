import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const Header = () => {
    const theme = useTheme();

    const [anchorElVisa, setAnchorElVisa] = useState(null);
    const [anchorElPricing, setAnchorElPricing] = useState(null);
    const [anchorElLeads, setAnchorElLeads] = useState(null);
    const [activePage, setActivePage] = useState("Home");

    const handleOpenVisa = (event) => setAnchorElVisa(event.currentTarget);
    const handleOpenPricing = (event) => setAnchorElPricing(event.currentTarget);
    const handleOpenLeads = (event) => setAnchorElLeads(event.currentTarget);

    const handleCloseVisa = () => setAnchorElVisa(null);
    const handleClosePricing = () => setAnchorElPricing(null);
    const handleCloseLeads = () => setAnchorElLeads(null);

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
            <AppBar position="sticky" sx={{ mt: 2, bgcolor: "white", pt: 0.8 }} elevation={0}>
                <Toolbar sx={{ display: "flex" }}>
                    {/* Logo */}
                    <Box
                        component="img"
                        src={'./header-logo6 1.png'}
                        width={200}
                        height="auto"
                        sx={{ position: "absolute", top: 0, left: 0, p: 1 }}
                    />

                    {/* Menu Buttons */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 9, ml: 25, pr: 15, fontFamily: theme.typography.p.fontFamily }}>
                        {/* Home */}
                        <Button
                            sx={{ color: activePage === "Home" ? "#50C878" : "black", textTransform: "none" }}
                            onClick={() => setActivePage("Home")}
                        >
                            <Typography component="p" sx={{ fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}>
                                Home
                            </Typography>
                        </Button>

                        {/* About Us */}
                        <Button
                            sx={{ color: activePage === "About" ? "#50C878" : "black", textTransform: "none" }}
                            onClick={() => setActivePage("About")}
                        >
                            <Typography component="p" sx={{ fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}>
                                About Us
                            </Typography>
                        </Button>

                        {/* Visa */}
                        <Button
                            sx={{ color: anchorElVisa || activePage === "Student Visa" || activePage === "Business Visa" ? "#50C878" : "black", textTransform: "none" }}
                            onClick={handleOpenVisa}
                        >
                            <Typography component="p" sx={{ fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}>
                                Visa
                            </Typography>
                        </Button>
                        <Menu component="p" anchorEl={anchorElVisa} open={Boolean(anchorElVisa)} onClose={handleCloseVisa}>
                            <MenuItem sx={{
                                color: activePage === "Student Visa" ? "#50C878" : "black", fontWeight: 600,
                                fontSize: "1.2rem", textTransform: "none"
                            }}
                                onClick={() => { setActivePage("Student Visa"); handleCloseVisa(); }}>
                                Student Visas
                            </MenuItem>
                            <MenuItem sx={{
                                color: activePage === "Business Visa" ? "#50C878" : "black", fontWeight: 600,
                                fontSize: "1.2rem", textTransform: "none"
                            }}
                                onClick={() => { setActivePage("Business Visa"); handleCloseVisa(); }}>
                                Business Visas
                            </MenuItem>
                        </Menu>

                        {/* Pricing */}
                        <Button
                            sx={{
                                color: anchorElPricing || activePage === "Student Pricing" || activePage === "Business Pricing" ? "#50C878" : "black",
                                fontWeight: 600, fontSize: "1.2rem", textTransform: "none"
                            }}
                            onClick={handleOpenPricing}
                        >
                            <Typography component="p" sx={{ fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}>
                                Pricing
                            </Typography>
                        </Button>
                        <Menu
                            anchorEl={anchorElPricing}
                            open={Boolean(anchorElPricing)}
                            onClose={handleClosePricing}
                        >
                            <MenuItem sx={{ color: activePage === "Student Pricing" ? "#50C878" : "black", textTransform: "none", fontWeight: 600, fontSize: "1.2rem" }}
                                onClick={() => { setActivePage("Student Pricing"); handleClosePricing(); }}>
                                Student Visa Pricing
                            </MenuItem>
                            <MenuItem sx={{ color: activePage === "Business Pricing" ? "#50C878" : "black", textTransform: "none", fontWeight: 600, fontSize: "1.2rem" }}
                                onClick={() => { setActivePage("Business Pricing"); handleClosePricing(); }}>
                                Business Visa Pricing
                            </MenuItem>
                        </Menu>

                        {/* Case Studies */}
                        <Button
                            sx={{ color: activePage === "Case Studies" ? "#50C878" : "black", textTransform: "none" }}
                            onClick={() => setActivePage("Case Studies")}
                        >
                            <Typography component="p" sx={{ fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}>
                                Case Studies
                            </Typography>
                        </Button>

                        {/* Leads */}
                        <Button
                            sx={{ color: anchorElLeads || activePage === "Student Leads" || activePage === "Business Leads" ? "#50C878" : "black", textTransform: "none" }}
                            onClick={handleOpenLeads}
                        >
                            <Typography component="p" sx={{ fontWeight: 600, fontSize: "1.2rem", textTransform: "none" }}>
                                Leads
                            </Typography>
                        </Button>
                        <Menu anchorEl={anchorElLeads} open={Boolean(anchorElLeads)} onClose={handleCloseLeads}>
                            <MenuItem sx={{
                                color: activePage === "Student Leads" ? "#50C878" : "black",
                                fontWeight: 600,
                                fontSize: "1.2rem",
                                textTransform: "none"
                            }}
                                onClick={() => { setActivePage("Student Leads"); handleCloseLeads(); }}>
                                Student Eligibility
                            </MenuItem>
                            <MenuItem sx={{
                                color: activePage === "Business Leads" ? "#50C878" : "black",
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: "1.2rem"
                            }}
                                onClick={() => { setActivePage("Business Leads"); handleCloseLeads(); }}>
                                Business Eligibility
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;

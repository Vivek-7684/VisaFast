import { AppBar, Toolbar, Typography, Menu, MenuItem, TextField, FormControl, Select, InputLabel, ToggleButtonGroup, ToggleButton, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from '@mui/material/styles';
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Balance } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const Home = () => {

    // Access Theme
    const theme = useTheme();

    // Selected Eligibility Button 
    const [selected, setSelected] = useState("Student");

    const handleClick = (event, newValue) => {
        setSelected(newValue);
    }

    console.log(selected);

    const countries = ["USA", "Canada", "UK", "Australia", "Germany", "Schengen", "Singapore", "UAE"];

    return (
        <>
            {/* Image Section */}
            <Box
                sx={{
                    position: "relative",
                    top: 0,
                    // mt: 10,
                    left: 0,
                    height: { xs: "400px", md: "600px" },
                    width: "auto",
                    padding: "5rem",
                    display: "flex",
                    color: "white",
                    backgroundImage: `url('./Home.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    "::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0,0,0,0.3)", // Light overlay
                    },
                }}
                style={{ display: "block" }}
            >
                <Box sx={{ position: "relative", zIndex: 1, px: 1 }}>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", mb: 2, fontSize: "50px" }}
                    >
                        “Study or Travel for
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", mb: 2, fontSize: "50px" }}
                    >
                        Business — We Make Your Visa File Strong.
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", mb: 2, fontSize: "50px" }}
                    >
                        Visa File Strong.”
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{ lineHeight: 1.6, fontSize: "20px" }}
                    >
                        “From profile evaluation to documents, appointments, and
                    </Typography>

                    <Typography
                        variant="p"
                        sx={{ mb: 5, display: "block", fontSize: "20px" }}
                    >
                        mock interviews — all in one place.”
                    </Typography>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="flex-start"
                    >
                        <Button
                            variant="contained"
                            sx={{ px: 5, py: 1.7, bgcolor: theme.pallete.main }}

                        >
                            <Typography component="p" sx={{ fontWeight: "bold" }}>
                                Get Free Eligibility Check
                            </Typography>
                        </Button>

                        <Button
                            variant="contained"
                            sx={{ px: 5, py: 1.7, bgcolor: theme.pallete.main }}
                        >
                            <Typography component="p" sx={{ fontWeight: "bold" }}>
                                WhatsApp Now
                            </Typography>
                        </Button>
                    </Stack>
                </Box>
            </Box >

            {/* Trust Strip */}
            <Box
                sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    gap: 1,
                    bgcolor: "#f5f5f5",
                    px: 3,
                    py: 1,
                    color: "white",
                    mx: "auto",
                    mt: 0,
                    fontSize: 20,
                    bgcolor: theme.pallete.main
                }}
            >
                Trust Strip:
                {/* Stars */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                </Box>

                {/* Text */}
                <Typography sx={{ fontWeight: "bold", color: "white" }}>4.8/5 (Google)</Typography>
                <Typography>• 2,000+ files prepared</Typography>
                <Typography>• Offices in [City]</Typography>
            </Box>

            {/* Eligibility form Section*/}
            <Box
                sx={{
                    display: "flex",
                    alignContent: { xs: "flex-start", md: "center" },
                    mt: 10,
                    mb:10,
                    px: 10,
                    gap: { xs: 1, md: 6.5 },
                    width: {
                        xs: "100%",
                        md: 50
                    }
                }}
            >


                {/* Eligible form Image */}
                <Box
                    component="img"
                    src={'./Group17.png'}
                    sx={{
                        height: { xs: "400px", md: "600px" },
                        width: "auto",
                    }}

                >
                </Box>

                <Box>
                    <Typography
                        variant='h3'
                        sx={{
                            fontWeight: "400",
                            color: "#555353ff"
                        }}
                        mb={2}>Quick Eligibility</Typography>

                    <Box>

                        {/* button Toggle  */}
                        <ToggleButtonGroup
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: { xs: 5, md: 5 },
                                '& .MuiToggleButton-root': {
                                    border: '3px solid #06BBCC !important', // force border for sabhi buttons
                                    borderRadius: 0,
                                    px: 7,
                                    py: 1,
                                }

                            }}
                            exclusive={true}
                            value={selected}
                            onChange={handleClick}
                        >
                            <ToggleButton
                                variant="contained"
                                sx={{
                                    px: 7,
                                    py: 1,
                                    bgcolor: theme.pallete.main,
                                    border: '3px solid #06BBCC !important',
                                }}
                                value="Student"
                            >
                                <Typography component="p" sx={{ fontWeight: "bold", fontSize: "2rem", color: 'white' }}
                                >
                                    Student
                                </Typography>
                            </ToggleButton>

                            <ToggleButton
                                variant="outlined"
                                sx={{
                                    px: 7,
                                    py: 1,
                                    borderRadius: 0,
                                    border: `3px solid #06BBCC`,
                                }}
                                value="Business"

                            >
                                <Typography
                                    component="p"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "2rem",
                                        color: "black"
                                    }}>
                                    Business
                                </Typography>
                            </ToggleButton>
                        </ToggleButtonGroup>

                        {selected === 'Student' && (
                            <Grid
                                container
                                spacing={2}
                                width={100}>
                                {/* Student Form */}

                                <Grid item
                                    xs={12} md={7}
                                >
                                    <TextField
                                        select
                                        variant="standard"
                                        id="Country"
                                        label="Target Country"
                                        sx={{
                                            width: 250,
                                            color: grey
                                        }}
                                        size="medium"
                                        margin="normal"
                                        required
                                    >
                                        {
                                            countries.map((c) => {
                                                return <MenuItem key={c} value={c}>{c}</MenuItem>
                                            })
                                        }
                                    </TextField>



                                </Grid >

                                <Grid item
                                    xs={12} md={7}>
                                    <TextField
                                        select
                                        variant="standard"
                                        id="IELTS/TOEFL"
                                        label="IELTS/TOEFL"
                                        sx={{
                                            width: 250,
                                            color: grey
                                        }}
                                        size="medium"
                                        margin="normal"
                                        // InputProps={{
                                        //     sx: { color: theme.palette.main }
                                        // }}
                                        required
                                    >
                                        <MenuItem key="Yes" value="Yes">Yes</MenuItem>
                                        <MenuItem key="No" value="No">No</MenuItem>
                                    </TextField>
                                </Grid>


                                <Grid item
                                    xs={12} md={7}>
                                    <TextField
                                        type="text"
                                        variant="standard"
                                        id="Highest Education"
                                        label="Highest Education"
                                        sx={{
                                            width: 250,
                                            color: grey
                                        }}
                                        size="medium"
                                        margin="normal"
                                        // InputProps={{
                                        //     sx: { color: theme.palette.main }
                                        // }}
                                        required
                                    >

                                    </TextField>
                                </Grid>
                            </Grid>)}

                        {selected === 'Business' && (
                            <Grid

                                container spacing={2} width={100}
                                sx={{
                                    ml: 40
                                }}>
                                {/* Buisness Form */}

                                <Grid item
                                    xs={12} md={7}
                                >
                                    <TextField

                                        variant="standard"
                                        id="Intake"
                                        label="Intake"
                                        sx={{
                                            width: 250,
                                            color: grey
                                        }}
                                        size="medium"
                                        margin="normal"
                                        required
                                    >

                                    </TextField>

                                </Grid >

                                <Grid item
                                    xs={12} md={7}>
                                    <TextField
                                        type="text"
                                        variant="standard"
                                        id="Budget"
                                        label="Budget"
                                        sx={{
                                            width: 250,
                                            color: grey
                                        }}
                                        size="medium"
                                        margin="normal"
                                        // InputProps={{
                                        //     sx: { color: theme.palette.main }
                                        // }}
                                        required
                                    >

                                    </TextField>
                                </Grid>


                                <Grid item
                                    xs={12} md={7}>
                                    <TextField
                                        type="text"
                                        variant="standard"
                                        id="Email/Phone"
                                        label="Email/Phone"
                                        sx={{
                                            width: 250,
                                            color: grey
                                        }}
                                        size="medium"
                                        margin="normal"
                                        required
                                    >

                                    </TextField>
                                </Grid>
                            </Grid>)}

                        <Button
                            variant="contained"
                            sx={{
                                px: 5,
                                py: 1.7,
                                mt: 5,
                                ml:selected === 'Business'? 40 :5,
                                bgcolor: theme.pallete.main
                            }}
                        >
                            <Typography
                                variant="p"
                            >
                                Apply Now
                            </Typography>

                        </Button>
                    </Box>


                </Box>

            </Box >

        </>
    )
}

export default Home;
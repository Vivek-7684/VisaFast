import {
    AppBar, Toolbar, Typography,
    Menu, MenuItem, TextField, FormControl, Select,
    InputLabel, ToggleButtonGroup, ToggleButton,
    Grid, Card, CardMedia, CardHeader, CardContent, Avatar
} from '@mui/material';
import Box from '@mui/material/Box';
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from '@mui/material/styles';
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Home = () => {

    // Access Theme
    const theme = useTheme();

    // Selected Eligibility Button 
    const [selected, setSelected] = useState("Student");

    const handleClick = (event, newValue) => {
        setSelected(newValue);
    }

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
                    minHeight: { xs: "400px", md: "600px" },
                    width: "auto",
                    padding: { xs: "2rem", sm: "3rem", md: "5rem" },
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
                        sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "24px", sm: "32px", md: "50px" } }}
                    >
                        “Study or Travel for
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "24px", sm: "32px", md: "50px" } }}
                    >
                        Business — We Make Your Visa File Strong.
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "24px", sm: "32px", md: "50px" } }}
                    >
                        Visa File Strong.”
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{ lineHeight: 1.6, fontSize: { xs: "24px", sm: "32px", md: "50px" } }}
                    >
                        “From profile evaluation to documents, appointments, and
                    </Typography>

                    <Typography
                        variant="p"
                        sx={{ mb: 5, display: "block", fontSize: { xs: "24px", sm: "32px", md: "50px" } }}
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
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },   // ✅ fix 1
                    justifyContent: { xs: "flex-start", sm: "center" }, // ✅ fix 2
                    gap: { xs: 0.5, sm: 1, md: 2 },
                    bgcolor: theme.pallete.main,
                    px: { xs: 2, sm: 3, md: 6 },
                    py: 1,
                    mx: "auto",
                    color: "white",
                    fontSize: 20,
                    bgcolor: theme.pallete.main,
                    textAlign: { xs: "left", sm: "center" },           // ✅ fix 3
                }}
            >
                <Typography sx={{ fontWeight: "bold", color: "white" }}>
                    Trust Strip:
                </Typography>

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
                    mb: 10,
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
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: { xs: "10px", md: "18px" },
                                                fontWeight: "600"
                                            }
                                        }}
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
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: { xs: "10px", md: "18px" },
                                                fontWeight: "600"
                                            }
                                        }}
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
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: { xs: "10px", md: "18px" },
                                                fontWeight: "600"
                                            }
                                        }}
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
                                {/* Business Form */}

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
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: { xs: "10px", md: "18px" },
                                                fontWeight: "600"
                                            }
                                        }}
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
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: { xs: "10px", md: "18px" },
                                                fontWeight: "600"
                                            }
                                        }}
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
                                        InputLabelProps={{
                                            sx: {
                                                fontSize: { xs: "10px", md: "18px" },
                                                fontWeight: "600"
                                            }
                                        }}
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
                                ml: selected === 'Business' ? 40 : 5,
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

            {/* How it Works */}
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    bgcolor: theme.pallete.light,
                    position: "relative",
                }}
            >
                <Typography variant='h3'
                    sx={{
                        p: 7,
                        fontWeight: "500"
                    }}>
                    How It Works
                </Typography>
                
                <Box
                    component='img'
                    src={'./HowItWorks.png'}
                    sx={{
                        height: { xs: "400px", md: "600px" },
                        width: "auto",
                        position: "absolute",
                        top: 0,
                        right: 0
                    }}
                    p={1}
                    mr={10}
                    mb={5}
                >

                </Box>

                <Card
                    variant="outlined"
                    sx={{
                        maxWidth: "fit-content"
                    }}>
                    <CardHeader
                        title="Free Profile Evaluation"
                        avatar={<Avatar src="./evaluation.png"
                            sx={{
                                height: 50,
                                width: "fit-content",
                                bgcolor: "rgba(6, 187, 204, 0.5)",
                                borderRadius: 10
                            }} />}
                    >
                    </CardHeader>
                </Card>

                <Card
                    variant="outlined"
                    sx={{
                        maxWidth: "fit-content"
                    }}
                >
                    <CardHeader
                        title=" Checklist & Document Prep"

                        avatar={<Avatar src="./checklist.png"
                            sx={{
                                height: 50,
                                width: "fit-content",
                                bgcolor: "rgba(6, 187, 204, 0.5)",
                                borderRadius: 10
                            }} />}
                    >
                    </CardHeader>
                </Card>


                <Card
                    variant="outlined"
                    sx={{
                        maxWidth: "fit-content"
                    }}
                >
                    <CardHeader
                        title=" Submission & Biometrics"
                        avatar={<Avatar
                            sx={{
                                height: 50,
                                width: "fit-content",
                                bgcolor: "rgba(6, 187, 204, 0.5)",
                                borderRadius: 10
                            }}><FingerprintIcon /></Avatar>}
                    >
                    </CardHeader>
                </Card>

                <Card
                    variant="outlined"
                    sx={{
                        maxWidth: "fit-content"
                    }}
                >
                    <CardMedia
                        component="img"
                        src={'./decision-making.png'}
                        sx={{
                            height: "50px",
                            width: "auto",
                            bgcolor: "rgba(6, 187, 204, 0.5)"
                        }}
                    >
                    </CardMedia>
                    <CardHeader title="Decision">
                    </CardHeader>
                </Card>

                <Card
                    variant="outlined"
                    sx={{
                        maxWidth: "fit-content"
                    }}
                >

                    <CardHeader
                        title="Pre‑departure support"
                        avatar={<Avatar
                            sx={{
                                height: 50,
                                width: "fit-content",
                                bgcolor: "rgba(6, 187, 204, 0.5)",
                                borderRadius: 10
                            }} >
                            <FlightTakeoffIcon fontColor="blue" />
                        </Avatar>}
                    >
                    </CardHeader>
                </Card>

            </Box>
        </>
    )
}

export default Home;
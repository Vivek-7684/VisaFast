import { AppBar, Toolbar, Typography, Menu, MenuItem, TextField, FormControl, Select, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const Home = () => {
    return (
        <>
            {/* Image Section */}
            <Box
                sx={{
                    position: "relative",
                    top: 15,
                    left: 0,
                    // height: { xs: "400px", md: "600px" },
                    height: "100%",
                    height: "auto",
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
            >
                <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: "bold", mb: 2, fontStyle: "italic" }}
                    >
                        “Study or Travel for”
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: "bold", mb: 2, fontStyle: "italic" }}
                    >
                        Business — We Make Your Visa File Strong.
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: "bold", mb: 2, fontStyle: "italic" }}
                    >
                        Visa File Strong.”
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{ lineHeight: 1.6, fontStyle: "italic" }}
                    >
                        “From profile evaluation to documents, appointments, and
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        sx={{ mb: 5, fontStyle: "italic" }}
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
                            bgcolor="#06BBCC"
                            sx={{ px: 4, py: 1.5, bgcolor: "#06BBCC" }}
                        >
                            Get Free Eligibility Check
                        </Button>

                        <Button
                            variant="contained"
                            sx={{ px: 4, py: 1.5, bgcolor: "#06BBCC" }}
                        >
                            WhatsApp Now
                        </Button>
                    </Stack>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    gap: 1,
                    bgcolor: "#f5f5f5",
                    px: 3,
                    py: 1.5,
                    color: "white",
                    mx: "auto",
                    mt: 1.2,
                    fontSize: 20,
                    bgcolor: "#06BBCC"
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

            {/* form */}

            <Box
                sx={{
                    display: "flex",
                }}>
                <Box sx={{
                    
                    height: { xs: "400px", md: "600px" },
                    height: "auto",
                    width: "auto",
                    component:"img",
                    src: `url('./Group17.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                </Box>
                <Box>
                    <Typography>Quick Eligibility</Typography>
                    <Button>Student</Button>
                    <Button>Business</Button>

                    <Box>
                        <FormControl fullWidth>
                            {/* <InputLabel variant="standard" fullWidth>Target Country</InputLabel> */}
                            <Select>
                                <MenuItem>USA</MenuItem>
                                <MenuItem>Australia</MenuItem>
                                <MenuItem>America</MenuItem>
                                <MenuItem>India</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <TextField
                            select
                            label="Target Country"
                            // value={country}
                            // onChange={(e) => setCountry(e.target.value)}
                            fullWidth
                            variant="outlined"
                        >
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="Canada">Canada</MenuItem>
                            <MenuItem value="Australia">Australia</MenuItem>
                            <MenuItem value="India">India</MenuItem>
                        </TextField> */}

                        {/* <TextField ></TextField >
                        <TextField ></TextField > */}
                    </Box>
                    {/* <Box>
                        <TextField ></TextField >
                        <TextField ></TextField >
                        <TextField ></TextField >
                    </Box> */}

                    <Button>Apply Now</Button>
                </Box>
            </Box>

        </>
    )
}

export default Home;
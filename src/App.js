import Header from "./Components/Header";
import Home from "./Pages/Home";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Styles/global.css';

const theme = createTheme({
  pallete: {
    main: "#06BBCC",
    light: "F0FBFC"
  },
  typography: {
    h1: { fontFamily: "Charis SIL, serif" },
    h2: { fontFamily: "Charis SIL, serif" },
    h3: { fontFamily: "Charis SIL, serif" },
    h4: { fontFamily: "Charis SIL, serif" },
    h5: { fontFamily: "Charis SIL, serif" },
    h6: {
      fontFamily: "Charis SIL, serif",
    },
    p: { fontFamily: "figtree, Arial, sans-serif" },
    body1: { fontFamily: "Figtree, Arial, sans-serif" },
    button: {
      fontFamily: "Charis SIL, serif",
      fontSize: "1.125rem",  // same as h6 for nav
      fontWeight: 600,
      textTransform: "none"  // casing maintain
    }
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

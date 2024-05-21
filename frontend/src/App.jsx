// import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import { Outlet } from "react-router-dom";
import Header1 from "../src/components/header/Header1";
import Header2 from "../src/components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import Products from "./components/main/Products";
import Footer from "./components/footer/Footer";
import ScrollToTopFab from "./components/scroll/ScrollToTop";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Products />
          <Footer />
        </Box>
        <ScrollToTopFab />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

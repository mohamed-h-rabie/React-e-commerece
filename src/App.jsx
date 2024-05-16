// import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import { Outlet } from "react-router-dom";
import Header1 from "../src/components/header/Header1";
import Header2 from "../src/components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Hero />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

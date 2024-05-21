import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

export default function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack sx={{ color: "grey.500" }} justifyContent={"center"}>
        <CircularProgress color="inherit" />
      </Stack>
    </Box>
  );
}

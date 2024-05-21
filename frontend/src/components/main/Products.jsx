import {
  Box,
  Container,
  IconButton,
  Rating,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { forwardRef, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useGetproductByNameQuery } from "../../redux/product";

import Dialog from "@mui/material/Dialog";

import ProductDetails from "./ProductDetails";
import { Close } from "@mui/icons-material";
import Spinner from "../../Spinner";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Products() {
  const [alignment, setAlignment] = useState("left");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { data, error, isLoading } = useGetproductByNameQuery(
    "products/?populate=*"
  );
  // console.log(data);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  if (isLoading) return <Spinner />;
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <Box>
          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial !important",
              },
            }}
          >
            <ToggleButton
              value="left"
              aria-label="left aligned"
              className="myButton"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              value="center"
              aria-label="centered"
              className="myButton"
              sx={{
                mx: "16px !important",
                color: theme.palette.text.primary,
              }}
            >
              MEN category
            </ToggleButton>
            <ToggleButton
              value="right"
              aria-label="right aligned"
              className="myButton"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data?.data.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s",
                },
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{
                  height: 277,
                }}
                image={`http://localhost:1337${item.attributes.productImg.data[0].attributes.url}`}
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  textAlign={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.attributes.productTitle}
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    {`${item.attributes.productPrice}$`}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {item.attributes.productDes}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                  onClick={handleClickOpen}
                >
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                  />
                  add to cart
                </Button>
                <Dialog
                  sx={{
                    ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
                  }}
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 10,
                      ":hover": {
                        rotate: "180deg",
                        color: "red",
                        transition: ".3s",
                      },
                    }}
                    onClick={handleClose}
                  >
                    <Close />
                  </IconButton>
                  <ProductDetails item={data?.data} />
                </Dialog>
                <Rating
                  precision={0.1}
                  name="read-only"
                  value={item.attributes.productRating}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}

export default Products;
//4 :12

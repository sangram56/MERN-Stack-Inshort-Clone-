import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles( theme=>({
  container: {
    background: "#f44336",
    color: "white",
    height: 50,
    display: "flex",
    alignItems: "center",
    marginBottom:20,
    [theme.breakpoints.down('md')]: {
      display: 'none'
  }
  },
  text: {
    fontSize: 14,
    marginLeft: 50,
    fontWeight: 300,
    fontFamily: "'Roboto',sans-serif",
  },
  logo: {
    height: 34,
    "&:last-child": {
      margin: "0 50px 0 20px",
    },
  },
}));

export default function InfoHeader() {
  const classes = useStyles();
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";
  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>
        {" "}
        For the best experience use <b>inshorts</b> app on your smartphone
      </Typography>
      <Box style={{ marginLeft: "auto" }}>
        <img src={appleStore} alt="apple store" className={classes.logo} />
        <img src={googleStore} alt="google store" className={classes.logo} />
      </Box>
    </Box>
  );
}

import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyle = makeStyles({
  header: {
    background: "#fff",
    height: 70,
  },

  logo: {
    height: 60,
    margin: "auto",
  },
  menu: {
    color: "black",
    height: 65,
    paddingRight: 10,
  },
});

export default function Header() {
  const classes = useStyle();
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Menu className={classes.menu} />
        <img src={url} alt="logoimage " className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
}

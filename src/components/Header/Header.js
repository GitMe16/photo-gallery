import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: "white",
    zIndex: 3000,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 700,
  },
  navs: {
    position: "relative",
  },
  navLinks: {
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    display: "flex",
    marginRight: 20,
  },
  link: {
    fontSize: 12,
    letterSpacing: "0.03rem",
    color: "#222222",
    cursor: "pointer",
    "&:visited": {
      color: "#222222",
    },
    "&:hover, &:active": {
      color: "#757575",
    },
    fontWeight: 400,
  }
}));

const Header = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.navs}>
        <h3 className={classes.title}>PHOTO GALLERY</h3>
        <div className={classes.navLinks}>
          <a className={classes.link}>HOME</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
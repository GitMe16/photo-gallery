import React, { Fragment } from 'react';
import { Header } from "components";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  page: {
    width: '100%',
    height: '100%',
    paddingTop: 70,
    paddingBottom: 30,
    margin: '0px auto',
  }
}))

const Page = (props) => {

  const { children } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <div className={classes.page}>
        { children }
      </div>
    </Fragment>
  );
}

export default Page;
import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';
import { RenderGuard } from 'components';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  primary: {
    color: '#7AB3EF'
  }
}));

const GridLoader = (props) => {
  const { loading, className } = props;

  const classes = useStyles();

  return (
    <RenderGuard renderIf={ loading }>
      <div className={ clsx(classes.root, className) }>
        <CircularProgress classes={{colorPrimary: classes.primary}}/>
      </div>
    </RenderGuard>
  );
};

export default GridLoader;
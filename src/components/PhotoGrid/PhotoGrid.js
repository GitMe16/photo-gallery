import React, { Fragment } from 'react';
import { GridLoader, PhotoColumn } from 'components';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0px 20px',
    display: 'flex'
  },
  hidden: {
    display: 'none'
  }
}));

const PhotoGrid = (props) => {
  const { photos, className, loading, columns } = props;
  
  const classes = useStyles();

  const styles = {
    [classes.hidden]: loading
  };

  return (
    <Fragment>
      <div className={clsx(classes.root, styles, className)}>
        {
          columns.map((item, index) => {
            const value = item;
            return (
              <PhotoColumn 
              photos={photos.filter((each, index) => index % columns.length === item)} 
              key={index} />
            );
          })
        }
      </div>
      <GridLoader 
        loading={loading} 
        className={clsx(className, styles)} />
    </Fragment>
  );
}

export default PhotoGrid;
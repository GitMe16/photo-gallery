import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  background: {
    width: '100%',
    height: '100%',
    zIndex: 3000,
    position: 'absolute',
    top: 0
  },
  itemImg: {
    width: '100%',
    display: 'block',
  },
  photoItem: {
    width: '100%',
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#7AB3EF',
  },
  transparent: {
    backgroundColor: 'transparent'
  },
}));

const PhotoGridItem = (props) => {
  const { details }  = props;
  const classes = useStyles();
  const [image, showImage] = useState(false);

  const styles = {
    [classes.transparent]: image
  }

  return (
    <div className={classes.photoItem}>
      <img 
        className={classes.itemImg} 
        src={details.urls.regular} 
        alt={details.alt_description} 
        onLoad={() => showImage(true)} />
      <div className={clsx(classes.background, styles)}></div>
    </div>
  );
};

export default PhotoGridItem;

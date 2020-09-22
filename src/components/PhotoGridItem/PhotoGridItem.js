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
    <div className="photo-item">
      <img 
        className="item-img" 
        src={details.urls.regular} 
        alt={details.alt_description} 
        onLoad={() => showImage(true)} />
      <div className={clsx(classes.background, styles)}></div>
    </div>
  );
};

export default PhotoGridItem;
import React from 'react';
import PhotoGridItem from 'components/PhotoGridItem';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing(1),
    [theme.breakpoints.only("xs")]: {
      paddingRight: 0,
    },
  } 
}));

const PhotoColumn = (props) => {
  const { photos } = props;

  const classes = useStyles();

  return (
    <div className="photo-column" className={classes.root}>
      {
        photos.length > 0 ? 
        photos.map((each, index) => 
          <PhotoGridItem 
            details={each} 
            index={index} 
            key={index} />
        ) :
        null
      }
    </div>
  );
};

export default PhotoColumn;

PhotoColumn.defaultProps = {
  photos: []
};
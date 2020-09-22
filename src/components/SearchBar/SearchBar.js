import React, { useState, Fragment } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center'
  },
  field: {
    width: '30%',
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginRight: 20,
      marginLeft: 20,
    },
  }
}));

const SearchBar = (props) => {

  const { setSearch } = props;

  const [term, setTerm] = useState("");

  const classes = useStyles();

  const setSearchTerm = (ev) => {
    if (ev.key == "Enter") {
      setSearch({
        term: term,
        page: 1,
      });
    }
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <TextField 
          variant="outlined" 
          className={classes.field} 
          InputProps={{
            endAdornment: <SearchIcon />
          }} 
          value={term || ""}
          onChange={(ev) => setTerm(ev.target.value)}
          onKeyPress={(ev) => setSearchTerm(ev)} />
      </div>
    </Fragment>
  );
};

export default SearchBar;
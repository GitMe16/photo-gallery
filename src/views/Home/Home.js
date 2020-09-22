import React, { useState, useEffect } from 'react';
import Page from 'layouts/Page';
import credentials from 'config/credentials';
import getUrl from 'utils/getUrl';
import getPhotos from 'utils/getPhotos';
import { UnsplashPaths } from 'utils/constants';
import { SearchBar, PhotoGrid } from 'components';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(6)
  },
}));

const Home = () => {

  const classes = useStyles();

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState({
    term: "style",
    page: 1
  });
  const [count, setCount] = useState(0);
  const width = window.innerWidth;
  const [cols, setCols] = useState([]);

  const reload = (url, search) => {
    const params = {
      client_id: credentials.access,
      query: search.term,
      page: search.page,
      per_page: 60,
    };
    const finalUrl = getUrl(url, params);
    getPhotos(finalUrl)
    .then(data => {
      if (data.results) {
        if (data.results.length > 0) {
          const results = data.results ? data.results : [];
          const total_pages = data.total_pages ? data.total_pages : 0;
          setCount(total_pages);
          if (search.page === 1) {
            setPhotos(results);
          } else {
            setPhotos(photos.concat(results));
          }
        }
      }
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleScroll = () => {
      const position = window.pageYOffset;
      var B = document.body,
      H = document.documentElement,
      height;

      if (typeof document.height !== 'undefined') {
          height = document.height; // For webkit browsers
      } else {
          height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
      }

      if (position >= search.page * 300) {
        setSearch({
          term: search.term,
          page: search.page + 1,
        })
      }
  };

  const resizeBrowser = () => {
    let colNum, colArr = [];
    if (width > 1600) {
      colNum = 6;
    } else if (width <= 1600 && width > 1400) {
      colNum = 5;
    } else if (width <= 1400 && width > 1200) {
      colNum = 4;
    } else if (width <= 1200 && width > 800) {
      colNum = 3;
    } else if (width <= 800 && width > 600) {
      colNum = 2;
    } else {
      colNum = 1;
    }
    for (let i = 0; i < colNum; i++) {
      colArr.push(i);
    }
    setCols(colArr);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    reload(UnsplashPaths.search, search, count);

    resizeBrowser();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [search, count]);

  return (
    <Page>
      <h1>Photo Gallery</h1>
      <p>
        This is my first attempt to create a photo gallery using images from <a href="https://unsplash.com">Unsplash</a>. Enjoy!
      </p>
      <SearchBar setSearch={setSearch} />
      <PhotoGrid 
        photos={photos} 
        loading={loading} 
        className={classes.grid}
        columns={cols} />
    </Page>
  );
};

export default Home;
import React, { Fragment } from 'react';
import { Header } from "components";

const Page = (props) => {

  const { children } = props;

  return (
    <Fragment>
      <Header />
      <div className="page">
        { children }
      </div>
    </Fragment>
  );
}

export default Page;
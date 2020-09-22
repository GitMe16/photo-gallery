import React, { Fragment } from 'react';

const RenderGuard = (props) => {
  const { children, renderIf } = props;

  if (renderIf) {
    return (
      <Fragment>
        { children }
      </Fragment>
    );
  } else {
    return null;
  }
};

RenderGuard.defaultProps = {
  renderIf: true
};

export default RenderGuard;
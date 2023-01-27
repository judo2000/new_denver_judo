import React, { useState, Fragment } from 'react';

const MoreLessText = ({ children }) => {
  const [more, setMore] = useState(false);
  return (
    <Fragment>
      <div className={'text' + (more ? '' : ' less')}>{children}</div>
      <button
        type="button"
        className="readMoreBtn"
        onClick={() => setMore(!more)}
      >
        {' '}
        {/* toggle state*/}
        {more ? (
          <>
            Show Less <i className="fa fa-angle-up"></i>
          </>
        ) : (
          <>
            Show More <i className="fa fa-angle-down"></i>
          </>
        )}
      </button>
    </Fragment>
  );
};

export default MoreLessText;

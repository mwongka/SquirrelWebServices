import React, { PropTypes } from 'react';

const FriendSearchBarPresentational = (props) => {
  return (
      <div className="row search">
        <div className=" small-12 columns">
          <div className="row collapse">
            <div className="small-12 large-12  columns ">
              <div className=" keyword">
              </div>
                <form className='inputfield' onSubmit={props.onSubmit}>
                <input id='inputClear' onChange={props.onChange} type="text" className="search-field" placeholder="Search for friends here"/>
                <button className="stashBtn" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FriendSearchBarPresentational;


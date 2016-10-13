import React from 'react';

const friendStyle = {
  position: 'relative',
  marginBottom: '10px',
  backgroundColor: '#ececec',
  width: '225',
  height: '200px',
  borderRadius: '3px',
  display: 'flex',
  marginLeft: '5px',
  marginRight: '5px',
  boxShadow: '5px 5px 5px rgba(0,0,0,0.3)',
  }

const friendHeaderStyle = {
  flexWrap: 'wrap',
  height: '20%',
  borderTopRightRadius: '3px',
  borderTopLeftRadius: '3px',
  width: '100%',
  background: 'rgba(245, 190, 156, 0.97)',
}

const friendFooterStyle = {
  position: 'absolute',
  height: '3%',
  width: '100%',
  bottom: '0',
  background: 'linear-gradient(-90deg, #18ffff, #a7ffeb)',
  borderBottomRightRadius: '3px',
  borderBottomLeftRadius: '3px',
}

const h6style = {
  fontFamily: '"Roboto", sans-serif',
  fonWeight: 'bold',
  paddingLeft: '30px',
  overflow: 'hidden',
  fontSize: '20px',
  top: '15px',
  position: 'absolute',
  fontWeight: 'bold',
  color:'#9e9e9e',
}

const FriendSearchResultPresentational = (props) => {
  console.log('i am in FriendSearchResultPresentational', props.user);
    return (
            <div style={friendStyle}>
              <div style={friendHeaderStyle}></div>
                <div>
                  <h6 stlye={h6style}>{props.name}</h6>
                </div>
                <div style={friendFooterStyle}></div>
            </div>
      );
};

export default FriendSearchResultPresentational;
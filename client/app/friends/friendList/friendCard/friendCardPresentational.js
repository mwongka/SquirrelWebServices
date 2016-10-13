import React, { PropTypes } from 'react';

const dummyphoto = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgXAAAAJGQ2MDIyODY3LTU2ODktNGRmMS1iNGVkLTY3YjQwM2VkMGEwMw.jpg';

const friendStyle = {
  position: 'relative',
  marginBottom: '10px',
  backgroundColor: '#ececec',
  width: '90%',
  height: '70px',
  borderRadius: '3px',
  boxShadow: '5px 5px 5px rgba(0,0,0,0.3)',
  }

const friendHeaderStyle = {
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

const FriendCardPresentational = (props) => {
  return (
          <div className='friendlistunit'>
            <div className='friendheaderstyle'></div>
              <div className='friendlistcardbody'>
                <h6>{props.name}</h6>
              </div>
              <div className='friendfooterstyle'></div>
          </div>
    );
};

export default FriendCardPresentational;

//props.avatar, props.name

/* suggestions: maybe add following friend's article previews?
                <img src="http://i2.cdn.turner.com/cnnnext/dam/assets/161003115141-haddo-madonna-raphael-1-super-169.jpg" alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                <img src={dummyphoto} alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                <img src={dummyphoto} alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                <img src={dummyphoto} alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                <img src={dummyphoto} alt="blah blah, article title" className="article-thumbnail responsive-img"/>
                */

      // <div class="col s12 m8 offset-m2 l6 offset-l3">
      //   <div class="card-panel grey lighten-5 z-depth-1">
      //     <div class="row valign-wrapper">
      //       <div class="col s2">
      //         <img src="images/yuna.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
      //       </div>
      //       <div class="col s10">
      //         <span class="black-text">
      //           This is a square image. Add the "circle" class to it to make it appear circular.
      //         </span>
      //       </div>
      //     </div>
      //   </div>
      // </div>
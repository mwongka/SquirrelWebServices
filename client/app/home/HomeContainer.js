import React, { PropTypes } from 'react';
import HomePresentational from './HomePresentational';
import FriendInboxContainer from './friendInbox/friendInboxContainer';
import UserInboxContainer from './userInbox/userInboxContainer';
import InputBarContainer from './inputBar/inputBarContainer';
import axios from 'axios';
import * as homeActions from  '../redux/homeReducer';
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';

class HomeContainer extends React.Component {
  static propTypes = {
      user: PropTypes.object,
      articles: PropTypes.array,
      userArticles: PropTypes.array,
      userFollowingList: PropTypes.array,
      articlesFromFriends: PropTypes.array,
      articlesFromFriendsRef: PropTypes.object,
    };

  componentDidMount() {
  //get user name and id
    axios.get('/checkAuth')
    .then((user)=>{
      this.props.dispatch(homeActions.updateUser(user.data))
      return axios.get('http://wwww.localhost:8888/links/' + user.data.fbid)
    })
    .then((data) => {
      console.log(data, 'what is at position 1')
      this.props.dispatch(homeActions.updateArticles(data.data[0]))
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  componentDidUpdate(prevProps){
    if(prevProps.articles !== this.props.articles) {
      this.sortArticles();
    }
    return true;  
  }

  sortArticles() {

    const userArticles = this.props.articles.filter((link) => {
        return link.assignee === this.props.user.fbid;
      }).map((item) => {
        return {url: item.url, createdAt: item.createdAt};
      }).sort((a, b) => {
        if (b.createdAt > a.createdAt){
          return true;
        }
      });

    const articlesFromFriends = this.props.articles.filter((link) => {
        return link.assignee !== this.props.user.fbid;
      }).map((item) => {
        return {assignee: item.assignee, url: item.url, createdAt: item.createdAt};
      }).sort((a, b) => {
        if (b.createdAt > a.createdAt){
          return true;
        }
      });

      console.log(articlesFromFriends, 'articles from friends');

    //SOMEHOW COMBINE THESE TWO BELOW
    this.props.dispatch(homeActions.updateUserArticles(userArticles));
    setTimeout(()=>{
      console.log('iran');
      this.props.dispatch(homeActions.updateArticlesFromFriends(articlesFromFriends));
    }, 2000)
    // this.props.dispatch(homeActions.updateArticlesFromFriends(articlesFromFriends));
  }

  render() {
    return (
    <div style={{'height': '100%', 'width': '100%'}}>
      <HomePresentational >
        <InputBarContainer userId={this.props.user}/>
        <div className='row inboxmain'>
          <div className='col s8 grey lighten-5'>
            <Scrollbars style={{ height: 600 }}>
              <UserInboxContainer/>
            </Scrollbars>
          </div>
          <div className='col s4 grey lighten-3'>
            <Scrollbars style={{ height: 600 }}>
              <FriendInboxContainer user={this.props.user}/>
            </Scrollbars>
          </div>
        </div>
      </HomePresentational>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.homeReducer.user,
    articles: state.homeReducer.articles,
    userArticles: state.homeReducer.userArticles,
    userFriendsList: state.homeReducer.userFriendsList,
    articlesFromFriends: state.homeReducer.articlesFromFriends,
    articlesFromFriendsRef: state.homeReducer.articlesFromFriendsRef, //<=== shouldnt have to do this...? 
  }
}
export default connect(mapStateToProps)(HomeContainer);

import React, { PropTypes } from 'react';
import UserInboxPresentational from './UserInboxPresentational';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';
import { connect } from 'react-redux';
import * as inboxActions from '../../redux/userInboxReducer'; //<== do I need this?
// import homeReducer from '../../redux/homeReducer';

class UserInboxContainer extends React.Component {
  static PropTypes = {
    articles: PropTypes.array,
    user: PropTypes.object,
  };

  render() {
    var mappedArticles = this.props.articles.map((item, idx) => {
      return (<ArticleInfoWindowContainer key={idx} url={item.url} createdAt={item.createdAt}/>);
    });
    return (
    <UserInboxPresentational >
      {mappedArticles}
    </UserInboxPresentational>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.homeReducer.userArticles,
    user: state.homeReducer.user, 
  }
}

export default connect(mapStateToProps)(UserInboxContainer);

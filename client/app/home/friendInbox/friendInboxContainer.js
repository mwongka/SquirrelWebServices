import React, { PropTypes } from 'react';
import FriendInboxPresentational from './FriendInboxPresentational';
import ArticleInfoWindowContainer from '../articleInfoWindow/articleInfoWindowContainer';
import { connect } from 'react-redux';

class FriendInboxContainer extends React.Component {
  static PropTypes = {
    articles: PropTypes.array,
  };

  render() {
    console.log(this.props.articles, 'what>??! TEST');
    const mappedArticles = this.props.articles.map((item, idx) => {
      return (<ArticleInfoWindowContainer key={idx} url={item.url} createdAt={item.createdAt} assignee={item.assignee}/>);
    });
    return (
    <FriendInboxPresentational>
      {mappedArticles}
    </FriendInboxPresentational>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, 'state state');
  return {
    articles: state.homeReducer.articlesFromFriends
  }
}

export default connect(mapStateToProps)(FriendInboxContainer);

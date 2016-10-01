import React, { PropTypes } from 'react';
import InputBarPresentational from './InputBarPresentational';
import axios from 'axios';
import {connect} from 'react-redux';
import * as inputBarActions from '../../redux/inputBarReducer';
import * as homeActions from '../../redux/homeReducer';

class InputBarContainer extends React.Component {
  static propTypes = {
    input: PropTypes.string,
    owner: PropTypes.string,
    // user: PropTypes.object,
    friendsFollowing: PropTypes.array,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: '',
  //     owner: '',
  //     // assignee: '',
  //     userId: '',
  //   }
  // }
  // componentWillReceiveProps(props){
  //   if(props.userId){
  //    this.setState({
  //     userId: props.userId.fbid,
  //     // assignee: props.userId.fbid,
  //     owner: props.userId.fbid,
  //    })
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps, 'nextProps nextProps')
  //   if(this.props.owner !== "") {
  //     this.props.dispatch(inputBarActions.updateOwner(nextProps.user.fbid));
  //     // this.props.owner = nextProps.user.fbid
  //   }
  //   if(this.props.user === "") {
  //     this.props.dispatch(inputBarActions.updateUser(nextProps.user));
  //   }
  // }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.user && this.props.owner === '' ) {
  //     this.props.dispatch(inputBarActions.updateOwner(nextProps.user.fbid));
  //   }
  // }

  componentDidUpdate() {
    // console.log(this.props.owner, this.props.user.fbid, 'owner owner owner');
  }

  handleInputChange(e) {
    e.preventDefault();
    this.props.dispatch(inputBarActions.updateInput(e.target.value));
  }


  handleSubmit(e) {

    e.preventDefault();
    var inputUrl = this.props.input;
    var input = document.getElementById('inputClear').value = '';
    this.props.dispatch(inputBarActions.updateInput(''));
    console.log(this.props.owner, this.props.user, "WHATS")

    axios.put(`http://localhost:8888/links/friends/${this.props.owner}/${this.props.user.fbid}`, {link: inputUrl})
    .then(function(data){

      //dispatch refresh?
    })
    .catch(function(err){

    })
  }

  render() {

    return (
      <InputBarPresentational onSubmit={this.handleSubmit.bind(this)} onChange={this.handleInputChange.bind(this)}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    input: state.inputBarReducer.input,
    // owner: state.inputBarReducer.owner,
    // user: state.homeReducer.user,
    // friendsFollowing: state.homeReducer.friendsFollowing,
  }
}

export default connect(mapStateToProps)(InputBarContainer);

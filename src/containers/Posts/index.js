import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';


import Panel from '../../components/Panel';
import PostList from '../../components/PostList';
import { LOADING_STATES } from '../../constants';

import * as postActionCreators from '../../actions/posts';
import styles from './style.css';

const propTypes = {
  postActions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
};

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClickLoadMore = this.handleClickLoadMore.bind(this);
  }

  static getInitialProps(dispatch) {
    return dispatch(postActionCreators.fetchPosts({
      _page: 1,
      _limit: 5,
    }));
  }

  componentWillMount() {
    if (typeof window === 'undefined') {
      // do some validation
    }
  }
  //
  // async componentDidMount() {
  //   return this.loadPosts();
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   const { posts: nextPosts } = nextProps;
  //   const { postActions, posts } = this.props;
  //   if ((nextPosts.get('loadingState') === LOADING_STATES.SUCCESS) && (posts.get('page') === nextPosts.get('page'))) {
  //     postActions.updatePostsPage(parseInt(posts.get('page'), 10) + 1);
  //   }
  // }

  loadPosts() {
    const { postActions, posts } = this.props;
    return postActions.fetchPosts({
      _page: posts.get('page'),
      _limit: 5,
    });
  }

  handleClickLoadMore() {
    this.loadPosts();
  }


  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        <Panel
          title="Posts"
        >
          <PostList posts={posts} />
          <button
            styleName="load-more"
            onClick={this.handleClickLoadMore}
          >Load more posts...
          </button>
        </Panel>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { posts } = state;
  return {
    posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActionCreators, dispatch),
  };
}

Posts.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Posts, styles));

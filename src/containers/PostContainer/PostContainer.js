import React, { Component } from "react";
import { PostWrapper, Navigate, Post, Warning } from "../../components";
import * as service from "../../services/post-api";

class PostContainer extends Component {
  state = {
    postId: 1,
    fetching: false,
    post: {
      title: null,
      body: null
    },
    comments: [],
    warning: false
  };

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  fetchPostInfo = async postId => {
    this.setState({
      fetching: true
    });

    try {
      const info = await Promise.all([
        service.getPost(postId),
        service.getComment(postId)
      ]);

      const { title, body } = info[0].data;
      const comments = info[1].data;

      this.setState({
        postId,
        post: {
          title,
          body
        },
        comments,
        fetching: false
      });
    } catch (e) {
      this.setState({
        fetching: false
      });
      this.showWarning();
      console.error(e);
    }
  };

  handleNavigateClick = type => {
    const postId = this.state.postId;

    if (type === "NEXT") {
      this.fetchPostInfo(postId + 1);
    } else {
      this.fetchPostInfo(postId - 1);
    }
  };

  showWarning = () => {
    this.setState({
      warning: true
    });

    setTimeout(() => {
      this.setState({
        warning: false
      });
    }, 1500);
  };

  render() {
    const { postId, post, comments, fetching, warning } = this.state;

    return (
      <PostWrapper>
        <Navigate
          postId={postId}
          disabled={fetching}
          onClick={this.handleNavigateClick}
        />
        <Post
          postId={postId}
          title={post.title}
          body={post.body}
          comments={comments}
        />
        <Warning message="You have reached the last page." visible={warning} />
      </PostWrapper>
    );
  }
}

export default PostContainer;

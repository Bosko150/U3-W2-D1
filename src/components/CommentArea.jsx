import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWRiODdmMzA0NjAwMWFlNTlmN2EiLCJpYXQiOjE3MTQzOTM3NTYsImV4cCI6MTcxNTYwMzM1Nn0.K_2NvbZCkQf1LSTsBeE_xel1EPWvir13maEyc48FOHM",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await response.json();
      this.setState({ comments: data });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  render() {
    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <AddComment book={this.props.book} />
      </div>
    );
  }
}

export default CommentArea;

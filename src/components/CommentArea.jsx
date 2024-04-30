import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  // componentDidMount() {
  //   this.fetchComments();
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedAsin !== this.props.selectedAsin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.selectedAsin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWRiODdmMzA0NjAwMWFlNTlmN2EiLCJpYXQiOjE3MTQzOTM3NTYsImV4cCI6MTcxNTYwMzM1Nn0.K_2NvbZCkQf1LSTsBeE_xel1EPWvir13maEyc48FOHM",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await response.json();
      this.setState({ comments: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  render() {
    return (
      <div>
        <h2>Comment Area</h2>
        {!this.state.isLoading && this.state.comments.length === 0 && (
          <ul className="list-unstyled bg-light">
            <li>There are no reviews for this book</li>
          </ul>
        )}
        <CommentsList comments={this.state.comments} />
        <AddComment book={this.props.book} />
      </div>
    );
  }
}

export default CommentArea;

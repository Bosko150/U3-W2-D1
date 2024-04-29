import React, { Component } from "react";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWRiODdmMzA0NjAwMWFlNTlmN2EiLCJpYXQiOjE3MTQzOTM3NTYsImV4cCI6MTcxNTYwMzM1Nn0.K_2NvbZCkQf1LSTsBeE_xel1EPWvir13maEyc48FOHM",
        },
        body: JSON.stringify({
          comment: this.state.comment,
          rate: this.state.rate,
          elementId: this.props.book.asin,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
      this.setState({ comment: "", rate: 1 });
      alert("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  render() {
    return (
      <div>
        <h4>Add a Comment</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="comment"></label>
            <textarea id="comment" name="comment" value={this.state.comment} onChange={this.handleChange} required />
          </div>
          <div>
            <label htmlFor="rate">Rate: </label>
            <select id="rate" name="rate" value={this.state.rate} onChange={this.handleChange} required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
}

export default AddComment;

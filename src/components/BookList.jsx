import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";

// const BookList = ({ bookArray }) => {
//   return (
//     <Container>
//       <Row>
//         {bookArray.map((book) => (
//           <SingleBook key={`book-${book.asin}`} book={book} />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default BookList;
class BookList extends React.Component {
  state = {
    searchInput: "",
  };
  render() {
    const searchResult = this.props.bookArray.filter((book) => {
      return book.title.toLowerCase().includes(this.state.searchInput.toLowerCase());
    });
    return (
      <Container>
        <input
          className="mb-3 bg-light"
          type="text"
          placeholder="Search by title..."
          value={this.state.searchInput}
          onChange={(e) => this.setState({ searchInput: e.target.value })}
        />
        <Row className="g-3">
          {searchResult.map((book) => (
            <SingleBook
              key={`book-${book.asin}`}
              book={book}
              setNewAsin={this.props.setNewAsin}
              selectedAsin={this.props.selectedAsin}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;

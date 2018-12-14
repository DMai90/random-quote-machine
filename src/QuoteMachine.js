import React, { Component } from "react";

class QuoteMachine extends Component {
  state = {
    quote: {
      content: "",
      author: ""
    }
  };
  getNewQuote = e => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(data => {
        const { quotes } = data;
        let number = Math.floor(Math.random() * quotes.length);
        this.setState({
          quote: {
            content: quotes[number].quote,
            author: quotes[number].author
          }
        });
      });
  };
  render() {
    const { quote } = this.state;
    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mx-auto my-5">
            <div className="card text-center" id="quote-box">
              <div className="card-header">
                <div className="card-title">
                  <h3>Quote Machine</h3>
                </div>
              </div>
              <div className="card-body">
                <blockquote className="blockquote" id="text">
                  <p>{quote.content}</p>
                </blockquote>
                <footer className="blockquote-footer" id="author">
                  {quote.author}
                </footer>
                <a href="twitter.com/intent/tweet" id="tweet-quote">
                  <i
                    className="fab fa-twitter my-3 mr-3"
                    style={{ fontSize: "30px" }}
                  />
                </a>

                <button
                  type="button"
                  className="btn btn-primary mx-auto my-3"
                  onClick={this.getNewQuote}
                  id="new-quote"
                >
                  Click for a new quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;

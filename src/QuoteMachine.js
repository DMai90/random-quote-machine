import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';

class QuoteMachine extends Component {
  state = {
    quote: {
      content: '',
      author: ''
    },
    loading: false
  };

  getNewQuote = async () => {
    this.setState({ ...this.state, loading: true });

    const res = await fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    const { quotes } = await res.json();

    let number = Math.floor(Math.random() * quotes.length);

    setTimeout(() => {
      this.setState({
        quote: {
          content: quotes[number].quote,
          author: quotes[number].author
        },
        loading: false
      });
    }, 1000);
  };

  render() {
    const {
      quote: { content, author },
      loading
    } = this.state;

    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mx-auto my-5">
            <div className="card text-center" id="quote-box">
              <div className="card-header bg-primary text-white">
                <div className="card-title">
                  <h3 className="display-4 p-2" style={{ fontSize: '36px' }}>
                    Random Quote Machine
                  </h3>
                </div>
              </div>
              {loading ? (
                <Spinner />
              ) : (
                <Fragment>
                  <div className="card-body">
                    <blockquote className="blockquote" id="text">
                      <p>{content}</p>
                    </blockquote>
                    <footer className="blockquote-footer" id="author">
                      {author}
                    </footer>

                    <div className="col mt-3">
                      <a href="twitter.com/intent/tweet" id="tweet-quote">
                        <i
                          className="fab fa-twitter mr-3"
                          style={{ fontSize: '30px' }}
                        />
                      </a>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.getNewQuote}
                        id="new-quote"
                      >
                        Click for a new quote
                      </button>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;

import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';

class QuoteMachine extends Component {
  state = {
    quote: {
      content: '',
      author: ''
    },
    bgColor: '',
    loading: false
  };

  componentDidMount() {
    this.setState({ ...this.state, bgColor: this.getColor() });
  }

  getColor = () => {
    let colors = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'dark'
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  getNewQuote = async () => {
    this.setState({ ...this.state, loading: true, bgColor: this.getColor() });

    try {
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
      }, 500);
    } catch (error) {
      this.setState({
        ...this.state,
        quote: { content: 'SERVER ERROR', author: '' },
        loading: false
      });
    }
  };

  render() {
    const {
      quote: { content, author },
      loading,
      bgColor
    } = this.state;

    const encoded = encodeURIComponent(`"${content}" -${author}`);

    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mx-auto my-5">
            <div className="card text-center" id="quote-box">
              <div className={`card-header bg-${bgColor} text-white`}>
                <div className="card-title">
                  <h3 className="display-4 p-2" style={{ fontSize: '36px' }}>
                    Random Quote Machine
                  </h3>
                </div>
              </div>
              {loading ? (
                <Spinner color={bgColor} />
              ) : (
                <Fragment>
                  <div className="card-body">
                    <blockquote className="blockquote" id="text">
                      <p>{content}</p>
                    </blockquote>
                    <footer className="blockquote-footer mb-2" id="author">
                      {author}
                    </footer>

                    <div className="d-flex justify-content-center">
                      {author.length > 0 && (
                        <a
                          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encoded}`}
                          id="tweet-quote"
                        >
                          <i
                            className={`fab fa-twitter fa-2x mr-3 text-${bgColor}`}
                          />
                        </a>
                      )}

                      <button
                        type="button"
                        className={`btn btn-${bgColor} text-white`}
                        onClick={this.getNewQuote}
                        id="new-quote"
                      >
                        New Quote
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

import React from 'react';
import Stopwatch from './Stopwatch';
import Countdown from './Countdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStopWatch: false,
      showCountdown: false,
    };
  }
  handleClick = ({ target }) => {
    let { name } = target;
    if (name == 'stopwatch') {
      return this.setState({
        showStopWatch: true,
      });
    }
    if (name == 'countdown') {
      return this.setState({
        showCountdown: true,
      });
    }
  };

  handleClickOnClose = (name) => {
    if (name == 'stopwatch') {
      return this.setState({
        showStopWatch: false,
      });
    }
    if (name == 'countdown') {
      return this.setState({
        showCountdown: false,
      });
    }
  };

  render() {
    return (
      <>
        <h1 className="text-3xl py-7 font-bold text-white text-center">
          🚀 Timers 🚀
        </h1>
        {this.state.showStopWatch ? (
          <Stopwatch handleClickOnClose={this.handleClickOnClose} />
        ) : (
          <div className="text-center">
            <button
              onClick={this.handleClick}
              className="text-white hover:bg-black my-9 px-4 py-1 rounded bg-[#212A33]"
              name="stopwatch"
              type="button"
            >
              Show Stopwatch
            </button>
          </div>
        )}

        {this.state.showCountdown ? (
          <Countdown handleClickOnClose={this.handleClickOnClose} />
        ) : (
          <div className="text-center">
            <button
              onClick={this.handleClick}
              name="countdown"
              className="text-white hover:bg-black my-9 px-4 py-1 rounded bg-[#212A33]"
              type="button"
            >
              Show Countdown
            </button>
          </div>
        )}
      </>
    );
  }
}

export default App;

import React from 'react';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };
  }

  updateTimer = (input) => {
    let { timerOn, timerTime } = this.state;
    if (!timerOn) {
      switch (input) {
        case 'incseconds':
          return timerTime + 1000;
        case 'incminutes':
          return timerTime + 60000;
        case 'inchours':
          return timerTime + 3600000;
        case 'dechours':
          return timerTime - 3600000;
        case 'decminutes':
          return timerTime - 60000;
        case 'decseconds':
          return timerTime - 1000;
        default:
          return;
      }
    }
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
    });

    this.timer = setInterval(() => {
      let { timerTime } = this.state;
      const newTime = timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime,
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert('count Down Ended');
      }
    }, 10);
  };

  handleClick = (name) => {
    this.setState({
      timerTime: this.updateTimer(name),
    });
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      timerOn: false,
    });
  };

  resetTime = () => {
    this.setState({
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    });
  };

  render() {
    let { timerOn, timerStart, timerTime } = this.state;
    let seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ('0' + Math.floor((timerTime / 3600000) % 60)).slice(-2);
    return (
      <div className="bg-[#161B1F] w-[400px] m-auto flex flex-col items-center border-[#818081] border-2 border-solid ">
        <div className="w-full flex justify-center">
          <h1 className="font-bold text-center text-2xl  mr-10 text-white">
            Countdown
          </h1>
          <button
            onClick={() => this.props.handleClickOnClose('countdown')}
            className="bg-black text-xs font-thin text-white  px-3 py-1 rounded hover:bg-white hover:text-black"
          >
            close
          </button>
        </div>

        <div className="font-bold text-[18px] text-center my-7 text-white w-full">
          hours:minutes:seconds
        </div>
        <div class="countdown-display">
          <button
            onClick={() => this.handleClick('inchours')}
            className="upbtn"
          >
            ⬆
          </button>
          <button
            onClick={() => this.handleClick('incminutes')}
            className="upbtn"
          >
            ⬆
          </button>
          <button
            onClick={() => this.handleClick('incseconds')}
            className="upbtn"
          >
            ⬆
          </button>
          <div className="countdown-time text-white">
            {hours} : {minutes} : {seconds}
          </div>
          <button
            onClick={() => this.handleClick('dechours')}
            className="upbtn"
          >
            ⬇
          </button>
          <button
            onClick={() => this.handleClick('decminutes')}
            className="upbtn"
          >
            ⬇
          </button>
          <button
            onClick={() => this.handleClick('decseconds')}
            className="upbtn"
          >
            ⬇
          </button>
        </div>

        <div className="my-4">
          {!this.state.timerOn && (
            <button
              onClick={this.startTimer}
              className="bg-[#212A33] text-white px-5 py-2 mb-4 rounded hover:bg-white hover:text-black"
            >
              Start
            </button>
          )}

          {this.state.timerOn && this.state.timerTime >= 1000 && (
            <button
              onClick={this.stopTimer}
              className="bg-[#212A33] text-white px-5 py-2 mb-4 rounded hover:bg-white hover:text-black"
            >
              Stop
            </button>
          )}
        </div>

        {/* {timerOn === false &&
          timerStart !== 0 &&
          timerStart !== timerTime &&
          timerTime !== 0 && (
            <button className="Button-start" onClick={this.startTimer}>
              Resume
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          timerStart !== timerTime &&
          timerStart > 0 && (
            <button className="Button-reset" onClick={this.resetTimer}>
              Reset
            </button>
          )} */}
      </div>
    );
  }
}

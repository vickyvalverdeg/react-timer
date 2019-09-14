import React, { Component } from 'react';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
const startTime = Date.now();
let runTimer;

export default class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
      }
    }

    startTimer(){
      runTimer = setInterval(() => {
        let timeDifference = Date.now() - startTime;
        let seconds = timeDifference / 1000
        let minutes = seconds / 60
        let leftoverSeconds = seconds % 60
        let leftoverMillis = timeDifference % 1000 / 10
        this.setState({
          milliseconds: leftoverMillis,
          seconds: leftoverSeconds,
          minutes: minutes,
        });
      }, 10);
    }

    stopTimer(){
      setTimeout(() => { clearInterval(runTimer); }, 0);
    }

    render() {
      let { milliseconds, seconds, minutes } = this.state;
      let time = `${minutes.toFixed(1)}:${seconds.toFixed(2)}:${milliseconds.toFixed(2)}`;
      this.startTimer();
      return (
        <View style={styles.container}>
          <Text style={styles.textTimer}>{time}</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 150,
    },
    textTimer: {
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 15,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
  });
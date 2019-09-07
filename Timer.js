import React, { Component } from 'react';
import {
    StyleSheet,
    Text
  } from 'react-native';

export default class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
      }
  
      let startTime = Date.now();
      setInterval(() => {
        let timeDifference = Date.now() - startTime;
        let seconds = timeDifference / 1000;
        let minutes = seconds / 60;
        let leftoverSeconds = seconds % 60;
        let leftoverMillis = timeDifference % 1000 / 10;
        this.setState({
          milliseconds: leftoverMillis,
          seconds: leftoverSeconds,
          minutes: minutes,
        });
      }, 10);
    }
  
    render() {
      let { milliseconds, seconds, minutes } = this.state;
      let time = `${minutes}:${seconds}:${milliseconds}`;
      return (
        <Text>{time}</Text>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });
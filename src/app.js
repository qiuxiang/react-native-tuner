import React, {Component} from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native'
import Tuner from './tuner'
import Note from './note'

export default class App extends Component {
  state = {
    note: {
      name: 'A',
      octave: 4,
      frequency: 440,
    },
  }

  _update(note) {
    this.setState({note})
  }

  componentDidMount() {
    const tuner = new Tuner()
    tuner.start()
    tuner.onNoteDetected = note => {
      if (this._lastNoteName === note.name) {
        this._update(note)
      } else {
        this._lastNoteName = note.name
      }
    }
  }

  render() {
    return <View style={style.body}>
      <StatusBar barStyle='dark-content' backgroundColor='rgba(0, 0, 0, 0)' translucent/>
      <Note {...this.state.note}/>
      <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
    </View>
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frequency: {
    fontSize: 32,
  },
})
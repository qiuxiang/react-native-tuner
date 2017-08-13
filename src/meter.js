import React, {PureComponent} from 'react'
import {View, StyleSheet} from 'react-native'

export default class Meter extends PureComponent {
  render() {
    return <View style={style.meter}>
      <View style={style.dot}/>
      <View style={style.pointer}/>
      <View style={[style.scale, style.scale_5, style.scale_strong]}/>
      <View style={[style.scale, style.scale_4]}/>
      <View style={[style.scale, style.scale_3]}/>
      <View style={[style.scale, style.scale_2]}/>
      <View style={[style.scale, style.scale_1]}/>
      <View style={[style.scale, style.scale_strong]}/>
      <View style={[style.scale, style.scale1]}/>
      <View style={[style.scale, style.scale2]}/>
      <View style={[style.scale, style.scale3]}/>
      <View style={[style.scale, style.scale4]}/>
      <View style={[style.scale, style.scale5, style.scale_strong]}/>
    </View>
  }
}

const style = StyleSheet.create({
  meter: {
    height: 200,
  },
  dot: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  pointer: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: 2,
    height: 400,
    borderTopWidth: 200,
    borderTopColor: '#000',
  },
  scale: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: 1,
    height: 400,
    borderTopWidth: 10,
    borderTopColor: '#000',
  },
  scale_strong: {
    width: 2,
    borderTopWidth: 20,
  },
  scale_1: {
    transform: [{rotate: '-9deg'}],
  },
  scale_2: {
    transform: [{rotate: '-18deg'}],
  },
  scale_3: {
    transform: [{rotate: '-27deg'}],
  },
  scale_4: {
    transform: [{rotate: '-36deg'}],
  },
  scale_5: {
    transform: [{rotate: '-45deg'}],
  },
  scale1: {
    transform: [{rotate: '9deg'}],
  },
  scale2: {
    transform: [{rotate: '18deg'}],
  },
  scale3: {
    transform: [{rotate: '27deg'}],
  },
  scale4: {
    transform: [{rotate: '36deg'}],
  },
  scale5: {
    transform: [{rotate: '45deg'}],
  },
})
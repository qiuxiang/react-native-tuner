import React, { PureComponent } from "react";
import { View, StyleSheet, Animated } from "react-native";

export default class Meter extends PureComponent {
  state = {
    cents: new Animated.Value(0)
  };

  componentWillReceiveProps(props) {
    Animated.timing(this.state.cents, {
      toValue: props.cents,
      duration: 500
    }).start();
  }

  render() {
    const cents = this.state.cents.interpolate({
      inputRange: [-50, 50],
      outputRange: ["-45deg", "45deg"]
    });

    const pointerStyle = {
      transform: [{ rotate: cents }]
    };

    return (
      <View style={style.meter}>
        <View style={style.origin} />
        <Animated.View
          style={[style.scale, style.strong, style.pointer, pointerStyle]}
        />
        <View style={[style.scale, style.scale_5, style.strong]} />
        <View style={[style.scale, style.scale_4]} />
        <View style={[style.scale, style.scale_3]} />
        <View style={[style.scale, style.scale_2]} />
        <View style={[style.scale, style.scale_1]} />
        <View style={[style.scale, style.strong]} />
        <View style={[style.scale, style.scale1]} />
        <View style={[style.scale, style.scale2]} />
        <View style={[style.scale, style.scale3]} />
        <View style={[style.scale, style.scale4]} />
        <View style={[style.scale, style.scale5, style.strong]} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  meter: {
    height: 200,
    marginBottom: 40
  },
  origin: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#37474f"
  },
  pointer: {
    borderTopWidth: 195
  },
  scale: {
    position: "absolute",
    left: 0,
    right: 0,
    width: 1,
    height: 400,
    borderTopWidth: 10,
    borderTopColor: "#37474f",
    marginLeft: 4.5
  },
  strong: {
    width: 2,
    borderTopWidth: 20
  },
  scale_1: {
    transform: [{ rotate: "-9deg" }]
  },
  scale_2: {
    transform: [{ rotate: "-18deg" }]
  },
  scale_3: {
    transform: [{ rotate: "-27deg" }]
  },
  scale_4: {
    transform: [{ rotate: "-36deg" }]
  },
  scale_5: {
    transform: [{ rotate: "-45deg" }]
  },
  scale1: {
    transform: [{ rotate: "9deg" }]
  },
  scale2: {
    transform: [{ rotate: "18deg" }]
  },
  scale3: {
    transform: [{ rotate: "27deg" }]
  },
  scale4: {
    transform: [{ rotate: "36deg" }]
  },
  scale5: {
    transform: [{ rotate: "45deg" }]
  }
});

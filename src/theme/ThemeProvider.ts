import React from "react";
import { Text, TextInput } from "react-native";

export const setupGlobalStyles = () => {
  const TextRender = Text.render;
  Text.render = function (...args) {
    const originResult = TextRender.apply(this, args);
    return React.cloneElement(originResult, {
      style: [{ fontFamily: "Mulish_400Regular" }, originResult.props.style],
    });
  };

  const TextInputRender = TextInput.render;
  TextInput.render = function (...args) {
    const originResult = TextInputRender.apply(this, args);
    return React.cloneElement(originResult, {
      style: [{ fontFamily: "Mulish_400Regular" }, originResult.props.style],
    });
  };
};

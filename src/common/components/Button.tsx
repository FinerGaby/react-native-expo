import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  View,
  TextStyle,
  StyleProp,
} from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

const Button = ({
  title,
  style,
  disabled = false,
  leftIcon,
  rightIcon,
  textStyle,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? "#e6eeff" : "#035AC5" },
        style,
      ]}
      {...rest}
      disabled={disabled}
    >
      <View style={styles.content}>
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        <Text
          style={[
            styles.text,
            { color: disabled ? "#B0B0B0" : "#FFFFFF" },
            textStyle,
          ]}
        >
          {title}
        </Text>
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;

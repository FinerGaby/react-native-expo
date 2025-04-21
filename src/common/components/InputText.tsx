import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  maxLength?: number;
  placeholder?: string;
  label?: string;
};

const InputText = ({
  value,
  onChangeText,
  maxLength = 140,
  placeholder = "Añade una descripción del pago",
  label = "Concepto",
}: Props) => {
  const [inputHeight, setInputHeight] = useState(56);
  const [isFocused, setIsFocused] = useState(false);

  const handleContentSizeChange = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
  ) => {
    setInputHeight(event.nativeEvent.contentSize.height);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputWrapper,
          { borderColor: isFocused ? "#035AC5" : "#C5D3E3" },
        ]}
      >
        <TextInput
          multiline
          value={value}
          onChangeText={(text) => {
            if (text.length <= maxLength) onChangeText(text);
          }}
          style={[styles.input, { height: inputHeight }]}
          placeholder={placeholder}
          maxLength={maxLength}
          onContentSizeChange={handleContentSizeChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          textAlignVertical="top"
        />
      </View>
      {isFocused && (
        <Text style={styles.charCount}>
          {value.length}/{maxLength} caracteres
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0a1a45",
    marginBottom: 8,
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  input: {
    fontSize: 14,
    color: "#0a1a45",
    padding: 5,
  },
  charCount: {
    fontSize: 12,
    color: "#8B98AA",
    textAlign: "right",
    marginTop: 8,
  },
});

export default InputText;

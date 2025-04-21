import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type ActionOption = {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  rightContent?: React.ReactNode;
};

export const ActionOption = ({
  icon,
  label,
  onPress,
  rightContent,
}: ActionOption) => {
  return (
    <TouchableOpacity style={styles.actionOption} onPress={onPress}>
      <View style={styles.actionLeft}>
        {icon}
        <Text style={styles.actionLabel}>{label}</Text>
      </View>
      {rightContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 6,
    marginVertical: 8,
  },
  actionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionLabel: {
    fontSize: 14,
    color: "#333",
    marginLeft: 12,
  },
});

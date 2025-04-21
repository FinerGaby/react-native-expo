import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const CopyableLink = ({
  link,
  handleCopy,
}: {
  link: string;
  handleCopy: () => void;
}) => {
  return (
    <View style={styles.linkContainer}>
      <View style={styles.linkTextContainer}>
        <Image
          source={require("../../assets/link.png")}
          resizeMode="contain"
          style={styles.linkIcon}
        />
        <Text style={styles.linkText} numberOfLines={1} ellipsizeMode="middle">
          {link
            .replace("https://paytest.bitnovo.com/", "paytest.bitnovo.com/")
            .replace(/\/$/, "")}
        </Text>
      </View>
      <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
        <Image
          source={require("../../assets/scan-barcode.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    overflow: "hidden",
  },
  linkTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  linkIcon: {
    marginRight: 10,
  },
  linkText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    padding: 4,
  },
  copyButton: {
    backgroundColor: "#035AC5",
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    borderRadius: 6,
  },
});

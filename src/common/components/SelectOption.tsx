import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface GenericListScreenProps<T> {
  data: T[];
  selectedItem: T;
  onSelect: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
  searchKey: keyof T;
}

export const SelectOption = <T extends object>({
  data,
  selectedItem,
  onSelect,
  renderItem,
  searchKey,
}: GenericListScreenProps<T>) => {
  const [searchText, setSearchText] = useState("");

  const filteredData = data.filter((item) =>
    String(item[searchKey]).toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            {renderItem(item)}
            {selectedItem === item ? (
              <Ionicons name="checkmark-circle" size={24} color="#71b0fd" />
            ) : (
              <Ionicons name="chevron-forward" size={24} color="#CCCCCC" />
            )}
          </TouchableOpacity>
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
  },
  list: {
    marginTop: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

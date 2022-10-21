import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { searchRestaurants as yelp } from "../api/apis";
import RestaurantList from "../components/RestaurantList";
import SearchBar from "../components/SearchBar";
import { groupRecordsByPrice } from "../utils/arrays";

const HomeScreen = ({ navigation }) => {
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (term) => {
    if (term) {
      try {
        const response = await yelp({ term });
        setSearchResult(response.data.businesses);
      } catch (error) {}
    }
  };

  const renderItems = () => {
    const [costEffective, bitPricier, bigSpender] =
      groupRecordsByPrice(searchResult);

    return (
      <ScrollView>
        <Text
          style={{ textAlign: "center", marginBottom: 20, fontStyle: "italic" }}
        >
          We found {searchResult.length} results
        </Text>
        <RestaurantList
          items={costEffective}
          title="Cost Effective"
        />
        <View style={styles.spaced}>
          <RestaurantList
              items={bitPricier}
            title="Bit Pricier"
          />
        </View>
        <RestaurantList
          items={bigSpender}
          title="Big Spender!"
        />
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar onSubmit={handleSearch} />

      {Boolean(searchResult.length) && renderItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  spaced: {
    marginVertical: 30,
  },
});

export default HomeScreen;

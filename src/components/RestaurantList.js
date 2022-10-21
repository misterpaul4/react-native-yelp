import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import FALLBACK_IMG from "../../assets/empty-image.png";
import { paths } from "../utils/paths";

const RestaurantList = ({ title, items, navigation }) => {
  const navigate = navigation.navigate;

  return (
    <View>
      <Text style={styles.header}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigate(paths.Details, { id: item.id })}
          >
            <View style={styles.spaced}>
              <Image
                style={styles.image}
                source={item.image_url ? { uri: item.image_url } : FALLBACK_IMG}
              />
              <Text>{item.name}</Text>
              <Text style={styles.ratings}>
                {item.rating} Stars, {item.review_count} reviews
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    height: 120,
    width: 240,
    borderRadius: 2,
    marginVertical: 10,
  },
  spaced: {
    marginRight: 20,
  },
  ratings: {
    color: "grey",
    marginTop: 1,
  },
});

export default withNavigation(RestaurantList);

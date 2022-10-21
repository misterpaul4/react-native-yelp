import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { restaurantDetails as yelp } from "../api/apis";

const DetailsScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [details, setDetails] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await yelp(id);
        response.data && setDetails(response.data);
      } catch (error) {}
    };

    getDetails();
  }, []);

  return (
    <View>
      {details && (
        <View>
          <Text>{details.name}</Text>
          <FlatList
            data={details.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => (
              <Image style={styles.image} source={{ uri: item }} />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
});

export default withNavigation(DetailsScreen);

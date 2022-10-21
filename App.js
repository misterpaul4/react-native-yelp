import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { paths, pathsComponent } from "./src/utils/paths";

const navigator = createStackNavigator(pathsComponent, {
  initialRouteName: paths.Home,
  defaultNavigationOptions: {
    title: "Business Search",
  },
});

// createAppContainer makes sure we export a react component
export default createAppContainer(navigator);

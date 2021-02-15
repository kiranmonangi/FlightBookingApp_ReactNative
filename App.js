import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FlightSearch from './src/screens/FlightSearch';
import FlightResults from './src/screens/FlightResults';
import UserDetails from './src/screens/UserDetails';
import Conformation from './src/screens/Conformation';

const navigator = createStackNavigator(
  {
    Home: FlightSearch,
    ResultFlight: FlightResults,
    DetailsUser: UserDetails,
    ConformationPage: Conformation,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);

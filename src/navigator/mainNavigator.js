import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps167323Navigator from '../features/Maps167323/navigator';
import UserProfile167319Navigator from '../features/UserProfile167319/navigator';
import BlankScreen0143859Navigator from '../features/BlankScreen0143859/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps167323: { screen: Maps167323Navigator },
UserProfile167319: { screen: UserProfile167319Navigator },
BlankScreen0143859: { screen: BlankScreen0143859Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Text,
  View,
  Button,
} from 'react-native';
import MainTabScreen from './screens/MainTabScreen';

import { DrawerContent } from './screens/DrawerContent';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';

import RootStackScreen from './screens/RootStackScreen';

// import Icon from 'react-native-vector-icons/Ionicons';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';



// const HomeScreen = ({navigation}) => {
//   return(
//     <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button 
//       title="Go to Details Page"
//       onPress={() => navigation.navigate("Details")}>
//       </Button>
//     </View>
//   );
// }

// const DetailsScreen = ({navigation}) => {
//   return(
//     <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button 
//       title="Go to details screen... again"
//       onPress={() => navigation.push("Details")}>
//       </Button>
//       <Button 
//       title="Go to Home"
//       onPress={() => navigation.navigate("Home")}>
//       </Button>
//       <Button 
//       title="Go back"
//       onPress={() => navigation.goBack()}>
//       </Button>
//       <Button 
//       title="Go to the first screen"
//       onPress={() => navigation.popToTop()}>
//       </Button>
//     </View>
//   );
// }




// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

const Drawer = createDrawerNavigator();




// const HomeStackScreen = ({navigation}) => {

//   return(
//   <HomeStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#009387'
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold'
//     }
//   }}>

//     <HomeStack.Screen name="Home" component={HomeScreen} options={{
//         title:'Home Screen',
//         headerLeft: () => (
//           <Icon.Button name="ios-menu" size={25}
//           backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />

//     </HomeStack.Navigator>
//   );

// };

// const DetailsStackScreen = ({navigation}) => {

//   return(
//   <DetailsStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#009387'
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold'
//     }
//   }}>

//     <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//       title: 'Details Screen',
//       headerLeft: () => (
//         <Icon.Button name="ios-menu" size={25}
//       backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )

//         }} />

//     </DetailsStack.Navigator>
//   );

// };


const App = () => {
  return (
    <NavigationContainer>

      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator> */}

      <RootStackScreen />

      {/* <Drawer.Navigator initialRouteName="Home" drawerContent={probs => <DrawerContent {... probs}/>}>
      <Drawer.Screen name="Home" component={MainTabScreen} />
      <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} /> */}


      
        {/* <Drawer.Screen name="Home" component={HomeStackScreen} /> */}
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      {/* </Drawer.Navigator> */}


      {/* <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}> */} 
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{
        title:'OverView'
        }} />

        {/* Header(AppBar Design) for Each screen */}
{/* 
<Stack.Screen name="Home" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#009387'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} /> */}
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';



import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {

    return(

    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="ios-home" color={color} size={size} />
        ),
      }}
    />
     <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarIcon: ({ color, size }) => (
          <Icon name="ios-bookmarks" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color, size }) => (
          <Icon name="ios-american-football" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name="ios-person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>

    );

};

export default MainTabScreen;


const HomeStackScreen = ({navigation}) => {

    return(
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Home Screen',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  
      </HomeStack.Navigator>
    );
  
  };
  
  const DetailsStackScreen = ({navigation}) => {
  
    return(
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        title: 'Details Screen',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
        backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
  
          }} />
  
      </DetailsStack.Navigator>
    );
  
  };

  const ExploreStackScreen = ({navigation}) => {
  
    return(
    <ExploreStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  
      <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
        title: 'Explore Screen',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
        backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
  
          }} />
  
      </ExploreStack.Navigator>
    );
  
  };

  const ProfileStackScreen = ({navigation}) => {
  
    return(
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
  
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        title: 'Profile Screen',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
        backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
  
          }} />
  
      </ProfileStack.Navigator>
    );
  
  };
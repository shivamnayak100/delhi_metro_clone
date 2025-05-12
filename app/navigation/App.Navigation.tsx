import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Icon from '@expo/vector-icons';
import Colors from '../constants/Colors';

import LineInfoScreen from '../screen/LineInfoScreen';
import RouteFinderScreen from '../screen/RouteFinderScreen';
import StationListScreen from '../screen/StationListScreen';
import MapViewScreen from '../screen/MapViewScreen';

// Define stack and tab navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for StationListScreen and LineInfoScreen
function StationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StationList" component={StationListScreen} />
      <Stack.Screen name="LineInfo" component={LineInfoScreen} />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
export default function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.primary.regular,
          tabBarInactiveTintColor: Colors.secondary.dark,
          tabBarIcon: ({ color }) => {
            switch (route.name) {
              case 'StationStack':
                return <Icon.Feather name="list" size={30} color={color} />;
              case 'RouteFinder':
                return <Icon.FontAwesome name="location-arrow" size={30} color={color} />;
              case 'MapView':
                return <Icon.MaterialIcons name="map" size={30} color={color} />;
              default:
                return null;
            }
          },
        })}
      >
        <Tab.Screen name="StationStack" component={StationStack} />
        <Tab.Screen name="RouteFinder" component={RouteFinderScreen} />
        <Tab.Screen name="MapView" component={MapViewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

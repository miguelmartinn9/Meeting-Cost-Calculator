import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Atendees from '../screens/Atendees'
import TimeTracking from '../screens/TimeTracking'
import MeetingSummary from '../screens/MeetingSummary'




const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const atendeesStack = createStackNavigator(
  {
    Atendees,
    TimeTracking,
    MeetingSummary,
  },
  {
    initialRouteName: 'Atendees'

  },
  config
);

atendeesStack.navigationOptions = {
  tabBarLabel: 'Add atendees to the meeting',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

atendeesStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  atendeesStack,
  LinksStack,
  SettingsStack,
  

});

tabNavigator.path = '';

export default tabNavigator;

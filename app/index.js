import React from 'react';
import {
  DrawerNavigator,
  StackNavigator,
  DrawerItems
} from 'react-navigation';

import { ScrollView } from 'react-native';

import HelloWorld from './pages/HelloWorld';
import Gps from './pages/Gps';
import Dialogs from './pages/Dialogs';
import StackContainer from './pages/Stack/';
import TabContainer from './pages/Tabs/';
import Push from './pages/Push';
import Request from './pages/Request';
import AnimationsContainer from './pages/Animations/';
import Capture from './pages/Capture';
import CameraAccess from './pages/CameraAccess';
import AnimatableView from './pages/Animatable';
import Flexbox from './pages/Flexbox';

const Drawer = DrawerNavigator({
  HelloWorld: { screen: HelloWorld },
  Flexbox: { screen: Flexbox },
  Dialogs: { screen: Dialogs },
  Stack: { screen: StackContainer },
  TabContainer: { screen: TabContainer },
  Push: { screen: Push },
  Request: { screen: Request },
  Animations: { screen: AnimationsContainer },
  Animatable: { screen: AnimatableView },
  Capture: { screen: Capture },
  CameraAccess: { screen: CameraAccess },
  Gps: { screen: Gps }
}, {
  contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
});

const App = StackNavigator({
  Main: { screen: Drawer }
});

export default App;
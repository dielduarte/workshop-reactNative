import React from 'react';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';

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

const Drawer = DrawerNavigator({
  HelloWorld: { screen: HelloWorld },
  Gps: { screen: Gps },
  Dialogs: { screen: Dialogs },
  Stack: { screen: StackContainer },
  TabContainer: { screen: TabContainer },
  Push: { screen: Push },
  Request: { screen: Request },
  Animations: { screen: AnimationsContainer },
  Capture: { screen: Capture },
  CameraAccess: { screen: CameraAccess }
});

const App = StackNavigator({
  Main: { screen: Drawer }
});

export default App;
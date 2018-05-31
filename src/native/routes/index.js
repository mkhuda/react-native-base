import React from 'react';
import { ActionConst, Stack, Scene } from 'react-native-router-flux';

import DefaultProps from '../constants/navigation';

import AuthComponent from '../components/Auth';
import AuthContainer from '../../containers/Auth';

import HomeComponent from '../components/scenes/Home';

import CameraTestComponent from '../components/scenes/CameraTest';

const TRUE = true;
const Index = (
  <Stack key="mainstack">
    <Scene
      hideNavBar
      key="auth"
      {...DefaultProps.navbarProps}
      component={AuthContainer}
      Layout={AuthComponent}
      initial={TRUE}
      type={ActionConst.REPLACE}
    />

    {
      // Main Scenes
    }
    <Scene
      hideNavBar
      key="home"
      {...DefaultProps.navbarProps}
      component={HomeComponent}
      type={ActionConst.REPLACE}
    />

    <Scene
      hideNavBar
      key="camera_test"
      {...DefaultProps.navbarProps}
      component={CameraTestComponent}
    />
  </Stack>
);

export default Index;

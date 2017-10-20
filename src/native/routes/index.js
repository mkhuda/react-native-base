import React from 'react';
import { ActionConst, Drawer, Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import AuthComponent from '../components/Auth';
import AuthContainer from '../../containers/Auth';

import HomeComponent from '../components/scenes/Home';
import CustomerComponent from '../components/scenes/Customer';
import PayplanProcessComponent from '../components/scenes/PayplanProcess';
import DoValidComponent from '../components/scenes/DoValid';
import PayplanDoneComponent from '../components/scenes/PayplanDone';
import DoUnpaidComponent from '../components/scenes/DoUnpaid';
import DoCashComponent from '../components/scenes/DoCash';

const Index = (
    <Stack key="mainstack">
      <Scene
          hideNavBar
          key="auth"
          {...DefaultProps.navbarProps}
          component={AuthContainer}
          Layout={AuthComponent}
          initial={true}
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
          key="customer"
          {...DefaultProps.navbarProps}
          component={CustomerComponent}
        />
        <Scene
          hideNavBar
          key="payplanprocess"
          {...DefaultProps.navbarProps}
          component={PayplanProcessComponent}
        />
        <Scene
          hideNavBar
          key="dovalid"
          {...DefaultProps.navbarProps}
          component={DoValidComponent}
        />
        <Scene
          hideNavBar
          key="dounpaid"
          {...DefaultProps.navbarProps}
          component={DoUnpaidComponent}
        />
        <Scene
          hideNavBar
          key="payplandone"
          {...DefaultProps.navbarProps}
          component={PayplanDoneComponent}
        />
        <Scene
          hideNavBar
          key="docash"
          {...DefaultProps.navbarProps}
          component={DoCashComponent}
        />
        {
          // End Scenes importir
        }
    </Stack>
);

export default Index;

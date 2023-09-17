import 'react-native-gesture-handler';

import React, {useContext} from 'react';
import {
  List,
  Searchbar,
  Switch,
  useTheme as paperTheme,
} from 'react-native-paper';
import {useTheme as navTheme} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import Statusbar from '../components/Statusbar';
import {ThemeContext, ThemeContextObject} from '../app/context_providers';

export default function SettingsScreen() {
  const {colors: navColors, dark} = navTheme();
  const {colors: paperColors} = paperTheme();
  const {setTheme} = useContext<ThemeContextObject>(ThemeContext);

  function appearanceSwitch() {
    return (
      <Switch
        value={dark}
        onValueChange={value => setTheme(value ? 'dark' : 'light')}
      />
    );
  }
  return (
    <>
      <Statusbar />
      <ScrollView>
        <List.Item title="Dark Appearance" right={appearanceSwitch} />
        <List.Accordion title="React-Navigation Colors">
          {Object.entries(navColors).map(([key, value]) => (
            <List.Item
              key={key}
              title={`Nav - Color ${key}`}
              style={{backgroundColor: value}}
            />
          ))}
        </List.Accordion>
        <List.Accordion title="React-Native-Paper Colors">
          {Object.entries(paperColors).map(([key, value]) => (
            <List.Item
              key={key}
              title={`Paper - Color ${key}`}
              style={{backgroundColor: value.toString()}}
            />
          ))}
        </List.Accordion>
        <Searchbar value="" placeholder="Search ..." />
      </ScrollView>
    </>
  );
}

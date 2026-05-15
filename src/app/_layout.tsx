import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <Tabs initialRouteName="index" screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="cadastro" />
      <Tabs.Screen name="preview" />
      <Tabs.Screen name="sucesso" />
    </Tabs>
  )
}
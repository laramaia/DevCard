import { Tabs } from 'expo-router';

import { CardProvider } from './context/CardContext';

export default function RootLayout() {
  return (
    <CardProvider>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="cadastro" />
        <Tabs.Screen name="preview" />
        <Tabs.Screen name="sucesso" />
      </Tabs>
    </CardProvider>
  );
}
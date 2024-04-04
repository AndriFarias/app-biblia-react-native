import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Book from './src/components/book.component';
import BookDetails from './src/components/bookDetails.component';
import Chapter from './src/components/chapter.component';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Biblia Digital">
        <Stack.Screen name="Biblia Digital" component={Book} />
        <Stack.Screen name="Capítulos" component={BookDetails} />
        <Stack.Screen name="Versículos" component={Chapter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "@/hooks/useCachedResources";
import useColorScheme from "@/hooks/useColorScheme";
import Navigation from "@/layout/navigation/Navigation";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TailwindProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </TailwindProvider>
      </SafeAreaProvider>
    );
  }
}

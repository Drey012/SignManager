import React from "react";
import { useColorScheme, View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function App() {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : null}>
            
        </NavigationContainer>
    );
}
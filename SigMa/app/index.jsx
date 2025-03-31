import React from "react";
import { useColorScheme, View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { NavigationIndependentTree } from "@react-navigation/native";

export default function App() {
    const colorScheme = useColorScheme();

    return (
        <NavigationIndependentTree>
        <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : null}>
            <View>
                oi
            </View>
        </NavigationContainer>
        </NavigationIndependentTree>
    );
}
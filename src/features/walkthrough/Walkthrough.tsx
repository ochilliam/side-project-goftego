import { walkthrough } from "@/constants/DummyData";
import { deviceHeight, deviceWith } from "@/constants/Layout";
import React, { useRef } from "react";
import { Animated, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WalkthroughFooter } from "./components/footer/WalkthroughFooter";
import { Dots } from "./components/indicator/dots";

/**
 *
 * TOOD: checkout rooks for a usefull custom hook and share scrollX among components
 */
export const Walkthrough = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Animated.FlatList
        data={walkthrough}
        keyExtractor={(item) => item.id as unknown as string}
        horizontal
        snapToInterval={deviceWith}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => (
          <View style={{ width: deviceWith }} className="justify-center">
            {/* Walkthrough images */}
            <View className="flex-1"></View>
            {/* Walkthrough title & description */}
            <View
              className="items-center justify-start px-6"
              style={{ height: deviceHeight * 0.35 }}
            >
              <Text>{item.title}</Text>
              <Text className="mt-6 text-center text-gray-500">
                {item.sub_title}
              </Text>
            </View>
          </View>
        )}
      />

      <WalkthroughFooter>
        <Dots scrollX={scrollX} />
        {/* login signup buttons */}
      </WalkthroughFooter>
    </SafeAreaView>
  );
};

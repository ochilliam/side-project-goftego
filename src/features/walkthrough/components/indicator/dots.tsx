import { walkthrough } from "@/constants/DummyData";
import { deviceWith } from "@/constants/Layout";
import React from "react";
import { Animated, View } from "react-native";

type Props = {
  scrollX: Animated.Mapping;
};
export const Dots = ({ scrollX }: Props) => {
  const dotPosition = Animated.divide(scrollX, deviceWith);

  return (
    <View className="flex-row justify-center items-center space-x-2">
      {walkthrough.map((_, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [
            // theme("colors.slate.900"),
            "rgb(147, 197, 253)",
            "rgb(59, 130, 246)",
            "rgb(147, 197, 253)",
          ],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`dot-${index}`}
            style={{ backgroundColor: dotColor }}
            className="w-2 h-2 my-12 rounded-full"
          />
        );
      })}
    </View>
  );
};

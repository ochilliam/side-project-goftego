import { deviceHeight, deviceWith } from "@/constants/Layout";
import React from "react";
import { View } from "react-native";

export const WalkthroughFooter = ({ children }) => {
  return (
    <View
      style={{
        height: deviceHeight * 0.2,
        paddingVertical: deviceWith > 700 ? 27 : 20,
      }}
      className="justify-center items-center absolute bottom-0 right-0 left-0 "
    >
      {children}
    </View>
  );
};

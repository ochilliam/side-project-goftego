import { walkthrough } from "constants/DummyData";
import { useRef } from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Walkthrough = () => {
  const { width } = Dimensions.get("window");
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Animated.FlatList
        data={walkthrough}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          }
        )}
        renderItem={({ item, index }) => (
          <View style={{ width }} className="justify-center items-center">
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

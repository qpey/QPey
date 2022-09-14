import {
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

type ScreenWrapperProps = ScrollViewProps & {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  scrollable?: boolean;
};
const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  contentContainerStyle,
  style,
  children,
  scrollable = false,
  ...props
}) => {
  const containerStyle = [styles.container, {backgroundColor: '#FFF'}];
  return (
    <React.Fragment>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      {scrollable ? (
        <ScrollView
          contentContainerStyle={contentContainerStyle}
          style={[containerStyle, style]}
          {...props}>
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, style]}>{children}</View>
      )}
    </React.Fragment>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

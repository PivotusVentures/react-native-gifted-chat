/**
 * Rendering a system message that is centered in the chat.
 * Created by tkfeng on 12/5/16.
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MessageSystem extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Text>
          This is a system message.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
  }
});

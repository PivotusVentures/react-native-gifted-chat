/**
 * Render a widget plug-in in the chat.
 * Created by tkfeng on 12/5/16.
 */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class WidgetMessage extends React.Component {
  static defaultProps = {
    title: 'Widget Title',
    body: 'The is the widget description area.'
  };
  static propTypes = {
    timestamp: React.PropTypes.number,
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    buttonText: React.PropTypes.string,
    buttonCallback: React.PropTypes.func
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.title}
        </Text>
        <Text>
          {this.props.body}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: '#f1f3f6',
    borderWidth: 2,
  }
});

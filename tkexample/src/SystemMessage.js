/**
 * Rendering a system message that centers in the chat.
 * Created by tkfeng on 12/5/16.
 */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class SystemMessage extends React.Component {
  static propTypes = {
    timestamp: React.PropTypes.number,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    buttonText: React.PropTypes.string,
    buttonCallback: React.PropTypes.func
  };

  render() {
    return (
      <View style={styles.chatMessageRoot}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={[styles.bodyText, styles.headerText]}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {this.props.body}
            </Text>
          </View>
          {this._renderButton()}
        </View>
        <Text style={styles.automatedMessageText}>
          {"automated message"}
        </Text>
      </View>
    );
  }

  _renderButton() {
    if (this.props.buttonText && this.props.buttonCallback) {
      return (
        <TouchableOpacity
          onPress={this.props.buttonCallback}
          style={styles.button}>
          <Text style={styles.buttonText}>
            {this.props.buttonText}
          </Text>
        </TouchableOpacity>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  chatMessageRoot: {
    flexDirection: 'column',
    marginTop: 15,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  wrapper: {
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: '#f1f3f6',
    borderWidth: 1,
  },
  header: {
    borderBottomColor: '#f1f3f6',
    paddingTop: 15,
    paddingBottom: 0,
    paddingRight: 8,
    paddingLeft: 16,
  },
  headerText: {
    color: '#11171e',
    fontSize: 16,
  },
  body: {
    paddingTop: 3,
    paddingBottom: 15,
    paddingRight: 8,
    paddingLeft: 16,
  },
  bodyText: {
    fontSize: 16,
    color: '#11171e',
  },
  button: {
    backgroundColor: '#49b4d5',
    padding: 15,
  },
  buttonText: {
    fontSize: 12,
    color: 'rgb(255, 255, 255)',
    alignSelf: 'center',
  },
  automatedMessageText: {
    color: '#94a0ac',
    fontSize: 12,
    paddingBottom: 10,
    marginLeft: 15,
  },
});


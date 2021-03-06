/**
 * Entry point to the tkexample app.
 * Created by tkfeng on 12/3/16.
 */
import React from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat';
import SystemMessage from './SystemMessage';
import WidgetMessage from './WidgetMessage';

export default class TKExample extends React.Component {
  state = {
    messages: [
      {
        _id: 30,
        text: 'This is a widget message',
        type: 'widget',
        widget: {
          iid: '123',
          widgetName: 'cv',
          widgetState: 'state1',
        },
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
      {
        _id: 20,
        text: "I'm trying this gifted chat out.",
        createdAt: new Date(Date.UTC(2016, 8, 30, 17, 20, 0)),
        user: {
          _id: 1,
          name: 'TK Feng',
        },
      },
      {
        _id: 10,
        text: 'Hello developer',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
      {
        _id: 5,
        text: 'System Test',
        createdAt: new Date(Date.UTC(2016, 6, 30, 17, 20, 0)),
        type: 'system',
        payload: {
          title: 'System Message',
          description: 'This message is from the system.',
        },
        user: {
          _id: 3,
          name: 'system',
        }
      }
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          renderTime={()=> {
          }}
          renderMessageSystem={this._renderSystemMessage}
          renderCustomView={this._renderCustomMessage}
          onWidgetPress={this._onWidgetPress}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }

  _renderCustomMessage = (props) => {
    const {_id, currentMessage: {type, payload}, ...other} = props;
    if (type === 'widget') {
      const widgetProps = {
          ...other,
        key: _id,
      };
      return <WidgetMessage {...widgetProps}/>;
    }

    return null;
  };

  _renderSystemMessage = (props) => {
    const {_id, payload: {title, description} } = props;
    const systemMessageProps = {
      key: _id,
      title,
      body: description,
    };
    return <SystemMessage {...systemMessageProps}/>;
  };

  _onWidgetPress = (iid, widgetName, widgetState) => {
    const alertMessage = 'iid: ' + iid + ' widget name: ' + widgetName + ' widget state: ' + widgetState;
    Alert.alert(
      'Widget Press',
      alertMessage,
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
  }
});
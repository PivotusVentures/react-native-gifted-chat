import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

export default class AddFile extends React.Component {
  render() {
    return (
      <TouchableHighlight style={styles.button} underlayColor='white' onPress={this.props.onAddFile}>
        <Text style={styles.buttonText} >+</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    letterSpacing: 0.6,
    fontSize: 18,
    color: 'rgb(178,187,197)',
  }
});

AddFile.defaultProps = {
  onAddFile: () => {},
};

AddFile.propTypes = {
  onAddFile: React.PropTypes.func,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Header, Title, Body, Left, Right, Icon, Form, Item, Label, Input, Text, Button } from 'native-base';
import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from '../Loading';
import Messages from '../Messages';
import Spacer from '../Spacer';
import { logout } from '../../../actions/user';

class DoValid extends Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    logout: PropTypes.func,
    do_valid: PropTypes.arrayOf(PropTypes.shape())
  }

  static defaultProps = {
    error: null,
    member: {},
  }
  constructor(props) {
    super(props);

    this._handleLogout = this._handleLogout.bind(this);
  }

  _handleLogout = () => {
    this.props.logout();
  }

  render() {

    return (
      <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name='ios-arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>DO Valid</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
        <View style={styles.container}>
          <View style={styles.containerhome}>
            <Text>Do Valid</Text>
          </View>
        </View>
        <Spacer size={20} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundtomato: {
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerhome: {
    width: '100%',
  },
});

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(DoValid);

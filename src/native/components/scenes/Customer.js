import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Header, Body, Title, Left, Right, Icon, Text, Button } from 'native-base';
import {StyleSheet, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Spacer from '../Spacer';
import { logout } from '../../../actions/user';

class Customer extends Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    logout: PropTypes.func,
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
              <Title>Customer</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
        <View style={styles.container}>
          <View style={styles.containerhome}>
            <Text>Customer</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Customer);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Icon, Form, Item, Label, Input, Text, Button, Footer, FooterTab } from 'native-base';
import {StyleSheet, View, Image, TouchableOpacity, Alert, BackHandler, ToastAndroid, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { logout } from '../../../actions/user';
import styles from './Style';

class Home extends React.Component {
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
    this._handleGo = this._handleGo.bind(this);
  }

  componentDidMount = () => {
    console.log(this.props);
    StatusBar.setHidden(true);
  }

  _handleGo = (c) => {
    const handle = c;
    switch (handle) {
     case 'customer': {
       Actions.customer();
       break;
     }
     case 'paypro': {
       Actions.payplanprocess();
       break;
     }
     case 'dova': {
       Actions.dovalid();
       break;
     }
     case 'paydon': {
       Actions.payplandone();
       break
     }
     case 'doun': {
       Actions.dounpaid();
       break;
     }
     case 'doca': {
       Actions.docash();
       break;
     }
     default: {
       Alert.alert('Error', 'Something happend');
        break;
     }
    }
  }

  _handleLogout = () => {
    this.props.logout();
  }

  render() {
    const {email} = this.props.member
    return (
      <Container style={styles.backgroundtomato}>
        <Content padder>
        <View style={styles.container}>

          <View style={styles.containerhome}>
            <View style={styles.outercolumn}>

              <View style={styles.innerrow}>
                <View style={styles.innercolumn}>

                    <View style={styles.rowspace}>
                      <View style={styles.rowcard}>
                        <TouchableOpacity style={styles.touchable} onPress={() => this._handleGo('customer')}>
                          <Icon name='ios-contacts' style={styles.iconhome} />
                        </TouchableOpacity>
                        <Text>Customer</Text>
                      </View>
                      <View style={styles.rowcard}>
                        <TouchableOpacity style={styles.touchable} onPress={() => this._handleGo('paypro')}>
                          <Icon name='ios-paper-plane' style={styles.iconhome} />
                        </TouchableOpacity>
                        <Text>Payplan Process</Text>
                      </View>
                    </View>

                </View>
              </View>
              <View style={styles.innerrow}>
                <View style={styles.innercolumn}>

                    <View style={styles.rowspace}>
                      <View style={styles.rowcard}>
                      <TouchableOpacity style={styles.touchable} onPress={() => this._handleGo('dova')}>
                          <Icon name='ios-checkmark-circle' style={styles.iconhome} />
                        </TouchableOpacity>
                        <Text>DO Valid</Text>
                      </View>
                      <View style={styles.rowcard}>
                        <TouchableOpacity style={styles.touchable} onPress={() => this._handleGo('paydon')}>
                          <Icon name='ios-checkmark-circle' style={styles.iconhome} />
                        </TouchableOpacity>
                        <Text>Payplan Done</Text>
                      </View>
                    </View>

                </View>
              </View>

              <View style={styles.innerrow}>
                <View style={styles.innercolumn}>

                    <View style={styles.rowspace}>
                      <View style={styles.rowcard}>
                        <TouchableOpacity style={styles.touchable} onPress={() => this._handleGo('doun')}>
                          <Icon name='ios-cash' style={styles.iconhome} />
                        </TouchableOpacity>
                        <Text>DO Unpaid</Text>
                      </View>
                      <View style={styles.rowcard}>
                        <TouchableOpacity style={styles.touchable} onPress={() => this._handleGo('doca')}>
                          <Icon name='ios-cash' style={styles.iconhome} />
                        </TouchableOpacity>
                        <Text>DO Cash</Text>
                      </View>
                    </View>

                </View>
              </View>

            </View>
          </View>
        </View>
        </Content>
        <Footer style={styles.backgroundtomato}>
          <Button iconLeft transparent block onPress={this._handleLogout}>
            <Icon name='ios-person-outline' style={styles.logoutfont} />
            <Text style={styles.logoutfont}>Logout</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

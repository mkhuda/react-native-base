import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Form, Icon, Item, Label, Input, Text, Button } from 'native-base';
import { View, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Spacer from './Spacer';
import styles from './Style';

class Auth extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    const { member } = this.props;
    if (member && member.email && member.loggedIn && member.role) {
      if (member.role === 'ppjk') {
        Actions.replace('homeppjk');
      }
      if (member.role === 'admin' || member.role === 'importir') {
        Actions.replace('home');
      }
    }
  }

  /**
   * Handling login form behaviours
   *
   * @param name
   * @param val
   * @returns setState
   */
  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  /**
   * Handling login user
   *
   * @returns redirect to spesific pages
   *
   */
  handleSubmit = () => {
    this.props.onFormSubmit(this.state)
      .then(() => {
        const { member } = this.props;
        if (member.loggedIn) {
          if (member.role === 'admin') {
            Actions.replace('home');
          }
        } else {
          Alert.alert('Login Gagal', 'Silahkan masukkan username (email) dan password Anda dengan benar');
        }
      })
      .catch(e => console.log(`Error handleSubmit: ${e}`));
  }


  render() {
    const { loading } = this.props;
    if (loading) return <Loading />;

    return (
      <View style={styles.containermain}>
        {
          // <Image source={backgroundImg} style={styles.backgroundimage} />
        }
        <Container style={styles.containerinner}>
          <Content padder>
            <View style={styles.logincard}>
              <Form>
                <Item stackedLabel>
                  <Label>Email</Label>
                  <Input
                    autoCapitalize="none"
                    value={this.state.email}
                    keyboardType="email-address"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry
                    onChangeText={v => this.handleChange('password', v)}
                  />
                </Item>

                <Spacer size={20} />

                <Button block onPress={this.handleSubmit} iconRight dark>
                  <Icon name="md-boat" />
                  <Text>Login</Text>
                </Button>
              </Form>
            </View>
          </Content>
        </Container>
      </View>

    );
  }
}

export default Auth;


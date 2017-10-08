import ErrorMessages from '../constants/errors';
import appConfig from '../constants/config';
import statusMessage from './status';
import Frisbee from 'frisbee';
import { Actions } from 'react-native-router-flux';

const api = new Frisbee({
  baseURI: 'https://solusimas-8d81.restdb.io/rest/',
  headers: {
    'x-apikey': 'c114e461bdf5333c651ef2b1c1993f25a05ba',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }
});

/**
 * Login actions for member
 *
 * @param formData{object}
 * @returns Promise
 */
export function loginUser(formData) {
  const {
    email,
    password,
  } = formData;
  let body = {
    username: email,
    password: password
  }
  let queryString = {
    body: {
      q: JSON.stringify(body)
    }
  }
  if (Frisbee === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);
    return api.get('users', queryString)
      .then( async(res) => {
        await statusMessage(dispatch, 'loading', false);
        if (res.body.length == 1) {
          return resolve(dispatch({
            type: 'USER_LOGIN',
            data: {
              uid: res.body[0]._id,
              email: res.body[0].email,
              loggedIn: true,
              role: res.body[0].role,
            },
          }));
          setUserData(res.body[0]);
        } else {
          return resolve(dispatch({
            type: 'USER_LOGIN',
            data: {
              loggedIn: false,
            },
          }));
        }
      }).catch(
        async (e) => {
          await statusMessage(dispatch, 'loading', false);
          if (appConfig.connectifity == "offline") {
            return resolve(dispatch({
              type: 'USER_LOGIN',
              data: {
                uid: 1,
                email: 'force_offline_user@solusimas.com',
                loggedIn: true,
              },
            }));
            //console.log('force offline');
          } else {
            return reject(e);
          };
      }
    );
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}

/**
 * Save user data object to redux
 *
 * @param user{object}
 * @returns Promise
 */
export function setUserData(user) {
  return dispatch => new Promise(async (resolve, reject) => {
    return resolve(
      dispatch({
        type: 'USER_DETAILS_UPDATE',
        data: {
          uid: user._id,
          email: user.email,
          role: user.role
        }
      })
    )
  })
}

export function getUserData() {
  return dispatch => new Promise(async (resolve, reject) => {
    // return resolve(
    //   console.log(dispatch)
    // )
  })
}

/**
 * logout
 *
 * @returns {undefined}
 */
export function logout() {
  return dispatch => new Promise((resolve, reject) => {
    return resolve(
      dispatch({ type: 'USER_RESET' })
    );
  })
    .then(() => Actions.mainstack({type: 'reset'}))
    .catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}

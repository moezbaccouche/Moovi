import * as types from '../types';
import defaultStyles from '../../config/styles';

const showBaseAlert = alert => dispatch => {
  dispatch({type: types.SHOW_ALERT_POPUP, payload: alert});
  setTimeout(() => {
    dispatch({type: types.HIDE_ALERT_POPUP});
  }, 3000);
};

export const hideAlert = () => dispatch => {
  dispatch({type: types.HIDE_ALERT_POPUP});
};

export const showSuccessAlert =
  ({content}) =>
  dispatch => {
    const alert = {
      color: defaultStyles.colors.success,
      content,
    };

    dispatch(showBaseAlert(alert));
  };

export const showErrorAlert =
  ({content}) =>
  dispatch => {
    const alert = {
      color: defaultStyles.colors.danger,
      content,
    };

    dispatch(showBaseAlert(alert));
  };

export const showWarningAlert =
  ({content}) =>
  dispatch => {
    const alert = {
      color: defaultStyles.colors.warning,
      content,
    };

    dispatch(showBaseAlert(alert));
  };

export const showInfoAlert =
  ({content}) =>
  dispatch => {
    const alert = {
      color: defaultStyles.colors.info,
      content,
    };

    dispatch(showBaseAlert(alert));
  };

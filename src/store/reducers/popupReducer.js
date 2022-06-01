import * as types from '../types';
import defaultStyles from '../../config/styles';

const INITIAL_STATE = {
  showAlertPopup: false,
  color: defaultStyles.colors.danger,
  title: '',
  content: 'Une erreur est survenue',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_ALERT_POPUP:
      return {
        ...state,
        showAlertPopup: true,
        color: action.payload.color,
        content: action.payload.content,
      };

    case types.HIDE_ALERT_POPUP:
      return {
        ...state,
        showAlertPopup: false,
      };

    default:
      return state;
  }
};

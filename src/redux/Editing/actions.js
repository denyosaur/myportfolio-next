import {
  CHANGE_CONTACT_INPUT,
  CHANGE_INFO_INPUT,
  CHANGE_LOGIN_INPUT,
  CHANGE_PROJECT_INPUT,
  LOGIN,
  UPDATE_CONTACT_FAILED,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT,
  UPDATE_INFO_FAILED,
  UPDATE_INFO_SUCCESS,
  UPDATE_INFO,
  UPDATE_LOGIN_FAILED,
  UPDATE_LOGIN_SUCCESS,
  UPDATE_PROJECT_FAILED,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT,
} from './constants';

/**
 * payload arguments should be passed as object with two pairs
 *  for updating input actions
 * @object { input, key }
 */

export function changeContactInput(payload) {
  return {
    payload,
    type: CHANGE_CONTACT_INPUT,
  };
};

export function changeInfoInput(payload) {
  return {
    payload,
    type: CHANGE_INFO_INPUT,
  };
};

export function changeLoginInput(payload) {
  return {
    payload,
    type: CHANGE_LOGIN_INPUT,
  };
};

export function changeProjectInput(payload) {
  return {
    payload,
    type: CHANGE_PROJECT_INPUT,
  };
};

// Contact actions
export function updateContactFailed(error) {
  return {
    payload: { error },
    type: UPDATE_CONTACT_FAILED,
  };
};

export function updateContactSuccess(contact) {
  return {
    payload: { contact },
    type: UPDATE_CONTACT_SUCCESS,
  };
};

export function updateContact(payload) {
  return {
    payload,
    type: UPDATE_CONTACT,
  };
};

// Info actions
export function updateInfoFailed(error) {
  return {
    payload: { error },
    type: UPDATE_INFO_FAILED,
  };
};

export function updateInfoSuccess(info) {
  return {
    payload: { info },
    type: UPDATE_INFO_SUCCESS,
  };
};

export function updateInfo(payload) {
  return {
    payload,
    type: UPDATE_INFO,
  };
};

// Login actions
export function loginFailed(error) {
  return {
    payload: { error },
    type: UPDATE_LOGIN_FAILED,
  };
};

export function loginSuccess() {
  return {
    type: UPDATE_LOGIN_SUCCESS,
  };
};

export function login() {
  return {
    type: LOGIN,
  };
}

// Project actions
export function updateProjectFailed(error) {
  return {
    payload: { error },
    type: UPDATE_PROJECT_FAILED,
  };
};

export function updateProjectSuccess(payload) {
  return {
    payload,
    type: UPDATE_PROJECT_SUCCESS,
  };
};

export function updateProject() {
  return {
    type: UPDATE_PROJECT,
  };
}

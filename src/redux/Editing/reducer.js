import produce from 'immer';

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

export const initialState = {
  userAuth: {
    token: '',
  },
  contact: {
    email: '',
    facebookUrl: '',
    githubProfileUrl: '',
    instagramUrl: '',
    linkedinUrl: '',
  },
  info: {
    about: '',
    info: '',
    resumeLink: '',
    skills: [],
  },
  login: {
    username: '',
    password: '',
  },
  projects: [],
  requests: {
    error: {
      contact: '',
      info: '',
      login: '',
      projects: '',
    },
    status: {
      contact: 'idle',
      info: 'idle',
      login: '',
      projects: 'idle',
    }
  }
};

const mainReducer = produce((draft, { payload, type }) => {
  switch (type) {
    // Input changes
    case CHANGE_CONTACT_INPUT: {
      const { input, key } = payload;
      draft.contact[key] = input;
      break;
    }
    case CHANGE_INFO_INPUT: {
      const { input, key } = payload;
      draft.info[key] = input;
      break;
    }
    case CHANGE_LOGIN_INPUT: {
      const { input, key } = payload;
      draft.login[key] = input;
      break;
    }
    case CHANGE_PROJECT_INPUT: {
      const { input, key } = payload;
      draft.project[key] = input;
      break;
    }
    // Contact requests
    case UPDATE_CONTACT_FAILED: {
      const { errors } = payload;
      draft.requests.error.contact = errors;
      draft.requests.status.contact = 'failed';
      break;
    }
    case UPDATE_CONTACT_SUCCESS: {
      draft.requests.status.contact = 'success';
      break;
    }
    case UPDATE_CONTACT: {
      draft.requests.status.contact = 'loading';
      break;
    }
    // Info Requests
    case UPDATE_INFO_FAILED: {
      const { errors } = payload;
      draft.requests.error.info = errors;
      draft.requests.status.info = 'failed';
      break;
    }
    case UPDATE_INFO_SUCCESS: {
      draft.requests.status.info = 'success';
      break;
    }
    case UPDATE_INFO: {
      draft.requests.status.info = 'loading';
      break;
    }
    // Login Requests
    case UPDATE_LOGIN_FAILED: {
      const { errors } = payload;
      draft.requests.error.login = errors;
      draft.requests.status.login = 'failed';
      break;
    }
    case UPDATE_LOGIN_SUCCESS: {
      draft.requests.status.login = 'success';
      break;
    }
    case LOGIN: {
      draft.requests.status.login = 'loading';
      break;
    }
    // Project Requests
    case UPDATE_PROJECT_FAILED: {
      const { errors } = payload;
      draft.requests.error.projects = errors;
      draft.requests.status.projects = 'failed';
      break;
    }
    case UPDATE_PROJECT_SUCCESS: {
      draft.requests.status.projects = 'success';
      break;
    }
    case UPDATE_PROJECT: {
      draft.requests.status.projects = 'loading';
      break;
    }
    default: {

    }
  };
}, initialState);

export default mainReducer;

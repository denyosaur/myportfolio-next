import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  updateContactFailed,
  updateContactSuccess,
  updateInfoFailed,
  updateInfoSuccess,
  loginFailed,
  loginSuccess,
  updateProjectFailed,
  updateProjectSuccess,
} from './actions';
import {
  UPDATE_CONTACT,
  UPDATE_INFO,
  LOGIN,
  UPDATE_PROJECT,
} from './constants';
import { request } from '../helpers';

export function* updateContactSaga() {
  try {
    const { data: { contactInfo } } = yield call(request, { subdirectory: 'contact/update-contact', method: "GET" });
    yield put(updateContactSuccess(contactInfo));
  } catch (error) {
    yield put(updateContactFailed(error));
  }
};

export function* updateInfoSaga() {
  try {
    const { data: { info } } = yield call(request, { subdirectory: 'updateInfo', method: "GET" });
    yield put(updateInfoSuccess(info));
  } catch (error) {
    yield put(updateInfoFailed(error));
  }
};

export function* loginSaga() {
  try {
    const { data: { info } } = yield call(request, { subdirectory: 'users/login', method: "POST" });
    yield put(loginSuccess(info));
  } catch (error) {
    yield put(loginFailed(error));
  }
};

export function* updateProjectsSaga() {
  try {
    const { data: { projectsInfo } } = yield call(request, { subdirectory: 'projects/add-project', method: "GET" });

    yield put(updateProjectSuccess(projectsInfo));
  } catch (error) {
    yield put(updateProjectFailed(error));
  }
};

export default function* rootSaga(options) {
  yield all([
    takeLatest(UPDATE_CONTACT, updateContactSaga, options),
    takeLatest(UPDATE_INFO, updateInfoSaga, options),
    takeLatest(LOGIN, loginSaga, options),
    takeLatest(UPDATE_PROJECT, updateProjectsSaga, options),
  ])
}

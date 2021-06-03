import { getToken, saveAccount } from '../api/Id';
import { getItems, saveItemstoLocal } from './items';

export function getLocalToken() {
  return localStorage.getItem('token');
}
export async function login(id, password) {
  try {
    const res = await getToken(id, password);
    const { token } = res;
    if (token === undefined) {
      return;
    }
    localStorage.setItem('token', token);
    await getItems(token);
    window.location.assign('/');
  } catch (e) {
    console.log(e);
    alert(e);
  }
}
export function logout() {
  const token = getLocalToken();
  if (token === null) {
    window.location.assign('/');
  } else {
    saveItemstoLocal(token);
    localStorage.removeItem('token');
    window.location.assign('/');
  }
}
export async function signup(input) {
  try {
    const message = await saveAccount(input.id, input.password);
    if (message === 'account created') {
      login(input.id, input.password);
    }
  } catch (e) {
    console.log(e);
    alert(e);
  }
}

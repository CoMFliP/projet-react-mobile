import Realm from 'realm';

export function getRealmApp() {
  const appId = 'backend-kzgfg';
  const appConfig = {
    id: appId,
    timeout: 10000,
  };
  return new Realm.App(appConfig);
}

export async function authUser(email, password) {
  const app = getRealmApp();
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await app.logIn(credentials);
  return user;
}

export function createUser(email, password) {
  const app = getRealmApp();
  return app.emailPasswordAuth.registerUser({email, password});
}

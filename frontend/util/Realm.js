import Realm from 'realm';

// Renvoie un objet de configuration Realm
export function getRealmApp() {
  const appId = 'backend-kzgfg';
  const appConfig = {
    id: appId,
    timeout: 10000,
  };
  return new Realm.App(appConfig);
}

// L'utilisateur est autorisé au serveur distant
export async function authUser(email, password) {
  const app = getRealmApp();
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await app.logIn(credentials);
  return user;
}

// Créer un utilisateur pour un serveur distant
export function createUser(email, password) {
  const app = getRealmApp();
  return app.emailPasswordAuth.registerUser({email, password});
}

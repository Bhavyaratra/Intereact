import * as Realm from "realm-web";

const realmAppId = process.env.REACT_APP_REALM_APP_ID; // e.g. myapp-abcde
const credentials = Realm.Credentials.apiKey(process.env.REACT_APP_REALM_AUTH_APIK);
const app = new Realm.App({ id: realmAppId });

app.logIn(credentials).then((res) => {
    console.log("app logged in! ", res.id);
  });

export default app
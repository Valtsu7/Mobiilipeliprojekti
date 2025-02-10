export default {
  expo: {
    name: "Mobiilipeliprojekti", // Sovelluksen nimi
    slug: "Mobiilipeliprojekti", // Sovelluksen tunnus
    version: "1.0.0", // Sovelluksen versio
    orientation: "portrait", // Sovelluksen suunta
    icon: "./assets/icon.png", // Sovelluksen kuvakkeen polku
    userInterfaceStyle: "light", // Käyttöliittymän tyyli
    newArchEnabled: true, // Uuden arkkitehtuurin käyttöönotto
    splash: {
      "image": "./assets/splash-icon.png", // Splash-näytön kuvan polku
      "resizeMode": "contain", // Splash-näytön kuvan skaalaustapa
      "backgroundColor": "#ffffff" // Splash-näytön taustaväri
    },
    ios: {
      "supportsTablet": true // Tuki iPadeille
    },
    android: {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png", // Adaptiivisen kuvakkeen etualan kuva
        "backgroundColor": "#ffffff" // Adaptiivisen kuvakkeen taustaväri
      }
    },
    web: {
      "favicon": "./assets/favicon.png" // Verkkosovelluksen favicon-kuvakkeen polku
    },
    extra: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // Firebase API-avain
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN, // Firebase Auth Domain
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID, // Firebase Project ID
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET, // Firebase Storage Bucket
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID, // Firebase Messaging Sender ID
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID // Firebase App ID
    }
  }
};
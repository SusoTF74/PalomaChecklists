importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAcB5AxH1ggbDDsV_5o9SBR8ZWWgsE03h8",
  authDomain: "palomachecklists.firebaseapp.com",
  databaseURL: "https://palomachecklists-default-rtdb.firebaseio.com",
  projectId: "palomachecklists",
  storageBucket: "palomachecklists.firebasestorage.app",
  messagingSenderId: "938592793142",
  appId: "1:938592793142:web:5ab8261801241714c79e97"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title || '🕊️ Paloma Checklists',
    {
      body: payload.notification.body,
      icon: 'https://github.com/SusoTF74/PalomaChecklists/blob/main/Images/icono.png?raw=true',
      badge: 'https://github.com/SusoTF74/PalomaChecklists/blob/main/Images/icono.png?raw=true'
    }
  );
});

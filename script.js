const animes = []

const firebaseConfig = {
    apiKey: "AIzaSyAatrU_zXKLinoRien_R-Vs7V_NOzDdsD4",
    authDomain: "animeheavenhub.firebaseapp.com",
    projectId: "animeheavenhub",
    storageBucket: "animeheavenhub.appspot.com",
    databaseURL: "https://animeheavenhub-default-rtdb.firebaseio.com",
    messagingSenderId: "193558466305",
    appId: "1:193558466305:web:b3e24b46a3d6399717d500",
    measurementId: "G-XPS3X25ZV0"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


const usersRef = database.ref('animeLists');
usersRef.on('value', (snapshot) => {
    const data = snapshot.val();
    animes.push(data)
});

console.log(animes)
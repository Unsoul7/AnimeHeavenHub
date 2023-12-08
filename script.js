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

const usersRef = database.ref('animelist');
usersRef.on('value', (snapshot) => {
    const data = snapshot.val();
    animes.push(data)
    FetchPosts()
});
const FetchPosts = () => { 
    animes[0].forEach(e => {
        createPost(e.link,e.image,e.name,e.tag1,e.tag2,e.tag3)
    });
}



const createPost = (link, Image, title, tag1, tag2, tag3) =>{
    const Post = document.createElement('div')
    Post.setAttribute('class',' bg-center bg-cover w-full md:w-60 h-72 my-3 px-5 py-8 flex flex-col justify-end cursor-pointer')
    Post.setAttribute('onclick',`window.open("${link}","_self")`)
    Post.setAttribute('style',`background-image: url(${Image})`)

    const Title = document.createElement('h2')
    Title.setAttribute('class','text-lg py-1 px-2 mb-2 text-white bg-red-400 inline rounded-md')
    Title.innerText = `${title}`

    let tagstyle = 'mr-2 px-2 py-1 text-white bg-black rounded-md text-[.8rem]'
    
    const Tags = document.createElement('div')
    Tags.setAttribute('class','w-full flex flex-row')

    Tags.innerHTML = `<span class='${tagstyle}'>${tag1}</span><span class='${tagstyle}'>${tag2}</span><span class='${tagstyle}'>${tag3}</span>`

    Post.appendChild(Title)
    Post.appendChild(Tags)

    const animecont = document.getElementById('animecont')
    animecont.appendChild(Post)
}


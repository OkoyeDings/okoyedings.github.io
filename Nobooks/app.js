let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    navBar.classList.remove('active');
}

const comments = [
    {
        id:1,
        name:"Michael Ogun",
        job:"Director, Sternfield International School ",
        text:" “ The moment I heard of No’Books, I was excited. I thought to myself, this makes schooling better and learning easier for the kids. ”",
    },
    {
        id:2,
        name:"Olamiposi Omisade",
        job:"Clemmy High School",
        text:"“As a student, I love that I can access different educational videos and learn in the spur of the moment.“",
    },
    {
        id:3,
        name:"Victor Chukwubuike",
        job:"Eagles Norm Schools",
        text:"“With No’Books, preparing my lesson plans have gotten easier. I can easily find relevant images, videos, and audio and include them in my notes. It is a tool that puts teachers in mind.“",
    },
    {
        id:4,
        name:"Morenikeji Adelakun",
        job:"Clemmy High School",
        text:"“Being a part of the development of No’Books as a student makes me very optimistic. I really cannot wait for it to be officially released and for the world to see its capabilities.“",
    }
    
]

let leftArrow = document.querySelector('#left');
let rightArrow = document.querySelector('#right');
let comment = document.querySelector('.user-comment-content');
let author = document.querySelector('.user-comment-author h2');
let job = document.querySelector('.user-comment-author p')

let currentItem = 0;

function showPerson(person){
    const item = comments[person];
    author.textContent= item.name;
    job.textContent= item.job;
    comment.textContent= item.text;
}

rightArrow.addEventListener('click', function(){
    currentItem++
    if(currentItem > comments.length -1){
        currentItem = 0;
    }
    showPerson(currentItem)
})

leftArrow.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0 ){
        currentItem= comments.length -1
    }
    showPerson(currentItem)
})


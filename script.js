/*impressions = document.getElementById("post")
let likecount = document.getElementById("likecount")
let commentcount = document.getElementById("commentcount")
let sharecount = document.getElementById("sharecount")



let like = 0
let comments = 0
let share = 0




let post = document.getElementById("post")

function displayPost(){

let img = document.createElement("img")
img.src = 'https://source.unsplash.com/random'
img.classList.add("post")
post.appendChild(img)

let lbutton = document.createElement("button")
lbutton.textContent = "❤️"
lbutton.classList.add("post")
let lcount = document.createElement("p")
lcount.textContent= like
lcount.classList.add("post") 
lbutton.onclick = function() {
  lcount.textContent = like++
}


let cbutton = document.createElement("button")
cbutton.textContent =  "💬"
cbutton.classList.add("post")
let ccount = document.createElement("p")
ccount.textContent = comments
ccount.classList.add("post") 
cbutton.onclick = function(){
  ccount.textContent = comments++ 
}




let sbutton = document.createElement("button")
sbutton.textContent = "⏩"
sbutton.classList.add("post")
let scount = document.createElement("p")
scount.textContent = share
scount.classList.add("post") 

sbutton.onclick = function(){
  scount.textContent = share++ 
}





post.appendChild(lbutton)
post.appendChild(lcount)
post.appendChild(cbutton)
post.appendChild(ccount)
post.appendChild(sbutton)
post.appendChild(scount)



}


document.addEventListener("DOMContentLoaded", function() {
  displayPost();
});


/*
function increaseLike(){

likecount.textContent = like++
savedata()
}
function increaseComment(){

    commentcount.textContent = comments++
    savedata()
}
function increaseShare(){

sharecount.textContent = share++
savedata()
}

function savedata(){
    localStorage.setItem("data1",likecount.textContent)
    localStorage.setItem("data2",commentcount.textContent)
    localStorage.setItem("data3",sharecount.textContent)
    
}

function showTask(){
    
likecount.textContent = localStorage.getItem("data1")
commentcount.textContent = localStorage.getItem("data2")
sharecount.textContent = localStorage.getItem("data3")


}

showTask()

*/
const postContainer = document.querySelector(".post-container");
let page = 1;  // Tracks how many batches of posts have been loaded

// Function to create and display a single post
function createPost() {

  let likeCount = 0;
let commentCount = 0;
let shareCount = 0;

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const img = document.createElement("img");
    img.src = `https://picsum.photos/400/400?random=${Math.floor(Math.random() * 10000) + page}`;
    img.classList.add("post-img");

    const likeButton = document.createElement("button");
    likeButton.textContent = "❤️";
    likeButton.classList.add("like-btn");
    const likeDisplay = document.createElement("span");
    likeDisplay.textContent = likeCount;
    likeButton.addEventListener("click", () => likeDisplay.textContent = ++likeCount);

    const commentButton = document.createElement("button");
    commentButton.textContent = "💬";
    commentButton.classList.add("comment-btn");
    const commentDisplay = document.createElement("span");
    commentDisplay.textContent = commentCount;
    commentButton.addEventListener("click", () => commentDisplay.textContent = ++commentCount);

    const shareButton = document.createElement("button");
    shareButton.textContent = "⏩";
    shareButton.classList.add("share-btn");
    const shareDisplay = document.createElement("span");
    shareDisplay.textContent = shareCount;
    shareButton.addEventListener("click", () => shareDisplay.textContent = ++shareCount);

    postDiv.append(img, likeButton, likeDisplay, commentButton, commentDisplay, shareButton, shareDisplay);
    postContainer.appendChild(postDiv);

  
}

// Function to load multiple posts
function loadMorePosts() {
    for (let i = 0; i < 3; i++) {
        createPost();
    }
    page++;  // Increment page counter to keep posts unique
}

// Scroll detection for infinite loading
function handleScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
    console.log(`Scroll Event: window.innerHeight=${window.innerHeight}, window.scrollY=${window.scrollY}, scrollHeight=${document.documentElement.scrollHeight}`);
    if (nearBottom) {
        loadMorePosts();  // Load more posts as user scrolls
    }
}

// Initial loading of posts and setting up event listener
document.addEventListener("DOMContentLoaded", () => {
    loadMorePosts();  // Initial batch of posts
    window.addEventListener("scroll", handleScroll);  // Infinite scroll
});


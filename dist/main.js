let likes = 240;
const like = document.getElementById('likes')
const likeButton = document.getElementById('like')
const likeBtn = document.getElementById("likeBtn")


likeBtn.addEventListener('click' , likeSystem,{once:true})

function likeSystem (){
    likes++
    likeButton.style.color="blue";
    console.log(likeButton)
    like.innerText = likes;
}
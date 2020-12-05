import refs from "../js/refs"
import postList from "../js/menu"
import postTemplate from "../src/post.hbs"
const{menuCard} = refs;

 const newPost = postTemplate(postList);


 menuCard.insertAdjacentHTML("afterbegin", newPost);
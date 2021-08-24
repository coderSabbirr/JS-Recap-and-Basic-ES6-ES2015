document.getElementById('add-border').addEventListener('click',function(){
    
    const container = document.getElementById('friend-container');
   container.style.border ='3px solid red'

});
 document.getElementById('add-friend').addEventListener('click',function(){
 const container =document.getElementById('friend-container');
 const friendDiv = document.createElement('div');
 friendDiv.classList.add('friend');
 friendDiv.innerHTML =`<h3 class="friend-name">friend-5</h3>
 <p>Assumenda, nesciunt iste? Quia omnis maxime impedit accusamus ut labore doloribus quis, beatae dolore
     magni necessitatibus pariatur. Illum optio perferendis ullam, error porro repellat vero amet
     perspiciatis mollitia consequatur ratione.</p>`

container.appendChild(friendDiv);

 });
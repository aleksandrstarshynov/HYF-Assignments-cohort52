/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

function updateTextContent(selector, newText) {
   const element = document.querySelector(selector);
   if (element) {
     element.textContent = newText;
   }
 }
 
 updateTextContent('#nickname', 'oleksandrstarshynov');
 updateTextContent('#fav-food', 'meat and coffee');
 updateTextContent('#hometown', 'Kharkiv');
 

 const listItems = document.querySelectorAll('li');
 listItems.forEach(item => {
   item.classList.add('list-item');
 });

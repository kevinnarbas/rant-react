# RANT 

### *A app that lets you review restaurants on more then just the overall experience.*

We all know that feeling of being hungry and not knowing where to go so we google/yelp places to eat. You're feeling adventurous so you choose a 3 star place...**YES A 3 STAR ESTABLISHMENT**. Why though? Why is this place middle of the pack? Sure you can go through the various reviews and read a 1 star review and have read someone *rant* about how their one off experience absolutely suuuuucked cause the wait staff was rude to them. Okay you know that the wait staff is rude but what about the food? Now you have to source another review. All this time you're getting more and more hungry. 

That is where **RANT** comes to the rescue! With RANT you get more then just one overall review.  Here we understand that you people are different...so we make it so that you can see different ratings for different parts of the whole restaurant experience. Those parts being: Overall, wait time, wait staff, instagram worthiness, taste,bathroom cleanliness. All of that upfront. If you're in the mood for American food, your're not just in the mood for American food.  You're **really** in the mood for good american food with a reasonalbe wait staff and your day wasn't the greatest so you're looking for a 5 star wait time.

---

## Technologies Used:
- HTML/CSS/JavaScript
- Bootstrap
- MERN Stack
  - MongoDB
  - Express
  - ReactJS
  - NodeJS
- Yelp/Zomato API

---

## Getting Started

![Imgur](https://i.imgur.com/XqAjVLD.png)

![Imgur](https://i.imgur.com/Kt0zhxD.png)
![Imgur](https://i.imgur.com/tp1laKh.png)

### See my trello board [**here**](https://trello.com/b/kc8TpBdV)

### Deployed on heroku [**here**](https://rant-react.herokuapp.com/)

---

![Imgur](https://i.imgur.com/ecSPzyX.png)
<br>
Here is the main landing page.

![Imgur](https://i.imgur.com/vNj2D7a.png)
![Imgur](https://i.imgur.com/RKin11m.png) 
<br>
Here is the NavBar elements being dynamic to when a user is logged in or not

![Imgur](https://i.imgur.com/9BBvQpe.png) 
<br>
Added some tool tips cause this could be seen as another nav element

![Imgur](https://i.imgur.com/oDePZ4C.png)
![Imgur](https://i.imgur.com/AEFvzMr.png)
![Imgur](https://i.imgur.com/Kl4VzVo.png)
<br>
Here is the deail page for a business.<br>
It has:
  - Info on the business
  - A form for submitting a review
  - The reviews

![Imgur](https://i.imgur.com/R4qo4GV.png)
It has authorization on this page as well with the form not rendering if there is no user signed in

---

## Paltry Persistent Predicaments!!!

- React-Bootstrap stuff. I just need to mess with it more to get used to it.
-

---

## Fun Future Feature!!!

- Refactor the detail page to Fetch by business so that it can get even more information to play with. Now its just taking the info passed from the initial API call
- Redo the SearchCards to maybe display more info once the refactor happens so I can display different data between the two
- Add a map feature with dynamic location information. (hardcoded to SF ATM)
- Add multiple query types for separate API hits. (currently just one type )
- Add a user profile page where they can update/delete their own RANTS
- User photo upload and display on page alongside the cover photo
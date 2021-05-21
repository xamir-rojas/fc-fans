# FC-fans 
FC-fans it's a **fake** fanpage made using Bootstrap, basic JavaScript in 2018, updated and uploaded on Heroku in 2020.

The main idea of the webpage it's to use bootstrap characteristics, good practices when coding and basic JS knowledge

> ### Feel free to check it in your cellphone or play with the responsive desing on your browser!

> Heroku: https://fc-fans.herokuapp.com/

## Characteristics:

### preguntar_edad (ask_age):

The JS using prompt ask the age of the user and using the name inserted by the user validate if the user is of legal age.

- If the user is of legal age prints a customized message welcoming him
- Else prints a customized message prints a customized message and disables the button of the form

### mostrarJuego (showGame):

A game appears when the user clicks on the **start** button using
`juegoContainer.style.display="none";` to hide the game and the mostrarJuego() **arrow function** to show it, using an *eventListener*

### crearQuiz (createTest):

crearQuiz is an arrow function that creates the elements of the test in the HTML using an array called misPreguntas (myQuestions) and a for loop

### mostrarResultados (showResults):

An arrowFunction that validates that the answers of the user are right and based on that:

- assigns colour styles to the questions and answers
- shows a container with the number of right answered questions and the total of questions

### contador (counter):

when the user presses the button to go to the shop it asks for a number and with it, it does a while loop where it prints if the number of the iteration is even or odd but if it is 9 it is not printed and if it is 5 it ends the loop prematurely.

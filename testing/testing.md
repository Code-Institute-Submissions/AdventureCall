# Testing

### On all Listed Devices the following tests were performed:

Initial testing was completed on a Macbook Pro running Chrome Browser and Samsung S10 phone.

### User Stories tests

- As a user/player of the game I want to have a fun experience with some pay off at the end.

This game has been tested on various users including friends and family members.  Most around 30-35 age group.
The users were familiar with the sketch show that the game is based on except for my wife but she enjoyed the
fantasy aspect of the game.  Users felt that there could have been more references to the show and there was
a suggestion that there could have been more interaction between the player and the guide character Falconhoof.
Overall the testers thought that the main objective of the first user story was met as the game was enjoyable to workout
and the little fireworks gif at the end provided a nice bookend to the experience.

After the intial tests I found that it was a bit more intuitive to hit enter to start the initial game after typing in your name so
this funtionality was added into the game to improve user experience.

Below are some gameplay screenshots including the final fireworks sequence.

![Wizard_Screen](readme/wizardSS.png)    ![Fireworks_Screen](readme/fireworksSS.png)

- As a user/player of the game I want some kind of personalisation of my experience so that I can feel more connected to what is going on.

The option of entering the player's name has been used to personalise the user experience so that the game can speak directly to the 
user.  This can be seen in the fireworks screenshot above and also the intial welcome screens of the game below.

![Welcome_Screen](readme/falconhoof-welcomeSS.png) ![First_Question_Screen](readme/moonlit-meadowSS.png)

- As a fan of fantasy/role playing games I want references to the tropes associated with these games.

Throughout the game reference is made to common stock characters and situations found within the fantasy/roleplaying genre.  Examples
include Trolls, wizards, golden amulets and castle towers!  This helps to create a familiar world for the user so that they can use their
imagination to immerse themselves in the game.  The pictures used further support this and they were chosen for their fun cartoonish
quality and as good representations of what the text is trying to convey.  This is demonstrated in the moonlit meadow picture above and the death screen shown below.

![Death_Screen](readme/deathSS.png)  ![Troll_Screen](readme/trollSS.png)  

- As a fan of the original limmy sketch I want to have references to the show so that it will make the game more fun.

Users will find that all the situations that are presented from the games have a basis in the original sketches.  Specifically
the 'Christmas Special' sketch and the 'Greg' sketch.  Users found that the game was lacking in a lot of the humour from the sketches
and it was found to be a bit more serious.  Fans of the show would have preferred at least one sequence with Jingle the Jester of the
famous 'Kill Jester' sketch and as mentioned before more interaction with falconhoof would have improved the experience.  Overall
because of the many references to the show it is felt that the user story above has been achieved.

The following devices were emulated on Google Chrome developer tools running the site with no issues:


The Website was tested on the [Troy](http://troy.labs.daum.net/) site using the tests below with no issues.

Devices emulated are as follows:


### Google Lighthouse testing documentation for desktop and mobile for all pages can be found in PDF form [here](!)



### W3C HTML and CSS validators – to test for any Errors in the code

### Screenshots of final w3c passes

- Homepage

![homepage_w3c_html_validator_screenshot](!)

- Dates page

![dates_w3c_html_validator_screenshot](!)

- Audio Page

![audio_w3c_html_validator_screenshot](!)

- Contact Page

![contact_w3c_html_validator_screenshot](!)

- CSS information

![css_w3c_html_validator_screenshot](!)

### Debugging information


|   Bug	|  Fix	|
|-------|-------|
| Question not showing when using show question function in gameScript.js|  Variable declared incorrectly when checked on devtools so corrected.
| Next question not showing when option chosen | Checked syntax in dev tools and debugged syntax.  Some of the variables were not declared correctly.
| Name not showing in question when entered into textbox | Tried to declare playerName as a global variable but there was an issue with scope.  Used jquery 
| |to write a function within function and used variable locally within that function to add name to another 
| |element welcoming the player by name.
| Restart game message didn't appear when eastern passageway was chosen in question 2 | added noitems option for what character has
| Further issues with items still showing when game is restarted which brough up incorrect options | items variable reset in picked answer function if player goes back to the start
| Unclosed tag for div created issues with w3c validator. | Closed div tag
| Restart message appeared on question 5 even when player has correct item | removed add states except for those required.  Added extra steps so that next step gave restart option.
| Previous States showing when new game starts. | Console logged 'items' in pickedAnswer function to find scope and reset items to {} when player has to go back to the first question.
| Name check function form welcome screen wasn't working. | Re-wrote function.  suspect syntax error initally.
| When enter key is pressed on welcome screen the game doesn't move to the next screen | Added event lister for enter to run the function to move the game on to the next stage when enter is ----------

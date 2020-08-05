# Testing

### On all Listed Devices the following tests were performed:

The tests were performed live on Apple Macbook Pro running the following browsers without issue:


Screenshots showing these user stories live on desktiop can be found [here](!)

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

Bug: Question not showing when using show question function in gameScript.js

debug: variable declared incorrectly when checked on devtools.

Bug: Difficulty getting it to show next question

debug: checked syntax in dev tools and debugged syntax

Bug: Name not showing in question when entered into textbox

debug: using jquery wrote function within function and used variable locally within that function to add name to another element welcoming

Bug: Restart game message didn't appear when eastern passageway was chosen in question 2

Debug: add gamestate of noitems in question 2

Bug: Unclosed tag for div created issues with w3c validator.

Debug: Closed div tag

Bug: Restart message appeared on question 5 even when player has correct item

debug: removed add states except for those required.  Added extra steps so that next step gave restart option.
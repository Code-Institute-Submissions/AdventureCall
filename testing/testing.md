# Testing

### On all Listed Devices the following tests were performed:

- Home page opened and scrolled to read entire Bio.

- Audio page opened and scrolled so all content was viewable and mixes tested for audio.

- Dates page opened and scrolled to ensure all dates, venues and times were readable.

- Home page opened and scrolled to ensure book now button is readble.

- Contact page opened and form scrolled so that all parts a viewable.

- Contact page form submit button clicked and required message returned to ensure form works correctly.

- Open all pages and check that link tree can be easily viewed at all times.

- Open all pages and check that social media icons are easily viewed at all times.

The tests were performed live on Apple Macbook Pro running the following browsers without issue:

- Google Chrome
- Google Chromium
- Safari
- Opera
- Mozilla Firefox

Screenshots showing these user stories live on desktiop can be found [here](https://github.com/markj0hnst0n/fauxdjsmilestoneproj1/tree/master/readme)

The following devices were emulated on Google Chrome developer tools running the site with no issues:

- Ipad
- Ipad Pro
- Iphones 5 to X
- Google Pixel
- Google Pixel XL

The Website was tested on the [Troy](http://troy.labs.daum.net/) site using the tests below with no issues.

Devices emulated are as follows:

- PC Screen
- Ipad
- Ipad Retina
- Samsung S8
- Samsung Galaxy Tab S

### Google Lighthouse testing documentation for desktop and mobile for all pages can be found in PDF form [here](https://github.com/markj0hnst0n/fauxdjsmilestoneproj1/tree/master/testing_information)

NB: Speed Testing information on Lighthouse seemed to be variable as it could change depending on time of day.

### W3C HTML and CSS validators – to test for any Errors in the code

### Screenshots of final w3c passes

- Homepage

![homepage_w3c_html_validator_screenshot](testing_information/homepage_w3c_html_validator_screenshot.png)

- Dates page

![dates_w3c_html_validator_screenshot](testing_information/dates_w3c_html_validator_screenshot.png)

- Audio Page

![audio_w3c_html_validator_screenshot](testing_information/audio_w3c_html_validator_screenshot.png)

- Contact Page

![contact_w3c_html_validator_screenshot](testing_information/contact_w3c_html_validator_screenshot.png)

- CSS information

![css_w3c_html_validator_screenshot](testing_information/css_w3c_validator_screenshot.png)

### Debugging information

Bug: Couldn't center logo on bootstrap navbar.

Debug: Set navbar postion to relative and logo position to absolute.  Didn't end up using this though as it made index.html feel unbalanced.

Bug: fixed-top bootstrap class made content unviewable on all pages.

Debug: adjusted margin-top and margin-bottom on all pages so that content was viewable again.

Bug: After commit 28 Google Lighthouse Audit identified that iframes had no titles from embedded soundcloud and spotify code on audio.html.  

Debug: Added iframe titlesfor better accessibility on screenreader.

Bug: google lighthouse identified this these cross-origin links unsafe destinations in soundcloud links on audio.html.

Debug: added rel="noopener” to target=“_blank”.  Amended this on index.html, dates.html and contact.html also as all social media links included target=“_blank”

Bug: After commit 27 w3c html code checker returned errors for css being used inline to style width for embedded soundcloud and spotify code on audio.html.  

Debug: Fixed this by using a bespoke class and amending style.css with the relevant code.

Bug: frameborder and scrolling in embedded code as this also returned errors in w3c html editor.  

Debug: Removed them as they are obselete elements 

Bug: w3c returned errors as some img did not have alt tags.

Debug: Added alt tags to img tags identified as also causing errors.

Bug: Dates.html had an error in w3c validator as a h2 tag was used in a table. 

Debug: h2 tag removed and used more suitable tag

Bug: Previously warning was returned on w3c validator as was showing that file could not be mapped in xml due to hypens being used more than twice in a row.

Debug: Amended html comments so that it is now mappable in xml files.  

Bug: Section on homepage had no heading element so made site less accessable to visually impaired users

Debug: Added h2 child to section element on homepage to make page more descriptive to visually impaired users. 

Bug: Date and time input types for form are not supported in firefox and safari respectively.

Debug: Amended contact.html form to take away these and used text types and placeholder info to guide users.

Bug: Links did not open in new window on dates page.

Debug: added target"_blank" to links to make them open in new window.

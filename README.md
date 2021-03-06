# YodaQA Client
Client for YodaQA writen in HTML5 with jQuery mobile and Cordova.

You can see it live on http://brmson.github.io/YodaQA-client/ or
http://live.ailao.eu/ .
That's the gh-pages branch; to push there, use:
	
	git subtree push --prefix www origin gh-pages

## API
Client works with Hub only. Get it from https://github.com/brmson/hub and use it as non-default REST API endpoint.
  * ``?dID=N&qID=M``: show dialog with id N and opens question with id M
  * ``?e=http://qa.ailao.eu:4000/``: use a non-default REST API endpoint
  * ``?feedback=true``: show feedback form

## Structure

### HTML page
Client itself is located in `www` folder. There is `index.html`. 

Javascript files are in `www/js`. 
File `yodaAnswerGetter.js` handles getting of answers and their displaying.
File `androidControl.js` handles native android functions.
jQuerry mobile is located in `www/js/jQuery`.

CSS files are located in `www/css`. `style.css` contains custom stylesheet. jQuery mobile css files are located in `www/css/jQuery`.

### Android app
Files genrated by Cordova for android app are located in `platforms\android`. Current apk file is in `platforms\android\build\outputs\apk`. There are Cordova plugins in `plugins` folder.

## Feedback
Feedback form is handled by `feedbackHandler.js` located in `www/js`. To deploy feedback, create google form with 9 text
fields (email,question,expected answer[0-5],more correct answers). To variable `BASE_URL` copy form's id, to array `FIELDS_IDS` copy text field's
ids in order: email,question,expected answer[0-5],more correct answers. `SUBMIT_REF` holds name and action of form's button.
Field `more correct answers` stores answers separated by vertical bar (`answer|answer|answer`).
See the top of the feedbackHandler source code for the form URLs.

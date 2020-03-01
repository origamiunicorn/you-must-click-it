# You Must Click It!
You Must Click It! (https://origamiunicorn.github.io/you-must-click-it/) is a ReactJS app where users must select each displayed image only once. Images are displayed in random order in four columns, and shuffled after each image selection occurs. This is all part of a homework assignment for UCLA's Fullstack Web Development Coding Bootcamp (September 2019 to March 2020).

## Functionality
The game loads displaying twelve images (or as many images are presently in the imgArray const) displayed in a shuffled order. Under the Jumbotron, but above the images, is an alert reading "Select any image to begin!" In the upper right, two buttons shown in a Button Group track the user's current Score and their Top Score. 

Once a user selects an image, the game begins tracking how many unique images the user selects in a row. Each time a unique selection is made, the alert displays as green with a new message of "Good work! Keep going!" The Score updates, along with the Top Score if the Top Score was previously equal to the Score.

When an image is selected which is not unique, the alert updates to red with a message of "Oops! You've already selected that image. Try again!" At that point, the user's score is reset to 0, and the next image they select begins the game anew. The Top Score will persist until a page reload/refresh.

## Building "You Must Click It!"
The game relies on shuffling array values, tracking image properities in an array, and updating state with .setState in order to keep track of user progress.

The current version creates an array of numbers equal to one less than the length of the imgArray const, then uses the shuffleImages function in order to update the state with an array of images on component load. Each time an image is selected, the onClick points to handleClick, which compares current state, checks to see if that image's name is present in an array of clickedValues in the state, updates the score according to that pass/fail as well as shuffles the images again on pass. On a fail, the alert is updated, the score updated to 0, the array of clicked images updated to an empty array, and the game begins anew.

## Future Goals
* Pull out code into further components and otherwise dry up the code. 
* Work on better image importing. 
* Reduce how large the handleClick is at present.
* Add a footer.
* Update FavIcon.
* Work on better mobile responsiveness (right now images get quite small, though it technically works on mobile, and more easily on tablet).

## Technologies Used
* React JS
* React-Bootstrap

## Resources
* Unsplash.com (https://unsplash.com/) for all images used on site.

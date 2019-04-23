# John Rowell's Moving Tiles Challenge

##Back-End - Express
The backend was created using express and sending back a some simple json data that includes an array or the character name and an image url.

This backend server is hosted on Heroku.

This was my first time doing this, but after a quick youtube video I was able to get this up and running pretty smoothly.

##Front-End - React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After getting server working, fetching the data was the next step. Thankfully all of the data came through correctly and there was no trouble shooting needed with the server. After the fetch, I set the state with an array of the images.

Next it was laying out the grid of the images. In the App.js component I map through the array of images in the state and for each one render an ImageBox component. In ImageBox I am setting the key as the name of the character (which was received from fetching the data before), I am passing the image data, the index of the image in the array, a function called toggleBig and another prop called bigBox.

The toggleBig function is able to set two different properties in the state based on which image is clicked. If the index of the image clicked is less than 9 it sets bigTop or else it sets bigBottom to the index of the clicked image. Based on the index of the image, the previously mentioned bigBox property passes the value of either bigTop or bigBottom to the ImageBox component.

The ImageBox component is then able to use this property to compare with it\'s index. If the two are the same, that image is the current active image and it\'s styling will change accordingly. Because this comparison is based of of the bigTop and bigBottom state of the parent component, only two images (one of the first 9 and one of the second 9) are able to be active at any given time.

When the imageBox component mounts, a random color is chosen from a selection of provided colors and sets the state of color. This random color will now be the background color of that specific rendered image. Because the color is chosen at random, adjacent photos may have the same background color.

The componentDidMount also calls a function called setColumnStart. I will talk more about this momentarily.

The image grid is styled using CSS Grid. This was my first time using it, usually I would have used FlexBox, but I wasn\'t able to get it to work using this method and decided to look into if CSS Grid would be the better option. After going over it a little bit, I quickly realized that it was. The grid is set out with 6 colums (since one of the photos takes up 2 colums) and 4 rows with each image taking up a 1 x 1 cell. The selected images will each take up a 2 x 2 cell.

No to go back to the setColumnStart function. This function takes the index of the image being rendered and uses that to set the state of columnStart to either 1, 2, 3, 4, or 5. This value is then referenced in the gridColumn styling to declare which column that image will start in if it is selected. This was a fix to a problem I ran into when images would just enlarge in whatever column they were currently in even if they had been moved by the previously selected image. For a few of the images, this would lead to an empty cell being left and the last picture wrapping to create a new row by itself.

Finally there is also a gridRow style that again checks the index of the image. If the image is in the first 9 it will always start in the top row if selected, and if it is in the back 9 it will always start in the third row if selected. This prevents any images from growing and taking up space in the second and third row at the same time.

After that it was a matter of running the build of the app and then deploying it to GitHub pages.

I've probably spent about **2 days** working on this project, maybe a little more if you include the time spent thinking about it, but not actually being on a computer.

# AirDrawJS
![AirDraw.js](https://github.com/badboysm890/AirDrawJS/blob/main/rsz_airdraw_js.png)

Hand tracking and writing for online presentaations and classes

> keywords: hand tracking, real time writing, Canvas HTML, user friendly, writing using webcam video, javascript, Computer Vision, Deeplearning,

## About

Welcome to this user and learner-friendly app for real time hand tracking and writing using only Vanilla  JS and HTML Canvas! 

Let’s build a real-time hand tracking and writing app which can be used for drawing and erasing using web-cam on web browser in which the user uses their hand gestures to write on AIR! 
The Project uses Vanilla Javascript! (yes, PLAIN Javascript and HTML Canvas)to use models trained only with simple MATH and tensorflow.js to allow the app to recognize simple hand gestures ☝ ✊ 🤚 to write real time on web camera screen ✍!

## Getting started

##Setup:
+ Clone it
+ Open it in vscode
+ https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer Install this and Click
![click here](https://raw.githubusercontent.com/ritwickdey/vscode-live-server/master/images/Screenshot/vscode-live-server-statusbar-3.jpg)

+ You are ready to go !!

## Working: 

![name-of-you-image](https://github.com/badboysm890/AirDrawJS/blob/main/Screenshot%202021-06-19%20at%2021-51-00%20Screenshot.png)
 
## Logic

+ Thanks to mediaPipe The had a handtracking model for JS 

![handtracking](https://github.com/badboysm890/ML_Scratch_Surface/raw/master/Screenshot%202021-06-19%20at%2021-34-30%20hand_tracking_3d_android_gpu%20gif%20(GIF%20Image%2C%20300%20%C3%97%20564%20pixels).png)

Next, simple maths comes to play- 
1. Calculate the distance between two different points in the detected hand to differentiate between the gestures we are going to feed the app.
Example - I have used "Closed hand - ✊" gesture - the app detects closed hands but does not write when the hand is closed. Closed hands gives us the least distance between two points in our hand.

2. Similarly, two different combinations of hand gestures are fed to the app to detect writing gesture by identifying the coordinate points and the distance between them. Index finger and both index and middle finger pointers "👆 ✌" as writing gestures.

3. Now that we have figured out for writing and non writing gestures, it is time for duster aka eraser to erase the writings on the screen. I have used "✋" and combination of index+middle+ring fingers open for erasing gesture.

This is the most important and crucial step of this app as this plays as the main logic behind gesture-based real time writing aand erasing on screen.

4. Use the parameters from Step 3 to arrive at a prediction model.

5. Set state for the gestures and condition it as required for the use case.

6. Finally the hard part we placed two canvas over another to while on makes detection and other makes drawing 

![name-of-you-image](https://github.com/badboysm890/AirDrawJS/blob/main/Screenshot%202021-06-19%20at%2021-51-00%20Screenshot.png)

## Where can this be used? (Just to name a few!)

+ Webinar or Meet Integration
+ Online Classes
+ Apps using AR

## Optimization
This app can be optimized by considering a lot of objectives. To name a few:
1. Making the background dynamic
2. Improving the video quality by reducing the grains
3. Improved gesture or option to choose gesture

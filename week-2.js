// # Home Assignment 2

// Link to questions: https://d3c33hcgiwev3.cloudfront.net/_f7ce77fe6f09613ff3e14d825cf3e085_ModifyingImages.pdf?Expires=1627344000&Signature=MzkD0RiqoZZ7Z9ZnfPwNgoYntwawMsKTAqAPMSrwgLwdaJcUhCsxQFb8zWTMaCcWOZ5DXAHUpJer0VT~77S6aVu1s9SlTRH59Jt4yDi9QxNi5uNckE3e4fTxAoDZQBloKO9UPCoGMU8q2pr0J4PYCaIorfJCYsaqyUrskFUCYxA_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A

// # Question 1

/**
Write a JavaScript program that modifies an image by putting three vertical stripes on it a red stripe on the left one third, a green stripe 
in the middle, and a blue stripe on the right one third. For example, if your program ran on Drew’s picture shown on the left, the resulting 
image would have red, green and blue vertical stripes as shown in the image on the right.

The ​red​ stripe is made by changing the r​ ed component o​ f all the pixels in the l​ eft vertical third to 255, while leaving the green 
and blue components as their values in the original image. The green and blue stripes are made similarly, but instead of modifying the red component
of each pixel in the correct part of the image you will modify the green or blue component.
*/

// write your code here

// get an instance of the image
var image = new SimpleImage("hilton.jpg");
//print(image);

// get the width of the image & divide it to 3
let width = image.getWidth();
print(width);
// declare a function colorStripe: pass the image parameter to it
function colorStripe(){
    // for...loop to check
    for(var pixel of image.values()) {
        // check if getX() is less than 1/3 
        if(pixel.getX() < ((1/3)*width)) {
            // make it red
            pixel.setRed(255);
        }
            
        // check if getX() is within 1/3 && 2/3 
        if(pixel.getX() > ((1/3)*width) && pixel.getX() < ((2/3)*width)){
            // make it green
            pixel.setGreen(255);
        }
            
        // // check if getX() is greater than 2/3 
        if(pixel.getX() > ((2/3)*width)){
            // set blue
            pixel.setBlue(255);
        }
        
    }
    // return image
    return image
}
    
    
    // call or invoke the function colorStripe
var result = colorStripe();
print(result);


// -----------------------------------------------------------------------------

// # Question 2

/**
Write a JavaScript function named swapRedGreen with one parameter pixel (representing a single pixel). This function should swap the red and green values of 
the pixel. For example, if you have a pixel with red = 255, green = 100, blue = 150, after calling swapRedGreen on that pixel its new RGB values would be 
red = 100, green = 255, blue = 150. 

To test your function, you should choose an image and apply the swapRedGreen function to every pixel in the image. The choice of your image is important. 
For some images you may not notice any change. What would happen if you used a completely black image, or a completely white image? What about an image with 
lots of red and not a lot of green? Think about what type of image you should use for testing your function. After choosing an image and applying the swapRedGreen 
function to every pixel in the image, make sure you print the resulting image so you can see whether your
*/


// write your code here

// create an instance of the image
var image = new SimpleImage("smallhands.png");

// declare a function swapRedGreen: pass the image as parameter
function swapRedGreen(image){
    // loop through the image pixel
    for(var pixel of image.values()){
         // get the green value at each coordinate
         let green = pixel.getGreen();
        
        // get the red value at each coordinate
        let red = pixel.getRed();
        
        // swap the green value to red at each coordinate
        pixel.setRed(green);
        
        // swap the red value to green at each coordinate
        pixel.setGreen(red);
    }
        
    // return the color
    return image
}
    

// invoke the swapRedGreen function 
var result1 = swapRedGreen(image);
print(result1)

var image2 = new SimpleImage("smallpanda.png");
var result2 = swapRedGreen(image2);
print(result2)

var image3 = new SimpleImage("usain.jpg");
var result3 = swapRedGreen(image3);
print(result3)


// -----------------------------------------------------------------------------


// # Question 3

/** 
Write code to change the Duke blue devil (the image below on the left) to be yellow (as in the image below on the right).  Start by working this smaller 
example by hand. You want to turn the image below on the left into the image below on the right. What are the steps you will need to take? Once you have 
worked through this example by hand to determine the steps you will need to take, you can translate your algorithm into code.  
*/


// create an instance of the image
var image4 = new SimpleImage("duke_blue_devil.png");

 // declare swapBlueYellow function
function swapBlueYellow(image){

    // loop through the image pixel
    for(var pixel of image.values()){
        // check if the pixel is not white 
        if(pixel.getRed() !== 255 && pixel.getGreen() !== 255 && pixel.getBlue() !== 255){
            // change the blue value to 0, red to 255 and green to 255
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
            
        // else: it is white 
            // do nothing
    }
            
    // return image
    return image;
}

var result4 = swapBlueYellow(image4);
print(result4);


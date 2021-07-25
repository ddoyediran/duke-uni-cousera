// # Home Assignment 2

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


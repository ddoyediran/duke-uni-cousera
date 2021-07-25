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

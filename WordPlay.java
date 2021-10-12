
/**
 * Write a description of WordPlay here.
 * 
 * @Damilare Oyediran (your name) 
 * @version (a version number or a date)
 */

import edu.duke.*;
import java.io.*;
import java.util.*;
import org.apache.commons.csv.*;


public class WordPlay {
    /**
    * isVowel 
    * helper method to determine if a character is a vowel.
    * returns boolean - true if the character argument is a vowel and false if it is a consonant
    * INPUTS
    *   ch of type char
    * RETURNS
    *   boolean - true if the character argument is a vowel and false if it is a consonant
    */
    public boolean isVowel(char ch){
        String vowel = "aeiou";
        ch = Character.toLowerCase(ch);
        for(int i = 0; i < vowel.length(); i++){
            char curChar = vowel.charAt(i);
            if(curChar == ch){
                return true;
            }
        }
        return false;
    }
    
    
    /**
    * replaceVowels 
    * helper method to replace vowel(s) in string with a given character
    * returns same string  with vowel replaced with the character
    * INPUTS
    *   phrase of type StringBuilder
    *   ch of type char
    * RETURNS
    *   string - that has it vowel(s) replaced by the second argument character
    */
    public StringBuilder replaceVowels(StringBuilder phrase, char ch){
        //StringBuilder newPhrase = new StringBuilder(phrase);
        for(int i = 0; i < phrase.length(); i++){
            char eachChar = phrase.charAt(i);
            if(isVowel(eachChar)){
                phrase.setCharAt(i, ch);
            }
        }
        return phrase;
    }
    
    /**
    * emphasize 
    * helper method to replace a string in odd or even position with another character
    * returns same string phrase with character in even or odd position replaced with another character
    * INPUTS
    *   phrase of type StringBuilder
    *   ch of type char
    * RETURNS
    *   string - that has it string in an even or odd position replaced by the second argument character
    */
    public StringBuilder emphasize(StringBuilder phrase, char ch){
        for(int i = 0; i < phrase.length(); i++){
            char eachChar = phrase.charAt(i);
            if(eachChar == ch){
                if(i % 2 == 0){
                    phrase.setCharAt(i, '*');
                }
                
                if(i % 2 != 0){
                    phrase.setCharAt(i, '+');
                }
            }
        }
        return phrase;
    }
    
    // Test case for method isVowel.
    public void testIsVowel(char testChar){
        boolean output = isVowel(testChar);
        System.out.println(output);
    }
    
    // test case for method replaceVowels
    public void testReplaceVowels(char testChar){
        StringBuilder testPhrase = new StringBuilder("Hello World");
        StringBuilder output = replaceVowels(testPhrase, testChar);
        System.out.println(output);
    }
    
    public void testEmphasize(){
        StringBuilder testPhrase = new StringBuilder("dna ctgaaactga");
        StringBuilder output = emphasize(testPhrase, 'a');
        StringBuilder testPhrase2 = new StringBuilder("Mary Bella Abracadabra");
        StringBuilder output2 = emphasize(testPhrase2, 'a');
        System.out.println(output); // dn* ctg+*+ctg+
        System.out.println(output2); //M+ry Bell+ Abr*c*d*br+
        
        
    }
}

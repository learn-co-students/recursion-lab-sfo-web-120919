// Code your solution here!

function printString(str) {
    
    console.log(str[0])
    if (str.length === 1){
        
    } 
   
    else {
        printString(str.substring(1))
    }
    

}

function reverseString(str) {
    if (str.length === 1) {
        return str
    } else {
        return reverseString(str.substring(1)) + str[0]
    }
}
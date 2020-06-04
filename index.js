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

function isPalindrome(str) {
    //console.log("str", str.length)
    // compare first and last character
    if (str.length === 1) {
        return str
    } else {
        if (str[0] !== str[str.length - 1]) return false
        isPalindrome(str.substring(1, str.length - 1))
    }

    return true

}


function addUpTo(nums, index) {

    console.log("nums", nums[index])
    if (index === 0) {
          return nums[index]
    } else {

      let value = addUpTo(nums, index - 1)
      
      return nums[index] + value 

    }
}







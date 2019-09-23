function isPalindrome(x){
  if(x>100){
     var baiwei=parseInt(x/100)
     var gewei=parseInt(num%10); 
     if(baiwei == gewei){
       return ture
     }
  }
  return false
}
export default isPalindrome
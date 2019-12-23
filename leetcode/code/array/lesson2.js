//hasGroupsSizeX


export default (arr) =>{
  if(arr.length % 2 == 1 || arr.length <= 1){
    return false
  }
  let maxGroupItemNum = 0
  let currenGroupItemNum = 0
  arr.sort(function (a,b) {return a-b})
  for (let i = 0; i < arr.length; i++) {
    if(i > 1){
      if(arr[i] == arr[i-1]){
        maxGroupItemNum++
        currenGroupItemNum++
      }else{
        maxGroupItemNum = 0
      }
    }

    if(arr[i] != arr[i+1] && maxGroupItemNum > currenGroupItemNum){
      return false
    }
    
   
    if(arr[i] == arr[i+1]){
      i++
      currenGroupItemNum = currenGroupItemNum+2
      maxGroupItemNum = maxGroupItemNum+2
    }
  }
  return true
}

var hasGroupsSizeX = function(deck) {
  if(deck.length % 2 == 1 || deck.length <= 1){
    return false
  }
  deck.sort(function (a,b) {return a-b})
  for (let i = 0; i < deck.length; i++) {
    if(deck[i] != deck[i+1]){
      return false
    }
    if(deck[i] == deck[i+1]){
      i++
    }
  }
  return true
};
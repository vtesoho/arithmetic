//hasGroupsSizeX


export default (deck) =>{
  if(deck.length <= 1){
    return false
  }
  let maxGroupItemNum = 0
  let currenGroupItemNum = 0
  deck.sort(function (a,b) {return a-b})
  for (let i = 0; i < deck.length; i++) {
    if(deck[i] != deck[i+1]){
      currenGroupItemNum++
      if(maxGroupItemNum === 0){
        maxGroupItemNum = currenGroupItemNum
      }
      // console.log('currenGroupItemNum',currenGroupItemNum,'maxGroupItemNum',maxGroupItemNum)
      if(maxGroupItemNum != currenGroupItemNum && maxGroupItemNum != 0){
        return false
      }else{
        currenGroupItemNum = 0
      }
    }else{
      if(maxGroupItemNum != currenGroupItemNum && maxGroupItemNum != 0){
        return false
      }
    }
    

    if(deck[i] == deck[i+1]){
      i++
      currenGroupItemNum = currenGroupItemNum+2
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
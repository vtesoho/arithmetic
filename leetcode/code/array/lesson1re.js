function arrayA (str)  {
  let phone = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  let strNum = str.split('')
  let arr1 = phone[strNum[0]].split('')
  let arr2 = []
  let zh = (zh1,zh2) => {
    let re = []
    zh1.map((itemA) => {
      zh2.map((itemB) => {
        re.push(itemA+itemB)
      })
    })
    return re
  }
  for (var i = 1; i < strNum.length ; i++) {
    arr2 = phone[strNum[i]].split('')
    arr1 = zh(arr1,arr2)
  }
  return arr1

}

// console.log(arrayA('234'))

export default arrayA

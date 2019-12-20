export default (str) => {
  let phone = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']

  let inum = str.split('')
  let strArr = []
  inum.forEach(item => {
    strArr.push(phone[item])
  });

  for (let i = 1; i < strArr.length; i++) {
    strArr[0] = globale(strArr[0],strArr[i])
  }

  return strArr[0]


}


function globale(arra,arrb){
  var rule = []
  for (let i = 0; i < arra.length; i++) {
    for (let b = 0; b < arrb.length; b++) {
      rule.push(arra[i]+arrb[b])
    }
  }
  return rule
}

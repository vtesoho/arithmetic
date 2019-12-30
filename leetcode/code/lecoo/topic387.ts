export default (s:string) => {
    let a = s.split('')
    for (let i = 0; i < a.length; i++) {

        for (let b = i+1; b < a.length; b++) {
            if(a[i] !== a[b]){
                return i
            }
        }
        
    }
    return -1
}

var firstUniqChar = function(s) {
    let a = s.split('')
    for (let i = 0; i < a.length; i++) {

        for (let b = i+1; b < a.length; b++) {
            if(a[i] !== a[b]){
                return i
            }
        }
        
    }
    return -1
};
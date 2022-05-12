const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters)
    // console.log(verticalJoin)
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
       
    } for(let k of verticalJoin) {
            if (k.includes(word)) return true
        }
return false;
    } 

const transpose = function(matrix) {
    
        let newArr = [];
        for (let i = 0; i < matrix[0].length; i++) {
    
          let arr = [];
          for (let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i])
          }
          newArr.push(arr.join(''))
        }
        return newArr
      };


module.exports = wordSearch;
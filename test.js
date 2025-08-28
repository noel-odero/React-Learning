function findUniq(arr) {
    let newArr = arr.map(word => [...new Set(word.toLowerCase())].sort().join(""));

    for (let i = 0; i < newArr.length; i++) {
        if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) {
            return arr[i]; 
        }
    }
}

console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))

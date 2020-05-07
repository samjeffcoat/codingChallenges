function makeAnagrams(a, b) {
    // Write your code here
    const bigger = a.length>= b.length ? a: b;
    const smaller = a.length < b.length ? a: b;
    //intialize a hashmap
    const hashmap = {};
    for (const letter of bigger) {
        hashmap[letter] = (hashmap[letter] || 0) + 1;
    }
    let count = 0;
    for (const letter of smaller) {
        if(hashmap[letter] && hashmap[letter]> 0) {
            hashmap[letter]--;
            count++;
        }
    }
    const smallDif = (smaller.length - count);
    const largeDif = (bigger.length- smaller.length)
    return (2  * smallDif) + largeDif

  

}
 
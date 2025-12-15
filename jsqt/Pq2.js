function countVowel(s) {
    let count = 0;

    for (let ch of s.toLowerCase()) {
        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u'
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowel("Himanshu")); 

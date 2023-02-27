function hasMoreVowels(word){
    let vowelCount = 0
    let nonVowels = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(i = 0; i < vowels.length; i++){
    for(j = 0; j < word.length; j++){
    if (word[j] === vowels[i]){
        vowelCount++
    }else nonVowels+++{
    }
}if (vowelCount > nonVowels){
    return true
}else{
    return false
}
    
    }
        
    
}

console.log(hasMoreVowels('Mesa'))
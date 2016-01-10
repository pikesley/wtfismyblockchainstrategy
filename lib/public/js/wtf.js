function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function isPlaceholder(word) {
  return(word.indexOf('@') === 0)
}

function fillTemplate(json) {
  template = getRandom(json['templates'])
  var words = template.split(' ')
  var filled_words = []
  $.each(words, function(index, word) {
    if(word.indexOf('@') === 0) {
      filled_words.push(getRandom(json[word.substring(1)]))
    } else {
      filled_words.push(word)
    }
  })

  return filled_words.join(' ')
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function isPlaceholder(word) {
  return(word.indexOf('@') === 0)
}

function stripFirst(word) {
  return word.substring(1)
}

function containsPlaceholders(string) {
  return(string.indexOf('@') > -1)
}

function words(string) {
  return string.split(' ')
}

function replaceWord(word, json) {
  if(isPlaceholder(word)) {
    return getRandom(json[stripFirst(word)])
  } else {
    return word
  }
}

function populateTemplate(template, json) {
  var populated = []
  $.each(words(template), function(index, word) {
    populated.push(replaceWord(word, json))
  })
  return populated.join(' ')
}

function fillTemplate(json) {
  template = getRandom(json['templates'])
  var words = template.split(' ')
  var filled_words = []
  $.each(words, function(index, word) {
    if(isPlaceholder(word)) {
      filled_words.push(getRandom(json[stripFirst(word)]))
    } else {
      filled_words.push(word)
    }
  })

  return filled_words.join(' ')
}

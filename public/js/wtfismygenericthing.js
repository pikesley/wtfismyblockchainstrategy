function extract(list) {
  var index = Math.floor(Math.random() * list.length)
  a = {}
  a['victim'] = list[index]
  list.splice(index, 1)
  a['remainder'] = list

  return(a)
}

function isLetter(char) {
  return('abcdefghijklmnopqrstuvwxyz@'.indexOf(char.toLowerCase()) > -1)
}

function isWord(string) {
  if(string == '') {
    return false
  }
  return(string.split('').every(isLetter))
}

function separate(string) {
  return compress(string.split(/([^@A-Za-z])/))
}

function compress(list) {
  var a = []
  var buffer = ''

  $.each(list, function(index, chunk) {
    if(isWord(chunk)) {
      if(buffer != '') {
        a.push(buffer)
        buffer = ''
      }
      a.push(chunk)
    } else {
      buffer += chunk
    }
  })

  if(buffer != '') {
    a.push(buffer)
  }

  return(a)
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function isPlaceholder(chunk) {
  return(chunk.indexOf('@') === 0)
}

function stripFirst(word) {
  return word.substring(1)
}

function containsPlaceholders(string) {
  return(string.indexOf('@') > -1)
}

function chunks(string) {
  return separate(string)
}

function populateTemplate(template, json) {
  var populated = []
  $.each(chunks(template), function(index, chunk) {

    subs = ''
    if(isPlaceholder(chunk)) {
      extracted = extract(json[stripFirst(chunk)])
      subs = extracted['victim']
      json[chunk] = extracted['remainder']
    } else {
      subs = chunk
    }
    populated.push(subs)

  })
  complete = populated.join('')

  if(containsPlaceholders(complete)) {
    return populateTemplate(complete, json)
  } else {
    return complete
  }
}

function template(json) {
  return populateTemplate(getRandom(json['templates']), json)
}

function populate(json) {
  $('#title').text(getRandom(json['headings']))
  $('#thing').text(template(json))
  $('#generate').text(getRandom(json['responses']))
}

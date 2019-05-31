function getHTML(target, postIndex) {
  const lang = window._lang || 'eng'
  let xhr = new XMLHttpRequest
  xhr.onload = function() {
    const response = JSON.parse(xhr.response)
    document.getElementById(target).innerHTML = response.html
    if(response.requests) {
      response.requests.forEach(request=>{
        getHTML(request)
      })
    }
  }
  let url = '/api/' + target + '/' + lang
  if (target === 'main' && postIndex === undefined) {
    postIndex = window._postIndex || 1
  }
  if (postIndex) {
    url += '/' + postIndex
    window._postIndex = postIndex
  }
  xhr.open('get', url)
  xhr.send()
}

document.getElementById('lang-form').addEventListener('change', function(e) {
  if (e.target.id === 'eng-input') {
    window._lang = 'eng'
  } else {
    window._lang = 'arm'
  }
  getHTML('layout')
})

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('lang-form').reset()
  getHTML('layout')
})
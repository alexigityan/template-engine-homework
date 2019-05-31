const { getPlaceholderValue, getPostData } =  require('../dataApi')

module.exports = function(templateString, lang, variable) {
  const requests = templateString.match(/(?<=<!--rq-)(.+)(?=-->)/g)
  const response = {}
  response.requests = requests

  const placeholders = templateString.match(/(?<=<#)(.+)(?=\/>)/g)
  if (placeholders && placeholders.length>0) {
    placeholders.forEach(placeholder => {
      const value = getPlaceholderValue(placeholder, lang)
      templateString = templateString.replace('<#'+ placeholder + '/>', value)
    })
  }

  if(variable !== undefined) {
    templateString = templateString.replace(/{v}/g, variable)
  }


  const titles = templateString.match(/(?<=<%)(.+)(?=\/>)/g)
  if (titles && titles.length>0) {
    titles.forEach(postId => {
      const value = getPostData(postId, 'title', lang)
      templateString = templateString.replace('<%'+ postId + '/>', value)
    })
  }

  const posts = templateString.match(/(?<=<~)(.+)(?=\/>)/g)
  if (posts && posts.length>0) {
    posts.forEach(postId => {
      const value = getPostData(postId, 'body', lang)
      templateString = templateString.replace('<~'+ postId + '/>', value)
    })
  }

  response.html = templateString
  return response
}
$ ->
  pageBody = $('#content')
  templates = Handlebars.templates

  pageBody.html templates.index
  pageBody.append templates.data

  
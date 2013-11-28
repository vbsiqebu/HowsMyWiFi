# @template1 = 
#   locationTemplate: Handlebars.compile "
#     <ul>
#       {{#each location}}
#         <li data-id="{{id}}">{{name}}</li>
#       {{/each}}
#     </ul>
#   "
#   locationTemplate: Handlebars.compile "

#       {{#each location}}
#         <p class=\"name\">{{name}}</p>
#         <p class=\"name\">{{address}}</p>
#         <p class=\"name\">{{price}}</p>
#         <p><a id=\"all-locations\" href=\"#\">Back to Locations</a></p>
#       {{/each}}
#     "
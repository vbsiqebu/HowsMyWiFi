(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n  <h1>How's my Wifi?</h1>\n   <div class=\"circle\">\n      <div class=\"borderCircle\"></div>\n      <div class=\"borderCircle2\"></div>\n      <div class=\"borderCircle3\"></div>\n      <div class=\"innerCircle\">\n          <p id=\"btn-launch\">Launch</p>\n      </div>\n      <div class=\"outerCirlce\"></div>\n    </div> \n   <div id=\"msg\"></div>\n   <div>Name: <input></input>\n   Price: <input value=\"0\" type=\"number\"></input></div></br>\n   <div>Comments: <input value:\"text\"></input><input type=\"submit\"></input></div>\n</div>";
  });
})();
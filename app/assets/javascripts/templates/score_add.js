(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['score_add'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form id=\"user-add-form\">\n  <input type=\"text\" name=\"score[latency]\" value=\"\">\n  <input type=\"submit\" value=\"Create Score\">\n</form>";
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"error-container\">\r\n    <h2>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"error_num") || (depth0 != null ? lookupProperty(depth0,"error_num") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"error_num","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":21}}}) : helper)))
    + "</h2>\r\n    <h3>The page you're looking for could not be found.</h3>\r\n</main>\r\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"post\">\r\n    <div class=\"post-content\">\r\n        <p class=\"post-text\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":20}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"post-date\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":20}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"post-time\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":20}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"post-district\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"district") || (depth0 != null ? lookupProperty(depth0,"district") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"district","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":24}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"post-neighborhood\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"neighborhood") || (depth0 != null ? lookupProperty(depth0,"neighborhood") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"neighborhood","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":28}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"post-severity\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"severity") || (depth0 != null ? lookupProperty(depth0,"severity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"severity","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":24}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n</article>";
},"useData":true});
})();
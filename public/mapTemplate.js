(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['map'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"map\" id=\"map_class\">\r\n    <img src=\"simpler_portland_map.jpg\" alt=\"Portland\" id=\"map\">\r\n    <button type=\"button\" class=\"dist\" id=\"nw_district\"></button>\r\n    <button type=\"button\" class=\"dist\" id=\"sw_district\"></button>\r\n    <button type=\"button\" class=\"dist\" id=\"se_district\"></button>\r\n    <button type=\"button\" class=\"dist\" id=\"e_district\"></button>\r\n    <button type=\"button\" class=\"dist\" id=\"ne_district\"></button>\r\n    <button type=\"button\" class=\"dist\" id=\"n_district\"></button>\r\n</div>\r\n\r\n<div class=\"new_alert\" id=\"insert_alert\">\r\n    <button type=\"button\" class=\"new_alert\" id=\"insert_new_alert\">+</button>\r\n\r\n</div>";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['createpost'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\r\n\r\n<div id=\"create-alert-modal\" class=\"hidden\">\r\n\r\n    <div class=\"modal-dialog\">\r\n\r\n        <div class=\"modal-header\">\r\n            <h3>Report a Crime</h3>\r\n            <button type=\"button\" class=\"modal-close-button\">&times;</button>\r\n        </div>\r\n\r\n        <div class=\"modal-body\">\r\n            <div class=\"report-input-element\">\r\n                <label for=\"report-text-input\">Report</label>\r\n                <textarea id=\"report-text-input\"></textarea>\r\n            </div>\r\n            <div class=\"report-input-element\">\r\n                <label for=\"report-date-input\">Date</label>\r\n                <input type=\"date\" id=\"report-date-input\">\r\n            </div>\r\n            <div class=\"report-input-element\">\r\n                <label for=\"report-time-input\">Time</label>\r\n                <input type=\"time\" id=\"report-time-input\">\r\n            </div>          \r\n            <div class=\"report-input-element\">\r\n                <label for=\"report-severity-input\">Severity</label>\r\n                <input type=\"range\" min=\"1\" max=\"10\" id=\"report-severity-input\">\r\n            </div>  \r\n            <div class=\"report-input-element\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"dropdown"),depth0,{"name":"dropdown","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </div>\r\n            <div class=\"report-input-element\">\r\n                <label for=\"alert-neighborhood-input\">Neighborhood</label>\r\n                <textarea id=\"alert-neighborhood-input\">Neighborhood</textarea>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"modal-cancel-button\">Cancel</button>\r\n            <button type=\"button\" class=\"modal-accept-button\">Report</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true});
})();
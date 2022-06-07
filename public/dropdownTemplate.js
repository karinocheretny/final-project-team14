(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['createpost'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\r\n\r\n<div id=\"create-alert-modal\" class=\"hidden\">\r\n\r\n    <div class=\"modal-dialog\">\r\n\r\n        <div class=\"modal-header\">\r\n            <h3>Report a Crime</h3>\r\n            <button type=\"button\" class=\"modal-close-button\">&times;</button>\r\n        </div>\r\n\r\n        <div class=\"modal-body\">\r\n            <div class=\"alert-input-element\">\r\n                <label for=\"alert-text-input\">Report</label>\r\n                <textarea id=\"alert-text-input\"></textarea>\r\n            </div>\r\n            <div class=\"alert-input-element\">\r\n                <label for=\"alert-attribution-input\">District</label>\r\n                <div class=\"district_dropdown\">\r\n                    <a href=\"#\">N</a>\r\n                    <a href=\"#\">NW</a>\r\n                    <a href=\"#\">NE</a>\r\n                    <a href=\"#\">E</a>\r\n                    <a href=\"#\">SW</a>\r\n                    <a href=\"#\">SE</a>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"modal-cancel-button\">Cancel</button>\r\n            <button type=\"button\" class=\"modal-accept-button\">Report</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
},"useData":true});
})();

/*
// When the user clicks on the button,
// toggle between hiding and showing the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/
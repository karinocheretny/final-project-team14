/* Inserts a new report into the page */
function insertNewReport(reporttext, reportdistrict, reportdate, reporttime, reportneighborhood, reportseverity) {
    var new_report = Handlebars.templates.post({
      text: reporttext,
      date: reportdate,
      severity: reportseverity,
      time: reporttime,
      district: reportdistrict,
      neighborhood:  reportneighborhood
    })
    console.log(new_report)
    console.log("reporttext: ", reporttext)
    console.log("reportdate: ", reportdate)
    console.log("reportseverity: ", reportseverity)
    console.log("reporttime: ", reporttime)
    console.log("reportdistrict: ", reportdistrict)
    console.log("reportneighborhood: ", reportneighborhood)



//Function to clear out the input entered in the modal
function clearAlertInputValues(reporttext, reportdistrict, reportdate, reporttime, reportneighborhood, reportseverity) {
  var inputs = document.getElementsByClassName("input")

  while(inputs.item(0) !== null) {
    inputs.item(0).remove()
  }
}
  
    var postContainer = document.querySelector('main.post-container');
    postContainer.insertAdjacentHTML('beforeend', new_report);
    return new_report
  }


  var allPosts = []



  function handleModalAcceptClick() {
    /* Creating variables to assign */
    var reportText = document.getElementById('report-text-input').value;
    var reportdate = document.getElementById('report-date-input').value;
    var reportseverity = document.getElementById('report-severity-input').value;
    var reporttime = document.getElementById('report-time-input').value;
    var reportdistrict = document.getElementById('report-district-input').value;
    var reportneighborhood =  document.getElementById('alert-neighborhood-input').value; 
    
    /* If the user has inputted all of the information */
    if(reportText && reportdate && reportseverity && reporttime && reportneighborhood){
      allPosts.push({
          text: reportText,
          date: reportdate,
          time: reporttime,
          severity: reportseverity,
          district: reportdistrict,
          neighborhood: reportneighborhood
      
      });

      /* Outputting the information to the console to ensure that the values are correct */
      
      console.log(reportText, reportdate, reportseverity, reporttime, reportdistrict, reportneighborhood)
      insertNewReport(reportText, reportdistrict, reportdate, reporttime, reportneighborhood, reportseverity)
      hideCreateAlertModal();
    } 
    else{
      alert('You must fill in all forms')
    }

    }

    function ClearSearchReinsertReports(){
      document.getElementById
    }

/* Shows the report modal */
    function showCreateAlertModal() {
    console.log("pressed create alert button")
    var modalBackdrop = document.getElementById('modal-backdrop');
    var createAlertModal = document.getElementById('create-alert-modal');
  
    modalBackdrop.classList.remove('hidden');
    createAlertModal.classList.remove('hidden');
    }

/* Deletes all of the values from the modal so it's clear for the next report */
    function clearAlertInputValues() {
      reporttext = document.getElementById('report-text-input')
      console.log(reporttext)
        
      }


/* Closes the modal */      
    function hideCreateAlertModal() {
    var modalBackdrop = document.getElementById('modal-backdrop');
    var createAlertModal = document.getElementById('create-alert-modal');
    clearAlertInputValues();
    modalBackdrop.classList.add('hidden');
    createAlertModal.classList.add('hidden');
  
    
  }
  
allPosts.forEach(function (post){
  insertNewReport(post.text, post.district, post.date, post.time, post.neighborhood, post.severity)
})


  
  function parsePostElem(postElem) {
    var post = {};

    var reportTextElem = postElem.querySelector('post-text');
    post.text = reportTextElem.textContent.trim();

    var reportdateelem = postElem.querySelector('post-date');
    post.date = reportdateelem.textContent.trim();

    var reporttimeelem = postElem.querySelector('post-time');
    post.time = reporttimeelem.textContent.trim();
  
    var reportseverityelem = postElem.querySelector('post-severity');
    post.severity = reportseverityelem.textContent.trim();

    var reportdistrictelem = postElem.querySelector('post-district');
    post.district = reportdistrictelem.textContent.trim();

    var reportneighborhoodelem = postElem.querySelector('post-neighborhood');
    post.neighborhood = reportneighborhoodelem.textContent.trim();
    
    return post;
  }

  window.addEventListener('DOMContentLoaded', function (){
/*       var reportsCollection = document.getElementsByClassName('post');
      for(var i = 0; i < reportsCollection.length; i++){
          allPosts.push(parsePostElem(reportsCollection[i]))
      }  */


      var createPostButton = document.getElementById('insert_new_alert');
      if (createPostButton) {
        createPostButton.addEventListener('click', showCreateAlertModal);
      }
    
      var modalCloseButton = document.querySelector('#create-alert-modal .modal-close-button');
      if (modalCloseButton) {
        modalCloseButton.addEventListener('click', hideCreateAlertModal);
      }
    
      var modalCancelButton = document.querySelector('#create-alert-modal .modal-cancel-button');
      if (modalCancelButton) {
        modalCancelButton.addEventListener('click', hideCreateAlertModal);
      }
    
      var modalAcceptButton = document.querySelector('#create-alert-modal .modal-accept-button');
      if (modalAcceptButton) {
        modalAcceptButton.addEventListener('click', handleModalAcceptClick);
      }
});

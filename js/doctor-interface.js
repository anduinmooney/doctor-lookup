import { promise } from './../js/doctor.js';

$(document).ready(function() {
  let doctorName;
  let limit;
  let medicalIssue;

  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    let doctorName = $('#doctor-name').val();
    let limit = $('#limit').val();
    let medicalIssue = $('#medical-issue').val();
    let newSearch = promise(doctorName, limit, medicalIssue);
    $('#result').empty();

    newSearch.then(function(response) {

    let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        $('#result').append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "<br>" + '<img src =' + body.data[i].profile.image_url + '>' + "<br>" + 'Accepts new patients: ' + body.data[i].practices[0].accepts_new_patients + "<br>" );
      }
    }, function(error) {
      $('.showErrors').text(`There was an error: $(error.message)`);
    });
  });

});

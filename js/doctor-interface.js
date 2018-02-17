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
    if (body.data.length === 0) {
      $('#result').append("No doctors meet search parameters");
    } else {
      for (let i = 0; i < body.data.length; i++) {
        $('#result').append("<h3>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name +  "</h3>" + "<br>" + '<img src =' + body.data[i].profile.image_url + '>' + "<br>" + body.data[i].practices[0].visit_address.city + ", " + body.data[i].practices[0].visit_address.state + ", " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.zip + "<br>" + body.data[i].practices[0].phones[0].type + ": " + body.data[i].practices[0].phones[0].number + "<br>" + 'Accepts new patients: ' + body.data[i].practices[0].accepts_new_patients + "<br>" + "</br>");
        if (body.data[i].practices[0].website == null) {
          $('#result').append("No Website Found");
        } else {
          $('#result').append("<a href =" + body.data[i].practices[0].website + ">" + body.data[i].practices[0].website + "</a>");
        }
    }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error: $(error.message)`);
  });

});
});
// first name, last name, address, phone number, website

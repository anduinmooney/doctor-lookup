import apiKey from './../.env';

export let promise = function(doctorName, limit, medicalIssue) {
  return new Promise(function(resolve, reject) {
    console.log(apiKey);
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&query=${medicalIssue}&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=${limit}&user_key=${apiKey.apiKey}`;
    console.log(url);
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
};

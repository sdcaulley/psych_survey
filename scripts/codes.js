function generate_codes() {
  let seedNum = parseInt(Math.random()*100000000);
  let codeA = window.btoa('a' + seedNum);
  let codeB = window.btoa(seedNum + 'b')
  $('#your-code').text(codeA);
  $('#partner-code').text(codeB);
  yourEvent(codeA);
  partnerEvent(codeB);
}

function yourEvent(code) {
  let urlA = 'https://survey.qualtrics.com/jfe/form/SID=SV_1234?usercode=' + code;
  $('#your-button').click(function() {
    window.open(urlA);
  });
}

function partnerEvent(code) {
  let urlB = 'https://survey.qualtrics.com/jfe/form/SID=SV_1234?usercode=' + code;
  $('#partner-button').click(function() {
    let temp = $('<input type="text" id="urlB">').val(urlB);
    $('#partner-code').append(temp);
    let text = document.getElementById('urlB');
    text.select();
    document.execCommand('Copy');
    temp.remove();
  });
}

$(document).ready(generate_codes);

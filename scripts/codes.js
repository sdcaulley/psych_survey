function generate_codes() {
  let seedNum = parseInt(Math.random()*100000000);
  let codeA = window.btoa('a' + seedNum);
  let codeB = window.btoa(seedNum + 'b')
  let urlA = 'https://survey.qualtrics.com/jfe/form/SID=SV_1234?usercode=' + codeA;
  let urlB = '"https://survey.qualtrics.com/jfe/form/SID=SV_1234?usercode=' + codeB + '"';
  $('#your-code').text(codeA);
  $('#partner-code').text(codeB);
  $('#your-button').click(function(){
    window.open(urlA);
  });
  $('#partner-button').click(copyText(urlB));
}

function copyText(element) {
  let temp = $('<input>');
  $('body').append(temp);
  temp.val(element);
  document.execCommand('copy');
  temp.remove();
}

$(document).ready(generate_codes);

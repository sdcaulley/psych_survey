function generate_codes() {
  let seedNum = parseInt(Math.random()*100000000);
  let codeA = window.btoa('a' + seedNum);
  let codeB = window.btoa(seedNum + 'b')
  $('#your-code').text(codeA);
  $('#partner-code').text(codeB);
}

$(document).ready(generate_codes);

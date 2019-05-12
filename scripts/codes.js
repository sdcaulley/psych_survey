function generate_codes() {
  let seedNum = parseInt(Math.random()*100000000);
  let codeA = window.btoa('a' + seedNum);
  let codeB = window.btoa(seedNum + 'b')
  document.write('<br>seed = ' + seedNum +' <br>');
  document.write('codeA = ' + codeA+' <br>');
  document.write('codeB = ' + codeB+' <br>');
  document.write('decoded A = ' + window.atob(codeA)+' <br>');
  document.write('decoded B = ' + window.atob(codeB)+' <br>');
}

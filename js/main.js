$(document).ready(function() {
  var LANGUAGES = [ 'js', 'java', 'xml' ].map(function (language) {
    $('.language-' + language + ' .code pre').each(function (i, block) {
      $(block).addClass(language);
      hljs.highlightBlock(block);
    });
  });

  $('textarea.kevscript').each(function (i, block) {
    var editor = CodeMirror.fromTextArea(block, {
      mode: 'kevscript',
      theme: 'kevscript',
      readOnly: true,
      value: block.value,
      lineNumbers: true
    });
  });

  $('img').each(function (i, block) {
    $(block).parent().css('text-align', 'center');
  });
});

$(document).ready(function() {
  $('.language-js .code pre').each(function (i, block) {
    hljs.highlightBlock(block);
  });

  $('.language-java .code pre').each(function (i, block) {
    hljs.highlightBlock(block);
  });

  $('textarea.kevscript').each(function (i, block) {
    var editor = CodeMirror.fromTextArea(block, {
      mode: 'kevscript',
      theme: 'kevscript',
      readOnly: true,
      value: block.value
    });
  });
});

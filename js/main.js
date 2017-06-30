$(document).ready(function() {
  $('pre code').each(function(i, block) {
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

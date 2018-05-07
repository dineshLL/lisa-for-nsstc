/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */

// Why below providers have commented?
goog.provide("Blockly.lisa.controllers");
goog.require("Blockly.lisa");

Blockly.lisa["ctrl-infinite-loop"] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "while(1) {\n";
  code += Blockly.lisa.statementToCode(block, "loopBody") + "\n";
  code += "}";

  return code;
};

Blockly.lisa["ctrl-for-loop"] = function(block) {
  var code = 'for(int i = ';
  code += block.getFieldValue("startValue") + '; ';
  code += 'i < ' + block.getFieldValue("endValue") + '; ';
  code += 'i = i + ' + block.getFieldValue("incrementValue") + ') {\n';
  code += Blockly.lisa.statementToCode(block, "loopBody") + '\n';
  code += '}\n';
  
  return code;
};

Blockly.lisa['wait'] = function(block) {
  var text_waittime = block.getFieldValue('waitTime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'wait(' + text_waittime + ');\n';
  return code;
};

Blockly.lisa['statement-exec'] = function(block) {
  var code = block.getFieldValue('statement');
  return code;
};

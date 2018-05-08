/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */


// Why below providers have commented?
goog.provide('Blockly.lisa.vars');
goog.require('Blockly.lisa');



/**
 * Code generation stub for import-iostream block
 * @param block
 * @returns {string}
 */
Blockly.lisa['include-iostream'] = function(block) {
  var code = '#include <iostream>\n';
  return code;
};

/**
 * Code generation stub for import-mbed.h block
 * @param block
 * @returns {string}
 */
Blockly.lisa['include-mbed'] = function(block) {
  var code = '#include "mbed.h"\n';
  return code;
};

/**
 * Code generation stub for import-mis.h block
 * @param block
 * @returns {string}
 */
Blockly.lisa['include-mis'] = function(block) {
  var code = '#include ';
  code += '"' + block.getFieldValue('header_file_name') + '"\n';
  return code;
};



/**
 * Code generation stub for variable block
 * @param block
 * @returns {string}
 */
Blockly.lisa['variable'] = function(block) {
    var dropdown_variabletype = block.getFieldValue('variableType');
    var text_varname = block.getFieldValue('varName');
    var code = '\t' + dropdown_variabletype + ' ' +text_varname + '= 0;\n';
    return code;
};


/**
 * Code generation stub for parameter block
 * @param block
 * @returns {string}
 */
Blockly.lisa['parameter'] = function(block) {
  var text_parameter_name = block.getFieldValue('parameter-name');
  var dropdown_name = block.getFieldValue('NAME');
  var code = dropdown_name + ' ' + text_parameter_name + '$$'; //adding $$ to use it as a delimiter
  return code;
};
/**
 * Code generation stub for object variable block
 * @param block
 * @returns {string}
 */

Blockly.lisa['class-instance-variable'] = function(block) {
  var text_class_name = block.getFieldValue('class_name');
  var text_var_name = block.getFieldValue('variable_name');
  var code = text_class_name+' '+text_var_name+';\n';
  return code;
};
/**
 * Code generation stub for pointer variable block
 * @param block
 * @returns {string}
 */

Blockly.lisa['object-pointer'] = function(block) {
  var text_pointer_name = block.getFieldValue('pointer_name');
  var class_name = block.getFieldValue('class_name');
  var code = class_name+' '+'*'+text_pointer_name+';\n';
  return code;
};

/**
 * variable holder code generation stub
 */
Blockly.lisa['var-holder'] = function(block) {
  var className = block.getFieldValue('className');
  var varName = block.getFieldValue('varName');
  var body = Blockly.lisa.statementToCode(block, 'NAME');

  // TODO: Assemble JavaScript into code variable.

  var varNames = body.split('$$');

  var code = '';
  code += className;
  code += ' ' + varName + '[] = {';

  for(var i = 0; i < varNames.length - 1; i++) {
    if(i === varNames.length -2) {
      code += varNames[i];
      break;
    }

    code += varNames[i] + ', ';
  }

  code += '}; \n';

  return code;
};

Blockly.lisa['var-name'] = function(block) {
  var varName = block.getFieldValue('varName');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  code += varName;
  code += '$$';

  return code;
};


/**
 * Generator stub for DigitalOut Single Variable
 */
Blockly.lisa['digitalout-var'] = function(block) {
  var varName = block.getFieldValue('varName');
  var pinNumber = block.getFieldValue('pinNumber');
  // TODO: Assemble JavaScript into code variable.

  //DigitalOut <varName>(<pinNumber>)

  var code = '';
  code += 'DigitalOut ';
  code += varName;
  code += '(' + pinNumber + ');\n';

  return code;
};

Blockly.lisa['scoped-var-definition'] = function(block) {
  var varType = block.getFieldValue('varType');
  var varName = block.getFieldValue('varName');
  var varValue = Blockly.lisa.valueToCode(block, 'varValue', Blockly.lisa.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // <varType> <varName> = <varValue>; 
  var code = '';
  code += varType + ' ';
  code += varName;
  code += ' = ';
  code += varValue;
  code += ';\n';

  return code;
};
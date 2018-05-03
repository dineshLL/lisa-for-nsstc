/**
 * Created by Dinesh Liyanage on 9/10/2016.
 */

goog.provide('Blockly.lisa.containers');
goog.require('Blockly.lisa');
goog.require('Blockly.lisa.validator');

/**
 * program container-generator
 */
Blockly.lisa['program-container'] = function(block) {
    Blockly.lisa.validator.init(block.workspace);
    var programBody = Blockly.lisa.statementToCode(block, 'program_body');

    Blockly.lisa.validator.refresh();
    return programBody;
};




/**
 * Code generator stub for child-class-container block
 * @param block
 * @returns {string}
 */
Blockly.lisa['child-class-container'] = function(block) {

    var text_class_name = block.getFieldValue('class_name');
    var statements_class_body = Blockly.lisa.statementToCode(block, 'class_body');

    var parentClassName = this.parentBlock_.getFieldValue('class_name');
    var code = '\n\nclass '+ text_class_name +': '+ parentClassName +' {\n'+ statements_class_body +'}';
    var res = code.replace('$$CONSTRUCTOR_NAME$$', text_class_name);
    return res;
};


/**
 * Code generator stub for import-container
 * @param block
 * @returns {string}
 */
Blockly.lisa['import-container'] = function(block) {
    var code = Blockly.lisa.statementToCode(block, 'imports'); //dropdown_accessmodifire +':\n' + statements_variables;
    return code;
};

/**
 * Code generator stub for var-def-container
 * @param block
 * @returns {string}
 */
Blockly.lisa['var-def-container'] = function(block) {
    var code = '\n' + Blockly.lisa.statementToCode(block, 'var_def_body'); 
    return code;
};

/**
 * Code generator stub for main-container
 * @param block
 * @returns {string}
 */
Blockly.lisa['main-container'] = function(block) {
    var code = '\n';
    code += 'int main() {\n';
    code += '\t' + Blockly.lisa.statementToCode(block, 'main_body') + '\n';
    code += '\treturn 0;\n';
    code += '}\n'; 
    return code;
};

Blockly.lisa['ctrl-infinite-loop'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'while(1) {}';
    return code;
  };

/**
 * Code generator stub for method-container
 * @param block
 * @returns {string}
 */
Blockly.lisa['method-container'] = function(block) {

  var dropdown_access_modifier = block.getFieldValue('access-modifier');
  var statements_inputs = Blockly.lisa.statementToCode(block, 'inputs');
  var code = dropdown_access_modifier +':\n' + statements_inputs;

  return code;
};
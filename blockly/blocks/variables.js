/**
 * Created by Dinesh Liyanage on 9/11/2016.
 */

goog.provide("Blockly.lisa.variables");
goog.require("Blockly.lisa");

var tooltip_variable = "Variable";
var tooltip_param = "Parameter that has been passed";

/**
 * import-iostream block definition
 * @type {{init: Blockly.Blocks.variable.init}}
 */
Blockly.Blocks["include-iostream"] = {
  init: function() {
    this.appendDummyInput().appendField("iostream");
    this.setInputsInline(true);
    this.setPreviousStatement(true, [
      "variable",
      "class-instance-variable",
      "object-pointer"
    ]);
    this.setNextStatement(true, [
      "variable",
      "class-instance-variable",
      "object-pointer"
    ]);
    this.setColour(280);
    this.setTooltip(tooltip_variable);
    this.setHelpUrl("https://github.com/dineshLL/lisa/wiki");
  }
};

/**
 * import-mbed block definition
 * @type {{init: Blockly.Blocks.variable.init}}
 */
Blockly.Blocks["include-mbed"] = {
  init: function() {
    this.appendDummyInput().appendField("mbed.h");
    this.setInputsInline(true);
    this.setPreviousStatement(true, [
      "variable",
      "class-instance-variable",
      "object-pointer"
    ]);
    this.setNextStatement(true, [
      "variable",
      "class-instance-variable",
      "object-pointer"
    ]);
    this.setColour(290);
    this.setTooltip(tooltip_variable);
    this.setHelpUrl("https://github.com/dineshLL/lisa/wiki");
  }
};

/**
 * import-mis block definition
 * @type {{init: Blockly.Blocks.variable.init}}
 */
Blockly.Blocks["include-mis"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("headerFile.h"),
      "header_file_name"
    );
    this.setInputsInline(true);
    this.setPreviousStatement(true, [
      "variable",
      "class-instance-variable",
      "object-pointer"
    ]);
    this.setNextStatement(true, [
      "variable",
      "class-instance-variable",
      "object-pointer"
    ]);
    this.setColour(300);
    this.setTooltip(tooltip_variable);
    this.setHelpUrl("https://github.com/dineshLL/lisa/wiki");
  }
};

/**
 * definition for DigitalOutVariable
 */
Blockly.Blocks["var-holder"] = {
  init: function() {
    this.setHelpUrl("http://www.example.com/");
    this.setColour(230);
    this.appendDummyInput()
      .appendField("variable of")
      .appendField(
        new Blockly.FieldDropdown([["DigitalOut", "DigitalOut"]]),
        "className"
      )
      .appendField(" as ")
      .appendField(new Blockly.FieldTextInput("myVariable"), "varName")
      .appendField(" to hold ");
    this.appendStatementInput("NAME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  }
};

Blockly.Blocks["var-name"] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("LED1"),
      "varName"
    );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  }
};

/**
 * definition of a single DigitalOut Variale
 * 
 */
Blockly.Blocks['digitalout-var'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("variable of type DigitalOut as ")
        .appendField(new Blockly.FieldTextInput("camera_switch"), "varName")
        .appendField("and assign pin number ")
        .appendField(new Blockly.FieldTextInput("p24"), "pinNumber");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

/**
 * definition of scoped variables
 */
Blockly.Blocks['scoped-var-definition'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("Define a variable of type")
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["char", "char"], ["double", "double"], ["string", "string"]]), "varType")
        .appendField("as")
        .appendField(new Blockly.FieldTextInput("name"), "varName")
        .appendField("and assign");
    this.appendValueInput("varValue");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
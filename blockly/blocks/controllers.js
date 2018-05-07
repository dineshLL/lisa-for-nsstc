/**
 * Created by Dinesh Liyanage on 9/10/2016.
 * @Description : This file contains the block definitions for the blocks used in Lisa.
 *                If you need to define a new block, create it with Block Factory.
 * @modified : 09/14/2016
 */

goog.provide("Blockly.Blocks.controllers");
goog.require("Blockly.Blocks");

/**
 * block definition for the infinite loop
 * while(1) {}
 */
Blockly.Blocks["ctrl-infinite-loop"] = {
  init: function() {
    this.setHelpUrl("http://www.example.com/");
    this.appendStatementInput("loopBody").appendField("do infinitely");
    this.setTooltip("");
    this.setColour(200);
    this.setPreviousStatement(true, ["4"]);
  }
};

/**
 * for loop definition
 */
Blockly.Blocks["ctrl-for-loop"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("count with index from ")
      .appendField(new Blockly.FieldTextInput("0"), "startValue")
      .appendField("to ")
      .appendField(new Blockly.FieldTextInput("10"), "endValue")
      .appendField("by ")
      .appendField(new Blockly.FieldTextInput("1"), "incrementValue");
    this.appendDummyInput().appendField("Do");
    this.appendStatementInput("loopBody");
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true);
    this.setTooltip("");
    this.setColour(100);
  }
};

Blockly.Blocks["wait"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("wait for ")
      .appendField(new Blockly.FieldTextInput("0.2"), "waitTime")
      .appendField(" seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.setColour(120);
  }
};

Blockly.Blocks['statement-exec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("execute")
        .appendField(new Blockly.FieldTextInput("myLeds[i] = 1"), "statement");
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
  }
};
/**
 * @dgService runnableExampleInlineTagDef
 * @description
 * Inject the specified runnable example into the doc
 */
module.exports = function runnableExampleInlineTagDef(examples) {
  return {
    name: 'runnableExample',

    handler: function(doc, tagName, description) {

      // The tag description should contain the id of the runnable example doc
      var example = examples[description];
      if ( !example ) {
        throw new Error('No example exists with id "' + description + '".');
      }
      if ( !example.runnableExampleDoc ) {
        throw new Error('Example "' + description + '" does not have an associated runnableExampleDoc. Are you missing a processor (examples-generate)?"');
      }

      return example.runnableExampleDoc.renderedContent;
    }
  };
};
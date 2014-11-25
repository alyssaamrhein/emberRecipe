App.RecipeNewCommentController = Ember.ObjectController.extend({
    markedText: function () {
        return marked(this.get('text') || '');
    }.property('text'),

    needs: ['recipe'],
    actions : {
        save: function () {
            if (!this.get('text')) { return; }//Do Nothing if text field is blank;
            var comment = this.store.createRecord('comment', {
                commenter: this.get('commenter'),
                date: (new Date()).toDateString(),
                text: this.get('text')
            });
            comment.save();

            var recipe = this.get('controllers.recipe.model');
            console.log(comment);
            recipe.get('comments').pushObject(comment);
            recipe.save();

            this.transitionToRoute('recipe', recipe.id);
      }
    }
});

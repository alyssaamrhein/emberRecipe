App.AddRecipeController = Ember.Controller.extend({
  actions: {
    create : function(){
      var recipeAttrs = this.getProperties('name', 'imgUrl', 'description','ingredients', 'directions');
      var recipe = this.store.createRecord('recipe', recipeAttrs);
      recipe.save();
      this.transitionToRoute('index');
    }
  }
});

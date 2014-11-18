App.EditRecipeController = Ember.ObjectController.extend({
  actions: {
     editFormSubmit : function(){
      var attributes = this.getProperties('name', 'imgUrl', 'description','ingredients', 'directions');
      this.send('updateRecipe', this.model, attributes);
      return false;
    }
  }
});

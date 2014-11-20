App.RecipeController = Ember.ObjectController.extend({
  actions: {
    destroy: function () {
     if (confirm('Once you delete, it\'s gone forever!')){
       this.get('model').deleteRecord();
     this.get('model').save();
     this.transitionToRoute('index');
        }
      }
    }
});

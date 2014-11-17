App = Ember.Application.create();

App.ApplicationSerializer = DS.LSSerializer.extend();
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'emberRecipe'
});

App.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  ingredients: DS.attr('string'),
  directions: DS.attr('string')
});

App.Router.map(function() {
  this.route('recipes');
  this.route('recipe', {path:'/recipes/:id' });
  this.route('edit_recipe', {path:'/recipes/:id/edit'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("recipe");
  }
});

App.RecipeRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("recipe", params.id);
  }
});

App.EditRecipeRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("recipe", params.id);
  },
  actions: {
    updateRecipe: function(model, attributes){
      model.setProperties(attributes);
      model.save();
      this.transitionTo('recipe', model);
      return false;
    }
  }
});

App.EditRecipeController = Ember.ObjectController.extend({
  actions: {
     editFormSubmit : function(){
      var attributes = this.getProperties('name', 'description','ingredients', 'directions');
      this.send('updateRecipe', this.model, attributes);
      return false;
    }
  }
});

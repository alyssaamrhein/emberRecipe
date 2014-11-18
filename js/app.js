App = Ember.Application.create();

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: new Firebase('https://fiery-inferno-3200.firebaseio.com/')
});

App.Router.map(function() {
  this.route('recipes');
  this.route('recipe', {path:'/recipes/:id' });
  this.route('edit_recipe', {path:'/recipes/:id/edit'});
  this.route('add_recipe', {path:'/recipes/new'});
});

App.AddRecipeRoute = Ember.Route.extend({

});

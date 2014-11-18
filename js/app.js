App = Ember.Application.create();

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: new Firebase('https://fiery-inferno-3200.firebaseio.com/')
});

App.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  ingredients: DS.attr('string'),
  directions: DS.attr('string')
});


App.AddRecipeRoute = Ember.Route.extend({

});

App.RecipeController = Ember.Route.extend({

});

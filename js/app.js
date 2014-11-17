App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return RECIPES;
  }
});

var RECIPES = [{
  name: 'banana',
  description: 'this is a banana',
  ingredients: 'banana',
  directions: 'have a banana'
}]

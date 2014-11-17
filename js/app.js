App = Ember.Application.create(); // creating the object App. Roots of the app

App.Router.map(function() {
  this.resource('recipes');
  this.resource('recipe', { path:'recipes/:name' });
  this.route('edit_recipe', { path:'recipes/:id/edit' });

});

var RECIPES = [{ name: 'banana',
                 id: 1,
                 description: 'description',
                 imgUrl: 'imgUrl',
                 ingredients:['apple'],
                 steps: ['do something']
               }, {
                 name: 'apple',
                 id: 2,
                 description: 'description',
                 imgUrl: 'imgUrl',
                 ingredients:['apple'],
                 steps: ['do something']
               }]

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return RECIPES;
      }
});

App.RecipesRoute = Ember.Route.extend({
  model:  function(params) {
   return RECIPES.find(function(recipes){
     return recipes.name === Number(params.name);
   })
 }
});

App.EditRecipeRoute = Ember.Route.extend({
  model: function(params) {
    return RECIPES.find(function(recipes){
      return recipes.name === Number(params.name);
    })
  }
});

App.RecipesRoute = Ember.Route.extend({
  model: function() {
    return RECIPES;
  }
})

App.IndexController = Ember.Controller.extend({
  recipesCount: 5,
    time: function() {
    return (new Date()).toDateString();
  }.property()
});


//<img {{bind-attr src='logo'}} alt='Logo' />

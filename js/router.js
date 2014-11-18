App.Router.map(function() {
  this.route('recipes');
  this.route('recipe', {path:'/recipes/:id' });
  this.route('edit_recipe', {path:'/recipes/:id/edit'});
  this.route('add_recipe', {path:'/recipes/new'});
});

App.Router.map(function() {
  this.route('recipes');
  this.route('recipe', {path:'/recipes/:id' }, function (){
    this.route('new_comment');
  });
  this.route('edit_recipe', {path:'/recipes/:id/edit'});
  this.route('add_recipe', {path:'/recipes/new'});
  this.route('login', {path:'/login'});
  this.route('categories', { path: '/categories'});
});

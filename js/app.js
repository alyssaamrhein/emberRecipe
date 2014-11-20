App = Ember.Application.create();
App.Firebase = new Firebase('https://fiery-inferno-3200.firebaseio.com/');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: App.Firebase
});

App.CATEGORIES = [
    { id: '1', name: 'Breakfast'},
    { id: '2', name: 'Lunch'},
    { id: '3', name: 'Dinner'},
    { id: '4', name: 'Snacks'}
];
// App.AddRecipeRoute = Ember.Route.extend({
//
// });

App.ItemView = Ember.View.extend({
  mouseEnter: function () {
    this.set('showTitle', true);
  },
  mouseLeave: function () {
    this.set('showTitle', false);
  }
});

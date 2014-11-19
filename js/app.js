App = Ember.Application.create();
App.Firebase = new Firebase('https://fiery-inferno-3200.firebaseio.com/');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: App.Firebase
});

App.CATEGORIES = [
    { id: '1', name: 'Breakfast'},
    { id: '2', name: 'Dessert'},
    { id: '3', name: 'Side'},
    { id: '4', name: 'Main'}
];
// App.AddRecipeRoute = Ember.Route.extend({
//
// });

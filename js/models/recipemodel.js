App.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  imgUrl: DS.attr('string'),
  category: DS.attr('string'),
  description: DS.attr('string'),
  ingredients: DS.attr('string'),
  directions: DS.attr('string')
});

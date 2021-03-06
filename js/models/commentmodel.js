App.Comment = DS.Model.extend({
    commenter: DS.attr('string'),
    date: DS.attr('string'),
    text: DS.attr('string'),
    markedText: function () {
        return marked(this.get('text') || '');
    }.property('text'),
    recipe: DS.belongsTo('recipe', { async: true })
});

import DS from 'ember-data';

export default DS.Model.extend({
    description: DS.attr('string'),
    html_url: DS.attr('string')
});

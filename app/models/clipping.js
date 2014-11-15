import DS from 'ember-data';

var Clipping = DS.Model.extend({
    url: DS.attr('string')
});

Clipping.reopenClass({
    FIXTURES: [
        {id: 1, url: 'http://www.google.com'},
        {id: 2, url: 'http://www.yahoo.com'},
        {id: 3, url: 'http://www.yelp.com'}
    ]
});

export default Clipping;

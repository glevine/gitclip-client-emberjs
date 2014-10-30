import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var fullName = params.owner + '/' + params.repo;

        return this.store.find('repo', fullName);
    }
});

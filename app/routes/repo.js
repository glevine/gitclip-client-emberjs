import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var fullName, store;

        store = this.store;
        fullName = params.owner + '/' + params.repo;

        return Ember.RSVP.hash({
            repo: store.find('repo', fullName),
            clippings: store.find('clipping')
        });
    },

    setupController: function(controller, models) {
        this._super(controller, models);
        controller.set('clippings', models.clippings);
    }
});

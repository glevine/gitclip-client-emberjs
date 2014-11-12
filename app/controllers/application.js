import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        routeToRepo: function(owner, repo) {
            this.transitionToRoute('repo', owner, repo);
        }
    }
});

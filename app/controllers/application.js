import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        routeToHome: function() {
            this.transitionToRoute('/');
        },

        routeToRepo: function(owner, repo) {
            this.transitionToRoute('repo', owner, repo);
        }
    }
});

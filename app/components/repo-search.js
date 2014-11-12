import Ember from 'ember';

var RepoParser = /(?:http[s]?\:\/\/github\.com\/)?(.*)\/(.*)/i;

export default Ember.Component.extend({
    actions: {
        changeRepo: function() {
            var matches;

            matches = this.get('repo').match(RepoParser);

            if (!matches) {
                //TODO: error
            }

            this.sendAction('action', matches[1], matches[2]);
        }
    }
});

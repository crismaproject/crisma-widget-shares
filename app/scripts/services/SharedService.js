angular.module(
    'de.cismet.crisma.widgets.shared',
    []
).factory(
    'de.cismet.crisma.widgets.shared.SharedService',
    [
        '$rootScope',
        function ($rootScope) {
            'use strict';

            var selectedWorldstates, getSelectedWorldstates, setSelectedWorldstates;

            selectedWorldstates = [];

            getSelectedWorldstates = function () { return selectedWorldstates; };
            setSelectedWorldstates = function (newSelectedWorldstates) {
                if (newSelectedWorldstates && selectedWorldstates !== newSelectedWorldstates) {
                    selectedWorldstates = newSelectedWorldstates;
                    $rootScope.$broadcast('selectedWorldstatesChanged');
                }
            };

            return {
                getSelectedWorldstates: getSelectedWorldstates,
                setSelectedWorldstates: setSelectedWorldstates
            };
        }
    ]
);
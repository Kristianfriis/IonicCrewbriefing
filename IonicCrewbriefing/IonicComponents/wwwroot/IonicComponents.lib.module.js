export function afterStarted(blazor) {
    blazor.registerCustomEventType('IonRefresh', {
        browserEventName: 'ionRefresh',
        createEventArgs: event => {
            return {
                eventTimestamp: new Date(),
            };
        }
    });

    blazor.registerCustomEventType('IonActionSheetDidDismiss', {
        browserEventName: 'ionActionSheetDidDismiss',
        createEventArgs: event => {
            return {
                action: event.detail.data.action,
            };
        }
    });
}
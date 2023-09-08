export function AddActionSheetButtons(element, buttons) {
    if (buttons == undefined || buttons == null) {
        return;
    }
    var actionButtons = buttons.map(x => {
        const container = {};

        container.text = x.text;
        container.role = x.role;
        container.data = {
            action: x.action,
        };

        return container;
    })
    if (actionButtons.length != 0) {
        element.buttons = actionButtons;
    }
}

//export function initializeIonActionSheet(element, dotNetReference) {
//    if (element) {
//        // Add event listener for the ionRefresh custom event
//        element.addEventListener('ionActionSheetDidDismiss', (ev) => {
//            // Call the .NET method through the provided DotNetReference
//            dotNetReference.invokeMethodAsync('OnDidDismiss', ev.detail.data.action);
//        });
//    }
//}
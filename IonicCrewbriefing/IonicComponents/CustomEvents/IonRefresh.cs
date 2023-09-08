using Microsoft.AspNetCore.Components;

namespace IonicComponents.Components;

public class IonRefresh : EventArgs
{
    public DateTime? EventTimestamp { get; set; }
    //public bool IsDoubleClick { get; set; }
}

public class IonAction : EventArgs
{
    public string? Action { get; set; }
    //public bool IsDoubleClick { get; set; }
}

[EventHandler("onIonRefresh", typeof(IonRefresh), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onIonActionSheetDidDismiss", typeof(IonAction), enableStopPropagation: true, enablePreventDefault: true)]
public static class EventHandlers
{
    // purposefully empty
}
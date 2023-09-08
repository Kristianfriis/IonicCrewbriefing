namespace IonicComponents.Components;

public class IonActionSheetClass
{
    public string Text { get; set; }
    public string Role { get; set; }
    public string Action { get; set; }

    public IonActionSheetClass(string text, string role, string action)
    {
        Text = text;
        Role = role;
        Action = action;
    }
    public IonActionSheetClass()
    {

    }
}

using MediatR;

namespace DVTN.Frontend.Web.Components.ViewComponents.ImageAndTextPanel;

public class ImageAndTextPanelRequest : IRequest<ImageAndTextPanelViewModel>
{
    public string Heading { get; set; }
    public string MainCopy { get; set; }
    public string ButtonText { get; set; }
    public string ImageUrl { get; set; }
    public string ImageAltText { get; set; }
}
using MediatR;

namespace DVTN.Frontend.Web.Components.ViewComponents.ImageAndTextPanel;

public class ImageAndTextPanelRequestHandler : IRequestHandler<ImageAndTextPanelRequest, ImageAndTextPanelViewModel>
{
    public async Task<ImageAndTextPanelViewModel> Handle(ImageAndTextPanelRequest request, CancellationToken cancellationToken)
    {
        return new ImageAndTextPanelViewModel()
        {
            Heading = request.Heading,
            MainCopy = request.MainCopy,
            ButtonText = request.ButtonText,
            ImageUrl = request.ImageUrl,
            ImageAltText = request.ImageAltText
        };
    }
}
using DVTN.Frontend.Web.Infrastructure.Services.LoremIpsumService;
using MediatR;

namespace DVTN.Frontend.Web.Components.ViewComponents.ImageAndTextPanel;

public class ImageAndTextPanelRequestHandler : IRequestHandler<ImageAndTextPanelRequest, ImageAndTextPanelViewModel>
{
    private readonly ILoremIpsumService _loremIpsumService;

    public ImageAndTextPanelRequestHandler(ILoremIpsumService loremIpsumService)
    {
        _loremIpsumService = loremIpsumService;
    }
    public async Task<ImageAndTextPanelViewModel> Handle(ImageAndTextPanelRequest request, CancellationToken cancellationToken)
    {
        return new ImageAndTextPanelViewModel()
        {
            Heading = request.Heading,
            MainCopy = string.IsNullOrEmpty(request.MainCopy) ? _loremIpsumService.GenerateLoremIpsum(5) : request.MainCopy,
            ButtonText = request.ButtonText,
            ImageUrl = request.ImageUrl,
            ImageAltText = request.ImageAltText
        };
    }
}
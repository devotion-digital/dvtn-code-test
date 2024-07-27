using DVTN.Frontend.Web.Infrastructure.ViewComponents;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DVTN.Frontend.Web.Components.ViewComponents.ImageAndTextPanel;

public class ImageAndTextPanelViewComponent : BaseViewComponent
{
    public ImageAndTextPanelViewComponent(IMediator mediator)
        : base(mediator)
    {
    }

    public Task<IViewComponentResult> InvokeAsync(string heading, string mainCopy, string buttonText, string imageUrl, string imageAltText) =>
        Process<ImageAndTextPanelRequest, ImageAndTextPanelViewModel>(
            "~/Components/ViewComponents/ImageAndTextPanel/Index.cshtml", new ImageAndTextPanelRequest
            {
                Heading = heading, 
                MainCopy = mainCopy, 
                ButtonText = buttonText, 
                ImageUrl = imageUrl, 
                ImageAltText = imageAltText 
            });
}
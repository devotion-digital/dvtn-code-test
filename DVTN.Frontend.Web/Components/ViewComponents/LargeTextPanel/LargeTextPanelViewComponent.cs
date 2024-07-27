using DVTN.Frontend.Web.Infrastructure.ViewComponents;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DVTN.Frontend.Web.Components.ViewComponents.LargeTextPanel;

public class LargeTextPanelViewComponent : BaseViewComponent
{
    public LargeTextPanelViewComponent(IMediator mediator)
        : base(mediator)
    {
    }

    public Task<IViewComponentResult> InvokeAsync(string copy, string imageUrl, string imageAltText) =>
        Process<LargeTextPanelRequest, LargeTextPanelViewModel>(
            "~/Components/ViewComponents/LargeTextPanel/Index.cshtml", new LargeTextPanelRequest
            {
                Copy = copy,
                ImageUrl = imageUrl,
                ImageAltText = imageAltText
            });
}
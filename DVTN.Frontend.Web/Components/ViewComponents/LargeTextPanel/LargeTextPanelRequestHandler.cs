using MediatR;

namespace DVTN.Frontend.Web.Components.ViewComponents.LargeTextPanel;

public class LargeTextPanelRequestHandler : IRequestHandler<LargeTextPanelRequest, LargeTextPanelViewModel>
{
    public async Task<LargeTextPanelViewModel> Handle(LargeTextPanelRequest request, CancellationToken cancellationToken)
    {
        return new LargeTextPanelViewModel()
        {
            Copy = request.Copy,
            ImageUrl = request.ImageUrl,
            ImageAltText = request.ImageAltText
        };
    }
}
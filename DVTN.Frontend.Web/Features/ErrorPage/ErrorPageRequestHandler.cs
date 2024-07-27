using DVTN.Frontend.Web.Features.ErrorPage;
using MediatR;

namespace DVTN.Frontend.Web.Features.ErrorPage;

public class ErrorPageRequestHandler :
    IRequestHandler<ErrorPageRequest, ErrorPageViewModel>
{
    private readonly IMediator _mediator;

    public ErrorPageRequestHandler(
        IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task<ErrorPageViewModel> Handle(ErrorPageRequest request, CancellationToken cancellationToken)
    {
        return new ErrorPageViewModel()
        {
            ErrorCode = request.ErrorCode,
            RequestedPath = request.RequestedPath,
            CustomErrorMessage = request.CustomErrorMessage
        };
    }
}
using MediatR;

namespace DVTN.Frontend.Web.Features.ErrorPage;

public class ErrorPageRequest : IRequest<ErrorPageViewModel>
{
    public int ErrorCode { get; set; }
    public string RequestedPath { get; set; }
    public string CustomErrorMessage { get; set; }
}
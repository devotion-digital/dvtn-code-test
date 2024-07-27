using DVTN.Frontend.Web.Infrastructure.Controllers;
using MediatR;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace DVTN.Frontend.Web.Features.ErrorPage;

public class ErrorPageController : BaseController
{
    public ErrorPageController(IMediator mediator) : base(mediator)
    {
    }
    
    // [Route("/Error")]
    // public Task<ActionResult> Index() => Process<ErrorPageRequest, ErrorPageViewModel>(new ());
    
    // [Route("/Error/{code:int}")]
    // public Task<ActionResult> Index() => Process<ErrorPageRequest, ErrorPageViewModel>(new ());
    
    [Route("/Error/{code:int}")]
    public Task<ActionResult> Index(int code)
    {
        var featureContext = Request.HttpContext.Features.Get<IStatusCodeReExecuteFeature>();
        var requestPath = featureContext?.OriginalPath;
        //string queryString = string.IsNullOrEmpty(originalPath) ? "" : $"?originalPath={originalPath}";
        
        var request = new ErrorPageRequest()
        {
            ErrorCode = StatusCodes.Status500InternalServerError,
            RequestedPath = requestPath,
            CustomErrorMessage = string.Empty
        };
        
        switch (code)
        {
            case 404:
                request.ErrorCode = StatusCodes.Status404NotFound;
                break;
            case 500:
                request.ErrorCode = StatusCodes.Status500InternalServerError;
                break;
            default:
                request.ErrorCode = StatusCodes.Status500InternalServerError;
                break;
        }
        
        return Process<ErrorPageRequest, ErrorPageViewModel>(request);   
    }
}
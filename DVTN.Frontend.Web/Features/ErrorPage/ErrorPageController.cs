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
    
    [Route("/Error/{code:int}")]
    public Task<ActionResult> Index(int code)
    {
        // Retrieve the originally requested path for display on the page
        var featureContext = Request.HttpContext.Features.Get<IStatusCodeReExecuteFeature>();
        var requestPath = featureContext?.OriginalPath;
        
        // Create a default request. 
        var request = new ErrorPageRequest()
        {
            ErrorCode = StatusCodes.Status500InternalServerError,
            RequestedPath = requestPath,
            CustomErrorMessage = string.Empty
        };
        
        // Refine the error information to display. 
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
namespace DVTN.Frontend.Web.Features.ErrorPage;

public class ErrorPageViewModel
{
    public int ErrorCode { get; set; }
    public string RequestedPath { get; set; }
    public string CustomErrorMessage { get; set; }
}
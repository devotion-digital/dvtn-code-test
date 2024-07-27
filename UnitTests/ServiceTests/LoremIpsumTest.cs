using DVTN.Frontend.Web.Infrastructure.Services.LoremIpsumService;

namespace UnitTests.ServiceTests;

public class LoremIpsumTest
{
    private readonly ILoremIpsumService _loremIpsumService;

    public LoremIpsumTest()
    {
        _loremIpsumService = new LoremIpsumService();
    }

    [Fact]
    public void IsNotNull()
    {
        var result = _loremIpsumService.GenerateLoremIpsum(1);
        
        if (string.IsNullOrEmpty(result))
        {
            Assert.Fail($"Returned string was null or empty.");
        }
    }

    [Fact]
    public void SmallResult()
    {
        var result = _loremIpsumService.GenerateLoremIpsum(1);
        
        if (result.Length < 1 || result.Length > 120)
        {
            Assert.Fail( $"Returned string was {result.Length} characters long. Should be between 1-120.");
        }
        else if (result.Length > 1 || result.Length < 120)
        {
            Assert.True(true, $"Returned string was {result.Length} characters long. Functioning as expected.");
        }
    }
}
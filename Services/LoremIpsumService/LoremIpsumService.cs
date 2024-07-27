namespace DVTN.Frontend.Web.Infrastructure.Services.LoremIpsumService;

public class LoremIpsumService : ILoremIpsumService
{
    public string GenerateLoremIpsum(int numberOfSentences)
    {
        string[] loremIpsumSentences = new string[]
        {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Curabitur pretium tincidunt lacus.",
            "Nulla gravida orci a odio.",
            "Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
            "Integer in mauris eu nibh euismod gravida.",
            "Duis ac tellus et risus vulputate vehicula.",
            "Aperiam architecto, autem consectetur, error exercitationem ipsam natus nulla, omnis sequisint temporibus veritatis.",
            "Amet cumque debitis deserunt ipsa laboriosam, nulla perferendis!"
        };

        Random random = new Random();
        string result = "";

        for (int i = 0; i < numberOfSentences; i++)
        {
            result += loremIpsumSentences[random.Next(loremIpsumSentences.Length)] + " ";
        }

        return result.Trim();
    }
}
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using se347_be.Model;
using Serilog;

namespace se347_be.APIs
{
    public class MyCloudinary
    {
        private readonly Cloudinary _cloudinary;
        public MyCloudinary()
        {
            var cloudinaryAccount = new Account(
                "dkji5ftd1",
                "597553616315551",
               "F1CYE4hN4Ig3eitNpAR8RvmAcb8"
            );
            _cloudinary = new Cloudinary(cloudinaryAccount);
        }
        public async Task<string> uploadImage(IFormFile file)
        {
            try
            {
                if (file == null || file.Length == 0)
                {
                    return "";
                }
                using (var stream = file.OpenReadStream())
                {
                    ImageUploadParams uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.FileName, stream),
                        PublicId = Guid.NewGuid().ToString(),
                        Folder = "review",
                    };
                    ImageUploadResult result = await _cloudinary.UploadAsync(uploadParams);
                    if (result.Error != null)
                    {
                        Log.Error(result.Error.ToString());
                        return "";
                    }
                    return result.SecureUrl.ToString();
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
            }
            return "";
        }
    }
}
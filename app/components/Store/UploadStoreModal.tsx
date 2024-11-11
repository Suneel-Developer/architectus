"use client";
import React, { useState } from "react";
import Image from "next/image";

interface UploadStoreModalProps {
  onClose: () => void;
}

const UploadStoreModal: React.FC<UploadStoreModalProps> = ({ onClose }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Start uploading
      setIsUploading(true);
      setProgress(0);

      // Simulate file upload
      const uploadInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(uploadInterval);
            setImageUrl(URL.createObjectURL(file)); // Set image URL after upload
            setIsUploading(false); // Hide upload progress
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    }
  };

  const handleCancel = () => {
    setIsUploading(false);
    setProgress(0);
  };

  const handleDelete = () => {
    setImageUrl(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5 py-3">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative min-h-full">
        {/* Close Window btn */}
        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={16}
          height={16}
          onClick={onClose}
          loading="lazy"
          className="absolute top-5 right-5 cursor-pointer"
        />

        <div className="h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
          <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left mb-4">
            Upload
          </h1>

          <p className="text-sm text-[#0F0A19B2]">
            Add your documents here, and you can upload up to 5 files max
          </p>

          <div className="relative borderUpload py-5 md:py-8 mt-6">
            {!isUploading && !imageUrl && (
              <div className="text-center">
                <input
                  className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                  type="file"
                  onChange={handleFileChange}
                />
                <div>
                  <img
                    alt="upload"
                    loading="lazy"
                    width="42"
                    height="34"
                    decoding="async"
                    className="mx-auto"
                    src="/assets/icons/upload-icon.svg"
                  />
                  <h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
                    <label htmlFor="file-upload" className="relative">
                      <span>Drag and drop </span>
                      <span className="text-[#3D2278] font-semibold">
                        or browse
                      </span>
                      <input
                        id="file-upload"
                        className="sr-only"
                        type="file"
                        name="file-upload"
                        onChange={handleFileChange}
                      />
                    </label>
                  </h3>
                </div>
              </div>
            )}

            {isUploading && (
              <div className="flex justify-center items-center flex-col">
                <div className="border-2 rounded-full border-[#FAFAFA] w-11 h-11 flex items-center justify-center text-[#0F0A19B2] text-xs">
                  {progress}%
                </div>
                <p className="text-[#0F0A19B2] text-center text-base my-[18px]">
                  Uploading...
                </p>
                <button
                  className="border border-[#CECECE] text-[#0F0A19B2] rounded-lg py-[7px] px-4 text-center text-xs font-medium mx-auto"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            )}

            {/* When upload completes, show the image and allow deletion */}
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-1 mt-[10px] mb-7">
            <p className="text-sm text-[#0F0A19B2]">
              Maximum Size: 280 x 90 px
            </p>
            <p className="text-sm text-[#0F0A19B2]">
              White or transparent background
            </p>
          </div>

          <div>
            {imageUrl && !isUploading && (
              <div className="text-center mt-6">
                <div className="flex justify-center items-center">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                  />
                  <button className="text-red-500 ml-2" onClick={handleDelete}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 3v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3H1z" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="Enter Your Company Name"
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] w-full"
            />

            <input
              type="text"
              placeholder="Enter Your Phone"
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
            />

            <input
              type="text"
              placeholder="Enter Your Website"
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
            />

            <input
              type="text"
              placeholder="Enter Your Fiscal Number"
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
            />

            <button className="bg-[#3D2278] mt-4 text-white rounded-[10px] w-full min-h-12 md:min-h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
              Submit Request
            </button>

            <button
              onClick={onClose}
              className="border-[1.5px] border-[#3D2278] text-[#3D2278] rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-all duration-300 hover:bg-[#3D2278] hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadStoreModal;

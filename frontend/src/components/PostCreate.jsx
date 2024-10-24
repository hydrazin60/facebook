import React, { useRef, useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { LogIn } from "lucide-react";
import axios from "axios";

export default function PostCreate({ open, onClose }) {
  const fileInputRef = useRef(null);
  const [filePreviews, setFilePreviews] = useState([]);
  const [formData, setFormData] = useState({
    caption: "",
    images: [],
  });

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const filesArray = Array.from(files);
      if (formData.images.length + filesArray.length > 4) {
        alert("You can only select up to 4 images.");
        return;
      }
      const newPreviews = filesArray.map((file) => URL.createObjectURL(file));

      setFilePreviews([...filePreviews, ...newPreviews]);
      setFormData({
        ...formData,
        images: [...formData.images, ...filesArray],
      });
    }
  };

  const handleSubmit = async () => {
    try {
      if (formData.images.length === 0) {
        toast.error("Please select at least one image.");
        return;
      }
      if (formData.images.length > 4) {
        toast.error("You can only select up to 4 images.");
        return;
      }
      const res = await axios.post(
        "http://localhost:4000/facebook/api/v1/post/create-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        onClose();
      }

      if (!res.data.success) {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="p-4 shadow-lg border border-gray-200 rounded-md">
          <section className="w-full h-full flex flex-col gap-8">
            <div className="w-full h-12 flex justify-center items-center border-b border-zinc-400">
              <p className="text-2xl font-semibold">Create Post</p>
            </div>
            <div className="w-full flex flex-col h-[33rem] gap-7">
              <div className="w-full h-auto flex flex-col gap-3">
                <div className="w-full flex gap-2">
                  <img
                    src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/292694884_729606568152974_711651807545817504_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c7CWYlOYpDIQ7kNvgGWrmDB&_nc_ht=scontent.fktm21-1.fna&_nc_gid=AvL87gV9RY0cDuj9353rW96&oh=00_AYC9XXGItEWMXmKK_4cQMRAJa9l0CcV9xFwo7s0rUMWX9g&oe=671E2964"
                    alt="Profile"
                    className="h-11 w-11 cursor-pointer rounded-full hover:border hover:border-zinc-500 overflow-hidden object-cover"
                  />
                  <div>
                    <p className="text-md font-semibold text-zinc-700">
                      Jiban Pandey
                    </p>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="What's on your mind, Pandey?"
                    className="w-full h-10 border-none focus:outline-none"
                    onChange={(e) =>
                      setFormData({ ...formData, caption: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="w-full h-[60%] border p-2 flex flex-col gap-6 border-zinc-600">
                <div className="w-full h-[70%] rounded-lg bg-zinc-100 flex items-center justify-center">
                  <div
                    onClick={handleClick}
                    className="cursor-pointer relative w-full h-full flex flex-col items-center justify-center"
                  >
                    <span className="h-14 w-14 bg-zinc-300 rounded-full flex items-center justify-center">
                      <MdPhotoSizeSelectActual className="text-3xl text-green-600" />
                    </span>
                    <h2 className="text-xl font-semibold">Add Photo/Video</h2>
                    <p className="text-sm font-semibold">or drag and drop</p>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileChange}
                      multiple
                    />
                  </div>
                </div>

                {/* Preview section */}
                <div className="flex flex-wrap gap-2">
                  {filePreviews.map((preview, index) => (
                    <div key={index} className="w-24 h-24 relative">
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>

                <div className="w-full h-[20%] rounded-lg flex bg-zinc-200 p-2 items-center justify-between">
                  <div className="h-full flex items-center justify-center">
                    <span className="h-10 w-10 bg-zinc-200 rounded-full flex items-center justify-center">
                      <MdPhotoSizeSelectActual className="text-2xl text-green-600" />
                    </span>
                    <p className="text-sm font-semibold ml-2 text-zinc-600">
                      Add photo and videos from your mobile device
                    </p>
                  </div>
                  <Button className="bg-zinc-400 text-black hover:bg-zinc-500 hover:text-black">
                    Add
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                className="bg-blue-600 text-white text-lg hover:bg-blue-500 hover:text-white"
              >
                Post
              </Button>
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import Loading from "../loading";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const CreateArticle = ({ createOpen, onClose, onCreateArticle }) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [imageId, setImageId] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (createOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [createOpen]);

  if (!createOpen) return null;

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const newData = { ...data, imageId: imageId };
      console.log(newData);

      const res = await fetch(apiUrl + "articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(newData),
      });
      const result = await res.json();
      if (result.status) {
        toast.success(result.message);
        await onCreateArticle();
        reset();
        onClose();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const handleImage = async (e) => {
    const formData = new FormData();
    const image = e.target.files[0];
    formData.append("image", image);
    setDisabled(true);

    await fetch(apiUrl + "temp-image", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.status) {
          toast.error(result.errors.image[0]);
          e.target.value = null;
        } else {
          setImageId(result.data.id);
        }
      });
    setDisabled(false);
  };

  return (
    <div className="z-30 w-full h-full bg-black/20 fixed top-0 left-0 flex justify-center overflow-y-auto py-12 backdrop-blur-sm">
      <div className="bg-white w-[50rem] min-h-[35rem] px-5 py-5 rounded-lg border border-gray-700">
        <header className="flex items-center justify-center">
          <h3 className="font-semibold mb-3 text-xl">Create an Article</h3>
        </header>
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-textColor"
                >
                  Title
                </label>
                <input
                  {...register("title")}
                  required
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="slug"
                  className="block mb-2 text-sm font-medium text-textColor"
                >
                  Slug
                </label>
                <input
                  {...register("slug")}
                  required
                  type="text"
                  id="slug"
                  className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-5">
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-textColor"
                >
                  Status
                </label>
                <select
                  {...register("status")}
                  id="status"
                  className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                >
                  <option value="1">Published</option>
                  <option value="0">Draft</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="author"
                  className="block mb-2 text-sm font-medium text-textColor"
                >
                  Author
                </label>
                <input
                  {...register("author")}
                  required
                  type="text"
                  id="author"
                  className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-textColor"
              >
                Content
              </label>
              <textarea
                {...register("content")}
                required
                id="content"
                rows="5"
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
              ></textarea>
            </div>

            <div className="mb-5">
              <label
                htmlFor="upload"
                className="block mb-2 text-sm font-medium text-textColor"
              >
                Upload Cover Image
              </label>
              <input required type="file" id="upload" onChange={handleImage} />
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center border-2 font-medium rounded-lg text-sm w-auto px-5 py-2.5 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                disabled={loading || disabled}
                type="submit"
                className="inline-flex items-center justify-center text-white bg-highlightColor hover:bg-highlightColor/80 font-medium rounded-lg text-sm w-auto px-5 py-2.5 transition-all duration-300"
              >
                Submit
                {loading && (
                  <Loading className="border-2 border-white w-[20px] h-[20px] ml-2" />
                )}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateArticle;

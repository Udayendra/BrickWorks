import React from "react";
import Loading from "../loading";
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const Create = ({ createOpen, onClose, onCreateServices }) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [imageId, setImageId] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (createOpen) {
      document.documentElement.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.documentElement.style.overflow = "auto"; // Restore scroll when closed
    }

    return () => {
      document.documentElement.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [createOpen]);

  if (!createOpen) return;

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const newData = { ...data, imageId: imageId };
      console.log(newData);

      const res = await fetch(apiUrl + "services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(newData),
      });
      const result = await res.json();
      if (result.status) {
        toast.success(result.message);
        await onCreateServices();
        reset();
        onClose();
        // console.log(result.message);
        // setLoading(false);
      } else {
        toast.error(result.message);
        // setLoading(false);
        // console.log(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const handleimage = async (e) => {
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
    <div className="z-10 w-full h-full bg-black/20 fixed top-0 left-0 flex items-center justify-center overflow-y-auto py-12 backdrop-blur-sm">
      <div className="bg-white w-[40rem] px-5 py-5 rounded-lg border border-gray-700">
        <header className="flex items-center justify-center">
          <h3 className="font-semibold mb-3 text-xl">Create a Service</h3>
        </header>
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-textColor"
              >
                Name
              </label>
              <input
                {...register("title")}
                required
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                // placeholder="Name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                  // placeholder="Slug"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-textColor mb-1"
                >
                  Status
                </label>
                <select
                  {...register("status")}
                  name="status"
                  id="status"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-700 shadow-sm  transition-all duration-200 ease-in-out hover:border-gray-400"
                >
                  <option value="1">Active</option>
                  <option value="0">Block</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="short_description"
                className="block mb-2 text-sm font-medium text-textColor"
              >
                Short description
              </label>
              <input
                {...register("short_desc")}
                required
                type="text"
                id="short_description"
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                // placeholder="Slug"
              />
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
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-textColor"
              >
                Upload image
              </label>
              <input
                // {...register("content")}
                required
                type="file"
                id="image"
                onChange={handleimage}
              />
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center  mr-2 border-2 focus:outline-none font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center transition-all duration-300"
              >
                Cancel
              </button>
              <button
                disabled={loading || disabled}
                type="submit"
                className="inline-flex items-center justify-center text-white mr-2 bg-highlightColor hover:bg-highlightColor/80  focus:outline-none font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center transition-all duration-300"
              >
                Submit{" "}
                {loading ? (
                  <Loading className="border-2 border-white w-[20px] h-[20px]" />
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Create;

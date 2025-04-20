import React, { useEffect } from "react";
import Loading from "../loading";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { apiUrl, serviceImageUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const EditServices = ({ editOpen, onClose, onEditService, service }) => {
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
    if (editOpen && service?.id) {
      reset({
        title: service.title,
        slug: service.slug,
        short_desc: service.short_desc,
        content: service.content,
        status: service.status,
      });
      // console.log(service)
      fetch(apiUrl + "services/" + service.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      }).then((res) => res.json());
    }
    if (editOpen) {
      document.documentElement.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.documentElement.style.overflow = "auto"; // Restore scroll when closed
    }

    return () => {
      document.documentElement.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [editOpen, service?.id, reset]);
  // console.log(service)
  // useEffect(() => {

  // }, [editOpen]);

  // reset({
  //   title: service.title,
  //   slug: service.slug,
  //   short_desc: service.short_desc,
  //   content: service.content,
  //   status: service.status,
  // });
  if (!editOpen) return;

  //   useEffect(() => {
  //     reset(service);
  //   }, [service, reset]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const newData = { ...data, imageId: imageId };
      const res = await fetch(apiUrl + "services/" + service.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(newData),
      });
      const result = await res.json();
      if (result.status) {
        toast.success(result.message);
        await onEditService();
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

  const resetForm = () => {
    reset({
      title: " ",
      slug: " ",
      short_desc: " ",
      content: "",
    });
  };

  return (
    <div className="z-10 w-full h-full bg-black/20 fixed left-0 top-0 flex justify-center overflow-auto py-12 backdrop-blur-sm">
      <div className="bg-white w-[40rem] px-5 py-5 rounded-lg border border-gray-700">
        <header className="flex items-center justify-center">
          <h3 className="font-semibold mb-3 text-xl">Edit Service</h3>
        </header>
        <main className="h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="">
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
            </div>
            <div className="mb-5">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-textColor"
              >
                Content
              </label>
              <input
                {...register("content")}
                required
                type="text"
                id="content"
                className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                // placeholder="Slug"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
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
            </div>{" "}
            <div className="mb-5 grid grid-cols-2">
              <div>
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-textColor"
                >
                  Upload image
                </label>
                <input
                  // {...register("content")}
                  required
                  type="file"
                  id="content"
                  onChange={handleimage}
                  // className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5"
                  // placeholder="Slug"
                />
              </div>
              <div className="flex justify-end">
                <img
                  src={serviceImageUrl + service.image}
                  alt="Service image"
                  className="h-24 w-24 object-cover"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-10">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  resetForm();
                }}
                className="inline-flex items-center justify-center  mr-2 border-2 focus:outline-none font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center transition-all duration-300"
              >
                Cancel
              </button>
              <button
                disabled={loading}
                type="submit"
                className="inline-flex items-center justify-center text-white mr-2 bg-highlightColor hover:bg-highlightColor/80  focus:outline-none font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center transition-all duration-300"
              >
                Update{" "}
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

export default EditServices;

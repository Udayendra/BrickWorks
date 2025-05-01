import React, { useEffect } from "react";
import Loading from "../loading";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { apiUrl, imageUrl, projectImageUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const EditProject = ({ editOpen, onClose, onEditArticle, article }) => {
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
    if (editOpen && article?.id) {
      reset({
        title: article.title,
        slug: article.slug,
        short_desc: article.short_desc,
        content: article.content,
        author: article.author,
      });
      // console.log(article)
      fetch(apiUrl + "articles/" + article.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      }).then((res) => res.json());
    }
  }, [editOpen, article?.id, reset]);
  // console.log(article)
  useEffect(() => {
    if (editOpen) {
      document.documentElement.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.documentElement.style.overflow = "auto"; // Restore scroll when closed
    }

    return () => {
      document.documentElement.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [editOpen]);

  if (!editOpen) return;

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const newData = { ...data, imageId: imageId };
      const res = await fetch(apiUrl + "articles/" + article.id, {
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
        console.log(result);
        await onEditArticle();
        reset();
        onClose();
      } else {
        if (result.error && result.error.slug) {
          toast.error(result.error.slug[0]);
        } else if (result.message) {
          toast.error(result.message);
        }
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
      author: "",
    });
  };

  return (
    <div className="z-30 w-full h-full bg-black/20 absolute top-0 left-0 in flex items-center justify-center overflow-y-auto py-12 backdrop-blur-sm">
      <div className="bg-white w-[50rem] px-5 py-5 rounded-lg border border-gray-700">
        <header className="flex items-center justify-center">
          <h3 className="font-semibold mb-3 text-xl">Create a Service</h3>
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
            <div className="mb-5 grid grid-cols-2">
              <div className="">
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-textColor"
                >
                  Upload image
                </label>
                <input
                  required
                  type="file"
                  id="content"
                  onChange={handleimage}
                />
              </div>
              <div className="flex justify-end">
                <img
                  src={imageUrl + "/articles/" + article.image}
                  alt="article image"
                  className="h-24 w-24 object-cover"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center mr-2 border-2 focus:outline-none font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center transition-all duration-300"
              >
                Cancel
              </button>
              <button
                disabled={loading || disabled}
                type="submit"
                className="inline-flex items-center justify-center text-white mr-2 bg-highlightColor hover:bg-highlightColor/80 focus:outline-none font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center transition-all duration-300"
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

export default EditProject;

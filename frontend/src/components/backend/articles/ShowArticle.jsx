import React, { useEffect, useState } from "react";
import { SideBar } from "../SideBar";
import Footer from "../../common/Footer";
import Button from "../../frontend/Button";
import { apiUrl, token } from "../../common/http";
import CreateArticle from "./CreateArticle";
import EditArticle from "./EditArticle";
import Loading from "../Loading";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const ShowArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const fetchArticles = async () => {
    try {
      const res = await fetch(apiUrl + "articles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (!result.status) {
        toast.error(result.message);
      } else {
        setArticles(result.data);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch(apiUrl + "articles/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (!result.status) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
        fetchArticles();
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <div className="w-full flex flex-col items-center px-12 py-10 h-[100vh] overflow-x-auto">
          {loading ? (
            <div className="w-full flex flex-col items-center justify-center h-full">
              <Loading className="border-2 border-black h-[50px] w-[50px]" />
            </div>
          ) : (
            <>
              <header className="w-full flex justify-between items-center border-b-2 pb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Articles
                </h2>
                <Button
                  title={"Create"}
                  className="bg-highlightColor"
                  onClick={() => setCreateOpen(true)}
                />
                <CreateArticle
                  createOpen={createOpen}
                  onClose={() => setCreateOpen(false)}
                  onCreateArticle={fetchArticles}
                />
              </header>

              <table className="w-full mt-6 table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border px-4 py-3 text-left">ID</th>
                    <th className="border px-4 py-3 text-left">Title</th>
                    <th className="border px-4 py-3 text-left">Slug</th>
                    <th className="border px-4 py-3 text-left">Author</th>
                    <th className="border px-4 py-3 text-left">Status</th>
                    <th className="border px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.length > 0 ? (
                    articles.map((article, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border px-4 py-3">{article.id}</td>
                        <td className="border px-4 py-3">{article.title}</td>
                        <td className="border px-4 py-3">{article.slug}</td>
                        <td className="border px-4 py-3">{article.author}</td>
                        <td className="border px-4 py-3">
                          {article.status === 1 ? "Published" : "Draft"}
                        </td>
                        <td className="border px-4 py-3 flex items-center justify-center gap-5">
                          <FiEdit
                            size={20}
                            onClick={() => {
                              setEditOpen(true);
                              setSelectedArticle(article);
                            }}
                            className="text-blue-600 cursor-pointer hover:text-blue-800"
                          />
                          <MdDeleteOutline
                            size={24}
                            onClick={() => deleteArticle(article.id)}
                            className="text-red-600 cursor-pointer hover:text-red-800"
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-10 text-gray-500">
                        No articles found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
        <EditArticle
          editOpen={editOpen}
          onClose={() => setEditOpen(false)}
          onEditArticle={fetchArticles}
          article={selectedArticle}
        />
      </div>
      <Footer />
    </>
  );
};

export default ShowArticle;

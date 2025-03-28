import React, { useEffect, useState } from "react";
import { SideBar } from "../SideBar";
import Footer from "../../common/Footer";
import Button from "../../frontend/Button";
import { apiUrl, token } from "../../common/http";
import CreateProject from "./CreateProject";
import Loading from "../loading";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import EditProject from "./EditProject";

const ShowProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const res = await fetch(apiUrl + "projects", {
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
        setProjects(result.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(apiUrl + "projects/" + id, {
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
        fetchProjects();
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <div className="w-full flex flex-col items-center px-12 py-10 h-[100vh] overflow-x-auto">
          {loading ? (
            <div className="w-full flex flex-col items-center justify-center px-12 py-10 h-[100vh]">
              <Loading className="border-2 border-black h-[50px] w-[50px]" />
            </div>
          ) : (
            <>
              <header className="w-full flex justify-between items-center border-b-2 pb-4">
                <h2 className="text-2xl">Projects</h2>
                <Button
                  title={"Create"}
                  className={"bg-highlightColor"}
                  onClick={() => setCreateOpen(true)}
                />
                <CreateProject
                  createOpen={createOpen}
                  onClose={() => setCreateOpen(false)}
                  onCreateProject={fetchProjects}
                />
              </header>
              <table className="w-full mt-5 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      ID
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Project Title
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Project Slug
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Status (Active/Inactive)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Actions (Edit/Delete)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects &&
                    projects.map((project, index) => {
                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">
                            {project.id}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {project.title}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {project.slug}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {project.status == 1 ? "Active" : "Inactive"}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                            <FiEdit
                              size={20}
                              onClick={() => {
                                setEditOpen(true);
                                setSelectedProject(project);
                              }}
                              className="text-blue-600 cursor-pointer hover:text-blue-800 "
                            />
                            <MdDeleteOutline
                              size={24}
                              onClick={() => deleteProject(project.id)}
                              className="text-red-600 cursor-pointer hover:text-red-800"
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </>
          )}
        </div>
        <EditProject
          editOpen={editOpen}
          onClose={() => setEditOpen(false)}
          onEditProject={fetchProjects}
          project={selectedProject}
        />
      </div>
      <Footer />
    </>
  );
};

export default ShowProject;

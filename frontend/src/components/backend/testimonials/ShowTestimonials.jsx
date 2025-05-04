import React, { useEffect, useState } from "react";
import { SideBar } from "../SideBar";
import Footer from "../../common/Footer";
import Button from "../../frontend/Button";
import { apiUrl, token } from "../../common/http";
import CreateTestimonials from "./CreateTestimonials";
import EditTestimonials from "./EditTestimonials";
import Loading from "../loading";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const ShowTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(apiUrl + "testimonials", {
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
        setTestimonials(result.data);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch testimonials");
    } finally {
      setLoading(false);
    }
  };

  const deleteTestimonial = async (id) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch(apiUrl + "testimonials/" + id, {
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
        fetchTestimonials();
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchTestimonials();
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
                  Testimonials
                </h2>
                <Button
                  title={"Create"}
                  className="bg-highlightColor"
                  onClick={() => setCreateOpen(true)}
                />
                <CreateTestimonials
                  createOpen={createOpen}
                  onClose={() => setCreateOpen(false)}
                  onCreateTestimonial={fetchTestimonials}
                />
              </header>

              <table className="w-full mt-6 table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border px-4 py-3 text-left">ID</th>
                    <th className="border px-4 py-3 text-left">Testimonial</th>
                    <th className="border px-4 py-3 text-left">Citation</th>
                    <th className="border px-4 py-3 text-left">Status</th>
                    <th className="border px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.length > 0 ? (
                    testimonials.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border px-4 py-3">{item.id}</td>
                        <td className="border px-4 py-3">{item.testimonial}</td>
                        <td className="border px-4 py-3">{item.citation}</td>
                        <td className="border px-4 py-3">
                          {item.status === 1 ? "Blocked" : "Active"}
                        </td>
                        <td className="border px-4 py-3 flex items-center justify-center gap-5">
                          <FiEdit
                            size={20}
                            onClick={() => {
                              setEditOpen(true);
                              setSelectedTestimonial(item);
                            }}
                            className="text-blue-600 cursor-pointer hover:text-blue-800"
                          />
                          <MdDeleteOutline
                            size={24}
                            onClick={() => deleteTestimonial(item.id)}
                            className="text-red-600 cursor-pointer hover:text-red-800"
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-10 text-gray-500">
                        No testimonials found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
        <EditTestimonials
          editOpen={editOpen}
          onClose={() => setEditOpen(false)}
          onEditTestimonial={fetchTestimonials}
          testimonials={selectedTestimonial}
        />
      </div>
      <Footer />
    </>
  );
};

export default ShowTestimonials;

import React, { useEffect, useState } from "react";
import { SideBar } from "../SideBar";
import Footer from "../../common/Footer";
import Button from "../../frontend/Button";
import { apiUrl, token } from "../../common/http";
import { default as CreateServices } from "./Create";
import Loading from "../loading";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import EditServices from "./EditServices";

const Show = () => {
  const [services, setservices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const fetchServices = async () => {
    try {
      const res = await fetch(apiUrl + "services", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (result.status === false) {
        toast.error(result.message);
        // setLoading(false);
      } else {
        // setLoading(false);
        // fetchServices();
        setservices(result.data);
      }
    } catch (err) {
      // console.log(err);
    } finally {
      setLoading(false);
    }
    // console.log(result.data);
  };

  const deleteService = async (id) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    // console.log(id);
    try {
      const res = await fetch(apiUrl + "services/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (result.status === false) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
        fetchServices();
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleService = () => {
    fetchServices();
  };

  return (
    <>
      {/* <div className="flex w-full"> */}
      <div className="flex w-full ">
        <SideBar />
        <div className="w-full flex flex-col items-center px-12 py-10 h-[100vh] overflow-x-auto">
          {loading ? (
            <div className="w-full flex flex-col items-center justify-center px-12 py-10 h-[100vh]">
              <Loading className="border-2 border-black h-[50px] w-[50px]" />
            </div>
          ) : (
            <>
              <header className="w-full flex justify-between items-center border-b-2 pb-4">
                <h2 className="text-2xl">Services</h2>
                {/* <Link to={"/admin/create"}>
                <Button title={"Create"} className={"bg-highlightColor"} />
                </Link> */}
                <Button
                  title={"Create"}
                  className={"bg-highlightColor"}
                  onClick={() => setCreateOpen(true)}
                />
                <CreateServices
                  createOpen={createOpen}
                  onClose={() => setCreateOpen(false)}
                  onCreateServices={fetchServices}
                />
              </header>
              <table className="w-full mt-5">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Slug</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {services &&
                    services.map((service, index) => {
                      return (
                        <tr key={index}>
                          <td className="border px-4 py-2">{service.id}</td>
                          <td className="border px-4 py-2">{service.title}</td>
                          <td className="border px-4 py-2">{service.slug}</td>
                          <td className="border px-4 py-2">
                            {service.status == 1 ? "Active" : "Block"}
                          </td>
                          <td className="inline-flex w-full items-center justify-evenly border px-4 py-2">
                            <FiEdit
                              size={20}
                              onClick={() => {
                                setEditOpen(true);
                                setSelectedService(service);
                              }}
                              className="text-blue-600 cursor-pointer hover:text-blue-800 "
                            />
                            <MdDeleteOutline
                              size={24}
                              onClick={() => deleteService(service.id)}
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
        <EditServices
          editOpen={editOpen}
          onClose={() => setEditOpen(false)}
          onEditService={handleService}
          service={selectedService}
        />
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Show;

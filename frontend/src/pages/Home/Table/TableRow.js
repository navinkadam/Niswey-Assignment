import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MdDelete, MdEdit, MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import {
  deleteContact,
  updateContact,
} from "../../../redux-store/reducers/Contact";

import Input from "../../../components/Input";

import Swal from "sweetalert2";

function TableRow({ data, refetchData }) {
  const [isEdit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.name) setName(data.name);
    if (data.lastName) setLastName(data.lastName);
  }, [data.name, data.lastName]);

  const onDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (!result.isConfirmed) return false;
      dispatch(deleteContact(data._id)).then((data) => {
        if (data?.meta?.requestStatus === "fulfilled") {
          refetchData?.();
          Swal.fire({
            title: "Deleted!",
            text: "Your contact has been deleted.",
            icon: "success",
          });
        }
      });
    });
  };

  const onEditSave = () => {
    if (!name.length || !lastName.length) return;
    dispatch(
      updateContact({ _id: data._id, name: name, lastName: lastName })
    ).then((data) => {
      if (data?.meta?.requestStatus === "fulfilled") {
        refetchData?.();
        setEdit(false);
        Swal.fire({
          title: "Updated!",
          text: "Your contact has been updated.",
          icon: "success",
        });
      }
    });
  };

  const editCancel = () => {
    setName(data.name);
    setLastName(data.lastName);
    setEdit(false);
  };

  return (
    <>
      <tr>
        <th className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 ">
          <Input
            value={name}
            disabled={!isEdit}
            className={isEdit ? "" : "!border-0"}
            onChange={(e) => setName(e.target.value)}
          />
        </th>
        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 ">
          <Input
            value={lastName}
            disabled={!isEdit}
            className={isEdit ? "" : "!border-0"}
            onChange={(e) => setLastName(e.target.value)}
          />
        </td>
        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 text-xl">
          {data.phone}
        </td>
        <td className="px-6 py-4 justify-end whitespace-nowrap font-medium text-gray-800  flex gap-4">
          {isEdit ? (
            <>
              <MdCheck
                className="text-3xl hover:text-green-600 cursor-pointer disabled:opacity-75"
                onClick={onEditSave}
                disabled={lastName.length && name.length ? false : true}
              />
              <RxCross2
                className="text-3xl hover:text-red-600 cursor-pointer"
                onClick={editCancel}
              />
            </>
          ) : (
            <>
              <MdEdit
                className="text-3xl hover:text-blue-600 cursor-pointer"
                onClick={() => {
                  setEdit(true);
                }}
              />
              <MdDelete
                href="#"
                className="text-3xl hover:text-blue-600 cursor-pointer"
                onClick={onDelete}
              />
            </>
          )}
        </td>
      </tr>
    </>
  );
}
export default TableRow;

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { XMLParser } from "fast-xml-parser";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FileInput from "../../components/FileInput";
import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";
import ContactSchema from "../../constant/FormSchema/Contact";
import { createContact } from "../../redux-store/reducers/Contact";

export default function ThemeCreate({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stateErrorMsg = useSelector(({ contact }) => contact?.ui_error_msg);

  const [contactData, setContactData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const onFileUpload = async ([fileObj]) => {
    if (fileObj) {
      const parser = new XMLParser({});
      const output = parser.parse(fileObj.fileData);

      if (output.contacts.contact) {
        try {
          const data = ContactSchema.validateSync(output.contacts.contact, {
            disableStackTrace: true,
            stripUnknown: true,
          });
          setContactData(data);
          setErrorMessage("");
        } catch (error) {
          const [positions] = error.path.split(".");
          setErrorMessage(
            error.message + " at the " + positions + " position."
          );
        }
      }

      setSelectedFile(fileObj.fileName);
    }
  };
  const onSave = () => {
    dispatch(createContact(contactData)).then((data) => {
      if (data?.meta?.requestStatus === "fulfilled") {
        Swal.fire({
          title: "Contact successfully uploaded!",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <div className="shadow-md p-10 bg-white rounded-lg md:max-w-4xl m-auto mt-14">
      <FileInput
        onChange={onFileUpload}
        accept="text/xml"
        selectedFile={selectedFile}
      />
      <ErrorMessage msg={errorMessage || stateErrorMsg} />
      <Button type="submit" disabled={!contactData.length} onClick={onSave}>
        Upload Contact
      </Button>
    </div>
  );
}

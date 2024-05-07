import { Box, Container } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import CommonForm from "./CommonForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "redux/action/Users";
import { forSuccess } from "utils/common/CommonService";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

const EditUser = () => {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  const { id } = useParams();
  const { users } = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (users) {
      const update_user = users?.find((user) => user._id === id);

      setFormData(update_user);
    }
  }, [users, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = simpleValidator.current.allValid();
    if (!formValid) {
      console.log("form not valid...");
      simpleValidator.current.showMessages();
      forceUpdate(1);
      return;
    }

    dispatch(updateUsers(id, formData)).then((res) => {
      if (res) {
        forSuccess("User Update Successfully");
        setFormData("");
        navigate("/users");
      }
    });
  };
  return (
    <Container>
      <Box>
        <CommonForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          simpleValidator={simpleValidator}
          isEdit
        />
      </Box>
    </Container>
  );
};

export default EditUser;

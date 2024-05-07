import { Box, Container } from "@material-ui/core";
import React, { useRef, useState } from "react";
import CommonForm from "./CommonForm";
import { useDispatch } from "react-redux";
import { addUsers } from "redux/action/Users";
import { forSuccess } from "utils/common/CommonService";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

const AddUsers = () => {
  const [formData, setFormData] = useState([]);
  const simpleValidator = useRef(new SimpleReactValidator())
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, forceUpdate] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValid = simpleValidator.current.allValid()
    console.log('saving...')
    if (!formValid) {
      console.log('form not valid...')
      simpleValidator.current.showMessages()
      forceUpdate(1)
      return
    }
    dispatch(addUsers(formData)).then((res) => {
        if (res){
            forSuccess("Add User Successfully");
            navigate("/users");
          }    
    })
          

}


  return (
    <Container>
      <Box>
        <CommonForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          simpleValidator={simpleValidator}
        />
      </Box>
    </Container>
  );
};

export default AddUsers;

import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.userReducers);
  const [user, setUser] = useState();

  useEffect(() => {
    if (id) {
      const view_user = users.find((user) => user._id === id);
      if (view_user) {
        setUser(view_user);
      }
    }
  }, [users, id]);

  console.log(user);

  return (
    

    <Container maxWidth="md">

      
      <Box boxShadow={10} width={500} margin={20}>
      <Link to="/users"><Button size='medium' variant='contained' color='primary'>Back To User</Button></Link>
      
        <Paper elevation={3}>
          <Box p={3}>
            <Typography align="center" variant="h4" color="primary" gutterBottom>
              User Details
            </Typography>
            <Typography variant="body1">
              <strong>Id:</strong> {user?._id}
            </Typography>
            <Typography variant="body1">
              <strong>Name:</strong> {user?.name}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {user?.email}
            </Typography>
            <Typography variant="body1">
              <strong>Occupation:</strong> {user?.occupation}
            </Typography>
            <Typography variant="body1">
              <strong>Password:</strong> {user?.password}
            </Typography>
            <Typography variant="body1">
              <strong>Phone Number:</strong> {user?.phoneNumber}
            </Typography>
            <Typography variant="body1">
              <strong>Updated At:</strong> {moment(user?.updatedAt).format("lll")}
            </Typography>
            
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default ViewUser;

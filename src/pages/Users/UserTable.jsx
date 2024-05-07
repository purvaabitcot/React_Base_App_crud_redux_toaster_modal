import React, { useState, useEffect, useCallback } from 'react';
import CommonTable from "components/shared/common-table/CommonTable";
import moment from 'moment';
// import VisibilityIcon from '@mui/icons-material/VisibilityIcon';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteUsersApi } from 'api/usersApi';
import { useDispatch } from 'react-redux';
import { deleteUsers } from 'redux/action/Users';
import { forSuccess, isDialogOpen } from 'utils/common/CommonService';
import { Box, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { MarginRounded } from '@mui/icons-material';



const UserTable = ({totalCount, pagination, setPagination, userList }) => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const keys = [
    "S.No",
    "Name",
    "Email",
    "Phone Number",
    "Occupation",
    "City",
    "Created At",
    "Actions"
  ];

  const handleDelete = (id) =>{
    isDialogOpen.onNext({
      open: true,
      data: {
        message: "Are you sure want to delete?",
        title: "Confirmation"
      },
      cancelText: "No",
      confirmText: "Yes",
      onCancel: () => isDialogOpen.onNext(false),
      onConfirm: () => {
        isDialogOpen.onNext(false)
        dispatch(deleteUsers(id,userList)).then((res)=>{
          if(res){
            forSuccess(res.message)
          }
        }); 
      }
    });


       
  }

  const handleView = (id) =>{
      navigate(`/viewuser/${id}`)
  }

  const handleEdit = (id) =>{
    navigate(`/updateuser/${id}`)
  }


  

  const userTableData = useCallback(() => {
    
    if (userList?.length) {
      return userList?.map((user,index) => {
        return [
          index+1,
          user?.name,
          user?.email,
          user?.phoneNumber,
          user?.occupation,
          user?.city,
          moment(user?.createdAt).format("ll"),
          <div><span onClick={()=>handleView(user._id)}>{<RemoveRedEyeIcon/>}</span><span onClick={()=>handleDelete(user._id)}><DeleteIcon/></span><span onClick={()=>handleEdit(user._id)}><EditIcon/></span></div>
         
          
        ];
      });
    }
    else {
      return [];
    }
  },[userList]);

  useEffect(() => {
    let userRowData = userTableData(userList);
    if (JSON.stringify(userRowData) !== JSON.stringify(userData)) {
      setUserData(userRowData);
    }
  }, [userTableData, userList, userData])

  return (
    <Box>
      
        <CommonTable totalCount={totalCount} customPagination={pagination}
        setCustomPagination={setPagination} data={userData} keys={keys} />
    </Box>
  )
}

export default UserTable
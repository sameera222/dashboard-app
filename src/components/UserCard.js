// UserCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const UserCard = ({ numberOfUsers }) => {
  return (
    <Card sx={{padding:4, marginLeft:4,}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Number of Users
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {numberOfUsers}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;

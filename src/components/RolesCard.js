// RolesCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RolesCard = ({ numberOfRoles }) => {
  return (
    <Card sx={{padding:4, marginLeft:4,}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Number of Roles
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {numberOfRoles}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RolesCard;

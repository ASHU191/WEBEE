import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid, Container } from "@mui/material";

const JobCard = ({ title, location, type }) => (
  <Card
    sx={{
      maxWidth: 345,
      boxShadow: 4,
      borderRadius: 3,
      transition: "transform 0.3s ease-in-out",
      "&:hover": { transform: "scale(1.05)" },
    }}
  >
    <CardContent>
      <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={1}>
        {location}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {type}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="primary" size="small">
          Job Description
        </Button>
        <Button variant="contained" color="primary" size="small">
          Apply Now
        </Button>
      </Box>
    </CardContent>
  </Card>
);

const OpenVacancies = () => (
  <Container sx={{ py: 6 }}>
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        Open Vacancies
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Explore our current job openings and join our team!
      </Typography>
    </Box>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <JobCard title="HR Specialist" location="Karachi, Pakistan" type="Full Time" />
      </Grid>
      
    </Grid>
  </Container>
);

export default OpenVacancies;

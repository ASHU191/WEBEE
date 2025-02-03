// src/components/Album.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion"; // Import Framer Motion

const Album = () => {
  // Sample image URLs for demonstration
  const teamBuildingImages = [
    "https://via.placeholder.com/200x150?text=Team+Building+1",
    "https://via.placeholder.com/200x150?text=Team+Building+2",
    "https://via.placeholder.com/200x150?text=Team+Building+3",
    "https://via.placeholder.com/200x150?text=Team+Building+4",
    "https://via.placeholder.com/200x150?text=Team+Building+5",
    "https://via.placeholder.com/200x150?text=Team+Building+6",
    "https://via.placeholder.com/200x150?text=Team+Building+7",
    "https://via.placeholder.com/200x150?text=Team+Building+8",
  ];

  const employeeToursImages = [
    "https://via.placeholder.com/200x150?text=Employee+Tour+1",
    "https://via.placeholder.com/200x150?text=Employee+Tour+2",
  ];

  const ourCultureImages = [
    "https://via.placeholder.com/200x150?text=Culture+1",
    "https://via.placeholder.com/200x150?text=Culture+2",
    "https://via.placeholder.com/200x150?text=Culture+3",
    "https://via.placeholder.com/200x150?text=Culture+4",
    "https://via.placeholder.com/200x150?text=Culture+5",
    "https://via.placeholder.com/200x150?text=Culture+6",
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Team Building Activities Section */}
      <Typography variant="h4" gutterBottom>
        Team Building Activities
      </Typography>
      <Grid container spacing={2}>
        {teamBuildingImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={`Team Building ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Team Building Activity {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Employee Tours Section */}
      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
        Employee Tours
      </Typography>
      <Grid container spacing={2}>
        {employeeToursImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={`Employee Tour ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Employee Tour {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Our Culture Section */}
      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
        Our Culture
      </Typography>
      <Grid container spacing={2}>
        {ourCultureImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={`Culture ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Culture {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Album;

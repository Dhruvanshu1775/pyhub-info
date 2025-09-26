import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider, // Added Divider for a clean look in the Drawer
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Added Close Icon for the Drawer
import CompanyLogo from "../../src/assests/company-logo.png";
// Placeholder for your home image
import HomeImage from "../../src/assests/home-image.png"; 
import { ReactTyped } from "react-typed";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/700.css";

// === Constants ===
const PYHUB_GRADIENT = "linear-gradient(90deg, #00C853 0%, #1A9E8A 100%)";
const NAV_LINKS = ["Home", "Services", "Product", "Solutions", "About Us"];

// === Styled Components (Unchanged) ===
const GradientAppBar = styled(AppBar)({
  background: PYHUB_GRADIENT,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
});

const NavLink = styled(Button)({
  color: "white",
  margin: "0 8px",
  fontSize: "1rem", 
  fontWeight: 500,
  textTransform: "none",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: "#C8FFD3",
    transform: "scale(1.05)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

const CTAButton = styled(Button)({
  background: PYHUB_GRADIENT,
  color: "white",
  padding: "12px 30px",
  borderRadius: "8px",
  fontSize: "1.1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(90deg, #1A9E8A 0%, #00C853 100%)", 
    transform: "scale(1.05)",
    boxShadow: "0 6px 15px rgba(0, 200, 83, 0.4)",
  },
});

// === Image Component (Replaced Placeholder) ===
const HomeImageComponent = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // Modern styling for the container holding the image
      p: 2,
    }}
  >
    <Box
        component="img"
        // --- YOUR IMAGE WILL BE RENDERED HERE ---
        src={HomeImage} // Assumes this is the path to your image
        alt="AI Network Graphic"
        sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
        }}
    />
  </Box>
);

// === Main Component ===
const LandingPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cursorRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Determine if it's a desktop environment for cursor effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkDesktop = () => window.innerWidth > 768;
      setIsDesktop(checkDesktop());
      const handleResize = () => setIsDesktop(checkDesktop());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Cursor follow effect
  useEffect(() => {
    if (!isDesktop || !cursorRef.current) return; 

    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isDesktop]); 

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'relative', overflowX: 'hidden' }}>
      
      {/* --- MODERN TOUCH: Abstract Background Shape --- */}
      <Box
        sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '400px', // Size of the dynamic element
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 200, 83, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
            zIndex: 0, // Ensure it is behind the content
            transform: 'translate(50%, -50%)', // Push it off-screen for a subtle edge glow
            pointerEvents: 'none',
            display: { xs: 'none', md: 'block' }
        }}
      />
      
      {/* === Glowing Cursor (Desktop only) - Unchanged === */}
      {isDesktop && (
        <Box
          ref={cursorRef}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "20px", 
            height: "20px", 
            borderRadius: "50%",
            pointerEvents: "none",
            background: "rgba(0, 150, 255, 0.3)", 
            boxShadow: "0 0 15px 8px rgba(0, 150, 255, 0.2)", 
            transform: "translate(-50%, -50%)",
            transition: "all 30ms ease-out", 
            zIndex: 9999,
            backdropFilter: "blur(8px)", 
          }}
        />
      )}

      {/* =====================================================
        | R E S P O N S I V E   N A V B A R                 |
        =====================================================
      */}
      <GradientAppBar position="fixed" sx={{ zIndex: 10 }}>
        <Toolbar>
          {/* Logo and Company Name */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              component="img"
              src={CompanyLogo}
              alt="Company Logo"
              sx={{ height: 50, width: "auto", mr: 1 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                letterSpacing: "1px",
                cursor: "default",
              }}
            >
              PYHUB
            </Typography>
          </Box>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {NAV_LINKS.map((item) => (
              <NavLink key={item}>{item}</NavLink>
            ))}
          </Box>

          {/* Mobile Menu Icon (Hamburger) */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={handleDrawerToggle}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </GradientAppBar>

      {/* === Drawer (Mobile Menu) === */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        // Apply a subtle shadow and style for the drawer paper
        PaperProps={{
          sx: { width: 250, boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" }
        }}
      >
        <Box 
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
          role="presentation"
        >
          {/* Drawer Header with Close Button */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              p: 2,
              background: PYHUB_GRADIENT,
              color: 'white'
            }}
          >
           
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          
          {/* Mobile Nav Links */}
          <List>
            {NAV_LINKS.map((text) => (
              <ListItem 
                button 
                key={text} 
                onClick={handleDrawerToggle} 
                sx={{ 
                  "&:hover": { backgroundColor: 'rgba(0, 200, 83, 0.1)' } // Subtle hover effect
                }}
              >
                <ListItemText primary={text} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItem>
            ))}
          </List>
          
          {/* Optional: CTA button in the mobile drawer */}
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
            <CTAButton variant="contained" size="medium" onClick={handleDrawerToggle}>
              Get Started
            </CTAButton>
          </Box>
        </Box>
      </Drawer>

      {/* === Hero Section (Content) === */}
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: -6, md: -10 }, 
          pt: { xs: 12, md: 14 }, 
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: 'relative', 
          zIndex: 1, 
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
            textAlign: { xs: "center", md: "left" },
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                color: "#222",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "2.5rem", md: "3.8rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Infinite Solutions, One{" "}
              <ReactTyped
                strings={["Hub", "Point", "Center"]}
                typeSpeed={80}
                backSpeed={80}
                loop={true}
                showCursor={false}
                backDelay={3000}
              />
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: "#555",
                fontSize: { xs: "1rem", md: "1.35rem" },
              }}
            >
              We streamline complexity into powerful, unified solutions across
              services and technology strategy. Find your next level of
              efficiency, all in one place.
            </Typography>

            <CTAButton variant="contained" size="large">
              Explore Solutions
            </CTAButton>
          </Box>

          {/* --- Home Image Component is used here --- */}
          <HomeImageComponent />
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
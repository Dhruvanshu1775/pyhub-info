import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Stack,
  Chip,
  Card,
  CardContent,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
// Keep this path aligned with the folder where you saved your extracted logo symbol.
// If your folder is named "assets" (not "assests"), update the path accordingly.
import CompanyLogo from "../../src/assests/pyhub-symbol.png";

const GREEN = "#2563EB";
const DEEP_GREEN = "#1D4ED8";
const INK = "#101B33";
const MUTED = "#64748B";
const PALE = "#EFF6FF";
const BORDER = "#DBEAFE";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`;

const GradientText = styled("span")({
  background: "linear-gradient(100deg, #2563EB, #06A6D8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const NavButton = styled(Button)({
  color: "#40534A",
  textTransform: "none",
  fontSize: "0.94rem",
  fontWeight: 600,
  padding: "9px 13px",
  borderRadius: 10,
  "&:hover": { color: DEEP_GREEN, background: "#F0F9F4" },
});

const PrimaryButton = styled(Button)({
  textTransform: "none",
  borderRadius: 12,
  padding: "12px 21px",
  fontWeight: 700,
  fontSize: "0.96rem",
  color: "#fff",
  background: "linear-gradient(100deg, #2563EB, #06A6D8)",
  boxShadow: "0 8px 24px rgba(37,99,235,.20)",
  transition: "all .25s ease",
  "&:hover": {
    background: "linear-gradient(100deg, #1D4ED8, #0284C7)",
    transform: "translateY(-2px)",
    boxShadow: "0 12px 28px rgba(37,99,235,.28)",
  },
});

const OutlineButton = styled(Button)({
  textTransform: "none",
  borderRadius: 12,
  padding: "11px 20px",
  fontWeight: 700,
  color: INK,
  border: `1px solid ${BORDER}`,
  background: "#fff",
  "&:hover": { borderColor: GREEN, background: PALE },
});

const SectionEyebrow = ({ children }) => (
  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
    <Box sx={{ width: 22, height: 2, borderRadius: 5, bgcolor: GREEN }} />
    <Typography
      sx={{
        color: DEEP_GREEN,
        fontWeight: 800,
        letterSpacing: "0.12em",
        fontSize: 11,
        textTransform: "uppercase",
      }}
    >
      {children}
    </Typography>
  </Stack>
);

const CONTACT_EMAIL = "pyhub.ai@gmail.com";

const createMailtoLink = (subject) => {
  const body = [
    "Hello PyHub Team,",
    "",
    "I would like to discuss a project or business enquiry.",
    "",
    "Name:",
    "Company:",
    "Project requirements:",
    "",
    "Thank you.",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
};

const contactEmailLink = createMailtoLink("New Business Enquiry | PyHub");

const scrumEmailLink = createMailtoLink("Scrum AI Flow Enquiry | PyHub");

const services = [
  {
    icon: <AutoAwesomeRoundedIcon />,
    title: "AI & Automation",
    description:
      "Turn repetitive work into intelligent workflows with AI assistants, automation, and practical machine-learning solutions.",
    tags: ["AI assistants", "Workflow automation"],
  },
  {
    icon: <IntegrationInstructionsRoundedIcon />,
    title: "Product Engineering",
    description:
      "Build reliable digital products, APIs, and backend platforms designed to scale with your business.",
    tags: ["Web apps", "APIs & platforms"],
  },
  {
    icon: <StorageRoundedIcon />,
    title: "ERP & CRM Solutions",
    description:
      "Connect your operations, customers, and business data in systems that make everyday work simpler.",
    tags: ["Business systems", "Integrations"],
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Websites & Digital Experiences",
    description:
      "Create clear, responsive websites and digital experiences that communicate your value and build trust.",
    tags: ["Web design", "Development"],
  },
  {
    icon: <CloudQueueRoundedIcon />,
    title: "Cloud & Data",
    description:
      "Modernize infrastructure, connect data sources, and build dependable cloud-native solutions.",
    tags: ["Cloud solutions", "Data engineering"],
  },
  {
    icon: <CodeRoundedIcon />,
    title: "Technology Consulting",
    description:
      "Get hands-on technical direction to choose the right architecture, tools, and delivery approach.",
    tags: ["Architecture", "Engineering guidance"],
  },
];

const integrations = ["GitHub", "GitLab", "Bitbucket", "Jira", "Rally"];

const LandingPage = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navItems = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Product", "#product"],
    ["About", "#about"],
    ["Contact", contactEmailLink],
  ];

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <Box sx={{ bgcolor: "#fff", color: INK, overflow: "hidden" }}>
      {/* Header */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,.92)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${BORDER}`,
          color: INK,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: "78px !important" }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.2}
              sx={{ flexGrow: 1, minWidth: 0 }}
            >
              <Box
                component="img"
                src={CompanyLogo}
                alt="PyHub symbol"
                sx={{ width: 42, height: 42, objectFit: "contain" }}
              />
              <Typography
                sx={{
                  fontSize: 23,
                  fontWeight: 900,
                  letterSpacing: "-0.06em",
                  color: INK,
                }}
              >
                PY<GradientText>HUB</GradientText>
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.3}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navItems.map(([label, href]) => (
                <NavButton key={label} component="a" href={href}>
                  {label}
                </NavButton>
              ))}
              <PrimaryButton
                component="a"
                href={contactEmailLink}
                endIcon={<ArrowOutwardRoundedIcon />}
                sx={{ ml: 1.5 }}
              >
                Let&apos;s talk
              </PrimaryButton>
            </Stack>

            <IconButton
              aria-label="Open navigation"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" }, color: INK }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 280, p: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ p: 1, mb: 1 }}
          >
            <Box
              component="img"
              src={CompanyLogo}
              alt=""
              sx={{ width: 34, height: 34 }}
            />
            <Typography fontWeight={900} fontSize={20}>
              PYHUB
            </Typography>
          </Stack>
          <Divider sx={{ borderColor: BORDER, mb: 1 }} />
          <List>
            {navItems.map(([label, href]) => (
              <ListItemButton
                key={label}
                component="a"
                href={href}
                onClick={closeDrawer}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            ))}
          </List>
          <PrimaryButton
            fullWidth
            component="a"
            href={contactEmailLink}
            onClick={closeDrawer}
          >
            Let&apos;s talk
          </PrimaryButton>
        </Box>
      </Drawer>

      {/* Hero */}
      <Box
        id="home"
        sx={{
          position: "relative",
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 13 },
          background:
            "radial-gradient(circle at 82% 18%, rgba(0,184,107,.09), transparent 27%), radial-gradient(circle at 5% 80%, rgba(21,157,145,.06), transparent 25%), #fff",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 7 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ animation: `${fadeUp} .7s ease both` }}>
                <Chip
                  icon={
                    <AutoAwesomeRoundedIcon
                      sx={{ color: `${DEEP_GREEN} !important` }}
                    />
                  }
                  label="Technology that moves business forward"
                  sx={{
                    mb: 3,
                    height: 34,
                    bgcolor: PALE,
                    color: DEEP_GREEN,
                    border: `1px solid #DCEFE4`,
                    fontWeight: 700,
                    "& .MuiChip-label": { px: 1.2 },
                  }}
                />
                <Typography
                  component="h1"
                  sx={{
                    maxWidth: 720,
                    fontSize: { xs: 43, sm: 54, md: 66 },
                    lineHeight: 1.07,
                    letterSpacing: "-0.055em",
                    fontWeight: 900,
                    color: INK,
                  }}
                >
                  Make technology work
                  <br />
                  <GradientText>for your business.</GradientText>
                </Typography>
                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 610,
                    color: MUTED,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.85,
                  }}
                >
                  PyHub brings AI, software engineering, business systems, and
                  automation together to simplify complexity and help your
                  business move forward with confidence.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 4, alignItems: { xs: "stretch", sm: "center" } }}
                >
                  <PrimaryButton
                    component="a"
                    href="#services"
                    endIcon={<ArrowOutwardRoundedIcon />}
                    size="large"
                  >
                    Explore what we do
                  </PrimaryButton>
                  <OutlineButton component="a" href="#about" size="large">
                    Discover PyHub
                  </OutlineButton>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2.5}
                  sx={{ mt: 4, flexWrap: "wrap", rowGap: 1 }}
                >
                  {[
                    "Thoughtful engineering",
                    "Connected solutions",
                    "Built to scale",
                  ].map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      spacing={0.7}
                      alignItems="center"
                    >
                      <CheckCircleRoundedIcon
                        sx={{ color: GREEN, fontSize: 17 }}
                      />
                      <Typography
                        sx={{ color: MUTED, fontSize: 13, fontWeight: 600 }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: "relative",
                  maxWidth: 470,
                  width: 330,
                  mx: "auto",
                  p: { xs: 2, md: 3 },
                  border: `1px solid ${BORDER}`,
                  borderRadius: 5,
                  bgcolor: "rgba(255,255,255,.85)",
                  boxShadow: "0 28px 80px rgba(20,70,45,.09)",
                  animation: `${fadeUp} .9s ease both`,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mb: 3 }}
                >
                  <Box>
                    <Typography
                      sx={{ fontSize: 12, color: MUTED, fontWeight: 700 }}
                    >
                      THE PYHUB ECOSYSTEM
                    </Typography>
                    <Typography sx={{ fontSize: 21, fontWeight: 850, mt: 0.4 }}>
                      One connected hub.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: PALE,
                      p: 1.3,
                      borderRadius: 3,
                      color: DEEP_GREEN,
                    }}
                  >
                    <HubRoundedIcon sx={{ fontSize: 28 }} />
                  </Box>
                </Stack>

                <Box
                  sx={{
                    minHeight: 275,
                    borderRadius: 4,
                    p: 2,
                    background:
                      "radial-gradient(circle at center, rgba(0,184,107,.12), transparent 56%), #F8FCF9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: 126,
                      height: 126,
                      borderRadius: "34px",
                      bgcolor: "#fff",
                      border: `1px solid ${BORDER}`,
                      boxShadow: "0 15px 40px rgba(0,120,70,.13)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={CompanyLogo}
                      alt="PyHub"
                      sx={{ width: 82, height: 82, objectFit: "contain" }}
                    />
                  </Box>
                  {[
                    {
                      icon: <AutoAwesomeRoundedIcon />,
                      label: "AI Solutions",
                      top: "7%",
                      left: "-1%",
                    },
                    {
                      icon: <BusinessRoundedIcon />,
                      label: "ERP Systems",
                      top: "43%",
                      right: "-8%",
                    },
                    {
                      icon: <AccountTreeRoundedIcon />,
                      label: "AI Automation",
                      bottom: "7%",
                      right: "0%",
                    },
                    {
                      icon: <GroupsRoundedIcon />,
                      label: "CRM Solutions",

                      bottom: "7%",
                      left: "-1%",
                    },
                    {
                      icon: <StorageRoundedIcon />,
                      label: "Data Intelligence",
                      top: "7%",
                      right: "-1%",
                    },
                    {
                      icon: <IntegrationInstructionsRoundedIcon />,
                      label: "Integrations",
                      top: "43%",
                      left: "-8%",
                    },
                  ].map(({ icon, label, top, right, bottom, left }) => (
                    <Box
                      key={label}
                      sx={{
                        position: "absolute",
                        ...(top !== undefined ? { top } : {}),
                        ...(right !== undefined ? { right } : {}),
                        ...(bottom !== undefined ? { bottom } : {}),
                        ...(left !== undefined ? { left } : {}),
                        display: "flex",
                        alignItems: "center",
                        gap: 0.8,
                        px: 1.4,
                        py: 1,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 2.5,
                        bgcolor: "#fff",
                        color: DEEP_GREEN,
                        boxShadow: "0 8px 22px rgba(20,70,45,.06)",
                      }}
                    >
                      {icon}
                      <Typography
                        sx={{ fontSize: 12, color: INK, fontWeight: 750 }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  ))}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "68%",
                      height: "1px",
                      bgcolor: "#D6EDE0",
                      transform: "rotate(32deg)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      width: "68%",
                      height: "1px",
                      bgcolor: "#D6EDE0",
                      transform: "rotate(-32deg)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    mt: 2.2,
                    textAlign: "center",
                    color: MUTED,
                    fontSize: 13,
                  }}
                >
                  Ideas, systems, and teams — working together.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Intro strip */}
      <Box
        sx={{
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: MUTED, fontSize: 13, fontWeight: 700 }}>
                A BETTER WAY TO BUILD AND CONNECT
              </Typography>
            </Grid>
            {[
              ["01", "Understand the challenge"],
              ["02", "Design the right solution"],
              ["03", "Deliver with purpose"],
            ].map(([number, label]) => (
              <Grid item xs={12} sm={4} md={2.66} key={number}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <Typography
                    sx={{ color: GREEN, fontWeight: 900, fontSize: 13 }}
                  >
                    {number}
                  </Typography>
                  <Typography
                    sx={{ color: INK, fontWeight: 700, fontSize: 13 }}
                  >
                    {label}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services */}
      <Box
        id="services"
        sx={{
          width: "100%",
          py: { xs: 7, sm: 9, md: 13 },
          background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
        }}
      >
        <Container maxWidth="lg">
          <SectionEyebrow>What we do</SectionEyebrow>

          {/* Section heading */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
              alignItems: "end",
              gap: 3,
              mb: { xs: 4, md: 6 },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 31, sm: 39, md: 48 },
                lineHeight: 1.15,
                fontWeight: 900,
                letterSpacing: "-.045em",
              }}
            >
              Everything you need to
              <br />
              <GradientText>move from idea to impact.</GradientText>
            </Typography>

            <Typography
              sx={{
                color: MUTED,
                lineHeight: 1.8,
                fontSize: { xs: 14, md: 16 },
                pb: 0.5,
              }}
            >
              We combine strategy, modern engineering, and intelligent
              technology to build solutions that help your business grow.
            </Typography>
          </Box>

          {/* Responsive CSS Grid - independent of MUI Grid */}
          <Box
            sx={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 2, md: 3 },
              alignItems: "stretch",
            }}
          >
            {services.map((service, index) => (
              <Card
                key={service.title}
                elevation={0}
                sx={{
                  width: "100%",
                  minWidth: 0,
                  minHeight: 310,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  background: "#FFFFFF",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all .3s ease",

                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: "linear-gradient(90deg, #2563EB, #06A6D8)",
                  },

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "#93C5FD",
                    boxShadow: "0 20px 45px rgba(37,99,235,.10)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2.5, md: 3.2 },
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    "&:last-child": {
                      pb: { xs: 2.5, md: 3.2 },
                    },
                  }}
                >
                  {/* Icon and number */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: 3,
                        display: "grid",
                        placeItems: "center",
                        color: "#2563EB",
                        background: "linear-gradient(135deg, #EFF6FF, #E0F2FE)",
                        "& svg": { fontSize: 29 },
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      sx={{
                        color: "#CBD5E1",
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: ".08em",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                  </Stack>

                  {/* Title */}
                  <Typography
                    component="h3"
                    sx={{
                      mt: 2.5,
                      mb: 1.3,
                      fontSize: { xs: 18, md: 20 },
                      fontWeight: 850,
                      lineHeight: 1.4,
                      color: INK,
                      minHeight: 56,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: MUTED,
                      fontSize: 14,
                      lineHeight: 1.85,
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Divider sx={{ my: 2.5, borderColor: BORDER }} />

                  {/* Tags */}
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {service.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "#EFF6FF",
                          color: "#1D4ED8",
                          fontWeight: 700,
                          fontSize: 11,
                          borderRadius: 2,
                          height: 27,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Product feature */}
      <Box id="product" sx={{ py: { xs: 8, md: 11 }, bgcolor: PALE }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <SectionEyebrow>Featured product</SectionEyebrow>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 35, md: 47 },
                  lineHeight: 1.13,
                  fontWeight: 900,
                  letterSpacing: "-.045em",
                }}
              >
                Meet <GradientText>Scrum AI Flow.</GradientText>
                <br />
                One trigger. Smarter workflows.
              </Typography>
              <Typography
                sx={{ mt: 2.5, color: MUTED, lineHeight: 1.85, fontSize: 15.5 }}
              >
                Bring your development tools and AI-powered workflows together.
                Scrum AI Flow is being built to help teams connect their tools,
                automate delivery steps, and create intelligent pipelines from a
                single trigger.
              </Typography>
              <Stack spacing={1.2} sx={{ mt: 3 }}>
                {[
                  "Connect development and project-management tools",
                  "Create AI-powered automation pipelines",
                  "Coordinate work from a unified flow",
                ].map((item) => (
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    key={item}
                  >
                    <CheckCircleRoundedIcon
                      sx={{ color: GREEN, fontSize: 19 }}
                    />
                    <Typography
                      sx={{ color: "#40534A", fontSize: 14, fontWeight: 600 }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <PrimaryButton
                component="a"
                href={scrumEmailLink}
                endIcon={<ArrowOutwardRoundedIcon />}
                sx={{ mt: 4 }}
              >
                Ask about Scrum AI Flow
              </PrimaryButton>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 2, md: 3 },
                  borderRadius: 5,
                  bgcolor: "#fff",
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 24px 65px rgba(20,70,45,.08)",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mb: 2.5 }}
                >
                  <Typography fontWeight={850} fontSize={16}>
                    Connected workspace
                  </Typography>
                  <Chip
                    label="Unified flow"
                    size="small"
                    sx={{ bgcolor: PALE, color: DEEP_GREEN, fontWeight: 750 }}
                  />
                </Stack>
                <Box
                  sx={{
                    p: 2,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: MUTED,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: ".1em",
                    }}
                  >
                    TRIGGER
                  </Typography>
                  <Typography fontWeight={800} sx={{ mt: 0.5 }}>
                    A new task or event
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#9AB8A6",
                    py: 1,
                    fontSize: 22,
                  }}
                >
                  ↓
                </Box>
                <Grid container spacing={1}>
                  {integrations.map((name) => (
                    <Grid item xs={6} sm={name === "Rally" ? 12 : 6} key={name}>
                      <Box
                        sx={{
                          p: 1.4,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 2.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          bgcolor: "#FCFEFD",
                        }}
                      >
                        <IntegrationInstructionsRoundedIcon
                          sx={{ color: DEEP_GREEN, fontSize: 18 }}
                        />
                        <Typography sx={{ fontSize: 13, fontWeight: 750 }}>
                          {name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#9AB8A6",
                    py: 1,
                    fontSize: 22,
                  }}
                >
                  ↓
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    textAlign: "center",
                    color: "#fff",
                    background: `linear-gradient(100deg, ${GREEN}, #159D91)`,
                  }}
                >
                  <AutoAwesomeRoundedIcon
                    sx={{ fontSize: 20, verticalAlign: "middle", mr: 0.7 }}
                  />
                  <Typography component="span" fontWeight={850}>
                    AI-powered workflow
                  </Typography>
                  <Typography sx={{ fontSize: 12, opacity: 0.9, mt: 0.6 }}>
                    Automate the steps. Keep your team in flow.
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: MUTED,
                    fontSize: 11,
                    mt: 1.5,
                    textAlign: "center",
                  }}
                >
                  Product concept illustration — integration availability may
                  vary by release.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={5}>
              <SectionEyebrow>About PyHub</SectionEyebrow>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 35, md: 46 },
                  lineHeight: 1.15,
                  fontWeight: 900,
                  letterSpacing: "-.045em",
                }}
              >
                Not just technology.
                <br />
                <GradientText>A smarter way forward.</GradientText>
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography sx={{ color: MUTED, fontSize: 16, lineHeight: 1.9 }}>
                At PyHub, we believe great technology should make work clearer,
                faster, and more meaningful. We bring together software
                development, AI, integrations, and business-focused thinking to
                solve real problems — not add another layer of complexity.
              </Typography>
              <Typography
                sx={{ color: MUTED, fontSize: 16, lineHeight: 1.9, mt: 2 }}
              >
                Whether you are shaping a new idea, improving an existing
                process, or connecting the tools your team already uses, our
                focus is on building solutions with purpose.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            {[
              ["Purpose-led", "Technology shaped around real business needs."],
              ["Connected", "Tools and systems designed to work together."],
              ["Future-ready", "Flexible foundations that can grow with you."],
            ].map(([title, body]) => (
              <Grid item xs={12} md={4} key={title}>
                <Box
                  sx={{
                    p: 3,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 3.5,
                    height: "100%",
                  }}
                >
                  <RocketLaunchRoundedIcon
                    sx={{ color: GREEN, fontSize: 25, mb: 1.5 }}
                  />
                  <Typography fontWeight={850} fontSize={17}>
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      color: MUTED,
                      fontSize: 14,
                      lineHeight: 1.7,
                      mt: 0.8,
                    }}
                  >
                    {body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box id="contact" sx={{ pb: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 3.5, md: 6 },
              borderRadius: 5,
              color: "#fff",
              background: `linear-gradient(115deg, #087A55 0%, #079B70 55%, #168F91 100%)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 280,
                height: 280,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.15)",
                right: -70,
                top: -130,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 190,
                height: 190,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.15)",
                right: 40,
                bottom: -140,
              }}
            />
            <Grid
              container
              spacing={3}
              alignItems="center"
              sx={{ position: "relative" }}
            >
              <Grid item xs={12} md={8}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,.78)",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: ".13em",
                  }}
                >
                  HAVE A CHALLENGE IN MIND?
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 30, md: 42 },
                    lineHeight: 1.15,
                    fontWeight: 900,
                    mt: 1.2,
                  }}
                >
                  Let&apos;s build something meaningful.
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,.82)",
                    mt: 1.5,
                    lineHeight: 1.7,
                    maxWidth: 580,
                  }}
                >
                  Tell us what you are working on. Let&apos;s explore how the
                  right technology can move it forward.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ textAlign: { xs: "left", md: "right" } }}
              >
                <Button
                  component="a"
                  href={contactEmailLink}
                  endIcon={<ArrowOutwardRoundedIcon />}
                  sx={{
                    bgcolor: "#fff",
                    color: DEEP_GREEN,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2.5,
                    fontWeight: 850,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#EFFFF5",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Email PyHub
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ borderTop: `1px solid ${BORDER}`, py: 3 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            spacing={1.5}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                component="img"
                src={CompanyLogo}
                alt="PyHub symbol"
                sx={{ width: 28, height: 28, objectFit: "contain" }}
              />
              <Typography fontWeight={900} letterSpacing="-.04em">
                PYHUB
              </Typography>
            </Stack>
            <Typography sx={{ color: MUTED, fontSize: 12 }}>
              © {new Date().getFullYear()} PyHub. Built for what&apos;s next.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography
                component="a"
                href="#services"
                sx={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: 12,
                  "&:hover": { color: DEEP_GREEN },
                }}
              >
                Services
              </Typography>
              <Typography
                component="a"
                href="#product"
                sx={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: 12,
                  "&:hover": { color: DEEP_GREEN },
                }}
              >
                Product
              </Typography>
              <Typography
                component="a"
                href={contactEmailLink}
                sx={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: 12,
                  "&:hover": { color: DEEP_GREEN },
                }}
              >
                Contact
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "rgba(255,255,255,.9)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Email us:{" "}
                <Box
                  component="a"
                  href={`mailto:${CONTACT_EMAIL}`}
                  sx={{
                    color: "#fff",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  {CONTACT_EMAIL}
                </Box>
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;

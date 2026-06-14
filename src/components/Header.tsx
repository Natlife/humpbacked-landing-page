import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  WbSunny as WbSunnyIcon,
  NightsStay as NightsStayIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  HeartBroken,
} from "@mui/icons-material";







interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mode: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  mode,
  toggleTheme,
}: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Trang chủ" },
    { id: "knowledge", label: "Góc kiến thức" },
    { id: "quiz", label: "Kiểm tra tư thế" },
    { id: "challenges", label: "Thử thách" },
    { id: "about", label: "Về chúng tôi" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileOpen(false);
  };

  const appBarStyles = {
    position: "sticky",
    top: 0,
    zIndex: 1100,
    backgroundColor:
      mode === "dark" ? "rgba(17, 17, 17, 0.85)" : "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  };

  return (
    <AppBar sx={appBarStyles}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ height: 80, justifyContent: "space-between" }}
        >
          {}
          <Box
            onClick={() => handleNavClick("home")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#ffffff" : "#111111",
                color: theme.palette.mode === "dark" ? "#111111" : "#ffffff",
              }}
            >
              <HeartBroken sx={{ fontSize: 20 }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: theme.palette.text.primary,
                letterSpacing: "0.05em",
              }}
            >
              Demo
            </Typography>
          </Box>

          {}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <Button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 99,
                      color: isActive
                        ? theme.palette.text.primary
                        : theme.palette.text.secondary,
                      backgroundColor: isActive
                        ? theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.08)"
                          : "rgba(17, 17, 17, 0.05)"
                        : "transparent",
                      fontWeight: isActive ? 700 : 500,
                      "&:hover": {
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.05)"
                            : "rgba(17, 17, 17, 0.03)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}

          {}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 3,
                color: theme.palette.text.primary,
              }}
            >
              {mode === "dark" ? (
                <WbSunnyIcon sx={{ fontSize: 18 }} />
              ) : (
                <NightsStayIcon sx={{ fontSize: 18 }} />
              )}
            </IconButton>

            {!isMobile && (
              <Button
                variant="contained"
                onClick={() => handleNavClick("quiz")}
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#ffffff" : "#111111",
                  color: theme.palette.mode === "dark" ? "#111111" : "#ffffff",
                  borderRadius: 99,
                  px: 3,
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#f3f4f6" : "#1f2937",
                  },
                }}
              >
                Thử ngay
              </Button>
            )}

            {isMobile && (
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: theme.palette.background.paper,
              backgroundImage: "none",
              borderBottom: `1px solid ${theme.palette.divider}`,
              p: 3,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#ffffff" : "#111111",
                color: theme.palette.mode === "dark" ? "#111111" : "#ffffff",
              }}
            >
              <HeartBroken sx={{ fontSize: 18 }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Demo
            </Typography>
          </Box>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: theme.palette.text.primary }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ width: "100%" }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(item.id)}
                  sx={{
                    textAlign: "center",
                    borderRadius: 2,
                    backgroundColor: isActive
                      ? theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(17, 17, 17, 0.05)"
                      : "transparent",
                    mb: 1,
                  }}
                >
                  <ListItemText>
                    <Typography
                      sx={{
                        fontWeight: isActive ? 700 : 500,
                        color: isActive
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleNavClick("quiz")}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "#ffffff" : "#111111",
                color: theme.palette.mode === "dark" ? "#111111" : "#ffffff",
                py: 1.5,
              }}
            >
              Thử ngay
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

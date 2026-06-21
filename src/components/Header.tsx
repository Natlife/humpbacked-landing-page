import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Close as CloseIcon,
  Favorite as FavoriteIcon,
  Menu as MenuIcon,
  NightsStay as NightsStayIcon,
  WbSunny as WbSunnyIcon,
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

  const colors = {
    primary: "#1E3A8A",
    secondary: "#2DD4BF",
    text: "#0F172A",
  };

  const navItems = [
    { id: "home", label: "Trang chủ" },
    { id: "knowledge", label: "Góc kiến thức" },
    { id: "quiz", label: "Kiểm tra tư thế" },
    { id: "challenges", label: "Challenge 21 days" },
    { id: "about", label: "Về chúng tôi" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileOpen(false);
  };

  return (
    <AppBar
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        backgroundColor:
          mode === "dark" ? "rgba(11, 17, 32, 0.82)" : "rgba(248, 250, 252, 0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 80, justifyContent: "space-between" }}>
          <Box
            onClick={() => handleNavClick("home")}
            sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1E3A8A 0%, #2DD4BF 100%)",
                color: "#ffffff",
              }}
            >
              <FavoriteIcon sx={{ fontSize: 20 }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                color: theme.palette.text.primary,
                letterSpacing: "0.04em",
              }}
            >
              Đứng Thẳng
            </Typography>
          </Box>

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
                      color: isActive ? colors.primary : theme.palette.text.secondary,
                      backgroundColor: isActive
                        ? mode === "dark"
                          ? "rgba(30,58,138,0.24)"
                          : "rgba(30,58,138,0.08)"
                        : "transparent",
                      fontWeight: isActive ? 700 : 500,
                      "&:hover": {
                        backgroundColor:
                          mode === "dark"
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(15,23,42,0.04)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}

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
                  backgroundColor: colors.primary,
                  color: "#ffffff",
                  borderRadius: 99,
                  px: 3,
                  fontWeight: 700,
                  "&:hover": { backgroundColor: "#173175" },
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
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1E3A8A 0%, #2DD4BF 100%)",
                color: "#ffffff",
              }}
            >
              <FavoriteIcon sx={{ fontSize: 18 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Đứng Thẳng
            </Typography>
          </Box>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: theme.palette.text.primary }}>
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
                      ? mode === "dark"
                        ? "rgba(30,58,138,0.24)"
                        : "rgba(30,58,138,0.08)"
                      : "transparent",
                    mb: 1,
                  }}
                >
                  <ListItemText>
                    <Typography
                      sx={{
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? colors.primary : theme.palette.text.secondary,
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
                backgroundColor: colors.primary,
                color: "#ffffff",
                py: 1.5,
                "&:hover": { backgroundColor: "#173175" },
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

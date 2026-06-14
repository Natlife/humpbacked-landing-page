import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  HeartBroken,
} from "@mui/icons-material";







interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111111",
        color: "#ffffff",
        pt: 8,
        pb: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#111111",
                }}
              >
                <HeartBroken sx={{ fontSize: 20 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "0.05em",
                  color: "#ffffff",
                }}
              >
                Demo
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#9CA3AF", mb: 3, maxWidth: 380, lineHeight: 1.6 }}
            >
              Chiến dịch quốc gia nâng cao nhận thức về gù lưng và chỉnh dáng
              cột sống chuẩn y khoa cho thế hệ trẻ Việt Nam. Hãy đứng thẳng để
              sống khoẻ và tự tin hơn mỗi ngày.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <IconButton
                aria-label="Facebook"
                sx={{
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
                }}
              >
                <FacebookIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
                }}
              >
                <InstagramIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                sx={{
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
                }}
              >
                <YouTubeIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Grid>

          {}
          <Grid size={{ xs: 6, md: 3.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                mb: 3,
                letterSpacing: "0.05em",
                color: "#ffffff",
              }}
            >
              CHIẾN DỊCH
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                onClick={() => handleLinkClick("home")}
                sx={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                Trang chủ
              </Link>
              <Link
                onClick={() => handleLinkClick("knowledge")}
                sx={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                Góc kiến thức
              </Link>
              <Link
                onClick={() => handleLinkClick("quiz")}
                sx={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                Kiểm tra tư thế
              </Link>
              <Link
                onClick={() => handleLinkClick("challenges")}
                sx={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                Thử thách đồng hành
              </Link>
              <Link
                onClick={() => handleLinkClick("about")}
                sx={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                Về chúng tôi
              </Link>
            </Box>
          </Grid>

          {}
          <Grid size={{ xs: 6, md: 3.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                mb: 3,
                letterSpacing: "0.05em",
                color: "#ffffff",
              }}
            >
              CHÍNH SÁCH & LIÊN HỆ
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}
            >
              <Link
                sx={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                Điều khoản sử dụng
              </Link>
              <Link
                sx={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                Chính sách bảo mật
              </Link>
              <Link
                sx={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                Hỗ trợ cộng đồng
              </Link>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#9CA3AF", fontSize: "0.8125rem" }}
            >
              Email: lienhe@dungthang.vn
              <br />
              Hotline: 1900 6789
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.08)" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#6B7280", fontSize: "0.8125rem" }}
          >
            &copy; {currentYear} Đứng Thẳng. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#6B7280", fontSize: "0.8125rem" }}
          >
            Thiết kế phi lợi nhuận cho sức khoẻ cộng đồng Việt Nam
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

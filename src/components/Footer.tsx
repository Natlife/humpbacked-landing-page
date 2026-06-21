import {
  Divider,
  Grid,
  Box,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Favorite as FavoriteIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
        color: "#ffffff",
        pt: 8,
        pb: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#2DD4BF",
                  color: "#0F172A",
                }}
              >
                <FavoriteIcon sx={{ fontSize: 20 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: "0.04em" }}>
                Đứng Thẳng
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.74)", mb: 3, maxWidth: 400, lineHeight: 1.7 }}
            >
              Chiến dịch 21 ngày lan tỏa nhận thức về tư thế đúng, sức khỏe cột
              sống và những thói quen tốt dành cho thanh thiếu niên và người trẻ.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {[FacebookIcon, InstagramIcon, YouTubeIcon].map((Icon, idx) => (
                <IconButton
                  key={idx}
                  sx={{
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 3.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 3, letterSpacing: "0.05em" }}>
              CHIẾN DỊCH
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                ["home", "Trang chủ"],
                ["knowledge", "Góc kiến thức"],
                ["quiz", "Kiểm tra tư thế"],
                ["challenges", "Challenge 21 days"],
                ["about", "Về chúng tôi"],
              ].map(([id, label]) => (
                <Link
                  key={id}
                  onClick={() => handleLinkClick(id)}
                  sx={{
                    color: "rgba(255,255,255,0.74)",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    "&:hover": { color: "#2DD4BF" },
                  }}
                >
                  {label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 3.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 3, letterSpacing: "0.05em" }}>
              LIÊN HỆ
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.74)" }}>
                Email:{" "}
                <Link
                  href="mailto:lienhe@dungthang.vn"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { color: "#2DD4BF" },
                  }}
                >
                  lienhe@dungthang.vn
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.74)" }}>
                Hotline:{" "}
                <Link
                  href="tel:0967743646"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { color: "#2DD4BF" },
                  }}
                >
                  0967743646
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.74)" }}>
                Đồng hành cùng người trẻ vì một cột sống khỏe.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.62)", fontSize: "0.8125rem" }}>
            &copy; {currentYear} Đứng Thẳng. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.62)", fontSize: "0.8125rem" }}>
            Thiết kế cho chiến dịch truyền thông sức khỏe cột sống cộng đồng
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  TextField,
  Button,
  Snackbar,
  Alert,
  useTheme,
  CardMedia,
} from "@mui/material";
import {
  LocalHospital as HealthIcon,
  Science as ScienceIcon,
  People as PeopleIcon,
  ElectricBolt as BoltIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";










interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
    hp_field: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stats = [
    { value: "2024", label: "Thành lập" },
    { value: "12K+", label: "Thành viên" },
    { value: "20+", label: "Trường học đối tác" },
  ];

  const values = [
    {
      icon: <HealthIcon sx={{ fontSize: 36, color: "#6366F1" }} />,
      title: "Vì sức khỏe cộng đồng",
      desc: "Cung cấp các giải pháp chỉnh sửa tư thế hoàn toàn miễn phí và dễ tiếp cận nhất cho giới trẻ Việt Nam.",
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 36, color: "#10B981" }} />,
      title: "Khoa học làm nền",
      desc: "Mọi thông tin, hướng dẫn thực hành đều được tham vấn từ tài liệu y khoa và bác sĩ trị liệu chuyên khoa.",
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 36, color: "#F59E0B" }} />,
      title: "Cộng đồng là sức mạnh",
      desc: "Tạo môi trường đồng hành tập luyện mỗi ngày để gia tăng động lực hoàn thành mục tiêu chỉnh dáng.",
    },
    {
      icon: <BoltIcon sx={{ fontSize: 36, color: "#EC4899" }} />,
      title: "Đơn giản & Hiệu quả",
      desc: "Chia nhỏ các bài tập thành các hành động cực kỳ dễ nhớ để thực hiện liên tục ngay tại chỗ học tập.",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Nguyễn Thanh Tâm",
      role: "Founder & Campaign Lead",
      avatar:
        "https://cellphones.com.vn/sforum/wp-content/uploads/2024/01/anh-meme-58.jpg",
      bio: "Sinh viên Y khoa Đại học Y Dược TP.HCM, mang đam mê chia sẻ thói quen bảo vệ xương khớp cho các bạn trẻ.",
    },
    {
      name: "ThS. Nguyễn Thị Hương",
      role: "Cố vấn chuyên môn",
      avatar:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2024/01/anh-meme-54.jpg",
      bio: "Thạc sĩ, Giảng viên Vật lý trị liệu và Phục hồi chức năng với hơn 10 năm kinh nghiệm nghiên cứu cột sống.",
    },
    {
      name: "Lê Minh Đức",
      role: "Creative Director",
      avatar:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2024/01/anh-meme-51.jpg",
      bio: "Phụ trách thiết kế trải nghiệm, xây dựng các bài viết minh họa trực quan dễ hiểu tiếp cận hàng triệu người học.",
    },
    {
      name: "Trần Bảo Ngọc",
      role: "Community Manager",
      avatar:
        "https://cellphones.com.vn/sforum/wp-content/uploads/2024/01/anh-meme-70.jpg",
      bio: "Kết nối các dự án học đường, triển khai các buổi workshop thực hành tư thế đứng thẳng cho học sinh sinh viên.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (formData.hp_field) {
      setFormData({
        name: "",
        email: "",
        org: "",
        message: "",
        hp_field: "",
      });
      setOpenSnackbar(true);
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Vui lòng điền đầy đủ các thông tin bắt buộc.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Định dạng email không hợp lệ.");
      return;
    }

    setErrorMsg("");

    
    const existing = localStorage.getItem("postura_contacts");
    const contacts = existing ? JSON.parse(existing) : [];

    
    const submissionData = {
      name: formData.name,
      email: formData.email,
      org: formData.org,
      message: formData.message,
      timestamp: new Date().toISOString(),
    };
    contacts.push(submissionData);
    localStorage.setItem("postura_contacts", JSON.stringify(contacts));

    
    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_URL || "";

    if (scriptUrl) {
      setIsSubmitting(true);
      fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })
        .then(() => {
          setFormData({
            name: "",
            email: "",
            org: "",
            message: "",
            hp_field: "",
          });
          setOpenSnackbar(true);
        })
        .catch((err) => {
          console.error("Error sending to Google Sheet:", err);
          setErrorMsg(
            "Có lỗi xảy ra khi kết nối máy chủ Google. Vui lòng thử lại.",
          );
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      
      setFormData({
        name: "",
        email: "",
        org: "",
        message: "",
        hp_field: "",
      });
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: isDark ? "#121212" : "#ffffff",
        minHeight: "100vh",
        pb: 10,
      }}
    >
      {}
      <Box
        sx={{
          backgroundColor: "#111111",
          color: "#ffffff",
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            {}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#6366F1",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  display: "block",
                  mb: 2,
                }}
              >
                VỀ DỰ ÁN ĐỨNG THẲNG
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: { xs: "2.2rem", sm: "3rem", md: "3.6rem" },
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  mb: 3,
                }}
              >
                Chúng tôi tin rằng đứng thẳng là quyền của mọi người
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#9CA3AF",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  mb: 5,
                  maxWidth: 580,
                }}
              >
                Đứng Thẳng là chiến dịch truyền thông xã hội phi lợi nhuận, được
                thành lập bởi những người trẻ có chung niềm tin: sức khoẻ cột
                sống không phải là xa xỉ phẩm, và mọi người đều có thể tiếp cận
                thông tin đúng đắn.
              </Typography>

              {}
              <Grid container spacing={3} sx={{ maxWidth: 500 }}>
                {stats.map((s, idx) => (
                  <Grid size={4} key={idx}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 900,
                        color: "#6366F1",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#9CA3AF", display: "block", mt: 0.5 }}
                    >
                      {s.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ position: "relative", width: "100%", maxWidth: 420 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 300,
                    borderRadius: 6,
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80"
                    alt="Group of founders"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                {}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -20,
                    left: -20,
                    backgroundColor: "rgba(17, 17, 17, 0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: 3,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: "rgba(99, 102, 241, 0.15)",
                      color: "#6366F1",
                      width: 32,
                      height: 32,
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 16 }} />
                  </Avatar>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 800, color: "#ffffff" }}
                  >
                    Chiến dịch toàn quốc
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#6366F1",
                fontWeight: 800,
                letterSpacing: "0.15em",
                display: "block",
                mb: 2,
              }}
            >
              SỨ MỆNH CHIẾN DỊCH
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "2.75rem" },
                color: isDark ? "#ffffff" : "#111111",
              }}
            >
              Vì sao chúng tôi làm điều này?
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((v, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid rgba(0,0,0,0.04)",
                    boxShadow: "none",
                    backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
                    p: 3,
                  }}
                >
                  <Box sx={{ mb: 2.5 }}>{v.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      mb: 1.5,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: isDark ? "#ffffff" : "#111111",
                    }}
                  >
                    {v.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? "#9CA3AF" : "#6B7280",
                      lineHeight: 1.6,
                    }}
                  >
                    {v.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: isDark ? "#181818" : "#F9FAFB",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#6366F1",
                fontWeight: 800,
                letterSpacing: "0.15em",
                display: "block",
                mb: 2,
              }}
            >
              BAN ĐIỀU HÀNH
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "2.75rem" },
                color: isDark ? "#ffffff" : "#111111",
              }}
            >
              Đội ngũ sáng lập và Cố vấn
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {team.map((member, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{
                      width: 110,
                      height: 110,
                      mx: "auto",
                      mb: 3,
                      border: `3px solid ${isDark ? "#333" : "#fff"}`,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      mb: 0.5,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: isDark ? "#ffffff" : "#111111",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#6366F1",
                      fontWeight: 700,
                      display: "block",
                      mb: 2,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? "#9CA3AF" : "#6B7280",
                      lineHeight: 1.6,
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="sm">
          <Card
            sx={{
              p: { xs: 4, sm: 5 },
              borderRadius: 5,
              border: isDark
                ? "1px solid rgba(255,255,255,0.06)"
                : "1px solid rgba(0,0,0,0.04)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
              backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  mb: 1,
                  color: isDark ? "#ffffff" : "#111111",
                }}
              >
                Hợp tác & Đồng hành
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: isDark ? "#9CA3AF" : "#6B7280" }}
              >
                Chào đón các trường học, trung tâm y tế, đơn vị tài trợ cùng
                chung tay đẩy lùi gù lưng học đường.
              </Typography>
            </Box>

            {errorMsg && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {errorMsg}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              {}
              <TextField
                name="hp_field"
                value={formData.hp_field}
                onChange={handleInputChange}
                sx={{ display: "none" }}
                slotProps={{ input: { tabIndex: -1, autoComplete: "off" } }}
              />
              <TextField
                required
                fullWidth
                label="Họ và tên người liên hệ"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                slotProps={{ input: { sx: { borderRadius: 3 } } }}
              />
              <TextField
                required
                fullWidth
                type="email"
                label="Địa chỉ Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                slotProps={{ input: { sx: { borderRadius: 3 } } }}
              />
              <TextField
                fullWidth
                label="Tên trường học / Tổ chức (nếu có)"
                name="org"
                value={formData.org}
                onChange={handleInputChange}
                slotProps={{ input: { sx: { borderRadius: 3 } } }}
              />
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Nội dung tin nhắn liên hệ"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                slotProps={{ input: { sx: { borderRadius: 3 } } }}
              />
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  fontWeight: 700,
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  textTransform: "none",
                  mt: 2,
                  "&:hover": { backgroundColor: "#222222" },
                }}
              >
                {isSubmitting ? "Đang gửi..." : "Gửi thông tin liên hệ"}
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>

      {}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%", borderRadius: 2 }}
        >
          Gửi tin nhắn liên hệ thành công! Chúng tôi sẽ phản hồi trong 24 giờ.
        </Alert>
      </Snackbar>
    </Box>
  );
}

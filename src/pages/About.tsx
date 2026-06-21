import { useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AutoAwesome as AutoAwesomeIcon,
  Groups as GroupsIcon,
  Lightbulb as LightbulbIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";
import nganImage from "../assets/ngan.jpg";
import phuongImage from "../assets/phuong.jpg";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const colors = {
    primary: "#1E3A8A",
    secondary: "#2DD4BF",
    background: "#F8FAFC",
    text: "#0F172A",
    accent: "#F59E0B",
  };

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

  const pillars = [
    {
      icon: <LightbulbIcon sx={{ fontSize: 34, color: colors.primary }} />,
      title: "Tầm nhìn",
      desc: "Xây dựng một cộng đồng người trẻ chủ động chăm sóc sức khỏe cột sống, duy trì lối sống khoa học và nâng cao chất lượng cuộc sống lâu dài.",
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 34, color: colors.secondary }} />,
      title: "Sứ mệnh",
      desc: "Nâng cao nhận thức, cung cấp kiến thức thực hành đúng và khuyến khích thay đổi hành vi qua các hoạt động tương tác gần gũi.",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 34, color: colors.accent }} />,
      title: "Giá trị cốt lõi",
      desc: "Chủ động, khoa học, thực tiễn và bền vững là những nguyên tắc giúp chiến dịch tạo ra thay đổi lâu dài.",
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 34, color: colors.primary }} />,
      title: "Mục tiêu",
      desc: "Hỗ trợ học sinh, sinh viên và người trẻ hình thành những thói quen tốt để bảo vệ cột sống ngay từ hôm nay.",
    },
  ];

  const missions = [
    "Nâng cao nhận thức về các nguy cơ từ tư thế sai.",
    "Cung cấp kiến thức và kỹ năng thực hành đúng.",
    "Khuyến khích thay đổi hành vi thông qua các hoạt động tương tác và trải nghiệm thực tế.",
    "Góp phần giảm thiểu các vấn đề về cơ xương khớp ở người trẻ.",
  ];

  const coreValues = [
    "Chủ động: Phòng ngừa tốt hơn điều trị.",
    "Khoa học: Thông tin được xây dựng dựa trên các nguồn kiến thức đáng tin cậy.",
    "Thực tiễn: Các giải pháp đơn giản, dễ áp dụng trong cuộc sống hằng ngày.",
    "Bền vững: Hướng tới việc duy trì những thói quen tốt lâu dài.",
  ];

  const team: TeamMember[] = [
    {
      name: "Bùi Mai Phương",
      role: "Founder",
      bio: "Sinh viên Học viện Báo chí và Tuyên truyền, kết nối các dự án học đường, triển khai các buổi workshop thực chia sẻ kiến thức về cột sống cho học sinh sinh viên.",
      avatar: phuongImage,
    },
    {
      name: "Đoàn Thảo Ngân",
      role: "Co-founder",
      bio: "Sinh viên Học viện Báo chí và Tuyên truyền, thiết kế trải nghiệm, xây dựng các bài viết minh hoạ trực quan để hiểu và tiếp cận hàng triệu bạn trẻ.",
      avatar: nganImage,
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
        backgroundColor: isDark ? "#0B1120" : colors.background,
        minHeight: "100vh",
        pb: 10,
      }}
    >
      <Box
        sx={{
          background: isDark
            ? "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)"
            : "linear-gradient(135deg, #0F172A 0%, #1E3A8A 70%, #2DD4BF 160%)",
          color: "#ffffff",
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography
                variant="overline"
                sx={{
                  color: colors.secondary,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  display: "block",
                  mb: 2,
                }}
              >
                VỀ CHÚNG TÔI
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Giới thiệu chiến dịch
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.84)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  mb: 3,
                  maxWidth: 760,
                }}
              >
                Chúng tôi là nhóm sinh viên thực hiện chiến dịch truyền thông
                thay đổi hành vi về bảo vệ sức khỏe cột sống dành cho thanh
                thiếu niên và người trẻ. Xuất phát từ thực tế ngày càng nhiều
                học sinh, sinh viên và nhân viên văn phòng phải học tập, làm
                việc trong thời gian dài với máy tính và điện thoại, các vấn đề
                như đau cổ vai gáy, đau lưng, gù lưng hay sai tư thế đang trở
                nên phổ biến hơn bao giờ hết.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.84)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  maxWidth: 760,
                }}
              >
                Thông qua chiến dịch này, chúng tôi mong muốn nâng cao nhận
                thức của cộng đồng về tầm quan trọng của việc duy trì tư thế
                đúng trong học tập, làm việc và sinh hoạt hằng ngày. Không chỉ
                cung cấp kiến thức, chiến dịch hướng tới việc khuyến khích và
                hỗ trợ người trẻ hình thành những thói quen lành mạnh để bảo vệ
                cột sống ngay từ hôm nay.
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {pillars.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 4,
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(15,23,42,0.08)",
                    boxShadow: "none",
                    backgroundColor: isDark ? "#111827" : "#ffffff",
                  }}
                >
                  <Box sx={{ mb: 2.5 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 10, md: 12 },
          backgroundColor: isDark ? "#0F172A" : "#ffffff",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 5,
                  boxShadow: "none",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(15,23,42,0.08)",
                  backgroundColor: isDark ? "#111827" : colors.background,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: colors.primary,
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    display: "block",
                    mb: 2,
                  }}
                >
                  SỨ MỆNH
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {missions.map((item, idx) => (
                    <Typography
                      key={idx}
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
                    >
                      {`- ${item}`}
                    </Typography>
                  ))}
                </Box>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 5,
                  boxShadow: "none",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(15,23,42,0.08)",
                  backgroundColor: isDark ? "#111827" : colors.background,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: colors.secondary,
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    display: "block",
                    mb: 2,
                  }}
                >
                  GIÁ TRỊ CỐT LÕI
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {coreValues.map((item, idx) => (
                    <Typography
                      key={idx}
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
                    >
                      {`- ${item}`}
                    </Typography>
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: colors.primary,
                fontWeight: 800,
                letterSpacing: "0.15em",
                display: "block",
                mb: 2,
              }}
            >
              ĐỘI NGŨ SÁNG LẬP
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: isDark ? "#ffffff" : colors.text,
              }}
            >
              2 người đồng hành xây dựng chiến dịch
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {team.map((member, idx) => (
              <Grid size={{ xs: 12, md: 5 }} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    p: 4,
                    boxShadow: "none",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(15,23,42,0.08)",
                    backgroundColor: isDark ? "#111827" : "#ffffff",
                  }}
                >
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{
                      width: { xs: 112, md: 132 },
                      height: { xs: 112, md: 132 },
                      mb: 3,
                      bgcolor: idx === 0 ? colors.primary : colors.secondary,
                      color: "#ffffff",
                      fontWeight: 800,
                      border: "4px solid rgba(255,255,255,0.92)",
                      boxShadow: "0 18px 40px rgba(15,23,42,0.16)",
                    }}
                  >
                    {member.name
                      .split(" ")
                      .slice(-2)
                      .map((part) => part[0])
                      .join("")}
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{
                      color: idx === 0 ? colors.primary : colors.secondary,
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      display: "block",
                      mb: 2,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}
                  >
                    {member.bio}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 } }}>
        <Container maxWidth="sm">
          <Card
            sx={{
              p: { xs: 4, sm: 5 },
              borderRadius: 5,
              border: isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(15,23,42,0.08)",
              boxShadow: "0 24px 60px rgba(15,23,42,0.08)",
              backgroundColor: isDark ? "#111827" : "#ffffff",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, mb: 1, color: isDark ? "#fff" : colors.text }}
              >
                Hợp tác & Đồng hành
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                Chào đón các trường học, tổ chức và đối tác cùng chung tay lan
                tỏa kiến thức bảo vệ cột sống cho người trẻ.
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
                label="Địa chỉ email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                slotProps={{ input: { sx: { borderRadius: 3 } } }}
              />
              <TextField
                fullWidth
                label="Tên trường học / tổ chức"
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
                label="Nội dung liên hệ"
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
                  backgroundColor: colors.primary,
                  color: "#ffffff",
                  mt: 1,
                  "&:hover": { backgroundColor: "#173175" },
                }}
              >
                {isSubmitting ? "Đang gửi..." : "Gửi thông tin liên hệ"}
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>

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
          Gửi tin nhắn liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất có
          thể.
        </Alert>
      </Snackbar>
    </Box>
  );
}

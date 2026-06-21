import {
  ArrowForward as ArrowForwardIcon,
  AutoStories as AutoStoriesIcon,
  CheckCircle as CheckCircleIcon,
  EmojiEvents as EmojiEventsIcon,
  FactCheck as FactCheckIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const colors = {
    primary: "#1E3A8A",
    secondary: "#2DD4BF",
    background: "#F8FAFC",
    text: "#0F172A",
    accent: "#F59E0B",
  };

  const stats = [
    { value: "78%", label: "Học sinh Việt Nam có nguy cơ sai tư thế" },
    { value: "14+", label: "Tuổi bắt đầu xuất hiện thói quen xấu" },
    { value: "3h+", label: "Cúi đầu vào điện thoại mỗi ngày" },
    { value: "92%", label: "Có thể cải thiện nếu bắt đầu sớm" },
  ];

  const benefits = [
    "Ngồi học và làm việc sai tư thế trong thời gian dài là nguyên nhân phổ biến gây đau cổ vai gáy và đau lưng ở người trẻ.",
    "Thói quen cúi đầu liên tục làm tăng áp lực lên đốt sống cổ và ảnh hưởng đến chất lượng hô hấp, vận động.",
    "Chỉ cần luyện tập và điều chỉnh góc học tập đúng cách trong vài tuần, tư thế có thể cải thiện rõ rệt.",
    "Phòng ngừa sớm giúp giảm nguy cơ các vấn đề cơ xương khớp kéo dài trong tương lai.",
  ];

  const tools = [
    {
      icon: <AutoStoriesIcon sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Góc kiến thức",
      desc: "Tìm hiểu kiến thức nền tảng, bài tập và hướng dẫn đơn giản để chăm sóc cột sống đúng cách.",
      tab: "knowledge",
      btnLabel: "Đọc bài viết",
    },
    {
      icon: <FactCheckIcon sx={{ fontSize: 40, color: colors.secondary }} />,
      title: "Kiểm tra tư thế",
      desc: "Tự đánh giá nhanh các dấu hiệu sai tư thế để hiểu rõ tình trạng của mình và bắt đầu điều chỉnh.",
      tab: "quiz",
      btnLabel: "Làm bài test",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: colors.accent }} />,
      title: "Challenge 21 days",
      desc: "Tham gia thử thách 21 ngày vì 1 cột sống khoẻ.",
      tab: "challenges",
      btnLabel: "Xem thử thách",
    },
  ];

  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
      tag: "Nghiên cứu",
      title: "Vì sao người trẻ dễ gặp vấn đề về cột sống hơn trước?",
      desc: "Thói quen học tập và làm việc cùng thiết bị số đang khiến tình trạng đau cổ vai gáy và gù lưng trở nên phổ biến hơn.",
      date: "10 tháng 6, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522898467493-49726bf28798?auto=format&fit=crop&w=400&q=80",
      tag: "Bài tập",
      title: "5 động tác kéo giãn đơn giản để làm tại nhà",
      desc: "Một chuỗi bài tập ngắn, dễ thực hiện cho học sinh, sinh viên và dân văn phòng phải ngồi lâu.",
      date: "08 tháng 6, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=400&q=80",
      tag: "Hướng dẫn",
      title: "Thiết lập góc học tập đúng để giảm áp lực lên lưng cổ",
      desc: "Cách chỉnh bàn ghế, màn hình và tư thế ngồi giúp bảo vệ cột sống trong học tập hằng ngày.",
      date: "05 tháng 6, 2025",
    },
  ];

  const testimonials = [
    {
      name: "Trần Minh Hoàng",
      role: "Học sinh lớp 12 - Hà Nội",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Sau khi tham gia thử thách 21 ngày, mình để ý rõ hơn cách ngồi học và đỡ mỏi vai gáy hơn rất nhiều.",
    },
    {
      name: "Nguyễn Thùy Chi",
      role: "Nhân viên văn phòng - TP. HCM",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Các bài viết và bài tập ở đây rất dễ áp dụng. Mình thích nhất là cảm giác có cộng đồng cùng đồng hành mỗi ngày.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: isDark ? "#0B1120" : colors.background }}>
      <Box
        sx={{
          background: isDark
            ? "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)"
            : "linear-gradient(135deg, #0F172A 0%, #1E3A8A 68%, #2DD4BF 165%)",
          color: "#ffffff",
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -220,
            right: -180,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45, 212, 191, 0.28) 0%, rgba(45, 212, 191, 0) 70%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(245, 158, 11, 0) 72%)",
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{
                  color: colors.secondary,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  mb: 2,
                  display: "inline-block",
                }}
              >
                CHIẾN DỊCH 21 NGÀY
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.4rem" },
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  mb: 3,
                }}
              >
                ĐỨNG THẲNG
                <Box component="span" sx={{ display: "block", color: colors.secondary }}>
                  SỐNG KHỎE
                </Box>
                <Box component="span" sx={{ display: "block", color: "#ffffff" }}>
                  TỰ TIN
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.7,
                  mb: 5,
                  maxWidth: 560,
                }}
              >
                Một hành trình ngắn nhưng đủ để bạn bắt đầu thay đổi tư thế,
                xây dựng thói quen tốt và bảo vệ cột sống từ những điều nhỏ nhất
                mỗi ngày.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => setActiveTab("quiz")}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: colors.secondary,
                    color: colors.text,
                    borderRadius: 99,
                    px: 4,
                    py: 1.8,
                    fontWeight: 800,
                    "&:hover": { backgroundColor: "#26bda9" },
                  }}
                >
                  Kiểm tra tư thế ngay
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    const el = document.getElementById("why-it-matters");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    borderColor: "rgba(255,255,255,0.22)",
                    color: "#ffffff",
                    borderRadius: 99,
                    px: 4,
                    py: 1.8,
                    fontWeight: 700,
                    "&:hover": {
                      borderColor: "#ffffff",
                      backgroundColor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  Tìm hiểu thêm
                </Button>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ position: "relative", width: "100%", maxWidth: 420 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 400,
                    borderRadius: 6,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 30px 60px rgba(15,23,42,0.35)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=900&q=80"
                    alt="Spine health"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: -18,
                    backgroundColor: "rgba(15,23,42,0.82)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 3,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: "rgba(45, 212, 191, 0.18)",
                      color: colors.secondary,
                    }}
                  >
                    <TrendingUpIcon />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255,255,255,0.66)", display: "block" }}
                    >
                      Thói quen mới sau 21 ngày
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 800, color: "#ffffff" }}
                    >
                      Bắt đầu từ những bước nhỏ
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: isDark ? "#0F172A" : "#ffffff",
          py: 4,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            {stats.map((stat, index) => (
              <Grid
                size={{ xs: 6, md: 3 }}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    color: colors.primary,
                    mb: 0.5,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box id="why-it-matters" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 6,
                  overflow: "hidden",
                  height: { xs: 320, md: 460 },
                  boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=700&q=80"
                  alt="Posture awareness"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
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
                TẠI SAO QUAN TRỌNG?
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2rem", md: "2.9rem" },
                  mb: 4,
                  lineHeight: 1.2,
                  color: isDark ? "#ffffff" : colors.text,
                }}
              >
                Một cột sống khỏe bắt đầu từ nhận thức đúng
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {benefits.map((text, idx) => (
                  <Box
                    key={idx}
                    sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                  >
                    <CheckCircleIcon sx={{ color: colors.secondary, mt: 0.3 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.7,
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: isDark ? "#0F172A" : "#ffffff",
        }}
      >
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
              CÔNG CỤ CỦA BẠN
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "2.9rem" },
                color: isDark ? "#ffffff" : colors.text,
              }}
            >
              Bắt đầu hành trình thay đổi từ hôm nay
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {tools.map((tool, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(15,23,42,0.08)",
                    boxShadow: "0 12px 30px rgba(15,23,42,0.04)",
                    backgroundColor: isDark ? "#111827" : "#ffffff",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>{tool.icon}</Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                      {tool.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}
                    >
                      {tool.desc}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 4, pt: 0 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => setActiveTab(tool.tab)}
                      sx={{
                        borderRadius: 3,
                        borderColor: colors.primary,
                        color: colors.primary,
                        fontWeight: 700,
                        py: 1.2,
                        "&:hover": {
                          borderColor: colors.primary,
                          backgroundColor: "rgba(30,58,138,0.04)",
                        },
                      }}
                    >
                      {tool.btnLabel}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 3,
              mb: 6,
              flexWrap: "wrap",
            }}
          >
            <Box>
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
                KIẾN THỨC MỚI NHẤT
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  color: isDark ? "#ffffff" : colors.text,
                }}
              >
                Cập nhật chuyên mục cột sống
              </Typography>
            </Box>
            <Button
              variant="text"
              onClick={() => setActiveTab("knowledge")}
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontWeight: 700,
                color: colors.primary,
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              Xem tất cả bài viết
            </Button>
          </Box>

          <Grid container spacing={4}>
            {posts.map((post, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  onClick={() => setActiveTab("knowledge")}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    cursor: "pointer",
                    boxShadow: "none",
                    backgroundColor: isDark ? "#111827" : "#ffffff",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(15,23,42,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ overflow: "hidden", height: 200 }}>
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt={post.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                  </Box>
                  <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.primary,
                        fontWeight: 800,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        mb: 1,
                        display: "block",
                      }}
                    >
                      {post.tag}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.4 }}>
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: 1.6,
                      }}
                    >
                      {post.desc}
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, mt: "auto" }}>
                      {post.date}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
          color: "#ffffff",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
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
              HỌ ĐÃ THAY ĐỔI
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "2.8rem" } }}
            >
              Phản hồi tích cực từ cộng đồng
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {testimonials.map((test, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 5,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "none",
                  }}
                >
                  <Rating value={test.rating} readOnly sx={{ mb: 3, color: colors.accent }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.88)",
                      lineHeight: 1.7,
                      mb: 4,
                      fontSize: "1.05rem",
                    }}
                  >
                    "{test.content}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={test.avatar} alt={test.name} sx={{ width: 52, height: 52 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#ffffff" }}>
                        {test.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.68)" }}>
                        {test.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

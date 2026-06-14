import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Rating,
  useTheme,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  AutoStories as AutoStoriesIcon,
  FactCheck as FactCheckIcon,
  EmojiEvents as EmojiEventsIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";










interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const stats = [
    { value: "78%", label: "Học sinh VN bị gù lưng" },
    { value: "14t", label: "Tuổi trung bình bắt đầu gù" },
    { value: "3h+", label: "Cúi đầu vào điện thoại/ngày" },
    { value: "92%", label: "Có thể phòng ngừa được" },
  ];

  const benefits = [
    "70% người bị gù lưng gặp các cơn đau vai gáy mãn tính trước tuổi 30.",
    "Dung tích phổi giảm tới 30% do lồng ngực bị ép hẹp khi khòm lưng.",
    "4 - 8 tuần luyện tập đúng chuẩn giúp phục hồi đường cong sinh lý cột sống.",
    "Giảm 60% nguy cơ thoái hoá cột sống nhờ thói quen công thái học đúng đắn.",
  ];

  const tools = [
    {
      icon: <AutoStoriesIcon sx={{ fontSize: 40, color: "#6366F1" }} />,
      title: "Góc kiến thức",
      desc: "Tìm hiểu kiến thức chuẩn khoa học, bài tập thực hành từ đội ngũ y bác sĩ uy tín.",
      tab: "knowledge",
      btnLabel: "Đọc bài viết",
    },
    {
      icon: <FactCheckIcon sx={{ fontSize: 40, color: "#10B981" }} />,
      title: "Kiểm tra tư thế",
      desc: "Tự đánh giá nguy cơ gù lưng và độ lệch cột sống trực quan chỉ trong 3 phút.",
      tab: "quiz",
      btnLabel: "Làm bài test",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#F59E0B" }} />,
      title: "Thử thách đồng hành",
      desc: "Rèn luyện thói quen đứng thẳng cùng hàng chục nghìn bạn trẻ trên cả nước.",
      tab: "challenges",
      btnLabel: "Xem thử thách",
    },
  ];

  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=80",
      tag: "Nghiên cứu",
      title: "Tại sao giới trẻ ngày càng gù lưng nhiều hơn?",
      desc: "Nghiên cứu mới nhất từ Viện Cột sống Việt Nam cho thấy tỷ lệ gù lưng ở học sinh THPT tăng vọt.",
      date: "10 tháng 6, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80",
      tag: "Bài tập",
      title: "5 bài tập kéo giãn cột sống dễ làm tại nhà",
      desc: "Dành riêng cho dân văn phòng và học sinh phải ngồi học liên tục trên 6 tiếng mỗi ngày.",
      date: "08 tháng 6, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      tag: "Hướng dẫn",
      title: "Ergonomics 101: Thiết lập góc học tập đúng chuẩn",
      desc: "Hướng dẫn chi tiết cách điều chỉnh chiều cao bàn ghế, khoảng cách màn hình để bảo vệ cổ.",
      date: "05 tháng 6, 2025",
    },
  ];

  const testimonials = [
    {
      name: "Trần Minh Hoàng",
      role: "Học sinh lớp 12 - Hà Nội",
      avatar:
        "https://instagram.fhan14-4.fna.fbcdn.net/v/t51.82787-15/517852037_18283613248251559_7000621868229293473_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=102&ig_cache_key=MzY3NTczNDAyMzA5MDk3ODcwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=qiINqtSVIG8Q7kNvwHcXY6H&_nc_oc=AdrIHWYl9JlFKimTJXeluZxkHEKyJUkVgY2pjjq6hL54X9rB8LA1Sicmhf4l-R4_5kHmMh64X8m9Yg_uYpm-92SU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fhan14-4.fna&_nc_gid=aeSGUlYFW3_4ftz0ybb8hQ&_nc_ss=7a22e&oh=00_Af-t9hxXuLLblcPiRiBvDiTzmrL8ETz1c4pwc4TjJ9-pmg&oe=6A346F57",
      rating: 5,
      content:
        "Em từng bị gù và hay mỏi vai khi học bài lâu. Nhờ tham gia thử thách 21 ngày và chỉnh lại góc học tập, giờ em tự tin đứng thẳng lưng và không còn đau nhức nữa.",
    },
    {
      name: "Nguyễn Thuỳ Chi",
      role: "Lập trình viên - TP. HCM",
      avatar:
        "https://instagram.fhan14-1.fna.fbcdn.net/v/t51.82787-15/571395749_18296044768251559_5653362191430940359_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzc1MjM0NjYxNjMzOTg2MTM3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=YkL3OC44wkUQ7kNvwHHnKRL&_nc_oc=Ador1Xd4_GunuIk3bxsYz-I3ZaCfi3fN-Xc4qnDOJHwIMWTv8nA6QskqtqJGewqLWcxcrx6XmNI8eFxLrdP7K7Y_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fhan14-1.fna&_nc_gid=-Ed8Y8xdYuR0wvTvLbrX7A&_nc_ss=7a22e&oh=00_Af-f84pQTAijbfpBEDaEv6E3gYjkKr--5z7PSUSXEnp5-A&oe=6A34562A",
      rating: 5,
      content:
        "Công việc IT bắt ngồi máy tính 8-10 tiếng mỗi ngày làm mình bị Text Neck khá nặng. Các kiến thức và bài tập kéo giãn ở đây siêu thực tế và cực kỳ dễ làm ngay tại văn phòng.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: isDark ? "#121212" : "#ffffff" }}>
      {}
      <Box
        sx={{
          backgroundColor: "#111111",
          color: "#ffffff",
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {}
        <Box
          sx={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0) 70%)",
            pointerEvents: "none",
          }}
        />

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
                  mb: 2,
                  display: "inline-block",
                }}
              >
                CHIẾN DỊCH QUỐC GIA 2025
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.2rem" },
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  mb: 3,
                }}
              >
                ĐỨNG THẲNG
                <Box
                  component="span"
                  sx={{ display: "block", color: "#6366F1" }}
                >
                  SỐNG KHỎE
                </Box>
                <Box
                  component="span"
                  sx={{ display: "block", color: "#6366F1" }}
                >
                  TỰ TIN
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  color: "#9CA3AF",
                  lineHeight: 1.6,
                  mb: 5,
                  maxWidth: 540,
                }}
              >
                Gù lưng không phải số mệnh — đó là thói quen có thể thay đổi.
                Tham gia chiến dịch cùng hàng nghìn bạn trẻ trên toàn quốc để
                bảo vệ cột sống của chính mình.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => setActiveTab("quiz")}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#111111",
                    borderRadius: 99,
                    px: 4,
                    py: 1.8,
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#f3f4f6" },
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
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    borderRadius: 99,
                    px: 4,
                    py: 1.8,
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#ffffff",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  Tìm hiểu thêm
                </Button>
              </Box>
            </Grid>

            {}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box sx={{ position: "relative", width: "100%", maxWidth: 420 }}>
                {}
                <Box
                  sx={{
                    width: "100%",
                    height: 380,
                    borderRadius: 6,
                    overflow: "hidden",
                    position: "relative",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://tse1.mm.bing.net/th/id/OIP.HyGVn_pq3FCWESXtSzC7lwHaFj?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Spine Stretch Model"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(to bottom, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0.4) 100%)",
                    }}
                  />
                </Box>

                {}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: -20,
                    backgroundColor: "rgba(17, 17, 17, 0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: 3,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: "rgba(99, 102, 241, 0.15)",
                      color: "#6366F1",
                    }}
                  >
                    <TrendingUpIcon />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "#9CA3AF", display: "block" }}
                    >
                      Cải thiện sau 4 tuần
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 800, color: "#ffffff" }}
                    >
                      +67% tư thế tốt
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {}
      <Box
        sx={{
          backgroundColor: "#0A0A0A",
          py: 4,
          borderBottom: `1px solid ${isDark ? "#222" : "#eee"}`,
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
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 900,
                    color: "#6366F1",
                    mb: 0.5,
                    fontSize: { xs: "2rem", md: "2.75rem" },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#9CA3AF", fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {}
      <Box id="why-it-matters" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            {}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 6,
                  overflow: "hidden",
                  height: { xs: 320, md: 450 },
                  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
                  alt="Postural awareness"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>

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
                TẠI SAO QUAN TRỌNG?
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  mb: 4,
                  lineHeight: 1.2,
                  color: isDark ? "#ffffff" : "#111111",
                }}
              >
                Gù lưng ảnh hưởng đến toàn bộ cuộc đời bạn
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {benefits.map((text, idx) => (
                  <Box
                    key={idx}
                    sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                  >
                    <CheckCircleIcon sx={{ color: "#6366F1", mt: 0.3 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        color: isDark ? "#9CA3AF" : "#4B5563",
                        lineHeight: 1.6,
                        fontSize: "1rem",
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
              CÔNG CỤ CỦA BẠN
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
              Bắt đầu hành trình thay đổi hôm nay
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
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid rgba(0,0,0,0.04)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                    backgroundColor: isDark ? "#222222" : "#ffffff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>{tool.icon}</Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        mb: 1.5,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {tool.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? "#9CA3AF" : "#6B7280",
                        lineHeight: 1.6,
                      }}
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
                        borderColor: isDark
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(0,0,0,0.15)",
                        color: isDark ? "#ffffff" : "#111111",
                        fontWeight: 700,
                        textTransform: "none",
                        py: 1.2,
                        "&:hover": {
                          borderColor: isDark ? "#ffffff" : "#111111",
                          backgroundColor: isDark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.02)",
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

      {}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              mb: 6,
            }}
          >
            <Box>
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
                KIẾN THỨC MỚI NHẤT
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  color: isDark ? "#ffffff" : "#111111",
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
                color: "#6366F1",
                textTransform: "none",
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
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <Box
                    sx={{
                      overflow: "hidden",
                      borderRadius: 4,
                      height: 200,
                      mb: 2.5,
                    }}
                  >
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
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#6366F1",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {post.tag}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      lineHeight: 1.4,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? "#9CA3AF" : "#6B7280",
                      mb: 2,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      lineHeight: 1.5,
                    }}
                  >
                    {post.desc}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#9CA3AF", mt: "auto" }}
                  >
                    {post.date}
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
          backgroundColor: "#111111",
          color: "#ffffff",
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
              HỌ ĐÃ THAY ĐỔI
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "2.75rem" },
                color: "#ffffff",
              }}
            >
              Những phản hồi tích cực từ cộng đồng
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
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Rating
                      value={test.rating}
                      readOnly
                      sx={{ mb: 3, color: "#F59E0B" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#E5E7EB",
                        lineHeight: 1.7,
                        mb: 4,
                        fontSize: "1.05rem",
                      }}
                    >
                      "{test.content}"
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={test.avatar}
                      alt={test.name}
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 800, color: "#ffffff" }}
                      >
                        {test.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
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

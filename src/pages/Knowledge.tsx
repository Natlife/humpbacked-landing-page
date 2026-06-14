import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Chip,
  Card,
  CardContent,
  CardMedia,
  InputAdornment,
  useTheme,
} from '@mui/material';
import { Search as SearchIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';










interface Article {
  id: number;
  image: string;
  tags: string[];
  title: string;
  summary: string;
  author: string;
  readTime: string;
  date: string;
}

export default function Knowledge() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('Tất cả');

  const categories = ['Tất cả', 'Nghiên cứu', 'Bài tập', 'Hướng dẫn', 'Cảnh báo', 'Dinh dưỡng', 'Kiến thức'];

  const featuredArticle: Article = {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    tags: ['Nổi bật', 'Nghiên cứu'],
    title: 'Tại sao giới trẻ ngày càng gù lưng nhiều hơn?',
    summary: 'Nghiên cứu mới nhất từ Viện Cột sống Việt Nam cho thấy tỷ lệ gù lưng ở học sinh THPT tăng 34% trong 5 năm qua. Điều gì đang xảy ra?',
    author: 'ThS. Nguyễn Thị Hương',
    readTime: '5 phút đọc',
    date: '10 tháng 6, 2025',
  };

  const articles: Article[] = [
    featuredArticle,
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
      tags: ['Bài tập'],
      title: '5 bài tập kéo giãn cột sống dễ làm tại nhà',
      summary: 'Dành riêng cho dân văn phòng và học sinh phải ngồi học liên tục trên 6 tiếng mỗi ngày, giúp khôi phục linh hoạt khớp lưng.',
      author: 'PT. Lê Minh Đức',
      readTime: '6 phút đọc',
      date: '08 tháng 6, 2025',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      tags: ['Hướng dẫn'],
      title: 'Ergonomics 101: Thiết lập góc học tập đúng chuẩn',
      summary: 'Hướng dẫn chi tiết cách điều chỉnh chiều cao bàn ghế, khoảng cách màn hình để bảo vệ cổ.',
      author: 'KTS. Trần Bảo Ngọc',
      readTime: '8 phút đọc',
      date: '05 tháng 6, 2025',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      tags: ['Cảnh báo'],
      title: 'Tác hại âm thầm của thói quen cúi đầu dùng điện thoại',
      summary: 'Mỗi độ nghiêng 15-60 độ của cổ khi bấm điện thoại tăng áp lực lên cột sống cổ tương đương 12-27kg. Hãy nâng màn hình lên tầm mắt.',
      author: 'ThS. Nguyễn Thị Hương',
      readTime: '4 phút đọc',
      date: '02 tháng 6, 2025',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
      tags: ['Dinh dưỡng'],
      title: 'Dinh dưỡng hợp lý giúp xương cột sống chắc khỏe',
      summary: 'Bên cạnh Canxi, Vitamin D3 và K2 đóng vai trò then chốt trong việc vận chuyển Canxi vào xương chứ không đọng lại ở mạch máu.',
      author: 'Bác sĩ Nguyễn Thanh Tâm',
      readTime: '7 phút đọc',
      date: '28 tháng 5, 2025',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
      tags: ['Kiến thức'],
      title: 'Cách tự kiểm tra độ gù lưng tại nhà bằng thước dây',
      summary: 'Chỉ cần một bức tường phẳng và một chiếc thước dây nhỏ, bạn có thể tự đánh giá được độ gù lưng của mình trong vòng 2 phút.',
      author: 'PT. Lê Minh Đức',
      readTime: '5 phút đọc',
      date: '25 tháng 5, 2025',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1522844990619-4951c40f3edf?auto=format&fit=crop&w=600&q=80',
      tags: ['Bài tập'],
      title: 'Bài tập yoga chữa gù lưng hiệu quả cho người mới',
      summary: 'Tập trung vào 4 tư thế kinh điển: Tư thế con mèo/con bò, tư thế rắn hổ mang, tư thế nhân sư và tư thế em bé để giải tỏa áp lực.',
      author: 'HLV. Trần Bảo Ngọc',
      readTime: '10 phút đọc',
      date: '20 tháng 5, 2025',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=600&q=80',
      tags: ['Cảnh báo'],
      title: 'Những sai lầm tai hại khi đeo đai chống gù lưng',
      summary: 'Đeo đai quá 2 tiếng một ngày làm yếu cơ lưng vai do bị phụ thuộc vào đai, gây phản tác dụng nghiêm trọng đối với tư thế tự nhiên.',
      author: 'ThS. Nguyễn Thị Hương',
      readTime: '6 phút đọc',
      date: '15 tháng 5, 2025',
    },
  ];

  
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = selectedTag === 'Tất cả' || article.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <Box sx={{ backgroundColor: isDark ? '#121212' : '#ffffff', minHeight: '100vh', pb: 10 }}>
      {}
      <Box
        sx={{
          backgroundColor: '#111111',
          color: '#ffffff',
          pt: { xs: 8, md: 10 },
          pb: { xs: 8, md: 10 },
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{ color: '#6366F1', fontWeight: 800, letterSpacing: '0.15em', display: 'block', mb: 2 }}
          >
            KIẾN THỨC CHUYÊN SÂU
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              mb: 3,
            }}
          >
            Góc kiến thức
          </Typography>
          <Typography variant="body1" sx={{ color: '#9CA3AF', maxWidth: 640, fontSize: '1.05rem', lineHeight: 1.6 }}>
            Bài viết từ các chuyên gia về tư thế, cột sống và thói quen sống lành mạnh — viết cho giới trẻ, dễ hiểu và ứng dụng ngay.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -6, position: 'relative', zIndex: 5 }}>
        {}
        {selectedTag === 'Tất cả' && searchQuery === '' && (
          <Card
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              borderRadius: 6,
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.05)',
              backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
              mb: 8,
            }}
          >
            <CardMedia
              component="img"
              image={featuredArticle.image}
              alt={featuredArticle.title}
              sx={{ width: { xs: '100%', md: '50%' }, height: { xs: 260, md: 380 }, objectFit: 'cover' }}
            />
            <CardContent
              sx={{
                width: { xs: '100%', md: '50%' },
                p: { xs: 4, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', gap: 1, mb: 2.5 }}>
                {featuredArticle.tags.map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: tag === 'Nổi bật' ? '#111111' : '#E5E7EB',
                      color: tag === 'Nổi bật' ? '#ffffff' : '#111111',
                      fontWeight: 700,
                      borderRadius: 1.5,
                      fontSize: '0.75rem',
                    }}
                  />
                ))}
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: { xs: '1.5rem', md: '2.2rem' },
                  lineHeight: 1.25,
                  mb: 2,
                  color: isDark ? '#ffffff' : '#111111',
                }}
              >
                {featuredArticle.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: isDark ? '#9CA3AF' : '#4B5563', mb: 4, lineHeight: 1.6, fontSize: '0.975rem' }}
              >
                {featuredArticle.summary}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  mt: 'auto',
                  borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                  pt: 2.5,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: isDark ? '#ffffff' : '#111111' }}>
                    {featuredArticle.author}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                    {featuredArticle.date}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, marginLeft: 'auto', color: '#9CA3AF' }}>
                  <AccessTimeIcon sx={{ fontSize: 16 }} />
                  <Typography variant="caption">{featuredArticle.readTime}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}

        {}
        <Box sx={{ mb: 6, mt: selectedTag !== 'Tất cả' || searchQuery !== '' ? 8 : 0 }}>
          <Grid container spacing={3} sx={{ alignItems: 'center' }}>
            {}
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: theme.palette.text.secondary }} />
                      </InputAdornment>
                    ),
                    sx: {
                      borderRadius: 4,
                      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                      border: 'none',
                      '& fieldset': {
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#6366F1',
                      },
                    },
                  },
                }}
              />
            </Grid>

            {}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {categories.map((cat) => {
                  const isSelected = selectedTag === cat;
                  return (
                    <Chip
                      key={cat}
                      label={cat}
                      onClick={() => setSelectedTag(cat)}
                      sx={{
                        px: 1,
                        py: 2.2,
                        borderRadius: 3,
                        fontWeight: 700,
                        backgroundColor: isSelected
                          ? '#111111'
                          : isDark
                          ? '#1a1a1a'
                          : '#F3F4F6',
                        color: isSelected ? '#ffffff' : theme.palette.text.secondary,
                        border: isSelected
                          ? '1px solid #111111'
                          : isDark
                          ? '1px solid rgba(255, 255, 255, 0.05)'
                          : '1px solid rgba(0, 0, 0, 0.04)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: isSelected ? '#111111' : isDark ? '#262626' : '#E5E7EB',
                        },
                      }}
                    />
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {}
        {filteredArticles.length > 0 ? (
          <Grid container spacing={4}>
            {filteredArticles.map((article) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={article.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.04)',
                    boxShadow: 'none',
                    backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={article.image}
                    alt={article.title}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                      {article.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: tag === 'Nổi bật' ? '#111111' : '#6366F1',
                            color: '#ffffff',
                            fontWeight: 700,
                            borderRadius: 1,
                            fontSize: '0.7rem',
                            height: 20,
                          }}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        mb: 1.5,
                        lineHeight: 1.35,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: isDark ? '#ffffff' : '#111111',
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? '#9CA3AF' : '#6B7280',
                        mb: 3,
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {article.summary}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 'auto',
                        pt: 2,
                        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, fontSize: '0.8125rem' }}>
                          {article.author}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
                          {article.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#9CA3AF' }}>
                        <AccessTimeIcon sx={{ fontSize: 14 }} />
                        <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                          {article.readTime}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: isDark ? '#ffffff' : '#111111' }}>
              Không tìm thấy bài viết nào
            </Typography>
            <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
              Vui lòng thử tìm kiếm lại bằng một từ khóa khác.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

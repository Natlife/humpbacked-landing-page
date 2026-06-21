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
  Button,
  IconButton,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  Search as SearchIcon,
  AccessTime as AccessTimeIcon,
  ArrowBack as ArrowBackIcon,
  Share as ShareIcon,
  BookmarkBorder as BookmarkIcon,
} from '@mui/icons-material';










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
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['Tất cả', 'Nghiên cứu', 'Bài tập', 'Hướng dẫn', 'Cảnh báo', 'Dinh dưỡng', 'Kiến thức'];

  const featuredArticle: Article = {
    id: 1,
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1522898467493-49726bf28798?auto=format&fit=crop&w=600&q=80',
      tags: ['Bài tập'],
      title: '5 bài tập kéo giãn cột sống dễ làm tại nhà',
      summary: 'Dành riêng cho dân văn phòng và học sinh phải ngồi học liên tục trên 6 tiếng mỗi ngày, giúp khôi phục linh hoạt khớp lưng.',
      author: 'PT. Lê Minh Đức',
      readTime: '6 phút đọc',
      date: '08 tháng 6, 2025',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=600&q=80',
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
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80',
      tags: ['Kiến thức'],
      title: 'Cách tự kiểm tra độ gù lưng tại nhà bằng thước dây',
      summary: 'Chỉ cần một bức tường phẳng và một chiếc thước dây nhỏ, bạn có thể tự đánh giá được độ gù lưng của mình trong vòng 2 phút.',
      author: 'PT. Lê Minh Đức',
      readTime: '5 phút đọc',
      date: '25 tháng 5, 2025',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&w=600&q=80',
      tags: ['Bài tập'],
      title: 'Bài tập yoga chữa gù lưng hiệu quả cho người mới',
      summary: 'Tập trung vào 4 tư thế kinh điển: Tư thế con mèo/con bò, tư thế rắn hổ mang, tư thế nhân sư và tư thế em bé để giải tỏa áp lực.',
      author: 'HLV. Trần Bảo Ngọc',
      readTime: '10 phút đọc',
      date: '20 tháng 5, 2025',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
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

  const renderArticleDetail = (article: Article) => {
    const related = articles.filter(a => a.id !== article.id).slice(0, 3);
    
    let content = null;
    switch (article.id) {
      case 1:
        content = (
          <>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Trong kỷ nguyên số, chiếc điện thoại thông minh và máy tính xách tay đã trở thành những vật bất ly thân. Tuy nhiên, đằng sau sự tiện lợi ấy là một thực trạng đáng báo động: tỷ lệ gù lưng và lệch vẹo cột sống ở người trẻ đang gia tăng với tốc độ chóng mặt.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Con số biết nói từ nghiên cứu thực tiễn
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Theo thống kê mới nhất từ Viện Cột sống Việt Nam, có tới 34% học sinh trung học phổ thông gặp các vấn đề về tư thế (gù, lệch vai, vẹo cột sống). Tỷ lệ này ở dân văn phòng từ 22 đến 30 tuổi cũng tiệm cận mức 40%. Điều này không chỉ ảnh hưởng xấu đến thẩm mỹ ngoại hình mà còn gây ra những hệ lụy lâu dài về sức khỏe hô hấp, tuần hoàn và thần kinh.
            </Typography>
            <Box sx={{ borderLeft: '4px solid #6366F1', pl: 3, my: 4, py: 1, backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)', borderRadius: '0 8px 8px 0' }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 500, fontSize: '1.15rem', lineHeight: 1.7 }}>
                "Hầu hết các trường hợp gù lưng ở người trẻ tuổi không phải do bẩm sinh hay bệnh lý xương khớp nặng, mà xuất phát hoàn toàn từ thói quen sinh hoạt sai tư thế được lặp đi lặp lại hàng ngày."
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', mt: 1, fontWeight: 700, color: '#6366F1' }}>
                — ThS. Nguyễn Thị Hương, Viện Cột sống Việt Nam
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Các nguyên nhân cốt lõi gây ra gù lưng học đường
            </Typography>
            <ul>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>
                <strong>Tư thế cúi đầu dùng điện thoại (Text Neck):</strong> Khi cúi 60 độ để nhìn điện thoại, cổ phải chịu một lực tương đương 27kg, kéo căng toàn bộ nhóm cơ sau gáy và làm cong lưng trên.
              </li>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>
                <strong>Ngồi học và làm việc sai quy chuẩn:</strong> Bàn ghế quá thấp hoặc quá cao, màn hình máy tính không ngang tầm mắt khiến cơ thể tự động đổ về phía trước.
              </li>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>
                <strong>Thiếu vận động thể chất:</strong> Các nhóm cơ lưng và cơ lõi yếu không đủ sức giữ cột sống thẳng tự nhiên trong thời gian dài.
              </li>
            </ul>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Giải pháp phòng tránh và cải thiện
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Để lấy lại vóc dáng thẳng và bảo vệ cột sống, các chuyên gia khuyến nghị quy tắc 20-20-20 (cứ 20 phút làm việc thì đứng dậy nhìn xa 20 feet trong 20 giây), kết hợp nâng cao màn hình và thường xuyên tập các bài tập mở vai, kéo giãn cơ ngực.
            </Typography>
          </>
        );
        break;
      case 2:
        content = (
          <>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Nếu bạn đang phải ngồi làm việc hay học tập liên tục hơn 6 tiếng mỗi ngày, lưng trên của bạn chắc chắn đang chịu một áp lực khổng lồ. 5 bài tập kéo giãn dưới đây sẽ giúp bạn giải tỏa áp lực, mở rộng lồng ngực và đẩy lùi tình trạng gù lưng hiệu quả.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              1. Tư thế Con mèo - Con bò (Cat-Cow Pose)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Bắt đầu bằng tư thế quỳ hai tay và hai đầu gối chạm sàn. Khi hít vào, hãy võng lưng xuống, ngẩng mặt lên hướng trần nhà (tư thế Con bò). Khi thở ra, hãy gù lưng lên cao hết cỡ, cúi đầu nhìn về phía bụng (tư thế Con mèo). Thực hiện lặp đi lặp lại nhịp nhàng 10-15 lần.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              2. Bài tập luồn kim (Thread the Needle)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Giúp mở rộng vai và kéo giãn cột sống ngực. Từ tư thế quỳ, đưa một tay luồn qua dưới ngực sang bên đối diện, hạ vai và má chạm sàn. Tay còn lại vươn thẳng về phía trước hoặc đưa ra sau lưng. Giữ trong 30 giây rồi đổi bên.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              3. Tư thế Rắn hổ mang (Cobra Pose)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Nằm sấp trên sàn, hai tay đặt cạnh ngực. Ấn lòng bàn tay xuống sàn, hít vào và nâng nửa thân người trên lên, giữ khuỷu tay hơi khép và hướng nhẹ ra sau, vai hạ thấp xa tai. Bài tập này giúp tăng cường sức mạnh toàn bộ vùng cơ lưng.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              4. Tư thế Nhân sư (Sphinx Pose)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Nằm sấp trên sàn, đặt hai khuỷu tay ngay dưới vai, cẳng tay song song chạm sàn. Hít vào, nâng ngực và đầu lên cao, mắt nhìn thẳng. Giữ tư thế trong 1-2 phút kết hợp hít thở sâu để giảm căng cứng cơ lưng.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              5. Tư thế Em bé (Child's Pose)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Từ tư thế quỳ, hạ mông ngồi lên gót chân, vươn dài hai tay về phía trước, trán chạm sàn. Thư giãn toàn bộ cột sống lưng và vai. Giữ trong 1-3 phút để cơ thể phục hồi trạng thái cân bằng.
            </Typography>
          </>
        );
        break;
      case 3:
        content = (
          <>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Thiết kế công thái học (Ergonomics) là yếu tố quyết định giúp bảo vệ cột sống và mắt của bạn khi phải ngồi học hay làm việc trong thời gian dài.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              1. Điều chỉnh ghế ngồi chuẩn xác
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Điều chỉnh chiều cao của ghế sao cho lòng bàn chân của bạn đặt phẳng hoàn toàn trên mặt sàn. Đầu gối của bạn nên tạo thành một góc vuông 90 độ hoặc hơi lớn hơn một chút. Nếu ghế quá cao, hãy sử dụng một chiếc kê chân nhỏ bên dưới.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              2. Chiều cao bàn làm việc và vị trí gõ phím
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Khi đặt tay lên bàn phím, khuỷu tay của bạn nên tạo thành góc 90 độ, cẳng tay song song với sàn nhà. Tránh đặt bàn phím quá cao khiến vai bị nhún hoặc quá thấp khiến lưng bị gù khi gõ.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              3. Vị trí màn hình máy tính
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Màn hình nên được đặt cách mắt khoảng 50 - 70cm (tương đương chiều dài một cánh tay). Mép trên của màn hình nên ngang hoặc thấp hơn tầm mắt một chút (khoảng 10-15 độ), giúp cổ ở trạng thái thẳng tự nhiên thay vì phải ngửa lên hoặc cúi xuống.
            </Typography>
          </>
        );
        break;
      case 4:
        content = (
          <>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Hội chứng "Cổ tin nhắn" (Text Neck Syndrome) là một thuật ngữ y khoa hiện đại dùng để chỉ những tổn thương cột sống cổ xuất phát từ thói quen cúi đầu sử dụng các thiết bị di động trong thời gian dài.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Vật lý học đằng sau hội chứng Text Neck
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Đầu người trưởng thành trung bình nặng khoảng 5kg khi ở tư thế thẳng đứng. Tuy nhiên, khi bạn nghiêng đầu về phía trước để nhìn màn hình điện thoại:
            </Typography>
            <ul>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Nghiêng 15 độ: Áp lực lên cột sống cổ tăng lên 12kg.</li>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Nghiêng 30 độ: Áp lực tăng lên 18kg.</li>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Nghiêng 45 độ: Áp lực tăng lên 22kg.</li>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Nghiêng 60 độ: Áp lực tăng lên tới 27kg - tương đương với việc cõng một đứa trẻ 8 tuổi trên cổ!</li>
            </ul>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Làm thế nào để bảo vệ bản thân?
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Cách khắc phục đơn giản nhất là nâng điện thoại lên ngang tầm mắt thay vì cúi đầu xuống. Ngoài ra, hãy thực hiện các bài tập xoay cổ nhẹ nhàng và kéo cằm (chin tuck) để tăng cường sức mạnh cơ cổ sau gáy.
            </Typography>
          </>
        );
        break;
      case 5:
        content = (
          <>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Một chế độ dinh dưỡng khoa học không chỉ giúp cơ thể khỏe mạnh toàn diện mà còn đóng vai trò nền tảng trong việc tái tạo và bảo vệ cấu trúc xương, đĩa đệm cột sống.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              1. Bộ ba Canxi - Vitamin D3 - Vitamin K2
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Chúng ta đều biết Canxi giúp xương chắc khỏe, nhưng Canxi sẽ không thể hấp thụ hiệu quả vào xương nếu thiếu Vitamin D3 (giúp hấp thụ từ ruột vào máu) và Vitamin K2 (giúp kích hoạt Osteocalcin để gắn Canxi trực tiếp vào xương, tránh đóng cặn ở thành mạch).
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              2. Collagen và các axit amin tái tạo đĩa đệm
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Đĩa đệm cột sống cấu tạo chủ yếu từ nước và các sợi collagen. Bổ sung các thực phẩm giàu collagen, Vitamin C (chất xúc tác tạo collagen) như cam, quýt, rau xanh đậm và nước hầm xương sẽ giúp đĩa đệm luôn đàn hồi, chống xẹp đĩa đệm dẫn đến gù lưng.
            </Typography>
          </>
        );
        break;
      case 6:
        content = (
          <>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Gù lưng tư thế (postural kyphosis) hoàn toàn có thể tự phát hiện sớm ngay tại nhà chỉ với một bức tường và một chiếc thước dây nhỏ. Hãy thực hiện 2 bài kiểm tra đơn giản dưới đây.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              1. Bài kiểm tra chạm tường (Wall Test)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Đứng tựa lưng sát vào một bức tường phẳng, gót chân cách tường khoảng 5-10cm. Ở tư thế đứng thẳng thoải mái:
            </Typography>
            <ul>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Lưng dưới, vai và đầu của bạn có cùng chạm sát vào tường dễ dàng không?</li>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Nếu đầu không thể chạm tường trừ khi bạn phải ngửa cổ hết cỡ ra sau, hoặc khoảng cách từ cổ đến tường lớn hơn 5cm, bạn có khả năng cao đã bị gù vai hoặc gù lưng trên.</li>
            </ul>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              2. Bài kiểm tra cúi người (Adam's Forward Bend Test)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Đứng thẳng, sau đó từ từ cúi gập người về phía trước, hai cánh tay buông thõng tự nhiên. Nhờ một người thân nhìn từ phía sau hoặc nghiêng: Nếu thấy phần lưng trên nhô lên thành một khối u cong bất thường rõ rệt, đây là dấu hiệu của việc gù cột sống cấu trúc và cần đến cơ sở y tế để chụp X-quang chẩn đoán cụ thể.
            </Typography>
          </>
        );
        break;
      case 7:
        content = (
          <>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Yoga là một phương pháp tuyệt vời để khôi phục lại sự dẻo dai và đường cong sinh học tự nhiên của cột sống nhờ sự kết hợp giữa kéo giãn cơ và hít thở sâu.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              1. Tư thế Con châu chấu (Salabhasana)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Nằm sấp, hai tay xuôi theo thân. Hít vào, nâng đầu, ngực và cả hai chân lên cao khỏi sàn. Giữ tư thế trong 5 nhịp thở. Bài tập này tác động trực tiếp vào nhóm cơ dựng gai sống (erector spinae), giúp cột sống lưng trên thẳng và khỏe mạnh.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              2. Tư thế Cây cầu (Setu Bandhasana)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Nằm ngửa, gập đầu gối sao cho gót chân sát mông. Hít vào, ấn gót chân nâng hông lên cao, đan hai bàn tay vào nhau bên dưới lưng, ép sát vai xuống sàn. Tư thế này mở rộng ngực và vai trước bị bó chặt do gù lưng.
            </Typography>
          </>
        );
        break;
      case 8:
        content = (
          <>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Đai chống gù lưng là sản phẩm được quảng cáo rầm rộ với công dụng sửa dáng lập tức. Tuy nhiên, việc hiểu sai và sử dụng đai chống gù không đúng cách có thể đem lại những tổn thương nặng nề cho hệ cơ xương khớp.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Hiểm họa từ việc lạm dụng đai chống gù quá mức
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Khi đeo đai liên tục, cột sống được giữ thẳng một cách thụ động nhờ lực co kéo cơ học của đai. Hậu quả là các cơ lõi, cơ dựng gai lưng và cơ vùng bả vai của bạn bị "lười" vận động. Theo thời gian, những cơ này sẽ dần bị teo yếu đi (atrophy). Khi bạn tháo đai ra, cơ không còn lực để giữ thẳng lưng, khiến tình trạng gù lưng trở nên trầm trọng hơn ban đầu.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 4, mb: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Nguyên tắc sử dụng đai chống gù an toàn
            </Typography>
            <ul>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Chỉ đeo tối đa 1.5 - 2 tiếng mỗi ngày, đặc biệt là lúc đang tập trung làm việc dễ sai tư thế nhất.</li>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Không đeo khi đi ngủ hoặc vận động mạnh.</li>
              <li style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '8px' }}>Quan trọng nhất: Luôn kết hợp tập các bài tập thể chất chủ động để cơ tự khỏe lên. Đai chỉ đóng vai trò hỗ trợ nhắc nhở tư thế lúc đầu.</li>
            </ul>
          </>
        );
        break;
      default:
        content = (
          <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
            Nội dung bài viết đang được cập nhật thêm.
          </Typography>
        );
    }

    return (
      <Box>
        <Box sx={{ py: 3, borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}>
          <Container maxWidth="lg">
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => { setSelectedArticle(null); window.scrollTo({ top: 0 }); }}
              sx={{
                color: isDark ? '#ffffff' : '#111111',
                fontWeight: 700,
                fontSize: '0.9rem',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                }
              }}
            >
              Quay lại danh sách bài viết
            </Button>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ mt: { xs: 4, md: 6 }, pb: 8 }}>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2.5 }}>
              {article.tags.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: tag === 'Nổi bật' ? '#111111' : '#6366F1',
                    color: '#ffffff',
                    fontWeight: 700,
                    borderRadius: 1.5,
                  }}
                />
              ))}
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
                lineHeight: 1.2,
                mb: 3,
                color: isDark ? '#ffffff' : '#111111',
              }}
            >
              {article.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: { xs: 2, sm: 4 },
                py: 2.5,
                borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
              }}
            >
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: isDark ? '#ffffff' : '#111111' }}>
                  Tác giả: {article.author}
                </Typography>
                <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                  Đăng tải ngày: {article.date}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#9CA3AF', ml: 'auto' }}>
                <AccessTimeIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption">{article.readTime}</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Tooltip title="Chia sẻ bài viết">
                  <IconButton size="small" sx={{ border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>
                    <ShareIcon sx={{ fontSize: 18, color: isDark ? '#ffffff' : '#111111' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Lưu bài viết">
                  <IconButton size="small" sx={{ border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>
                    <BookmarkIcon sx={{ fontSize: 18, color: isDark ? '#ffffff' : '#111111' }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>

          <CardMedia
            component="img"
            image={article.image}
            alt={article.title}
            sx={{ width: '100%', maxHeight: 480, objectFit: 'cover', borderRadius: 6, mb: 5 }}
          />

          <Box sx={{ color: isDark ? '#E5E7EB' : '#1F2937' }}>
            {content}
          </Box>

          <Divider sx={{ my: 6 }} />

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                mb: 4,
                color: isDark ? '#ffffff' : '#111111',
              }}
            >
              Các bài viết liên quan khác
            </Typography>
            <Grid container spacing={3}>
              {related.map((art) => (
                <Grid size={{ xs: 12, sm: 4 }} key={art.id}>
                  <Card
                    onClick={() => { setSelectedArticle(art); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.04)',
                      boxShadow: 'none',
                      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={art.image}
                      alt={art.title}
                      sx={{ height: 120, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 800,
                          lineHeight: 1.3,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: isDark ? '#ffffff' : '#111111',
                          mb: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {art.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#9CA3AF', mt: 'auto' }}>
                        {art.date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  };

  if (selectedArticle) {
    return (
      <Box sx={{ backgroundColor: isDark ? '#121212' : '#ffffff', minHeight: '100vh', pb: 10 }}>
        {renderArticleDetail(selectedArticle)}
      </Box>
    );
  }

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
            onClick={() => { setSelectedArticle(featuredArticle); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              borderRadius: 6,
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.05)',
              backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
              mb: 8,
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.15)',
              },
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
                  onClick={() => { setSelectedArticle(article); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
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

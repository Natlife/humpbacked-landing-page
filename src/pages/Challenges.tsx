import { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  LinearProgress,
  useTheme,
} from '@mui/material';
import {
  Close as CloseIcon,
  EmojiEvents as TrophyIcon,
  CheckCircleOutlined as CheckedIcon,
  Lock as LockIcon,
} from '@mui/icons-material';











interface Challenge {
  id: number;
  title: string;
  desc: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Nâng cao';
  duration: number;
  participants: number;
  image: string;
  isLocked?: boolean;
  reward: string;
  tasks: string[];
}

export default function Challenges() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [selectedDifficulty, setSelectedDifficulty] = useState('Tất cả');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [userProgress, setUserProgress] = useState<Record<number, boolean[]>>({});

  const stats = [
    { value: '12,400+', label: 'Người tham gia' },
    { value: '89%', label: 'Tỷ lệ hoàn thành' },
    { value: '6', label: 'Thử thách đang mở' },
  ];

  const difficulties = ['Tất cả', 'Dễ', 'Trung bình', 'Nâng cao'];

  const challengeList: Challenge[] = [
    {
      id: 1,
      title: '7 Ngày Đứng Thẳng',
      desc: 'Thử thách nhập môn thiết kế riêng cho người mới bắt đầu để hình thành ý thức đứng thẳng lưng.',
      difficulty: 'Dễ',
      duration: 7,
      participants: 4230,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
      reward: 'Posture Beginner Badge + Cẩm nang dinh dưỡng PDF',
      tasks: [
        'Ngày 1: Đo độ gù vai bằng góc tường phẳng trong 2 phút.',
        'Ngày 2: Chỉnh lại độ cao màn hình học tập ngang tầm mắt.',
        'Ngày 3: Thực hiện tư thế nhân sư 3 lần, mỗi lần giữ 30 giây.',
        'Ngày 4: Nhắc nhở bản thân mở rộng bả vai mỗi khi ngồi quá 1 tiếng.',
        'Ngày 5: Thực hành động tác giãn vai trước (Chest Stretch) 2 lần.',
        'Ngày 6: Plank thẳng lưng trong vòng 30 giây liên tục.',
        'Ngày 7: Đo lại độ gù vai và chụp ảnh so sánh tư thế.',
      ],
    },
    {
      id: 2,
      title: '14 Ngày Kéo Giãn',
      desc: 'Tập trung kéo giãn sâu giải tỏa áp lực thắt lưng vai gáy cho học sinh và dân văn phòng.',
      difficulty: 'Trung bình',
      duration: 14,
      participants: 2140,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      reward: 'Flexibility Star Badge + Bộ bài tập kéo giãn văn phòng 5 phút',
      tasks: [
        'Ngày 1: Giãn cơ cổ chéo (Neck Stretch) trái/phải 1 phút.',
        'Ngày 2: Giãn cơ liên sườn hai bên bằng tư thế vươn cao.',
        'Ngày 3: Thực hiện 5 chu kỳ tư thế con mèo/con bò.',
        'Ngày 4: Tư thế luồn kim giải phóng căng cơ bả vai trong.',
        'Ngày 5: Giãn vai sâu với dây kháng lực hoặc khăn mặt.',
        'Ngày 6: Plank thẳng lưng duy trì 45 giây.',
        'Ngày 7: Thực hiện tư thế em bé nghỉ ngơi trong 3 phút.',
        'Ngày 8: Giãn cơ ngực sát khung cửa sổ 1 phút.',
        'Ngày 9: Kéo giãn lưng dưới bằng tư thế ôm gối sát ngực.',
        'Ngày 10: Xoay cột sống vặn mình nằm ngửa trái/phải.',
        'Ngày 11: Thực hiện tư thế chó úp mặt giữ 5 hơi thở sâu.',
        'Ngày 12: Động tác đẩy tường (Wall slide) mở khớp vai 10 lần.',
        'Ngày 13: Plank thẳng lưng duy trì 60 giây.',
        'Ngày 14: Tổng hợp chuỗi 5 bài tập giãn cột sống toàn diện.',
      ],
    },
    {
      id: 3,
      title: '21 Ngày Đổi Thói Quen',
      desc: 'Tái thiết lập hệ cơ nâng đỡ lưng và hình thành trục dáng tự nhiên dài hạn.',
      difficulty: 'Nâng cao',
      duration: 21,
      participants: 1870,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      reward: 'Posture Master Certification + Khóa học Zoom 1-1 với cố vấn chuyên môn',
      tasks: [
        'Ngày 1: Thiết lập báo thức nhắc nhở tư thế sau mỗi 45 phút học/làm việc.',
        'Ngày 2: Tập tư thế cây cầu (Bridge) kích hoạt mông đùi lưng 12 lần.',
        'Ngày 3: Tập cơ lưng bằng động tác Cobra Stretch 3 hiệp.',
        'Ngày 4: Đứng thẳng áp sát lưng cổ gáy vào tường phẳng trong 5 phút.',
        'Ngày 5: Đi bộ nhanh 20 phút tập trung giữ thẳng đỉnh đầu hướng lên trời.',
        'Ngày 6: Plank liên tục giữ vững trục trong 60 giây.',
        'Ngày 7: Ngày nghỉ hồi phục cơ bả vai bằng gối mềm kê ngực.',
        'Ngày 8: Sử dụng đệm kê lưng thắt lưng khi ngồi ghế.',
        'Ngày 9: Động tác Bird-Dog tập giữ thăng bằng cột sống 12 lần mỗi bên.',
        'Ngày 10: Giãn cơ ngực và khớp vai sâu 2 phút.',
        'Ngày 11: Ngồi tư thế thiền thẳng cột sống tập hít thở cơ hoành 5 phút.',
        'Ngày 12: Tập cơ dựng vai bằng bài tập nâng tay chữ Y-T-W 15 lần.',
        'Ngày 13: Plank liên tục giữ vững trục trong 75 giây.',
        'Ngày 14: Ngày nghỉ thả lỏng cơ khớp toàn thân.',
        'Ngày 15: Kiểm tra chiều cao mặt bàn học đã phù hợp chưa.',
        'Ngày 16: Đi bộ thẳng lưng đeo balo đều hai vai 20 phút.',
        'Ngày 17: Đứng ép tường duy trì tư thế thẳng trong 8 phút.',
        'Ngày 18: Tập bài tập Superman nằm sấp nâng tay chân 3 hiệp.',
        'Ngày 19: Giãn liên sườn và xoay vặn cột sống dẻo dai.',
        'Ngày 20: Plank liên tục giữ vững trục trong 90 giây.',
        'Ngày 21: Đo lại tư thế và tổng kết hành trình 3 tuần đổi mới dáng.',
      ],
    },
    {
      id: 4,
      title: 'Thử thách Văn Phòng',
      desc: 'Chuỗi thói quen nhỏ ngay tại bàn làm việc để giữ cột sống cổ không bị vẹo mỏi.',
      difficulty: 'Trung bình',
      duration: 5,
      participants: 3120,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      reward: 'Ergo Hero Badge + Trọn bộ poster công thái học in văn phòng',
      tasks: [
        'Ngày 1: Thay thế tư thế vắt chéo chân bằng đặt hai bàn chân phẳng trên sàn.',
        'Ngày 2: Tập bài Chin Tuck (rụt cằm) mở khớp cổ sau 10 lần.',
        'Ngày 3: Thực hiện xoay khớp vai lớn ra sau 20 lần tại chỗ ngồi.',
        'Ngày 4: Đứng dậy đi lấy nước và giãn toàn thân sau mỗi 60 phút.',
        'Ngày 5: Thực hiện động tác giãn ngực dựa tay vào vách ngăn văn phòng.',
      ],
    },
    {
      id: 5,
      title: 'No Phone Neck',
      desc: 'Loại bỏ thói quen cúi gập cổ nhìn điện thoại kéo dài giúp giải áp cột sống cổ.',
      difficulty: 'Dễ',
      duration: 10,
      participants: 1950,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
      reward: 'Neck Guardian Badge + 3 hình nền điện thoại nhắc nhở thẳng lưng',
      tasks: [
        'Ngày 1: Luôn nâng điện thoại cao ngang tầm mắt khi lướt mạng xã hội.',
        'Ngày 2: Giới hạn thời gian dùng điện thoại liên tục dưới 20 phút mỗi lần.',
        'Ngày 3: Tập bài Chin Tuck kéo giãn cơ chẩm đầu 15 lần.',
        'Ngày 4: Không dùng điện thoại khi đang nằm sấp trên giường.',
        'Ngày 5: Thay thế lướt điện thoại khi đi bộ bằng cách tập trung nhìn thẳng.',
        'Ngày 6: Xoay cổ nhẹ nhàng theo vòng số 8 để thư giãn đốt sống.',
        'Ngày 7: Dùng tính năng hẹn giờ giới hạn app mạng xã hội.',
        'Ngày 8: Động tác giãn bả vai sát vách tường trong 2 phút.',
        'Ngày 9: Thực hành 5 phút hít thở sâu ngửa nhẹ đầu ra sau.',
        'Ngày 10: Tổng kết số giờ dùng máy giảm để giảm tải cho cột sống cổ.',
      ],
    },
    {
      id: 6,
      title: 'Cột Sống Thép',
      desc: 'Giáo trình nâng cao củng cố hệ thống cơ trung tâm và cột sống chịu lực cực đại.',
      difficulty: 'Nâng cao',
      duration: 30,
      participants: 0,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      isLocked: true,
      reward: 'Steel Spine Warrior Badge + Chứng nhận Thể chất đặc biệt',
      tasks: [],
    },
  ];

  
  useEffect(() => {
    const saved = localStorage.getItem('postura_challenges_progress');
    if (saved) {
      try {
        setUserProgress(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveProgress = (updated: Record<number, boolean[]>) => {
    setUserProgress(updated);
    localStorage.setItem('postura_challenges_progress', JSON.stringify(updated));
  };

  const handleJoinChallenge = (id: number, duration: number) => {
    if (userProgress[id]) return; 
    const initialProgress = new Array(duration).fill(false);
    const updated = { ...userProgress, [id]: initialProgress };
    saveProgress(updated);
  };

  const handleToggleTask = (challengeId: number, dayIdx: number) => {
    const currentProgress = userProgress[challengeId];
    if (!currentProgress) return;

    const updatedProgress = [...currentProgress];
    updatedProgress[dayIdx] = !updatedProgress[dayIdx];

    const updated = { ...userProgress, [challengeId]: updatedProgress };
    saveProgress(updated);
  };

  const filteredChallenges = useMemo(() => {
    return challengeList.filter((c) => selectedDifficulty === 'Tất cả' || c.difficulty === selectedDifficulty);
  }, [selectedDifficulty]);

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
            ĐỒNG HÀNH CÙNG CỘNG ĐỒNG
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
            Thử thách
          </Typography>
          <Typography variant="body1" sx={{ color: '#9CA3AF', maxWidth: 640, fontSize: '1.05rem', mb: 5, lineHeight: 1.6 }}>
            Lựa chọn thử thách phù hợp, hoàn thành cùng cộng đồng và nhận phần thưởng xứng đáng. Mỗi ngày là một bước tiến mới.
          </Typography>

          {}
          <Grid container spacing={3} sx={{ maxWidth: 600 }}>
            {stats.map((s, idx) => (
              <Grid size={4} key={idx}>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#10B981', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {s.value}
                </Typography>
                <Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block', mt: 0.5 }}>
                  {s.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {}
        <Box sx={{ display: 'flex', gap: 1.5, mb: 5, flexWrap: 'wrap' }}>
          {difficulties.map((dif) => {
            const isSelected = selectedDifficulty === dif;
            return (
              <Chip
                key={dif}
                label={dif}
                onClick={() => setSelectedDifficulty(dif)}
                sx={{
                  px: 1,
                  py: 2.2,
                  borderRadius: 3,
                  fontWeight: 700,
                  backgroundColor: isSelected ? '#111111' : isDark ? '#1a1a1a' : '#F3F4F6',
                  color: isSelected ? '#ffffff' : theme.palette.text.secondary,
                  border: isSelected ? '1px solid #111111' : isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: isSelected ? '#111111' : isDark ? '#262626' : '#E5E7EB',
                  },
                }}
              />
            );
          })}
        </Box>

        {}
        <Grid container spacing={4}>
          {filteredChallenges.map((challenge) => {
            const progress = userProgress[challenge.id];
            const isJoined = !!progress;
            const completedCount = progress ? progress.filter(Boolean).length : 0;
            const progressPercent = progress ? Math.round((completedCount / challenge.duration) * 100) : 0;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={challenge.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.04)',
                    boxShadow: 'none',
                    backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                    position: 'relative',
                  }}
                >
                  <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={challenge.image}
                      alt={challenge.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: challenge.isLocked ? 'grayscale(100%) blur(2px)' : 'none',
                      }}
                    />
                    {}
                    {challenge.isLocked && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                        }}
                      >
                        <LockIcon sx={{ fontSize: 40 }} />
                      </Box>
                    )}

                    {}
                    {!challenge.isLocked && (
                      <Chip
                        label={challenge.difficulty}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          backgroundColor: challenge.difficulty === 'Dễ' ? '#10B981' : challenge.difficulty === 'Trung bình' ? '#F59E0B' : '#EF4444',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          borderRadius: 1.5,
                        }}
                      />
                    )}
                  </Box>

                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        mb: 1.5,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: isDark ? '#ffffff' : '#111111',
                      }}
                    >
                      {challenge.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? '#9CA3AF' : '#6B7280', mb: 3, lineHeight: 1.5 }}>
                      {challenge.desc}
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block', mb: 2 }}>
                        Thời gian: {challenge.duration} ngày • {challenge.isLocked ? 'Khóa' : `${challenge.participants.toLocaleString()} người đã tham gia`}
                      </Typography>

                      {}
                      {isJoined && (
                        <Box sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: '#6366F1' }}>
                              Tiến độ: {completedCount}/{challenge.duration} Ngày
                            </Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: '#6366F1' }}>
                              {progressPercent}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={progressPercent}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: '#6366F1',
                                borderRadius: 3,
                              },
                            }}
                          />
                        </Box>
                      )}

                      <Button
                        variant={isJoined ? 'outlined' : 'contained'}
                        fullWidth
                        disabled={challenge.isLocked}
                        onClick={() => setSelectedChallenge(challenge)}
                        sx={{
                          borderRadius: 3,
                          backgroundColor: isJoined ? 'transparent' : '#111111',
                          borderColor: isJoined ? '#111111' : undefined,
                          color: isJoined ? '#111111' : '#ffffff',
                          fontWeight: 700,
                          textTransform: 'none',
                          py: 1.2,
                          '&:hover': {
                            backgroundColor: isJoined ? 'rgba(17,17,17,0.03)' : '#222222',
                            borderColor: isJoined ? '#111111' : undefined,
                          },
                          '&.Mui-disabled': {
                            backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                          },
                        }}
                      >
                        {challenge.isLocked ? 'Chưa mở khóa' : isJoined ? 'Xem tiến độ' : 'Xem chi tiết'}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {}
      <Dialog
        open={selectedChallenge !== null}
        onClose={() => setSelectedChallenge(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 6,
              backgroundImage: 'none',
              backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
              p: 3,
            },
          },
        }}
      >
        {selectedChallenge && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {selectedChallenge.title}
              </Typography>
              <IconButton onClick={() => setSelectedChallenge(null)} sx={{ color: theme.palette.text.primary }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <DialogContent sx={{ p: 0 }}>
              <Typography variant="body2" sx={{ color: isDark ? '#9CA3AF' : '#6B7280', mb: 3, lineHeight: 1.6 }}>
                {selectedChallenge.desc}
              </Typography>

              {}
              <Box
                sx={{
                  backgroundColor: isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0.03)',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  borderRadius: 3,
                  p: 2.5,
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <TrophyIcon sx={{ color: '#F59E0B', fontSize: 28 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: '#6366F1', fontWeight: 800, display: 'block' }}>
                    PHẦN THƯỞNG HOÀN THÀNH
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: isDark ? '#ffffff' : '#111111' }}>
                    {selectedChallenge.reward}
                  </Typography>
                </Box>
              </Box>

              {}
              <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, display: 'block' }}>
                LỘ TRÌNH CHI TIẾT
              </Typography>

              {!userProgress[selectedChallenge.id] ? (
                
                <List sx={{ mb: 4 }}>
                  {selectedChallenge.tasks.map((task, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckedIcon sx={{ color: '#9CA3AF', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2" sx={{ color: isDark ? '#9CA3AF' : '#4B5563' }}>
                          {task}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              ) : (
                
                <List sx={{ mb: 4 }}>
                  {selectedChallenge.tasks.map((task, idx) => {
                    const isChecked = userProgress[selectedChallenge.id]?.[idx] || false;
                    return (
                      <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Checkbox
                            checked={isChecked}
                            onChange={() => handleToggleTask(selectedChallenge.id, idx)}
                            sx={{ color: '#6366F1', '&.Mui-checked': { color: '#6366F1' } }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            variant="body2"
                            sx={{
                              color: isChecked ? '#9CA3AF' : isDark ? '#ffffff' : '#111111',
                              textDecoration: isChecked ? 'line-through' : 'none',
                            }}
                          >
                            {task}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              )}

              {}
              {!userProgress[selectedChallenge.id] ? (
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleJoinChallenge(selectedChallenge.id, selectedChallenge.duration)}
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    fontWeight: 700,
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#222222' },
                  }}
                >
                  Tham gia thử thách ngay
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => setSelectedChallenge(null)}
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    fontWeight: 700,
                    borderColor: '#111111',
                    color: '#111111',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#111111',
                      backgroundColor: 'rgba(17,17,17,0.03)',
                    },
                  }}
                >
                  Đóng và quay lại
                </Button>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}

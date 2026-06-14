import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  MobileStepper,
  Alert,
  useTheme,
  Dialog,
  DialogContent,
} from '@mui/material';
import {
  AssignmentTurnedIn as QuizIcon,
  NavigateNext as NextIcon,
  NavigateBefore as BackIcon,
  Security as SecurityIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';











interface Question {
  text: string;
  options: { label: string; score: number }[];
}

interface QuizData {
  title: string;
  time: string;
  qCount: number;
  desc: string;
  questions: Question[];
}

export default function Quiz() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [activeQuizIndex, setActiveQuizIndex] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const quizzes: QuizData[] = [
    {
      title: 'Tư thế ngồi học & làm việc của bạn',
      time: '5 phút',
      qCount: 8,
      desc: 'Đánh giá chi tiết tư thế ngồi, khoảng cách mắt bàn ghế và thói quen nghỉ ngơi.',
      questions: [
        {
          text: 'Bạn ngồi liên tục bao lâu trước khi đứng dậy vận động?',
          options: [
            { label: 'Dưới 1 tiếng', score: 1 },
            { label: 'Từ 1 đến 2 tiếng', score: 2 },
            { label: 'Trên 2 tiếng liên tục', score: 3 },
          ],
        },
        {
          text: 'Bạn có thói quen tì cằm hoặc chống tay lên má khi ngồi làm việc/học tập không?',
          options: [
            { label: 'Không bao giờ', score: 1 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Thường xuyên', score: 3 },
          ],
        },
        {
          text: 'Vị trí đặt màn hình máy tính hoặc sách vở của bạn thế nào?',
          options: [
            { label: 'Ngang tầm mắt thẳng tự nhiên', score: 1 },
            { label: 'Hơi thấp dưới tầm mắt', score: 2 },
            { label: 'Quá thấp, buộc phải cúi gập cổ nhiều', score: 3 },
          ],
        },
        {
          text: 'Bạn có thường xuyên vắt chéo chân hoặc gác chân lên ghế không?',
          options: [
            { label: 'Không bao giờ', score: 1 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Thường xuyên', score: 3 },
          ],
        },
        {
          text: 'Tư thế lưng của bạn khi ngồi học/làm việc thường là:',
          options: [
            { label: 'Thẳng tự nhiên, tựa nhẹ vào lưng ghế', score: 1 },
            { label: 'Khòm về phía trước, vai so và rụt cổ', score: 3 },
            { label: 'Trượt mông về phía trước, ngửa người ra sau', score: 2 },
          ],
        },
        {
          text: 'Bàn chân của bạn khi ngồi thế nào?',
          options: [
            { label: 'Đặt phẳng hoàn toàn trên mặt sàn', score: 1 },
            { label: 'Vắt chéo cổ chân hoặc co chân lên', score: 2 },
            { label: 'Treo lơ lửng hoặc không chạm sàn', score: 3 },
          ],
        },
        {
          text: 'Bạn có cảm giác mỏi vai gáy hoặc đau thắt lưng sau mỗi buổi học/làm việc không?',
          options: [
            { label: 'Không bao giờ thấy mỏi', score: 1 },
            { label: 'Thỉnh thoảng mỏi nhẹ sau ngày dài', score: 2 },
            { label: 'Thường xuyên đau nhức, buốt mỏi vai gáy', score: 3 },
          ],
        },
        {
          text: 'Bạn có sử dụng ghế công thái học hay đệm tựa lưng hỗ trợ không?',
          options: [
            { label: 'Có dùng thiết bị hỗ trợ tư thế', score: 1 },
            { label: 'Chỉ ngồi ghế văn phòng/ghế tựa thông thường', score: 2 },
            { label: 'Thường ngồi trên giường hoặc ghế sofa để học/làm việc', score: 3 },
          ],
        },
      ],
    },
    {
      title: 'Đánh giá nguy cơ "Text Neck" (Hội chứng cổ nhắn tin)',
      time: '3 phút',
      qCount: 6,
      desc: 'Kiểm tra mức độ cúi đầu khi sử dụng điện thoại và các thiết bị di động cầm tay.',
      questions: [
        {
          text: 'Khi đứng sử dụng điện thoại, bạn thường giữ máy ở vị trí nào?',
          options: [
            { label: 'Ngang tầm mắt, không cúi đầu', score: 1 },
            { label: 'Hơi thấp dưới ngực, đầu hơi cúi', score: 2 },
            { label: 'Rất thấp ở ngang hông, đầu cúi gập sâu', score: 3 },
          ],
        },
        {
          text: 'Bạn có cảm thấy tê bì hoặc châm chích ở các đầu ngón tay không?',
          options: [
            { label: 'Không bao giờ bị', score: 1 },
            { label: 'Đôi khi bị khi dùng điện thoại lâu', score: 2 },
            { label: 'Thường xuyên tê bì dọc cánh tay xuống bàn tay', score: 3 },
          ],
        },
        {
          text: 'Thời gian dùng điện thoại liên tục không nghỉ của bạn thường là:',
          options: [
            { label: 'Dưới 30 phút', score: 1 },
            { label: 'Từ 30 đến 60 phút', score: 2 },
            { label: 'Trên 60 phút liên tục', score: 3 },
          ],
        },
        {
          text: 'Bạn có thường cảm thấy đầu óc nặng nề, xoay cổ thấy có tiếng kêu răng rắc?',
          options: [
            { label: 'Không bao giờ bị', score: 1 },
            { label: 'Thỉnh thoảng xoay cổ nhẹ thấy mỏi', score: 2 },
            { label: 'Thường xuyên nhức đầu vùng chẩm, xoay cổ đau buốt', score: 3 },
          ],
        },
        {
          text: 'Bạn có thói quen nằm nghiêng hoặc nằm sấp lướt điện thoại trên giường không?',
          options: [
            { label: 'Không bao giờ nằm lướt', score: 1 },
            { label: 'Thỉnh thoảng lướt vài phút trước khi ngủ', score: 2 },
            { label: 'Thường xuyên nằm lướt hàng tiếng đồng hồ', score: 3 },
          ],
        },
        {
          text: 'Khi cúi đầu sử dụng điện thoại, bạn có hay bị mỏi mắt kèm theo nhức mỏi cổ không?',
          options: [
            { label: 'Không bao giờ bị', score: 1 },
            { label: 'Thỉnh thoảng hơi mỏi mắt', score: 2 },
            { label: 'Rất hay bị nhức mỏi đồng thời cả mắt và cổ', score: 3 },
          ],
        },
      ],
    },
    {
      title: 'Thói quen vận động và sức mạnh cơ cốt lõi',
      time: '4 phút',
      qCount: 6,
      desc: 'Đo lường tần suất rèn luyện các nhóm cơ giữ thẳng lưng như cơ dựng gai và cơ bụng.',
      questions: [
        {
          text: 'Bạn có tham gia tập thể thao hoặc các bài tập kéo dãn cột sống không?',
          options: [
            { label: 'Trên 3 lần một tuần', score: 1 },
            { label: 'Từ 1 đến 2 lần một tuần', score: 2 },
            { label: 'Hiếm khi hoặc không bao giờ tập', score: 3 },
          ],
        },
        {
          text: 'Bạn có thể giữ tư thế Plank thẳng lưng tối đa trong bao lâu?',
          options: [
            { label: 'Trên 60 giây dễ dàng', score: 1 },
            { label: 'Từ 30 đến 60 giây', score: 2 },
            { label: 'Dưới 30 giây hoặc không làm được', score: 3 },
          ],
        },
        {
          text: 'Khi đứng xếp hàng hoặc đợi xe, bạn có thói quen đứng dồn trọng lượng vào một bên chân không?',
          options: [
            { label: 'Luôn đứng chia đều hai chân', score: 1 },
            { label: 'Đôi lúc dồn trọng lượng sang một bên chân', score: 2 },
            { label: 'Thường xuyên đứng lệch bên, vẹo hông', score: 3 },
          ],
        },
        {
          text: 'Bạn có thường xuyên ngồi sụm vai ra phía trước khi mệt mỏi không?',
          options: [
            { label: 'Không, vẫn cố gắng giữ thẳng lưng', score: 1 },
            { label: 'Đôi khi ngồi sụp xuống giải tỏa cơ', score: 2 },
            { label: 'Thường xuyên ngồi gập hẳn người lại', score: 3 },
          ],
        },
        {
          text: 'Khi đeo balo hoặc xách đồ, bạn có thói quen đeo lệch 1 bên vai không?',
          options: [
            { label: 'Luôn đeo đều hai vai', score: 1 },
            { label: 'Thỉnh thoảng đeo 1 bên vai khi đi gần', score: 2 },
            { label: 'Thường xuyên đeo lệch 1 bên vai hoặc xách đồ nặng 1 bên', score: 3 },
          ],
        },
        {
          text: 'Mức độ linh hoạt của bạn: Khi đứng thẳng chân, bạn có chạm được ngón tay vào mũi chân không?',
          options: [
            { label: 'Chạm sâu dễ dàng dưới bàn chân', score: 1 },
            { label: 'Chạm nhẹ được đầu ngón tay', score: 2 },
            { label: 'Còn cách xa mới chạm tới chân', score: 3 },
          ],
        },
      ],
    },
  ];

  const handleStartQuiz = (index: number) => {
    setActiveQuizIndex(index);
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(quizzes[index]!.questions.length).fill(-1));
    setShowResult(false);
  };

  const handleOptionChange = (score: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = score;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    const currentQuiz = quizzes[activeQuizIndex!];
    if (currentQuestionIndex < currentQuiz!.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleReset = () => {
    setActiveQuizIndex(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  
  const quizResult = useMemo(() => {
    if (activeQuizIndex === null || selectedAnswers.length === 0) return null;

    const totalScore = selectedAnswers.reduce((sum, val) => sum + (val === -1 ? 0 : val), 0);
    const maxPossibleScore = selectedAnswers.length * 3;
    const ratio = totalScore / maxPossibleScore;

    let level: 'Low' | 'Medium' | 'High' = 'Low';
    let label = 'Nguy cơ Thấp';
    let color = '#10B981';
    let icon = <CheckCircleIcon sx={{ fontSize: 44, color: '#10B981' }} />;
    let advice = 'Tuyệt vời! Tư thế và thói quen sinh hoạt của bạn rất chuẩn khoa học. Hãy tiếp tục duy trì và thực hiện các động tác kéo giãn nhẹ nhàng để bảo vệ đĩa đệm cột sống.';

    if (ratio >= 0.7) {
      level = 'High';
      label = 'Nguy cơ Cao';
      color = '#EF4444';
      icon = <ErrorIcon sx={{ fontSize: 44, color: '#EF4444' }} />;
      advice = 'Cảnh báo nguy hiểm! Cột sống cổ và thắt lưng của bạn đang phải chịu tải trọng quá tải nghiêm trọng. Bạn cần thay đổi góc học tập ngay lập tức và đăng ký tham gia thử thách "14 Ngày Kéo Giãn" để cân bằng lại cơ dựng vai gáy.';
    } else if (ratio >= 0.45) {
      level = 'Medium';
      label = 'Nguy cơ Trung bình';
      color = '#F59E0B';
      icon = <WarningIcon sx={{ fontSize: 44, color: '#F59E0B' }} />;
      advice = 'Chú ý! Bạn đang bắt đầu hình thành các thói quen xấu ảnh hưởng đến trục cột sống. Hãy hạn chế vắt chéo chân, nhắc nhở bản thân đứng lên vận động mỗi 60 phút và tham gia thử thách "7 Ngày Đứng Thẳng".';
    }

    return { score: totalScore, level, label, color, icon, advice };
  }, [activeQuizIndex, selectedAnswers]);

  const activeQuiz = activeQuizIndex !== null ? quizzes[activeQuizIndex] : null;
  const isAnswered = activeQuiz ? selectedAnswers[currentQuestionIndex] !== -1 : false;

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
            ĐÁNH GIÁ CỘT SỐNG
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
            Kiểm tra tư thế
          </Typography>
          <Typography variant="body1" sx={{ color: '#9CA3AF', maxWidth: 640, fontSize: '1.05rem', lineHeight: 1.6, mb: 4 }}>
            Thực hiện các bài trắc nghiệm nhanh được thiết kế bởi các chuyên gia vật lý trị liệu để xác định mức độ cong lệch cột sống của bạn.
          </Typography>

          {}
          <Alert
            icon={<SecurityIcon sx={{ color: '#6366F1' }} />}
            sx={{
              backgroundColor: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              color: '#ffffff',
              borderRadius: 3,
              maxWidth: 640,
              '& .MuiAlert-icon': {
                alignItems: 'center',
              },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#e0e7ff' }}>
              Miễn phí & Bảo mật - Kết quả chỉ hiển thị cho bạn, không lưu trữ trên bất kỳ máy chủ nào.
            </Typography>
          </Alert>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {}
        {activeQuizIndex === null && (
          <Grid container spacing={4}>
            {quizzes.map((quiz, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.04)',
                    boxShadow: 'none',
                    backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                    p: 3,
                  }}
                >
                  <CardContent sx={{ p: 0, mb: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 44,
                          height: 44,
                          borderRadius: '30%',
                          backgroundColor: 'rgba(99, 102, 241, 0.08)',
                          color: '#6366F1',
                        }}
                      >
                        <QuizIcon />
                      </Box>
                      <Typography variant="caption" sx={{ color: '#9CA3AF', fontWeight: 700 }}>
                        {quiz.time} • {quiz.qCount} câu hỏi
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 800, mb: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif", color: isDark ? '#ffffff' : '#111111' }}
                    >
                      {quiz.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? '#9CA3AF' : '#6B7280', lineHeight: 1.6 }}>
                      {quiz.desc}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleStartQuiz(idx)}
                    sx={{
                      borderRadius: 3,
                      backgroundColor: '#111111',
                      color: '#ffffff',
                      fontWeight: 700,
                      textTransform: 'none',
                      py: 1.2,
                      '&:hover': {
                        backgroundColor: '#222222',
                      },
                    }}
                  >
                    Bắt đầu kiểm tra
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {}
        {activeQuizIndex !== null && activeQuiz && !showResult && (
          <Box sx={{ maxWidth: 680, mx: 'auto' }}>
            <Button
              onClick={handleReset}
              startIcon={<BackIcon />}
              sx={{ color: theme.palette.text.secondary, fontWeight: 700, textTransform: 'none', mb: 3 }}
            >
              Quay lại danh mục
            </Button>

            <Card
              sx={{
                borderRadius: 5,
                border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
                backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                p: { xs: 3, sm: 5 },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="subtitle2" sx={{ color: '#6366F1', fontWeight: 800 }}>
                  {activeQuiz.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#9CA3AF', fontWeight: 700 }}>
                  Câu {currentQuestionIndex + 1} / {activeQuiz.questions.length}
                </Typography>
              </Box>

              {}
              <MobileStepper
                variant="progress"
                steps={activeQuiz.questions.length}
                activeStep={currentQuestionIndex}
                backButton={null}
                nextButton={null}
                position="static"
                sx={{
                  p: 0,
                  mb: 5,
                  backgroundColor: 'transparent',
                  flexGrow: 1,
                  '& .MuiMobileStepper-progress': {
                    width: '100%',
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#6366F1',
                      borderRadius: 3,
                    },
                  },
                }}
              />

              {}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  mb: 4,
                  lineHeight: 1.4,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isDark ? '#ffffff' : '#111111',
                }}
              >
                {activeQuiz.questions[currentQuestionIndex]?.text}
              </Typography>

              {}
              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  value={selectedAnswers[currentQuestionIndex] !== -1 ? selectedAnswers[currentQuestionIndex] : ''}
                  onChange={(e) => handleOptionChange(Number(e.target.value))}
                >
                  <Grid container spacing={2}>
                    {activeQuiz.questions[currentQuestionIndex]?.options.map((opt, oIdx) => {
                      const isOptionChecked = selectedAnswers[currentQuestionIndex] === opt.score;
                      return (
                        <Grid size={12} key={oIdx}>
                          <Box
                            sx={{
                              border: isOptionChecked ? '2px solid #6366F1' : isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
                              borderRadius: 4,
                              px: 3,
                              py: 2.2,
                              backgroundColor: isOptionChecked ? (isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.02)') : 'transparent',
                              transition: 'all 0.2s ease',
                              cursor: 'pointer',
                              '&:hover': {
                                borderColor: isOptionChecked ? '#6366F1' : isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
                              },
                            }}
                            onClick={() => handleOptionChange(opt.score)}
                          >
                            <FormControlLabel
                              value={opt.score}
                              control={<Radio sx={{ color: isOptionChecked ? '#6366F1' : undefined, '&.Mui-checked': { color: '#6366F1' } }} />}
                              label={
                                <Typography variant="body1" sx={{ fontWeight: isOptionChecked ? 700 : 500, color: isOptionChecked ? (isDark ? '#ffffff' : '#111111') : theme.palette.text.primary }}>
                                  {opt.label}
                                </Typography>
                              }
                              sx={{ width: '100%', m: 0, gap: 1 }}
                            />
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </RadioGroup>
              </FormControl>

              {}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5, pt: 3, borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}` }}>
                <Button
                  disabled={currentQuestionIndex === 0}
                  onClick={handleBack}
                  startIcon={<BackIcon />}
                  sx={{
                    borderRadius: 3,
                    fontWeight: 700,
                    textTransform: 'none',
                    color: theme.palette.text.secondary,
                    px: 3,
                    py: 1.2,
                  }}
                >
                  Câu trước
                </Button>
                <Button
                  disabled={!isAnswered}
                  onClick={handleNext}
                  variant="contained"
                  endIcon={<NextIcon />}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    fontWeight: 700,
                    textTransform: 'none',
                    px: 4,
                    py: 1.2,
                    '&:hover': {
                      backgroundColor: '#222222',
                    },
                    '&.Mui-disabled': {
                      backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  {currentQuestionIndex === activeQuiz.questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp'}
                </Button>
              </Box>
            </Card>
          </Box>
        )}
      </Container>

      {}
      <Dialog
        open={showResult}
        onClose={handleReset}
        maxWidth="xs"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 6,
              backgroundImage: 'none',
              backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
              p: 4,
            },
          },
        }}
      >
        {quizResult && (
          <DialogContent sx={{ p: 0, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              {quizResult.icon}
            </Box>
            <Typography variant="overline" sx={{ color: '#9CA3AF', fontWeight: 800, letterSpacing: '0.1em' }}>
              KẾT QUẢ ĐÁNH GIÁ
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                color: quizResult.color,
                mt: 1,
                mb: 3,
              }}
            >
              {quizResult.label}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#E5E7EB' : '#4B5563',
                lineHeight: 1.6,
                mb: 4,
                textAlign: 'left',
                backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#F9FAFB',
                p: 2.5,
                borderRadius: 4,
                borderLeft: `4px solid ${quizResult.color}`,
              }}
            >
              {quizResult.advice}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Button
                variant="contained"
                onClick={handleReset}
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
                Hoàn thành
              </Button>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
}

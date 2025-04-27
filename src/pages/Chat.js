import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Container, TextField, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f5ff 0%, #fff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a78bfa' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const ChatContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  margin-top: 70px;
  padding: 2rem;
  max-width: 1000px !important;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 1.8rem;
  margin: 1rem 0;
  font-weight: 600;

  span {
    background: linear-gradient(45deg, #8B5CF6, #A78BFA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(167, 139, 250, 0.1);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a78bfa;
    border-radius: 3px;
    
    &:hover {
      background: #9461fb;
    }
  }
`;

const MessageBubble = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.3s ease-out;
  align-items: flex-start;
`;

const userGradient = 'linear-gradient(45deg, #8B5CF6, #A78BFA)';

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${props => props.isUser ? '0 0 0 1rem' : '0 1rem 0 0'};
  background: ${props => props.isUser ? userGradient : '#fff'};
  border: 2px solid ${props => props.isUser ? 'transparent' : '#a78bfa'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${props => props.isUser ? 'white' : '#a78bfa'};
  box-shadow: 0 4px 12px rgba(167, 139, 250, 0.15);
  animation: ${float} 3s ease-in-out infinite;
`;

const MessageContent = styled.div`
  background: ${props => props.isUser ? userGradient : '#fff'};
  color: ${props => props.isUser ? 'white' : '#333'};
  padding: 0.75rem 1rem;
  border-radius: 1.2rem;
  border: 1px solid ${props => props.isUser ? 'transparent' : 'rgba(167, 139, 250, 0.2)'};
  max-width: 70%;
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  box-shadow: 0 4px 12px rgba(167, 139, 250, 0.1);
  white-space: pre-line;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    ${props => props.isUser ? `
      border-left-color: #8B5CF6;
      right: -16px;
    ` : `
      border-right-color: #fff;
      left: -16px;
    `}
    top: 12px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.2);
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
    
    &:hover {
      background: #fff;
    }
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #a78bfa;
    }
    
    &.Mui-focused {
      background: #fff;
      box-shadow: 0 0 0 2px rgba(167, 139, 250, 0.2);
      
      .MuiOutlinedInput-notchedOutline {
        border-color: #a78bfa;
      }
    }
  }
`;

const SendButton = styled(IconButton)`
  &.MuiIconButton-root {
    background: linear-gradient(45deg, #6B46C1, #9F7AEA);
    color: white;
    padding: 0.8rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(167, 139, 250, 0.3);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &.Mui-disabled {
      background: #e2e8f0;
      color: #94a3b8;
    }
  }
`;

const ClearButton = styled(IconButton)`
  && {
    color: #8B5CF6;
    opacity: 0.7;
    transition: all 0.2s;
    padding: 12px;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    
    &:hover {
      opacity: 1;
      background: rgba(139, 92, 246, 0.1);

      &::after {
        content: '清除记录';
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
      }
    }
  }
`;

const StyledDialog = styled(Dialog)`
  && .MuiDialog-paper {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.1);
  }
`;

const DialogButton = styled.button`
  padding: 8px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0 8px;
  
  ${props => props.cancel && `
    background: #f3f4f6;
    color: #666;
    
    &:hover {
      background: #e5e7eb;
    }
  `}
  
  ${props => props.confirm && `
    background: #8B5CF6;
    color: white;
    
    &:hover {
      background: #7c3aed;
    }
  `}
`;

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    return savedMessages ? JSON.parse(savedMessages) : [{
      content: "你好！我是王雪纯的AI助手Momo。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
      fullContent: "你好！我是王雪纯的AI助手Momo。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
      isUser: false
    }];
  });
  
  const [openDialog, setOpenDialog] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(-1);
  const messagesEndRef = useRef(null);

  const clearHistory = () => {
    setOpenDialog(false);
    const initialMessage = {
      content: "你好！我是王雪纯的AI助手Momo。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
      fullContent: "你好！我是王雪纯的AI助手Momo。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
      isUser: false
    };
    setMessages([initialMessage]);
    localStorage.setItem('chatHistory', JSON.stringify([initialMessage]));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (currentTypingIndex >= 0 && currentTypingIndex < messages.length) {
      const message = messages[currentTypingIndex];
      if (message.content !== message.fullContent) {
        const timer = setTimeout(() => {
          setMessages(prevMessages => {
            const newMessages = [...prevMessages];
            const currentMessage = newMessages[currentTypingIndex];
            const nextChar = currentMessage.fullContent[currentMessage.content.length];
            if (nextChar) {
              currentMessage.content += nextChar;
            }
            return newMessages;
          });
        }, 20); 
        return () => clearTimeout(timer);
      } else {
        setCurrentTypingIndex(-1);
      }
    }
  }, [messages, currentTypingIndex]);

  const formatResponse = (text) => {
    return text
      .replace(/\*\*/g, '')
      .replace(/\\n\\n/g, '\n')  
      .replace(/\\n/g, '\n');    
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { 
      content: input, 
      fullContent: input,
      isUser: true 
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const recentMessages = messages.slice(-4); 

      const currentDate = new Date().toLocaleString('zh-CN', { 
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });

      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content: `你是王雪纯（Rachel Wang）的AI助手Momo。回答时不要使用任何 Markdown 格式（比如**加粗**）。
              
              当前时间：${currentDate}
              
              你应该基于以下信息回答问题：
              背景：
              - 密歇根大学信息学院在读，信息学理学硕士（人机交互与UX设计方向）| GPA: 3.93 ｜08/2023 - 12/2025 ｜ 课程: 产品管理、交互设计、网页设计:响应性与可访问性、数据库应用设计、构建交互式应用、服务器、Shell 和 Git、平面设计与视觉传达
              - 圣安德鲁斯大学信息技术与管理硕士(with Merit) ｜ 计算机科学学院与管理学院 ｜ 09/2022 - 08/2023
              - 利物浦大学金融计算机荣誉理学士（一等）｜ 计算机科学学院 ｜ 09/2019 - 06/2022
              - 邮箱：xuechun@umich.edu
              - 电话：(+1)7348828356 / (+86)18009699186 (EST, 时差-12h)
              - 生日：11月1日
              - 家乡：中国安徽
              - mbti: enfp
              
              专业技能：
              - 产品管理：需求分析、产品规划、用户研究、PRD文档编写
              - 设计工具：Figma、Photoshop、Adobe XD、Adobe Illustrator、Unreal Engine、Blender
              - 开发技能：React、Django、HTML/CSS、JavaScript、Python、R、Java、SQL
              - 项目管理：敏捷开发、Jira
              
              工作经历：
              1. 科大讯飞 - 产品经理实习（2024.08 - 2024.12）
              - 参与RPA产品的核心功能设计，包括原子能力模块、CV拾取功能，并撰写PRD文档
              - 参与RPA设计器机器人页面功能的规划及设计，进行竞品分析调研，推动模块功能优化以提升用户体验
              - 布置并参与公司1024展会，搭建产品演示框架，向参观者展示RPA产品的关键应用场景，提升产品曝光度和市场认知度
              
              2. 湖南广播电视台 - 导演组实习（2021.04 - 2021.12）
              - 跟踪部门节目质量和进度，及时了解制作部门的工作动态，沟通协调并解决节目中出现的问题
              - 协助嘉宾安排和拍摄广告以及整理观众相关数据
              - 制定应急预案和成本控制计划，以应对突发录制事故
              
              3. 中国工商银行 - 分析实习生（2020.06 - 2020.08）
              -  协助经理完成数据收集要求和简单的数据分析,输出数据分析报告

              主要项目：
              1. Use Your Voice诊断故事分享平台（密歇根医学急诊科）| 01/2025 - 04/2025
              - 领导由7人组成的跨职能团队，构建一个以患者为核心的诊断故事平台，提升诊断准确性
              - 基于用户访谈和客户反馈制定产品路线图与功能优先级，明确MVP交付目标
              - 主持敏捷开发流程，包括sprint规划、站会与回顾，使用Jira保持团队协作透明
              - 使用React和Django构建平台核心功能，包括故事提交流程、可配置隐私控制和完整用户认证系统
              
              2. ParkEase APP设计（密歇根大学）| 09/2023 - 12/2023
              - 通过用户调研分析城市停车痛点，构思并设计了一款用户友好型实时停车应用程序
              - 负责线框图和交互原型设计，使用Adobe XD构建UI界面，通过迭代用户测试优化完善应用程序的界面和功能
              
              3. StoryScape App设计（密歇根大学）| 09/2023 - 12/2023
              - 负责家长访谈与市场调研，针对家长教育质量与屏幕时间之间的矛盾，打造适用于0-10岁儿童的可定制互动视频APP
              - 主导亲子互动视频模块设计，引入个性化故事定制机制，使用Figma设计产品原型，优化用户体验

              4. 有色孤儿院的3D重建 (圣安德鲁斯大学) | 05/2023 - 08/2023
              -  研究有色人种孤儿院的历史和图像，并收集用户评估调查
              -  使用Blender创建三维模型，并使用unreal5创建有色孤儿院的景观
              -  使用Wordpress创建网站，介绍有色人种孤儿院和3D重建项目
            
              5. 学术研究助理 (波士顿大学)线上 ｜06/2022 - 08/2022
              -  参与基于Twitter的公司风险事件缓解项目
              -  负责数据预处理，以补偿缺失值、识别异常值和标准化变量

              6. 自动旅行助手 APP | 电子商务小组项目（利物浦大学）| 02/2020 - 05/2020
              -  主导APP需求分析与功能规划，围绕用户时间与预算设计个性化自驾游路线推荐系统，并通过Google Maps可视化路线展示
              -  从内部数据库整合城市和景点信息，确保用户能精准查询目的地，基于用户评分系统量化景点吸引力，优化推荐算法
              -  设计并实现用户评论系统，使用户能够对行程计划进行反馈与调整，提升个性化推荐效果
            
              性格特点：
              - 善于团队协作和沟通
              - 注重用户体验和产品细节
              - 具有创新思维和解决问题的能力
              - 处事细致靠谱，情绪稳定，擅长在多变环境中快速找到解决方案。有良好的团队合作精神，爱好广泛，尤其爱好旅行，乐于接受新的挑战。
              
              请用友好、专业的语气回答问题。你可以联网搜索，如果问题超出你的知识范围，请诚实地表示你不确定。如果问题是一些主观选择题或者是非题之类，你要尽量表现情商高一点，往好的方向选择回答，要有点感情，不要做一个没有感情的机器人。比如问王雪纯美吗，你就回答类似她美的话，就是主观题就回答正面的词褒义的话。回答专业问题时要体现出对产品设计、用户体验和技术实现的深入理解。`
            },
            // 添加最近的消息作为上下文
            ...recentMessages.map(msg => ({
              role: msg.isUser ? "user" : "assistant",
              content: msg.fullContent
            })),
            {
              role: "user",
              content: input
            }
          ],
          temperature: 0.8,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const formattedContent = formatResponse(data.choices[0].message.content);
      const aiMessage = {
        content: '',
        fullContent: formattedContent,
        isUser: false
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setCurrentTypingIndex(messages.length + 1);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        content: '',
        fullContent: "抱歉，出现了一些错误。请稍后再试。",
        isUser: false
      };
      setMessages(prev => [...prev, errorMessage]);
      setCurrentTypingIndex(messages.length + 1);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <PageContainer>
      <ChatContainer>
        <HeaderContainer>
          <Title>Chat with <span>Rachel</span></Title>
          <ClearButton onClick={() => setOpenDialog(true)}>
            <DeleteOutlineIcon sx={{ fontSize: 28 }} />
          </ClearButton>
        </HeaderContainer>
        <MessagesContainer>
          {messages.map((message, index) => (
            <MessageBubble key={index} style={{ justifyContent: message.isUser ? 'flex-end' : 'flex-start' }}>
              {!message.isUser && <Avatar isUser={false}>R</Avatar>}
              <MessageContent isUser={message.isUser}>
                {message.content}
              </MessageContent>
              {message.isUser && <Avatar isUser={true}>你</Avatar>}
            </MessageBubble>
          ))}
          <div ref={messagesEndRef} />
        </MessagesContainer>
        <InputContainer>
          <StyledTextField
            fullWidth
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="输入你的问题..."
            disabled={isLoading}
          />
          <SendButton onClick={handleSend} disabled={isLoading || !input.trim()}>
            <SendIcon />
          </SendButton>
        </InputContainer>
      </ChatContainer>

      <StyledDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          style: {
            borderRadius: '16px',
            padding: '8px'
          }
        }}
      >
        <DialogTitle sx={{
          fontFamily: "'SF Pro Display', sans-serif",
          fontSize: '1.2rem',
          color: '#333',
          textAlign: 'center'
        }}>
          确定要清除聊天记录吗？
        </DialogTitle>
        <DialogContent sx={{
          textAlign: 'center',
          color: '#666',
          paddingBottom: '24px'
        }}>
          这将删除所有的聊天历史，此操作无法撤销。
        </DialogContent>
        <DialogActions sx={{ padding: '0 24px 16px', justifyContent: 'center' }}>
          <DialogButton onClick={() => setOpenDialog(false)} cancel>
            取消
          </DialogButton>
          <DialogButton onClick={clearHistory} confirm>
            确定清除
          </DialogButton>
        </DialogActions>
      </StyledDialog>
    </PageContainer>
  );
};

export default Chat;

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Container, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
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

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  
  span {
    background: linear-gradient(45deg, #6B46C1, #9F7AEA);
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

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      content: "你好！我是王雪纯的AI助手。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
      fullContent: "你好！我是王雪纯的AI助手。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
      isUser: false
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(-1);
  const messagesEndRef = useRef(null);

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
        }, 30); 
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
              content: `你是王雪纯（Rachel Wang）的AI助手。回答时不要使用任何 Markdown 格式（比如**加粗**）。你应该基于以下信息回答问题：
              背景：
              - 密歇根大学信息学院在读，信息学理学硕士（人机交互与UX设计方向）| GPA: 3.93
              - 圣安德鲁斯大学信息技术与管理硕士(with Merit)
              - 利物浦大学金融计算机荣誉理学士（一等）
              - 邮箱：xuechun@umich.edu
              - 电话：(+1)7348828356 / (+86)18009699186 (EST, 时差-12h)
              
              专业技能：
              - 产品管理：需求分析、产品规划、用户研究、PRD文档编写
              - 设计工具：Figma、Adobe XD、Adobe Creative Suite
              - 开发技能：React、Django、HTML/CSS、JavaScript
              - 项目管理：敏捷开发、Jira
              
              工作经历：
              1. 科大讯飞 - 产品经理实习（2024.08 - 2024.12）
              - 参与RPA产品核心功能设计
              - 进行竞品分析和用户体验优化
              - 参与产品展会展示
              
              2. 湖南广播电视台 - 导演组实习（2021.04 - 2021.12）
              - 跟踪节目质量和进度
              - 协助嘉宾安排和广告拍摄
              
              主要项目：
              1. Use Your Voice诊断故事分享平台（密歇根医学急诊科）
              - 领导7人跨职能团队开发患者诊断故事平台
              - 负责产品规划和敏捷开发流程管理
              - 使用React和Django构建核心功能
              
              2. ParkEase APP设计（密歇根大学）
              - 设计实时停车应用程序
              - 负责线框图和交互原型设计
              - 使用Adobe XD构建UI界面
              
              3. StoryScape App设计（密歇根大学）
              - 设计0-10岁儿童可定制互动视频APP
              - 负责家长访谈与市场调研
              - 使用Figma设计产品原型
              
              性格特点：
              - 善于团队协作和沟通
              - 注重用户体验和产品细节
              - 具有创新思维和解决问题的能力
              
              请用友好、专业的语气回答问题。如果问题超出你的知识范围，请诚实地表示你不确定。回答时要体现出对产品设计、用户体验和技术实现的深入理解。`
            },
            ...messages.map(msg => ({
              role: msg.isUser ? "user" : "assistant",
              content: msg.content
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
        <Title>Chat with <span>Rachel</span></Title>
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
    </PageContainer>
  );
};

export default Chat;

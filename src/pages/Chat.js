import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  Container,
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { keyframes } from "styled-components";

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
  background: #fdf6ed;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2358527C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  color: #58527c;
  font-size: 1.8rem;
  margin: 1rem 0;
  font-weight: 600;

  span {
    background: linear-gradient(45deg, #9e89a0, #b8a7ba);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #fdf6ed;
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  box-shadow: 0 15px 50px rgba(158, 137, 160, 0.3);
  border: 1px solid rgba(158, 137, 160, 0.15);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(158, 137, 160, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #9e89a0;
    border-radius: 3px;

    &:hover {
      background: #b8a7ba;
    }
  }
`;

const MessageBubble = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.3s ease-out;
  align-items: flex-start;
`;

const userGradient = "linear-gradient(45deg, #9E89A0, #b8a7ba)";

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${(props) => (props.isUser ? "0 0 0 1rem" : "0 1rem 0 0")};
  background: ${(props) => (props.isUser ? userGradient : "#fff")};
  border: 2px solid ${(props) => (props.isUser ? "transparent" : "#9E89A0")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${(props) => (props.isUser ? "white" : "#9E89A0")};
  box-shadow: 0 4px 12px rgba(158, 137, 160, 0.15);
  animation: ${float} 3s ease-in-out infinite;
`;

const MessageContent = styled.div`
  background: ${(props) => (props.isUser ? userGradient : "#FDF6ED")};
  color: ${(props) => (props.isUser ? "white" : "#58527C")};
  padding: 0.75rem 1rem;
  border-radius: 1.2rem;
  border: 1px solid
    ${(props) => (props.isUser ? "transparent" : "rgba(158, 137, 160, 0.2)")};
  max-width: 70%;
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  box-shadow: 0 8px 20px rgba(158, 137, 160, 0.2);
  white-space: pre-line;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    ${(props) =>
      props.isUser
        ? `
      border-left-color: #9E89A0;
      right: -16px;
    `
        : `
      border-right-color: #FDF6ED;
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
  background: #fdf6ed;
  backdrop-filter: blur(10px);
  border-radius: 1.2rem;
  box-shadow: 0 15px 50px rgba(158, 137, 160, 0.3);
  border: 1px solid rgba(158, 137, 160, 0.15);
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 1rem;
    background: #fdf6ed;
    transition: all 0.3s ease;

    &:hover {
      background: #fdf6ed;
      box-shadow: 0 0 0 2px rgba(158, 137, 160, 0.1);
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #9e89a0;
    }

    &.Mui-focused {
      background: #fdf6ed;
      box-shadow: 0 0 0 2px rgba(158, 137, 160, 0.2);

      .MuiOutlinedInput-notchedOutline {
        border-color: #9e89a0;
      }
    }
  }
`;

const SendButton = styled(IconButton)`
  &.MuiIconButton-root {
    background: linear-gradient(45deg, #9e89a0, #b8a7ba);
    color: white;
    padding: 0.8rem;
    border-radius: 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(158, 137, 160, 0.3);
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
    background: linear-gradient(45deg, #9e89a0, #b8a7ba);
    color: white;
    opacity: 0.9;
    transition: all 0.2s;
    padding: 12px;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
      opacity: 1;
      box-shadow: 0 4px 12px rgba(158, 137, 160, 0.3);

      &::after {
        content: "清除记录";
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(88, 82, 124, 0.9);
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
    background: #fdf6ed;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(158, 137, 160, 0.1);
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

  ${(props) =>
    props.cancel &&
    `
    background: #f3f4f6;
    color: #58527C;
    
    &:hover {
      background: #e5e7eb;
    }
  `}

  ${(props) =>
    props.confirm &&
    `
    background: #9E89A0;
    color: white;
    
    &:hover {
      background: #b8a7ba;
    }
  `}
`;

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    return savedMessages
      ? JSON.parse(savedMessages)
      : [
          {
            content:
              "你好！我是王雪纯的AI助手Momo。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
            fullContent:
              "你好！我是王雪纯的AI助手Momo。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
            isUser: false,
          },
        ];
  });

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(-1);
  const messagesEndRef = useRef(null);

  const clearHistory = () => {
    setOpenDialog(false);
    const initialMessage = {
      content:
        "你好！我是王雪纯的AI助手Momo。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
      fullContent:
        "你好！我是王雪纯的AI助手Momo。你可以问我任何关于她的问题，比如她的技能、经历、项目等。",
      isUser: false,
    };
    setMessages([initialMessage]);
    localStorage.setItem("chatHistory", JSON.stringify([initialMessage]));
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
          setMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            const currentMessage = newMessages[currentTypingIndex];
            const nextChar =
              currentMessage.fullContent[currentMessage.content.length];
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
      .replace(/\*\*/g, "")
      .replace(/\\n\\n/g, "\n")
      .replace(/\\n/g, "\n");
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      content: input,
      fullContent: input,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const recentMessages = messages.slice(-4);

      const currentDate = new Date().toLocaleString("zh-CN", {
        timeZone: "America/New_York",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const response = await fetch(
        "https://api.deepseek.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY}`,
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
              - 密歇根大学信息学院在读，信息学理学硕士（人机交互与UX设计方向）| GPA: 3.93 ｜08/2023 - 12/2025 ｜ 课程: 产品管理、交互设计、网页设计:响应性与可访问性、数据库应用设计、构建交互式应用、平面设计与视觉传达等
              - 圣安德鲁斯大学信息技术与管理硕士(with Merit) ｜ 计算机科学学院与管理学院 ｜ 09/2022 - 08/2023
              - 利物浦大学金融计算机荣誉理学士（一等）｜ 计算机科学学院 ｜ 09/2019 - 06/2022
              - 邮箱：xuechun@umich.edu
              - 电话：(+1)7348828356 / (+86)18009699186 (EST, 时差-12h)
              - 生日：11月1日
              - 家乡：中国安徽
              - mbti: enfp
              
              专业技能：
              - 产品管理：需求分析、产品规划、用户研究、PRD文档编写
              - 设计工具：Figma、Photoshop、Adobe Illustrator、Adobe XD
              - 开发技能：JavaScript、HTML5、CSS3、React、Python、SQL、Git
              - 项目管理：敏捷开发、Jira
              
              工作经历：
              1. HIPOND - AI产品经理（2025.10 - 至今）
              - 主导留学生二手交易平台的AI智能化转型升级，针对用户发布闲置物品流程繁琐、信息录入负担重的痛点，设计并落地“AI一键批量识图发帖”功能，产出核心PRD文档与交互原型。
              - 基于AI图像识别与NLP技术优化发帖链路：用户仅需上传照片，系统即可自动识别商品并生成标题、定价建议与描述，支持多商品批量处理并一键发布，显著降低发帖门槛并提升内容产出效率。
              - 针对买家找货效率低、供需难以闭环的问题，设计AI智能导购助手，支持自然语言搜索与智能匹配，构建供需智能撮合系统，在新出售帖发布时自动匹配高相关求购需求并触发双向通知，缩短交易路径并提升成交转化率。

              2. 科大讯飞 - 产品经理实习（2025.06 - 2025.09）
              - 主导短剧翻译平台的核心功能设计（字幕翻译与编辑、AI配音、音色克隆、口型对齐、字幕擦除、字幕编组及项目管理），产出PRD文档与交互原型，满足了短剧出海业务的多语种本地化需求，支持 MVP 快速上线并应用于客户演示。
              - 通过调研明确了传统人工翻译与配音效率低、成本高和音色不稳定等痛点，引入 AI 配音，音色克隆和字幕编组功能，显著降低了短剧翻译的制作门槛，提升了观众的沉浸式观看体验。
              - 编写产品说明文档以支持产品宣传推广，帮助B端客户快速理解产品价值，加速业务拓展与产品市场化落地。
              
              3. 科大讯飞 - 产品经理实习（2024.08 - 2024.12）
              - 参与RPA产品核心功能设计，完成竞品分析并产出3篇调研报告，明确产品功能与主要竞品的差异化优势，产出PRD文档5篇并参与评审，推动功能优化与产品迭代，改善了用户在自动化办公场景下的使用体验。
              - 针对图像拾取准确率低的问题，提出并推动锚点方案，在原拾取功能上引入锚点概念，显著提升了图像识别准确率和任务执行的稳定性。
              - 明确流程开发中用户频繁依赖外部Excel处理结构化数据从而增加了数据流转复杂性的问题，设计并推动内置轻量可视化数据表格功能，在流程中支持表格数据读写、导入导出等，显著提升了开发效率和稳定性。
              - 面对系统操作和用户行为不可追溯、审计难的痛点，在审计日志中引入日志告警和统计报表功能，显著提高了系统审计效率和合规留痕能力。
              - 布置并参与公司产品展会，搭建产品演示框架，向潜在客户展示产品的典型应用场景（财务报表处理、数据录入自动化），提升了产品曝光度和市场认知度。
              
              4. 湖南广播电视台 - 导演组实习（2021.04 - 2021.12）
              - 跟踪部门节目质量和进度，沟通协调执行、道具、艺人统筹多个部门，制定应急预案和成本控制计划，实时监控进度并及时解决突发录制事故。协助嘉宾安排和拍摄广告以及整理观众相关数据。

              主要项目：
              1. Use Your Voice诊断故事分享平台（密歇根医学急诊科）| 01/2025 - 04/2025
              - 领导7人跨职能团队，构建以患者为核心的诊断故事平台，以改善急诊诊断的准确性与效率。基于用户访谈和客户反馈制定产品路线图与功能优先级，明确交付目标，包括故事提交流程、可配置隐私控制和完整用户认证系统。
              - 主持敏捷开发流程（sprint规划、站会与回顾），使用Jira保持团队协作透明，确保项目高效推进。
              
              2. ParkEase App设计（密歇根大学）| 09/2023 - 12/2023
              - 针对城市停车难题开展用户调研，识别用户痛点并提出解决方案，设计用户友好型实时停车APP，将用户与可用车位实时数据无缝连接，并结合导航功能提升停车效率。负责线框图和交互原型设计，使用Adobe XD构建UI界面，通过多轮用户测试迭代优化交互体验，提升了产品的易用性和可用性。
              
              3. StoryScape App设计（密歇根大学）| 09/2023 - 12/2023
              - 负责家长访谈与市场调研，针对家长教育质量与屏幕时间的矛盾，提出儿童互动可定制视频APP作为解决方案。
              - 主导亲子互动视频模块设计，引入个性化故事定制机制，使用Figma设计产品原型，优化用户体验。
              
              4. 自动旅行助手App（电子商务小组项目, 利物浦大学）| 02/2021 - 05/2021
              - 主导需求分析与功能规划，结合用户时间与预算设计自驾游路线推荐系统，通过Google Maps可视化路线展示。
              - 整合数据库中城市和景点信息，确保用户能精准查询目的地，基于评分系统量化景点吸引力，优化推荐算法，增强推荐的科学性与用户满意度。
              - 设计并实现用户评论系统，使用户能够对行程计划进行反馈与调整，形成闭环优化的推荐机制。
              
              活动经历：
              1. Peer Mentor（利物浦大学, 计算机科学系）| 09/2021 - 05/2022
              - 为低年级学生提供学术支持
              
              2. 利物浦大学 华人会 | 11/2020 - 06/2021
              - 组织校园活动并推广中国文化
              
              3. 加州大学伯克利分校，夏校 | 06/2018 - 08/2018
              - 学习宏观经济和K-8教学课程
              
              性格特点：
              - 热情开朗，善于沟通
              - 创新思维，注重细节
              - 责任心强，高效执行
              - 团队合作，乐于分享
              
              兴趣爱好：
              - 旅行、摄影、看电影
              - 喜欢尝试新事物，探索不同文化
              - 喜欢粉色和紫色
              - 喜欢猫咪
              
              请以友好、专业的语气回答问题，如果不确定或不知道答案，请诚实地说明。不要编造信息。回答应简洁明了，语气自然。`,
              },
              ...recentMessages.map((msg) => ({
                role: msg.isUser ? "user" : "assistant",
                content: msg.fullContent,
              })),
              {
                role: "user",
                content: input,
              },
            ],
            temperature: 0.8,
            max_tokens: 2000,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      const formattedContent = formatResponse(data.choices[0].message.content);
      const aiMessage = {
        content: "",
        fullContent: formattedContent,
        isUser: false,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setCurrentTypingIndex(messages.length + 1);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        content: "",
        fullContent: "抱歉，出现了一些错误。请稍后再试。",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
      setCurrentTypingIndex(messages.length + 1);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <PageContainer>
      <ChatContainer>
        <HeaderContainer>
          <Title>
            Chat with <span>Rachel</span>
          </Title>
          <ClearButton onClick={() => setOpenDialog(true)}>
            <DeleteOutlineIcon sx={{ fontSize: 28 }} />
          </ClearButton>
        </HeaderContainer>
        <MessagesContainer>
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              style={{
                justifyContent: message.isUser ? "flex-end" : "flex-start",
              }}
            >
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
          <SendButton
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
          >
            <SendIcon />
          </SendButton>
        </InputContainer>
      </ChatContainer>

      <StyledDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          style: {
            borderRadius: "16px",
            padding: "8px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "'SF Pro Display', sans-serif",
            fontSize: "1.2rem",
            color: "#58527C",
            textAlign: "center",
          }}
        >
          确定要清除聊天记录吗？
        </DialogTitle>
        <DialogContent
          sx={{
            textAlign: "center",
            color: "#58527C",
            paddingBottom: "24px",
          }}
        >
          这将删除所有的聊天历史，此操作无法撤销。
        </DialogContent>
        <DialogActions
          sx={{ padding: "0 24px 16px", justifyContent: "center" }}
        >
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

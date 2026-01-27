import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Typography, Container, Dialog, DialogContent } from "@mui/material";
import ProjectNavigation from "../components/ProjectNavigation";
import LuminaryImg from "../assets/Luminary.png";
import Demo1 from "../assets/Luminary_demo1.mov";
import Demo2 from "../assets/Luminary_demo2.mov";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #fdf6ed;
  padding: 80px 0 40px;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Banner = styled.div`
  background: transparent;
  color: #333;
  padding: 1.2rem 2rem 1.5rem 3rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: none;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.2rem 1.4rem 1.5rem;
    padding-top: 4rem;
  }
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
  padding-top: 0.5rem;

  img {
    height: 120px;
    width: auto;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 0.25rem;
    padding-top: 0;

    img {
      height: 80px;
    }
  }
`;

const BannerContent = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1.2rem 0;
  padding-top: 2rem;
  max-width: 500px;

  @media (max-width: 768px) {
    text-align: center;
    min-height: auto;
    padding: 0;
    gap: 0.5rem;
    margin-top: -0.25rem;
    width: 100%;
    align-items: center;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: -0.8rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0.2rem;
  color: #333;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.35rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin: 0 0 1rem;
  font-weight: 500;
  color: #333;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin: 0;
  background: #8a63d2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(93, 63, 211, 0.2);
    background: #6a4fe0;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  display: inline-block;
`;

const Card = styled(motion.div)`
  background: #fdf6ed;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(138, 99, 210, 0.08);
  margin-bottom: 2rem;
  border: 1px solid rgba(138, 99, 210, 0.1);
  overflow: hidden;

  &:hover {
    box-shadow: 0 15px 40px rgba(138, 99, 210, 0.12);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const CardContent = styled.div`
  h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 350px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 1.5rem auto;
  background: #000;

  video {
    width: 100%;
    display: block;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(138, 99, 210, 0.1);
  color: #5d3fd3;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const VideoDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 12px;
    overflow: hidden;
    max-width: 500px;
    width: 100%;
    margin: 16px;
    background: #000;
  }
`;

const Luminary = () => {
  const [openVideo, setOpenVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenVideo = (videoSrc) => {
    setOpenVideo(videoSrc);
  };

  const handleCloseVideo = () => {
    setOpenVideo(null);
  };

  return (
    <>
      <ProjectNavigation />
      <PageWrapper>
        <ContentWrapper>
          <Banner>
            <LogoContainer>
              <img src={LuminaryImg} alt="Luminary Logo" />
            </LogoContainer>
            <BannerContent>
              <TextGroup>
                <Title
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Luminary
                </Title>
                <Subtitle>AI驱动的相册助手</Subtitle>
              </TextGroup>
              <TagContainer
                style={{ marginBottom: 0, justifyContent: "center" }}
              >
                <Tag>Vibe Coding</Tag>
                <Tag>产品设计</Tag>
                <Tag>UX 设计</Tag>
                <Tag>AI 工程</Tag>
              </TagContainer>
            </BannerContent>
          </Banner>

          <Container>
            <SectionTitle>项目概览</SectionTitle>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardContent>
                <Typography variant="body1" paragraph>
                  Luminary 是我构建的一款 AI
                  驱动的相册助手，它改变了我们与数字记忆互动的方式。它创建了一个从自然语言搜索到生成可分享社交媒体故事的端到端闭环。
                </Typography>
                <Typography variant="body1">
                  人们拍摄成千上万张照片，但大多数都被埋藏在手机里。事实上，相册中的照片包含的信息远比我们预期的多。目前的照片应用只能支持基本的搜索，无法理解上下文或连接记忆。该项目旨在解决两个问题：用户如何自然地搜索照片，以及这些照片如何转化为即刻可分享的故事？
                </Typography>
              </CardContent>
            </Card>

            <SectionTitle>核心功能</SectionTitle>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardContent>
                <h3>1. 自然语言搜索：“询问你的回忆”</h3>
                <Typography variant="body1" paragraph>
                  用户经常希望使用自然的语境来搜索有意义的时刻，比如“找找去年我在沙滩上穿白裙子的照片”或“去年我看了多少次日落？”
                </Typography>
                <Typography variant="body1" paragraph>
                  此功能允许用户用自然语言询问关于回忆的任何问题，而不仅仅是通过关键词搜索照片。它利用多模态
                  AI 来理解图像中的内容、背景和情感。
                </Typography>
                <Button onClick={() => handleOpenVideo(Demo1)}>
                  观看演示：搜索
                </Button>
                <VideoContainer>
                  <video autoPlay loop muted playsInline src={Demo1} />
                </VideoContainer>
              </CardContent>
            </Card>

            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardContent>
                <h3>2. 端到端故事生成</h3>
                <Typography variant="body1" paragraph>
                  第二个核心功能解决了创作的阻力。即使找到了合适的照片，许多用户也懒得整理或为社交媒体撰写文案。
                </Typography>
                <Typography variant="body1" paragraph>
                  Luminary
                  创建了一个智能闭环：从照片检索到内容生成。它会自动从搜索结果中选出最佳照片，将其编排成叙事，并生成引人入胜的文案，瞬间将“埋藏的照片”变成准备分享的故事。
                </Typography>
                <Button onClick={() => handleOpenVideo(Demo2)}>
                  观看演示：故事生成
                </Button>
                <VideoContainer>
                  <video autoPlay loop muted playsInline src={Demo2} />
                </VideoContainer>
              </CardContent>
            </Card>
          </Container>
        </ContentWrapper>
      </PageWrapper>

      <VideoDialog open={!!openVideo} onClose={handleCloseVideo} maxWidth="sm">
        <DialogContent style={{ padding: 0, background: "#000" }}>
          {openVideo && (
            <video
              controls
              autoPlay
              style={{ width: "100%", display: "block" }}
              src={openVideo}
            />
          )}
        </DialogContent>
      </VideoDialog>
    </>
  );
};

export default Luminary;

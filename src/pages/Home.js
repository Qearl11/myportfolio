import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Container, Typography, Box } from '@mui/material';
import { Email, Phone, Description } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import parkeaseImg from '../assets/parkease.png';
import userYourVoiceImg from '../assets/useryourvoice.png';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Section = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  margin-top: 60px;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #f8f5ff 0%, #fff 100%);
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  
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

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const HeroContent = styled(Box)`
  animation: ${css`${fadeIn} 1s ease-out`};
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Highlight = styled.span`
  color: #a78bfa;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  position: relative;
  display: inline-block;
  animation: ${css`${float} 3s ease-in-out infinite`};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: rgba(167,139,250,0.15);
    z-index: -1;
    border-radius: 4px;
  }
`;

const StyledTypography = styled(Typography)`
  font-family: 'M PLUS Rounded 1c', 'Noto Sans SC', sans-serif !important;
  opacity: 0;
  animation: ${props => css`${fadeIn} 1s ease-out forwards ${props.delay || '0s'}`};
`;

const IntroText = styled(StyledTypography)`
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #a78bfa, #ddd6fe);
    background-size: 200% auto;
    animation: ${css`${shimmer} 2s linear infinite`};
    border-radius: 2px;
  }
`;

const ResumeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(45deg, #a78bfa, #ddd6fe);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(167,139,250,0.2);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(167,139,250,0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: rotate(45deg);
    transition: 0.5s;
    opacity: 0;
  }
  
  &:hover::after {
    opacity: 1;
    transform: rotate(45deg) translate(50%, 50%);
  }
  
  svg {
    font-size: 1.2rem;
    animation: ${css`${float} 2s ease-in-out infinite`};
  }
`;

const AnimatedBox = styled(Box)`
  opacity: 0;
  animation: ${css`${fadeIn} 1s ease-out forwards 1s`};
`;

const ProjectsSection = styled(Section)`
  background: #fff;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
  }
`;

const AboutSection = styled(Section)`
  background: #fff;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
  }
`;

const ContactSection = styled(Section)`
  background: linear-gradient(135deg, #f8f5ff 0%, #e9ecef 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #007AFF, #00C6FF);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
    
    &::before {
      opacity: 1;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.1));
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectTitle = styled(Typography)`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 2rem;
    height: 2px;
    background: #007AFF;
    transition: width 0.3s ease;
  }
  
  ${ProjectCard}:hover &::after {
    width: 100%;
  }
`;

const ProjectDescription = styled(Typography)`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TagContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.06);
`;

const Tag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: ${props => props.color || '#f0f7ff'};
  color: ${props => props.textColor || '#007AFF'};
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #666;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(0,0,0,0.03);
  
  &:hover {
    color: #007AFF;
    background: #f0f7ff;
    transform: translateY(-2px);
  }
`;

const getTagColor = (tag) => {
  const colors = {
    '产品管理': { bg: '#f0f7ff', text: '#007AFF' },
    '用户研究': { bg: '#fff5f5', text: '#ff6b6b' },
    '全栈开发': { bg: '#f3f0ff', text: '#7950f2' },
    'UX设计': { bg: '#fff0f6', text: '#e64980' },
    '原型设计': { bg: '#f8f0fc', text: '#ae3ec9' },
    '用户测试': { bg: '#e3fafc', text: '#15aabf' },
    '产品设计': { bg: '#fff9db', text: '#fab005' },
    '3D建模': { bg: '#ebfbee', text: '#37b24d' },
    '数据分析': { bg: '#e7f5ff', text: '#1c7ed6' },
    '竞品分析': { bg: '#fff4e6', text: '#fd7e14' },
    '系统设计': { bg: '#f8f9fa', text: '#495057' },
    'API集成': { bg: '#f4f4f4', text: '#666' }
  };
  return colors[tag] || { bg: '#f0f7ff', text: '#007AFF' };
};

const Home = () => {
  const [animatedTags, setAnimatedTags] = useState([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const tags = entry.target.querySelectorAll('[data-tag]');
            setAnimatedTags(prev => [...prev, ...Array.from(tags)]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Use Your Voice诊断故事分享平台",
      description: "为密歇根医学急诊科设计的患者故事分享平台。作为7人团队负责人，主导产品规划、用户研究和功能开发，使用React和Django构建核心功能。",
      image: userYourVoiceImg,
      tags: ["产品管理", "UX设计", "全栈开发"]
    },
    {
      title: "ParkEase停车应用设计",
      description: "基于用户调研设计的实时停车应用。负责线框图和交互原型设计，使用Adobe XD构建UI界面，通过迭代测试优化用户体验。",
      image: parkeaseImg,
      tags: ["UX设计", "原型设计", "用户测试"]
    },
    {
      title: "StoryScape儿童教育应用",
      description: "针对0-10岁儿童家长开发的互动视频APP。通过深入的用户访谈和市场调研，设计个性化故事定制机制，使用Figma打造产品原型。",
      image: "https://via.placeholder.com/600x400",
      tags: ["用户研究", "产品设计", "原型开发"]
    },
    {
      title: "有色孤儿院的3D重建项目",
      description: "研究有色人种孤儿院的历史，使用Blender创建三维模型，并使用Unreal 5重建历史场景。负责用户体验评估和数据收集。",
      image: "https://via.placeholder.com/600x400",
      tags: ["3D建模", "用户研究", "数据分析"]
    },
    {
      title: "RPA产品功能设计",
      description: "在科大讯飞实习期间参与RPA产品核心功能设计，包括原子能力模块、CV拾取功能，通过竞品分析和用户反馈优化产品体验。",
      image: "https://via.placeholder.com/600x400",
      tags: ["产品设计", "竞品分析", "用户体验"]
    },
    {
      title: "自动旅行助手应用",
      description: "设计个性化自驾游路线推荐系统，整合Google Maps API实现路线可视化，基于用户评分系统优化推荐算法。",
      image: "https://via.placeholder.com/600x400",
      tags: ["产品设计", "用户研究", "全栈开发"]
    }
  ];

  return (
    <main>
      <HeroSection id="home">
        <StyledContainer>
          <HeroContent>
            <Box mb={6}>
              <StyledTypography 
                variant="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  marginBottom: 3,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
                delay="0.2s"
              >
                你好，我是 <Highlight>王雪纯(Rachel)</Highlight>
              </StyledTypography>
              <IntroText
                variant="h4" 
                gutterBottom 
                sx={{ 
                  color: '#666',
                  marginBottom: 4,
                  fontWeight: 500,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
                delay="0.4s"
              >
                产品经理 / UX设计师
              </IntroText>
              <StyledTypography 
                variant="body1" 
                sx={{ 
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  marginBottom: 2,
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
                delay="0.6s"
              >
                密歇根大学信息学院人机交互与UX设计方向硕士。
                擅长用户研究、交互设计和原型开发，热衷于创造以人为本的数字产品。
                拥有跨学科背景，结合技术与设计思维解决复杂问题。
              </StyledTypography>
              <StyledTypography 
                variant="body1"
                sx={{ 
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  marginBottom: 4,
                  maxWidth: '600px',
                  margin: '2rem auto'
                }}
                delay="0.8s"
              >
                我的技术栈包括：JavaScript、React、Python、Django等开发工具，
                以及Figma、Adobe XD、Photoshop等设计工具。在多个项目中，
                我负责产品规划、用户研究、原型设计和开发实现，注重数据驱动的决策方法，致力于打造卓越的用户体验。
              </StyledTypography>
              <AnimatedBox mt={4}>
                <ResumeButton to="/resume" rel="noopener noreferrer">
                  <Description /> 查看我的简历
                </ResumeButton>
              </AnimatedBox>
            </Box>
          </HeroContent>
        </StyledContainer>
      </HeroSection>

      <ProjectsSection id="projects">
        <Container>
          <Box mb={8}>
            <Typography 
              variant="h3" 
              gutterBottom 
              align="center"
              sx={{ 
                fontWeight: 700,
                marginBottom: 2
              }}
            >
              项目
            </Typography>
          </Box>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard className="project-card" key={index}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectContent>
                  <div>
                    <ProjectTitle variant="h5">
                      {project.title}
                    </ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                  </div>
                  <TagContainer>
                    {project.tags.map((tag, i) => {
                      const colors = getTagColor(tag);
                      return (
                        <Tag 
                          key={i} 
                          data-tag={tag}
                          color={colors.bg}
                          textColor={colors.text}
                          style={{
                            opacity: animatedTags.some(t => t.dataset.tag === tag) ? 1 : 0,
                            transform: animatedTags.some(t => t.dataset.tag === tag) ? 'translateY(0)' : 'translateY(10px)',
                            transition: `all 0.3s ease ${i * 0.1}s`
                          }}
                        >
                          {tag}
                        </Tag>
                      );
                    })}
                  </TagContainer>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </ProjectsSection>

      <AboutSection id="about">
        <Container>
          <Box display="flex" alignItems="center">
            <Box>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  marginBottom: 3
                }}
              >
                关于我
              </Typography>
            </Box>
          </Box>
        </Container>
      </AboutSection>

      <ContactSection id="contact">
        <Container>
          <Box mb={6} textAlign="center">
            <Typography 
              variant="h3" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                marginBottom: 3,
                color: '#333'
              }}
            >
              联系方式
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <SocialLinks>
              <SocialLink href="mailto:xuechun@umich.edu">
                <Email /> xuechun@umich.edu
              </SocialLink>
              <SocialLink href="tel:18009699186">
                <Phone /> +86-180-0969-9186
              </SocialLink>
              {/* <SocialLink href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Description /> 简历
              </SocialLink> */}
            </SocialLinks>
          </Box>
        </Container>
      </ContactSection>
    </main>
  );
};

export default Home;

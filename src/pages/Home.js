import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { Container, Typography, Box } from "@mui/material";
import { Email, Phone, Description, Chat } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import luminaryImg from "../assets/Luminary.png";
import parkeaseImg from "../assets/parkease.png";
import userYourVoiceImg from "../assets/useryourvoice.png";
import temuImg from "../assets/temu.png";
import Footer from "../components/Footer"; // 导入页脚组件

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

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Section = styled.section`
  padding: 40px 0;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
`;

const HeroSection = styled(Section)`
  background: #fdf6ed;
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  padding: 20px 0;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a78bfa' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  // }
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const HeroContent = styled(Box)`
  animation: ${css`
    ${fadeIn} 1s ease-out
  `};
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
`;

const HighlightText = styled.span`
  display: inline-flex;
  font-weight: bold;
  align-items: flex-end;
  height: 1.2em;
  margin: 0 -0.1em;
  position: relative;

  .char {
    display: inline-block;
    background: linear-gradient(120deg, #9e89a0, #b8a7ba);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform-origin: bottom;
    position: relative;
    margin: 0 0.05em;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    @media (min-width: 769px) {
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @media (max-width: 768px) {
      animation: ${float} 1s ease-in-out infinite;
      animation-delay: calc(var(--char-index, 0) * 0.1s);
      transform: none !important;
      margin: 0 0.05em !important;
      transition: none !important;
    }
  }
`;

const StyledTypography = styled(Typography)`
  font-family: "M PLUS Rounded 1c", "Noto Sans SC", sans-serif !important;
  opacity: 0;
  animation: ${(props) => css`
    ${fadeIn} 1s ease-out forwards ${props.delay || "0s"}
  `};
  color: #58527c;
`;

const IntroText = styled(StyledTypography)`
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #9e89a0, #b8a7ba);
    background-size: 200% auto;
    animation: ${css`
      ${shimmer} 2s linear infinite
    `};
    border-radius: 2px;
  }
`;

const ResumeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(45deg, #9e89a0, #b8a7ba);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(167, 139, 250, 0.2);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(167, 139, 250, 0.3);
  }

  &::after {
    content: "";
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
    animation: ${css`
      ${bounce} 2s ease-in-out infinite
    `};
    position: relative;
    top: 2px;
  }
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const AnimatedBox = styled(Box)`
  opacity: 0;
  animation: ${css`
    ${fadeIn} 1s ease-out forwards 1s
  `};
`;

const ProjectsSection = styled(Section)`
  padding: 0 0 120px;
  background-color: #fdf6ed;
  margin: 0 40px;

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const AboutSection = styled(Section)`
  background: #fdf6ed;
  padding: 20px 0;
  margin: 0 40px;

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const ContactSection = styled(Section)`
  background: #fdf6ed;
  padding: 10px 0;
  margin: 0 40px;

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 50px 60px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`;

const ProjectCard = styled(Link)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow:
    8px 8px 20px rgba(158, 137, 160, 0.25),
    0 15px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  width: 100%;
  min-width: 280px;
  text-decoration: none;
  color: #58527c;
  border: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      12px 12px 30px rgba(158, 137, 160, 0.3),
      0 22px 45px rgba(0, 0, 0, 0.2);

    .project-overlay {
      opacity: 0;
    }

    .project-content {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 0;
  padding-top: 65%; /* 约 5:3.25 的宽高比 */
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(253, 246, 237, 0.9);
  transition: opacity 0.3s ease;
  z-index: 1;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  transition: all 0.3s ease;
`;

const ProjectTitle = styled(Typography)`
  font-weight: 600;
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  line-height: 1.3;
  margin-bottom: 0.7rem;
  position: relative;
  display: inline-block;
  color: #58527c;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 2rem;
    height: 2px;
    background: #9e89a0;
    transition: width 0.3s ease;
  }

  ${ProjectCard}:hover &::after {
    width: 100%;
  }
`;

const ProjectDescription = styled(Typography)`
  color: #58527c;
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  line-height: 1.5;
  margin-bottom: 0.7rem;
`;

const TagContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.7rem;
`;

const Tag = styled.span`
  background-color: ${(props) => props.color || "#FDF6ED"};
  color: ${(props) => props.textColor || "#9E89A0"};
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  white-space: nowrap;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #58527c;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    color: #9e89a0;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
    color: #58527c;
  }
`;

const getTagColor = (tag) => {
  const colors = {
    产品管理: { bg: "#FDF6ED", text: "#9E89A0", border: "#E8E1D9" },
    用户研究: { bg: "#FDF6ED", text: "#7A8CA0", border: "#E8E1D9" },
    全栈开发: { bg: "#FDF6ED", text: "#8A7CA0", border: "#E8E1D9" },
    UX设计: { bg: "#FDF6ED", text: "#A07A8C", border: "#E8E1D9" },
    原型设计: { bg: "#FDF6ED", text: "#A08A7C", border: "#E8E1D9" },
    用户测试: { bg: "#FDF6ED", text: "#7CA0A0", border: "#E8E1D9" },
    产品设计: { bg: "#FDF6ED", text: "#8CA07A", border: "#E8E1D9" },
    前端开发: { bg: "#FDF6ED", text: "#7CA08A", border: "#E8E1D9" },
    网页设计: { bg: "#FDF6ED", text: "#7A7CA0", border: "#E8E1D9" },
    功能设计: { bg: "#FDF6ED", text: "#A08A7C", border: "#E8E1D9" },
  };
  return colors[tag] || { bg: "#FDF6ED", text: "#9E89A0", border: "#E8E1D9" };
};

const MainContainer = styled.main`
  background-color: #fdf6ed;
`;

const Home = () => {
  const [animatedTags, setAnimatedTags] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tags = entry.target.querySelectorAll("[data-tag]");
            setAnimatedTags((prev) => [...prev, ...Array.from(tags)]);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const highlightText = document.querySelector(".highlight-name");
    if (highlightText) {
      const text = highlightText.textContent;
      highlightText.innerHTML = text
        .split("")
        .map(
          (char, index) =>
            `<span class="char" style="--char-index: ${index}">${char}</span>`,
        )
        .join("");

      if (window.matchMedia("(min-width: 769px)").matches) {
        const chars = highlightText.querySelectorAll(".char");
        const totalChars = chars.length;

        const updateScales = (mouseX) => {
          const rect = highlightText.getBoundingClientRect();
          const relativeX = mouseX - rect.left;
          const centerPoint = relativeX / rect.width;

          chars.forEach((char, index) => {
            const charCenter = (index + 0.5) / totalChars;
            const distance = Math.abs(centerPoint - charCenter);

            if (distance < 0.15) {
              char.style.transform = "scale(1.3)";
              char.style.margin = "0 0.15em";
            } else if (distance < 0.25) {
              char.style.transform = "scale(1.15)";
              char.style.margin = "0 0.08em";
            } else if (distance < 0.35) {
              char.style.transform = "scale(1.05)";
              char.style.margin = "0 0.05em";
            } else {
              char.style.transform = "";
              char.style.margin = "";
            }
          });
        };

        const handleMouseMove = (e) => {
          requestAnimationFrame(() => {
            updateScales(e.clientX);
          });
        };

        const handleMouseLeave = () => {
          chars.forEach((char) => {
            char.style.transform = "";
            char.style.margin = "";
          });
        };

        highlightText.addEventListener("mousemove", handleMouseMove);
        highlightText.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          highlightText.removeEventListener("mousemove", handleMouseMove);
          highlightText.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, []);

  const projects = [
    {
      title: "Luminary AI相册",
      description:
        "独立设计并开发的一款AI相册产品，将自然语言照片搜索转化为社交内容创作，实现从“找照片”到“发故事”的智能闭环。",
      image: luminaryImg,
      link: "/project/luminary",
      tags: ["Vibe Coding", "产品设计", "UX设计"],
    },
    {
      title: "Use Your Voice诊断故事分享平台",
      description:
        "为密歇根医学急诊科设计的患者故事分享平台。作为7人团队负责人，主导产品规划、用户研究和功能开发，使用React和Django构建核心功能。",
      image: userYourVoiceImg,
      link: "/project/useyourvoice",
      tags: ["产品管理", "UX设计", "全栈开发"],
    },
    {
      title: "Temu产品测量与AR预览功能设计",
      description:
        "通过标准化测量模板、AR实景预览和尺寸反馈闭环，提升商品信息透明度与用户信任，降低退货率，提升转化与满意度，全面展现从需求洞察到落地实施的产品管理思路。",
      image: temuImg,
      link: "/project/temu",
      tags: ["产品管理", "产品设计", "用户研究"],
    },
    {
      title: "ParkEase停车应用设计",
      description:
        "基于用户调研设计的实时停车应用。负责线框图和交互原型设计，使用Adobe XD构建UI界面，通过迭代测试优化用户体验。",
      image: parkeaseImg,
      link: "/project/parkease",
      tags: ["UX设计", "原型设计", "用户测试"],
    },
    // {
    //   title: "StoryScape儿童教育应用",
    //   description: "针对0-10岁儿童家长开发的互动视频APP。通过深入的用户访谈和市场调研，设计个性化故事定制机制，使用Figma打造产品原型。",
    //   image: "https://via.placeholder.com/600x400",
    //   link: "/project/story-scape",
    //   tags: ["用户研究", "产品设计", "原型开发"]
    // },
    // {
    //   title: "网页设计开发",
    //   description: "研究有色人种孤儿院的历史，使用Blender创建三维模型，并使用Unreal 5重建历史场景。负责用户体验评估和数据收集。",
    //   image: "https://via.placeholder.com/600x400",
    //   link: "/project/web-design",
    //   tags: ["前端开发", "用户研究", "网页设计"]
    // },
    // {
    //   title: "运动todo list应用",
    //   description: "基于用户调研设计的运动todo list应用。负责产品功能设计，使用React构建核心功能",
    //   image: "https://via.placeholder.com/600x400",
    //   link: "/project/todo-list",
    //   tags: ["产品设计", "前端开发", "用户体验"]
    // },
    // {
    //   title: "自动旅行助手应用",
    //   description: "设计个性化自驾游路线推荐系统，整合Google Maps API实现路线可视化，基于用户评分系统优化推荐算法。",
    //   image: "https://via.placeholder.com/600x400",
    //   link: "/project/travel-assistant",
    //   tags: ["产品设计", "用户研究", "全栈开发"]
    // }
  ];

  return (
    <MainContainer>
      <HeroSection id="home">
        <StyledContainer>
          <HeroContent>
            <Box mb={2}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  marginBottom: 0,
                  color: "#58527C",
                  fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                  whiteSpace: "nowrap",
                  overflow: "visible",
                }}
              >
                你好！我是{" "}
                <HighlightText className="highlight-name">
                  王雪纯 Rachel
                </HighlightText>
              </Typography>
              <IntroText
                variant="h4"
                sx={{
                  color: "#58527C",
                  marginBottom: 1,
                  marginTop: 2,
                  fontWeight: 500,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
                delay="0.4s"
              >
                产品经理
              </IntroText>
              <StyledTypography
                variant="body1"
                sx={{
                  color: "#58527C",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  marginBottom: 1,
                  maxWidth: "600px",
                  textAlign: "left",
                  marginLeft: { xs: "0px", sm: "30px", md: "70px" },
                  paddingLeft: { xs: "0.3rem", sm: "0" },
                }}
                delay="0.6s"
              >
                密歇根大学信息学院人机交互与UX设计方向硕士。
                擅长产品管理、用户研究、交互设计和原型开发，热衷于创造以人为本的数字产品。
                拥有跨学科背景，结合技术与设计思维解决复杂问题。
              </StyledTypography>
              <StyledTypography
                variant="body1"
                sx={{
                  color: "#58527C",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  marginBottom: 1,
                  maxWidth: "600px",
                  textAlign: "left",
                  marginTop: "1.5rem",
                  marginLeft: { xs: "0px", sm: "30px", md: "70px" },
                  paddingLeft: { xs: "0.3rem", sm: "0" },
                }}
                delay="0.8s"
              >
                <strong>开发: </strong>JavaScript、React、Python、Django
                <br />
                <strong>设计: </strong>Figma、Adobe XD、Photoshop
              </StyledTypography>
              <AnimatedBox mt={2}>
                <ButtonContainer>
                  <ResumeButton to="/resume" rel="noopener noreferrer">
                    <Description /> 查看我的简历
                  </ResumeButton>
                  <ResumeButton to="/chat" rel="noopener noreferrer">
                    <Chat /> 与我对话
                  </ResumeButton>
                </ButtonContainer>
              </AnimatedBox>
            </Box>
          </HeroContent>
        </StyledContainer>
      </HeroSection>

      <ProjectsSection id="projects">
        <Container>
          <Box mb={6}>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: 700,
                marginBottom: 1,
                color: "#58527C",
              }}
            >
              项目
            </Typography>
          </Box>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                as={Link}
                to={project.link}
                style={{ textDecoration: "none" }}
              >
                <ProjectImage src={project.image} />
                <ProjectOverlay className="project-overlay" />
                <ProjectContent className="project-content">
                  <div>
                    <ProjectTitle variant="h3">{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                  </div>
                  <TagContainer>
                    {project.tags.map((tag, i) => (
                      <Tag
                        key={i}
                        color={getTagColor(tag).bg}
                        textColor={getTagColor(tag).text}
                        borderColor={getTagColor(tag).border}
                      >
                        {tag}
                      </Tag>
                    ))}
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
                sx={{
                  fontWeight: 700,
                  marginBottom: 1,
                  color: "#58527C",
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
          <Box mb={2}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                marginBottom: 1,
                color: "#58527C",
              }}
            >
              联系方式
            </Typography>
          </Box>
          <Box>
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
      <Footer />
    </MainContainer>
  );
};

export default Home;

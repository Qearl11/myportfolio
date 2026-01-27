import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Typography, Container, Box } from "@mui/material";
import userYourVoiceImg from "../assets/useryourvoice.png";
import ProjectNavigation from "../components/ProjectNavigation";
import methodImg from "../assets/method.png";
import velocityImg from "../assets/velocity.png";
import umsiImg from "../assets/umsi.png";
import voiceDemoVideo from "../assets/voicedemo.mp4";
import useYourVoiceDemoVideo from "../assets/useyourvoicedemo.MP4";
import homepageImg from "../assets/homepage.png";
import communityStoriesImg from "../assets/communitystories.png";
import myStoriesImg from "../assets/mystories.png";
import privacyControlImg from "../assets/privacycontrol.png";
import storySubmissionImg from "../assets/storysubmission.png";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #fdf6ed; // 统一背景色
  padding: 80px 0 40px;
`;

const HeroSection = styled.section`
  position: relative;
  margin-bottom: 60px;
`;

const ProjectTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #9f75fa 0%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(Typography)`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #003366 0%, #ffffff 100%);
    margin-top: 0.5rem;
  }
`;

const Content = styled(Typography)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const FeatureCard = styled(motion.div)`
  background: #fdf6ed;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); // 增强阴影

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const MethodImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 2rem auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  background: ${(props) => props.color || "#f0f7ff"};
  color: ${(props) => props.textColor || "#007AFF"};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ContentWrapper = styled(Container)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Banner = styled.div`
  background: transparent; // 完全透明背景
  color: #333;
  padding: 1.2rem 2rem 1.5rem 3rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: none; // 移除阴影
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.2rem 1.4rem 1.5rem;
  }
`;

const BannerImage = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
  position: relative;
  left: 20px;

  @media (max-width: 768px) {
    width: 150px;
    left: 0;
  }
`;

const BannerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1.2rem 0;

  @media (max-width: 768px) {
    text-align: center;
    min-height: auto;
    padding: 0;
    gap: 1rem;
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
  color: #00274c;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
  color: #00274c;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin: 0;
  background: #ffcb05;
  color: #00274c;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: -1.5rem 0 0 0;
  flex-wrap: nowrap;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
    margin: 1rem 0 0 0;
  }
`;

const Card = styled(motion.div)`
  background: #fdf6ed;
  padding: 1.75rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); // 增强阴影
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18); // 增强悬停时的阴影
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const PosterSection = styled.div`
  margin-top: 4rem;
  text-align: center;
  scroll-margin-top: 90px;

  @media (max-width: 768px) {
    scroll-margin-top: 80px;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const DemoVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const PosterTitle = styled.h2`
  font-size: 1.5rem;
  color: #00274c;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 2rem 0 1rem;
  font-weight: 600;
`;

const Quote = styled.blockquote`
  border-left: 4px solid #ffcb05;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #555;

  p {
    font-style: italic;
    margin-bottom: 0.5rem;
  }

  footer {
    font-size: 0.9rem;
    color: #666;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  overflow: hidden;

  th,
  td {
    padding: 1rem;
    border: 1px solid #e0e0e0;
    vertical-align: top;
  }

  th {
    background: #fdf6ed;
    font-weight: 600;
    text-align: left;
  }

  th:first-child,
  td:first-child {
    width: 25%;
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
  }
`;

const TechTable = styled(Table)`
  th {
    background: #fdf6ed;
    font-weight: 700;
  }

  td:first-child,
  th:first-child {
    width: 15%;
    font-weight: 600;
  }

  td:nth-child(2),
  th:nth-child(2) {
    width: 35%;
  }
`;

const FeatureImageGrid = styled.div`
  margin: 2rem 0;
`;

const FeatureImageCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: #fdf6ed;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  height: 100%;
  max-width: 700px;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: #fdf6ed;
  padding: 1rem;
  cursor: pointer;

  &:hover .zoom-hint {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

const ZoomHint = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 400px;
  transition: transform 0.3s ease;
`;

const FeatureImageTitle = styled.h4`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  font-weight: 600;
  margin: 0;
  padding: 1.2rem;
  color: #333;
  text-align: center;
  background: #fdf6ed;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: #ffcb05;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

// 模态框组件样式
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  cursor: zoom-out;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    background: white;
  }
`;

// 图片模态框组件
const ImageModal = ({ isOpen, image, alt, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <ModalImage src={image} alt={alt} onClick={(e) => e.stopPropagation()} />
    </ModalOverlay>
  );
};

export default function UseYourVoiceProject() {
  const posterRef = useRef(null);
  const videoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // 立即滚动到顶部，不使用平滑滚动以确保即时效果
    window.scrollTo(0, 0);

    // 当模态框打开时禁止页面滚动
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]); // 在组件挂载和modalOpen状态变化时执行

  const scrollToPoster = (e) => {
    e.preventDefault();
    const navbarHeight = 64; // 导航栏高度
    const padding = 30; // 减小间距
    const yOffset = -(navbarHeight + padding);
    const element = posterRef.current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollToVideo = (e) => {
    e.preventDefault();
    const navbarHeight = 64; // 导航栏高度
    const padding = 30; // 减小间距
    const yOffset = -(navbarHeight + padding);
    const element = videoRef.current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // 处理图片点击，打开模态框
  const handleImageClick = (src, alt) => {
    // 保存当前滚动位置
    setScrollPosition(window.pageYOffset);
    setModalImage({ src, alt });
    setModalOpen(true);
  };

  // 关闭模态框
  const handleCloseModal = () => {
    setModalOpen(false);
    // 使用setTimeout确保在模态框关闭后才恢复滚动位置
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 50);
  };

  const sections = [
    {
      title: "项目简介",
      content: (
        <StyledList>
          <li>
            为密歇根医学急诊科设计的患者故事分享平台。作为7人团队负责人，主导产品规划、用户研究和功能开发。
          </li>
          <li>
            <strong>项目名称：</strong> Use Your
            Voice：以患者为中心的诊断故事分享平台
          </li>
          <li>
            <strong>时间线：</strong> 2025年1月28日 - 2025年4月16日
          </li>
          <li>
            <strong>课程项目：</strong> SI 699 | 密歇根大学信息学院（UMSI）
          </li>
          <li>
            <strong>客户：</strong> 密歇根医学中心急诊科
          </li>
          <li>
            <strong>使用工具：</strong> Figma、React、Django、Jira、Zoom
          </li>
        </StyledList>
      ),
    },
    {
      title: "项目背景与问题陈述",
      content: (
        <>
          <p>
            本项目由密歇根医学中心急诊科联合Tapper家族发起，旨在通过患者叙事改善急诊诊断的准确性与安全性，灵感来源于Alice
            Tapper的真实经历。诊断延误和误诊带来了严重后果，全球每年因此造成近万亿美元的额外医疗开支。
          </p>
          <p>
            <strong>
              核心问题：如何提升诊断准确性和安全性，以改善患者结局并优化医疗资源？
            </strong>
          </p>
        </>
      ),
    },
    {
      title: "目标用户与痛点分析",
      content: (
        <>
          <h4>目标用户群体</h4>
          <StyledList>
            <li>
              <strong>患者及其家属：</strong>{" "}
              曾经历延误、误诊或成功诊断的患者，希望通过分享故事帮助他人。
            </li>
            <li>
              <strong>临床医生与医疗工作者：</strong>{" "}
              希望从患者角度了解诊断过程，提升诊断准确性的专业人士。
            </li>
            <li>
              <strong>研究人员与行政人员：</strong>{" "}
              研究诊断错误并基于真实患者故事设计干预措施的人员。
            </li>
          </StyledList>

          <h4>主要痛点</h4>
          <StyledList>
            <li>
              <strong>在诊断过程中缺乏发声机会</strong>
              <p>
                患者常常感觉自己的声音没有被倾听，特别是在误诊或延误发生时，情感与身体创伤缺乏应有的重视。
              </p>
            </li>
            <li>
              <strong>隐私与信任担忧</strong>
              <p>许多人担心分享健康故事可能泄露隐私或遭受评判。</p>
            </li>
            <li>
              <strong>难以在复杂医疗体系中找到表达渠道</strong>
              <p>
                当前的医疗系统缺乏便捷直观的方式，供患者反思和记录自己的诊断经历。
              </p>
            </li>
          </StyledList>

          <h4>用户反馈</h4>
          <blockquote>
            <p>"没有孩子应该因为常见疾病的误诊或延误而遭受痛苦。"</p>
            <footer>—— Jake & Jennifer Tapper</footer>
          </blockquote>
          <blockquote>
            <p>
              "及时得出正确诊断是患者与医疗提供者每一次互动中最基本的要求。"
            </p>
            <footer>—— 密歇根医学中心急诊科</footer>
          </blockquote>
        </>
      ),
    },
    {
      title: "核心功能",
      content: (
        <>
          <Table>
            <thead>
              <tr>
                <th>核心功能</th>
                <th>满足的用户需求</th>
                <th>实现的客户目标</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>结构化故事提交系统</strong>
                </td>
                <td>提供便捷方式分享诊断旅程，用户可自主控制故事发布</td>
                <td>
                  <ul>
                    <li>建立可搜索的患者故事库</li>
                    <li>支持研究数据收集</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>可定制隐私设置</strong>
                </td>
                <td>自由设置可见范围，安全分享敏感健康信息</td>
                <td>
                  <ul>
                    <li>确保符合HIPAA隐私合规标准</li>
                    <li>获得用户信任</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>故事搜索与筛选系统</strong>
                </td>
                <td>按分类、日期、诊断阶段快速查找相关故事</td>
                <td>
                  <ul>
                    <li>帮助研究人员和临床人员提取有价值数据</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>用户认证系统</strong>
                </td>
                <td>安全访问、编辑和管理个人故事</td>
                <td>
                  <ul>
                    <li>确保数据安全存储与隐私保护</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>首页与引导导航设计</strong>
                </td>
                <td>流畅引导用户完成故事分享流程</td>
                <td>
                  <ul>
                    <li>优化用户体验，提升参与率</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>社区故事展示页</strong>
                </td>
                <td>查看他人经历，获得支持与启发，增强归属感</td>
                <td>
                  <ul>
                    <li>营造以共情为基础的诊断改善文化</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>

          <SubTitle>功能界面展示：</SubTitle>

          <FeatureImageGrid>
            <FeatureImageCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ImageWrapper
                onClick={() =>
                  handleImageClick(homepageImg, "Use Your Voice 首页界面")
                }
              >
                <FeatureImage
                  src={homepageImg}
                  alt="Use Your Voice 首页界面"
                  loading="lazy"
                />
                <ZoomHint className="zoom-hint">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                  </svg>
                  点击查看
                </ZoomHint>
              </ImageWrapper>
              <FeatureImageTitle>首页与引导导航</FeatureImageTitle>
            </FeatureImageCard>
          </FeatureImageGrid>

          <FeatureImageGrid>
            <FeatureImageCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageWrapper
                onClick={() =>
                  handleImageClick(storySubmissionImg, "结构化故事提交系统")
                }
              >
                <FeatureImage
                  src={storySubmissionImg}
                  alt="结构化故事提交系统"
                  loading="lazy"
                />
                <ZoomHint className="zoom-hint">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                  </svg>
                  点击查看
                </ZoomHint>
              </ImageWrapper>
              <FeatureImageTitle>结构化故事提交系统</FeatureImageTitle>
            </FeatureImageCard>
          </FeatureImageGrid>

          <FeatureImageGrid>
            <FeatureImageCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ImageWrapper
                onClick={() =>
                  handleImageClick(privacyControlImg, "可定制隐私设置")
                }
              >
                <FeatureImage
                  src={privacyControlImg}
                  alt="可定制隐私设置"
                  loading="lazy"
                />
                <ZoomHint className="zoom-hint">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                  </svg>
                  点击查看
                </ZoomHint>
              </ImageWrapper>
              <FeatureImageTitle>可定制隐私设置</FeatureImageTitle>
            </FeatureImageCard>
          </FeatureImageGrid>

          <FeatureImageGrid>
            <FeatureImageCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ImageWrapper
                onClick={() =>
                  handleImageClick(myStoriesImg, "我的故事管理页面")
                }
              >
                <FeatureImage
                  src={myStoriesImg}
                  alt="我的故事管理页面"
                  loading="lazy"
                />
                <ZoomHint className="zoom-hint">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                  </svg>
                  点击查看
                </ZoomHint>
              </ImageWrapper>
              <FeatureImageTitle>个人故事管理</FeatureImageTitle>
            </FeatureImageCard>
          </FeatureImageGrid>

          <FeatureImageGrid>
            <FeatureImageCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ImageWrapper
                onClick={() =>
                  handleImageClick(communityStoriesImg, "社区故事展示页")
                }
              >
                <FeatureImage
                  src={communityStoriesImg}
                  alt="社区故事展示页"
                  loading="lazy"
                />
                <ZoomHint className="zoom-hint">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                  </svg>
                  点击查看
                </ZoomHint>
              </ImageWrapper>
              <FeatureImageTitle>社区故事浏览</FeatureImageTitle>
            </FeatureImageCard>
          </FeatureImageGrid>
        </>
      ),
    },
    {
      title: "项目开发流程与方法",
      content: (
        <>
          <p>
            <strong>
              采用敏捷开发（Agile）方法，基于用户反馈、利益相关方需求与技术可行性进行迭代优化。
            </strong>
          </p>

          <SubTitle>目标：</SubTitle>
          <StyledList>
            <li>深入理解患者、医生与研究人员的需求。</li>
            <li>设计一个真正患者友好的数字故事分享平台。</li>
            <li>通过持续测试和反馈，不断打磨核心功能。</li>
            <li>在第5个冲刺（Sprint）结束前交付功能完备的MVP。</li>
          </StyledList>

          <SubTitle>具体方法：</SubTitle>
          <p>需求调研 → 设计原型 → 快速开发 → 用户测试 → 迭代优化</p>
          <MethodImage
            src={methodImg}
            alt="项目开发方法论示意图"
            loading="lazy"
          />

          <SubTitle>关键洞察：</SubTitle>
          <StyledList>
            <li>
              <strong>Sprint 1：</strong>{" "}
              完整绘制了诊断故事流程图，明确隐私设置是用户信任的关键。
            </li>
            <li>
              <strong>Sprint 2：</strong>{" "}
              用户与客户反馈导航不够直观，重新设计了侧边栏并添加了"设置隐私"标签。
            </li>
            <li>
              <strong>Sprint 3：</strong>{" "}
              后端功能和社区模块基本完成，重点加强了安全弹窗与隐私控制。
            </li>
            <li>
              <strong>Sprint 4-5：</strong>{" "}
              统一应用视觉语言，完善筛选器与内容控制功能，实现本地化完整部署测试。
            </li>
          </StyledList>

          <SubTitle>团队进展（Velocity Report）：</SubTitle>
          <p>
            从组建期（Forming）到高效协作期（Performing），不断提升冲刺完成度。
          </p>
          <MethodImage
            src={velocityImg}
            alt="团队进展速度报告"
            loading="lazy"
          />
        </>
      ),
    },
    {
      title: "最终成果",
      content: (
        <>
          <p>
            <strong>
              我们开发了一个以患者为中心、重视隐私、促进社区互动的安全型故事分享平台。
            </strong>
          </p>

          <SubTitle>平台特点：</SubTitle>
          <StyledList>
            <li>结构化故事提交与管理</li>
            <li>完善的隐私设置与认证机制</li>
            <li>社区故事浏览与筛选功能</li>
            <li>响应式设计，适配多设备使用体验</li>
          </StyledList>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SubTitle>演示视频：</SubTitle>
            <VideoContainer ref={videoRef}>
              <DemoVideo src={useYourVoiceDemoVideo} controls />
            </VideoContainer>
          </motion.div>
        </>
      ),
    },
    {
      title: "技术栈",
      content: (
        <TechTable>
          <thead>
            <tr>
              <th>层级</th>
              <th>技术</th>
              <th>作用</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>前端</strong>
              </td>
              <td>React</td>
              <td>构建交互式、响应式用户界面</td>
            </tr>
            <tr>
              <td>
                <strong>后端</strong>
              </td>
              <td>Django</td>
              <td>管理数据处理、认证系统及服务器逻辑</td>
            </tr>
            <tr>
              <td>
                <strong>数据库</strong>
              </td>
              <td>SQLite（开发阶段）/ PostgreSQL（正式环境）</td>
              <td>存储结构化健康叙事和元数据</td>
            </tr>
            <tr>
              <td>
                <strong>部署</strong>
              </td>
              <td>本地（Yarn & Django开发服务器）</td>
              <td>多人环境下MVP功能测试</td>
            </tr>
            <tr>
              <td>
                <strong>设计</strong>
              </td>
              <td>Figma</td>
              <td>原型设计、界面组件及流程设计</td>
            </tr>
            <tr>
              <td>
                <strong>协作</strong>
              </td>
              <td>Jira、GitHub</td>
              <td>敏捷开发流程管理与版本控制</td>
            </tr>
          </tbody>
        </TechTable>
      ),
    },
    {
      title: "项目影响力",
      content: (
        <>
          <p>
            <strong>
              我们的MVP不仅实现了技术可行性验证，也为后续实际应用和医学界推广奠定了基础。
            </strong>
          </p>

          <StyledList>
            <li>
              <strong>成功交付：</strong>{" "}
              本地部署完成，包含完整的患者故事管理和社区交互功能。
            </li>
            <li>
              <strong>以人为本共创过程：</strong>{" "}
              与密歇根医学中心急诊医生、研究人员和患者倡导者密切合作开发。
            </li>
            <li>
              <strong>战略对齐：</strong> 支持密歇根医学中心即将成立的
              <strong>诊断卓越中心（Center for Diagnostic Excellence）</strong>
              的建设目标。
            </li>
            <li>
              <strong>广泛推广潜力：</strong> 平台也将与Alice
              Tapper即将出版的新书推广活动、以及密歇根大学的筹款宣传活动联动，进一步扩大患者故事对医学诊断改进的影响。
            </li>
          </StyledList>
        </>
      ),
    },
    {
      title: "后续展望",
      content: (
        <StyledList>
          <li>持续优化用户界面和体验，确保平台的易用性。</li>
          <li>扩展数据分析功能，为医疗机构提供更多洞察。</li>
          <li>探索与其他医疗机构的合作机会。</li>
          <li>建立更多患者社区互动功能。</li>
        </StyledList>
      ),
    },
  ];

  return (
    <>
      <ProjectNavigation />
      <ImageModal
        isOpen={modalOpen}
        image={modalImage.src}
        alt={modalImage.alt}
        onClose={handleCloseModal}
      />
      <PageWrapper>
        <ContentWrapper>
          <Banner>
            <BannerImage src={umsiImg} alt="UMSI Logo" />
            <BannerContent>
              <TextGroup>
                <Title
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Use Your Voice
                </Title>
                <Subtitle>诊断故事分享平台</Subtitle>
              </TextGroup>
              <ButtonGroup>
                <Button
                  href="http://lxzx.my.to:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  项目网站
                </Button>
                <Button href="#video" onClick={scrollToVideo}>
                  视频演示
                </Button>
                <Button href="#poster" onClick={scrollToPoster}>
                  项目海报
                </Button>
                <Button
                  href="https://github.com/Linus-XZX/UseYourVoice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub源码
                </Button>
              </ButtonGroup>
            </BannerContent>
          </Banner>

          {sections.map((section, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SectionTitle>{section.title}</SectionTitle>
              <Content>{section.content}</Content>
            </Card>
          ))}

          <PosterSection ref={posterRef} id="poster">
            <PosterTitle>项目海报</PosterTitle>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <PosterImage
                src={userYourVoiceImg}
                alt="Use Your Voice Project Poster"
                loading="lazy"
              />
            </motion.div>
          </PosterSection>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

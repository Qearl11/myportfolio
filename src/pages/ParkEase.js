import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Typography, Container, Dialog, DialogContent } from "@mui/material";
import ProjectNavigation from "../components/ProjectNavigation";
import parkeaseDemoVideo from "../assets/parkeasedemo.mp4";
import parkeaselogo from "../assets/parkeaselogo.png";

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
    padding-top: 4rem; /* 减小顶部内边距，使内容向上移动 */
  }
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
  padding-top: 0.5rem; /* 添加顶部内边距，使 logo 向下移动 */

  img {
    height: 120px;
    width: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.25rem; /* 减小底部边距 */
    padding-top: 0; /* 在移动端移除顶部内边距 */

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
  padding-top: 2rem; /* 增加顶部内边距，使文字向下移动 */
  max-width: 500px; /* 限制内容宽度，使整体看起来更居中 */

  @media (max-width: 768px) {
    text-align: center;
    min-height: auto;
    padding: 0;
    gap: 0.5rem; /* 减小内部元素间距 */
    margin-top: -0.25rem; /* 减小顶部负边距 */
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
  color: #5d3fd3;
  text-shadow: 0 2px 4px rgba(93, 63, 211, 0.1);
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 4rem;
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

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin: 0;
  background: #8a63d2;
  color: white;
  text-decoration: none;
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

const Card = styled(motion.div)`
  background: #fdf6ed;
  padding: 1.75rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 2rem 0 1rem;
  font-weight: 600;
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
      color: #8a63d2;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const PersonaCard = styled.div`
  background: #fdf6ed;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem 0;
  border-left: 4px solid #8a63d2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const PersonaTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FlowStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #8a63d2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const StepText = styled.div`
  flex: 1;
`;

const CompetitorTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #fdf6ed;
    font-weight: 600;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.div`
  background: #fdf6ed;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  border-left: 3px solid #8a63d2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const FeatureIcon = styled.span`
  font-size: 1.2rem;
`;

const VideoDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 12px;
    overflow: hidden;
    max-width: 90vw;
    max-height: 90vh;
  }
`;

const VideoContent = styled(DialogContent)`
  padding: 0;
  background: #000;

  video {
    width: 100%;
    height: auto;
    max-height: 90vh;
    display: block;
  }
`;

export default function ParkEase() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    // 立即滚动到顶部，不使用平滑滚动以确保即时效果
    window.scrollTo(0, 0);
  }, []); // 仅在组件挂载时执行

  const handleOpenVideo = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setVideoOpen(false);
  };

  const sections = [
    {
      title: "项目简介",
      content: (
        <>
          <StyledList>
            <li>ParkEase是一个智能停车管理系统，旨在解决城市停车难题。</li>
            <li>
              <strong>项目名称：</strong> ParkEase：智能停车管理系统
            </li>
            <li>
              <strong>课程项目：</strong> SI 582 | 密歇根大学信息学院（UMSI）
            </li>
            <li>
              <strong>使用工具：</strong> Adobe XD，Figma
            </li>
          </StyledList>

          <div style={{ marginTop: "1.5rem" }}>
            <ButtonGroup>
              <Button href="#" onClick={handleOpenVideo}>
                项目演示
              </Button>
            </ButtonGroup>
          </div>
        </>
      ),
    },
    {
      title: "项目背景与设计挑战",
      content: (
        <>
          <p>Ann Arbor 作为大学城，停车紧张成为常态：</p>

          <StyledList>
            <li>驾驶者经常需要花费大量时间寻找停车位</li>
            <li>导致交通拥堵和碳排放增加</li>
            <li>缺乏实时信息，用户体验混乱，情绪焦虑</li>
          </StyledList>

          <SubTitle>设计挑战：</SubTitle>
          <p>
            如何设计一款能够实时显示空余停车位、支持预约、简化导航支付、并且关怀特殊用户群体的移动应用？
          </p>
        </>
      ),
    },
    {
      title: "用户需求与痛点分析",
      content: (
        <>
          <p>
            <strong>从用户访谈总结出的核心痛点：</strong>
          </p>

          <StyledList>
            <li>
              <strong>实时性：</strong>
              现有应用信息更新慢，导致"明明显示有空位，到场却没有"的挫败体验。
            </li>
            <li>
              <strong>预约保障：</strong>
              希望提前预约车位，但担心取消政策、退款保障及实际被他人占用的问题。
            </li>
            <li>
              <strong>导航支持：</strong>
              希望通过一款应用完成从找车位、预定到现场导航，不想切换多应用。
            </li>
            <li>
              <strong>价格透明：</strong>在决策时希望能看到停车费用并比较。
            </li>
            <li>
              <strong>无障碍需求：</strong>
              部分用户有残障通行需求，希望能明确知道是否有可用无障碍停车位。
            </li>
          </StyledList>
        </>
      ),
    },
    {
      title: "Persona设计",
      content: (
        <>
          <PersonaCard>
            <PersonaTitle>Emma（学生用户）</PersonaTitle>
            <StyledList>
              <li>
                <strong>目标：</strong>快速找到靠近教室的停车位，避免迟到
              </li>
              <li>
                <strong>痛点：</strong>高峰期停车场爆满，传统方法浪费时间
              </li>
              <li>
                <strong>使用场景：</strong>
                利用ParkEase查询实时空位，提前预约次要停车场并导航到位
              </li>
            </StyledList>
          </PersonaCard>

          <PersonaCard>
            <PersonaTitle>David（残障人士用户）</PersonaTitle>
            <StyledList>
              <li>
                <strong>目标：</strong>确保能够提前预约无障碍停车位
              </li>
              <li>
                <strong>痛点：</strong>传统停车极易因缺乏无障碍位而受阻
              </li>
              <li>
                <strong>使用场景：</strong>
                在看剧院演出前，通过ParkEase预定近场的无障碍车位，顺利出行
              </li>
            </StyledList>
          </PersonaCard>
        </>
      ),
    },
    {
      title: "用户流程设计",
      content: (
        <>
          <p>根据需求，整体用户流程如下：</p>

          <div style={{ marginTop: "1.5rem" }}>
            <FlowStep>
              <StepNumber>1</StepNumber>
              <StepText>登录/游客进入</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>2</StepNumber>
              <StepText>填写车辆信息（是否需要无障碍支持）</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>3</StepNumber>
              <StepText>搜索目的地</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>4</StepNumber>
              <StepText>浏览停车场列表与地图</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>5</StepNumber>
              <StepText>选择停车场楼层、具体车位</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>6</StepNumber>
              <StepText>设定停车时段</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>7</StepNumber>
              <StepText>完成预约并在线支付</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>8</StepNumber>
              <StepText>导航至预定车位</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>9</StepNumber>
              <StepText>到达确认，可追加停车时间或取消预约</StepText>
            </FlowStep>
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            流程设计注重信息透明、操作流畅、随时退出自由。
          </p>
        </>
      ),
    },
    {
      title: "竞品分析总结",
      content: (
        <>
          <CompetitorTable>
            <thead>
              <tr>
                <th>对手</th>
                <th>优势</th>
                <th>劣势</th>
                <th>启发</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>ePark</strong>
                </td>
                <td>支持多种支付方式，记录停车历史</td>
                <td>无法提前确认车位空位，且只支持街边停车</td>
                <td>支付体验需无缝集成</td>
              </tr>
              <tr>
                <td>
                  <strong>Ticketmaster</strong>
                </td>
                <td>强大可视化地图选座交互</td>
                <td>移动端屏幕小导致地图混乱</td>
                <td>停车位选择页面需保持清晰简洁</td>
              </tr>
              <tr>
                <td>
                  <strong>ParkMe</strong>
                </td>
                <td>实时车位数量展示</td>
                <td>数据准确性差，不显示具体车位位置</td>
                <td>需保证数据精准且细化到楼层/车位</td>
              </tr>
            </tbody>
          </CompetitorTable>

          <p>
            <strong>我们的设计优化：</strong>
            <br />
            结合各家优点，避免不足，强调实时数据+细致楼层信息+一站式体验。
          </p>
        </>
      ),
    },
    {
      title: "功能架构与设计亮点",
      content: (
        <>
          <SubTitle>完整功能列表</SubTitle>
          <FeatureList>
            <FeatureItem>
              <div>账户管理（登录/游客模式）</div>
            </FeatureItem>
            <FeatureItem>
              <div>车辆信息注册（含无障碍证上传）</div>
            </FeatureItem>
            <FeatureItem>
              <div>目的地搜索与停车场选择</div>
            </FeatureItem>
            <FeatureItem>
              <div>实时可用车位信息展示</div>
            </FeatureItem>
            <FeatureItem>
              <div>停车位预约与取消</div>
            </FeatureItem>
            <FeatureItem>
              <div>导航至具体车位（支持AR导航）</div>
            </FeatureItem>
            <FeatureItem>
              <div>到达确认与延时加时</div>
            </FeatureItem>
            <FeatureItem>
              <div>多方式支付（Venmo, PayPal, Credit Card）</div>
            </FeatureItem>
          </FeatureList>

          <SubTitle>核心设计亮点</SubTitle>
          <StyledList>
            <li>
              <strong>实时性极高：</strong>停车信息分钟级更新，减少无效导航。
            </li>
            <li>
              <strong>预约+导航一体化：</strong>从预约到到达全流程一站完成。
            </li>
            <li>
              <strong>无障碍友好：</strong>无障碍停车证上传审核，提供定向推荐。
            </li>
            <li>
              <strong>视觉引导友好：</strong>
              界面极简、操作引导明确，支持错误修正（如取消预约、延时支付）。
            </li>
          </StyledList>
        </>
      ),
    },
    {
      title: "设计迭代与用户测试反馈",
      content: (
        <>
          <SubTitle>问题发现：</SubTitle>
          <StyledList>
            <li>残障选项用词过于生硬</li>
            <li>预约填写时间段界面复杂</li>
            <li>缺少取消退款机制提示</li>
            <li>车位指引不够清晰</li>
          </StyledList>

          <SubTitle>设计改进：</SubTitle>
          <StyledList>
            <li>修改问询用语为"是否需要无障碍支持"</li>
            <li>时间选择简化为预设时段</li>
            <li>明确取消与退款提示</li>
            <li>在导航中增加车位编号与楼层提示，减少迷路可能</li>
          </StyledList>
        </>
      ),
    },
    {
      title: "预期影响与展望",
      content: (
        <>
          <SubTitle>预期成果：</SubTitle>
          <StyledList>
            <li>平均停车时间下降约30%</li>
            <li>无障碍用户停车体验显著提升</li>
            <li>停车资源利用率提升，交通拥堵下降</li>
          </StyledList>

          <SubTitle>未来展望：</SubTitle>
          <StyledList>
            <li>引入更精细的AR实景导航体验</li>
            <li>推出动态定价系统，根据高峰时段调节预约费用</li>
            <li>与城市停车管理系统进一步整合，实现数据闭环</li>
          </StyledList>
        </>
      ),
    },
  ];

  return (
    <>
      <ProjectNavigation />
      <PageWrapper>
        <ContentWrapper>
          <Banner>
            <LogoContainer>
              <img src={parkeaselogo} alt="ParkEase Logo" />
            </LogoContainer>
            <BannerContent>
              <TextGroup>
                <Title
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  ParkEase
                </Title>
                <Subtitle>智能停车管理系统</Subtitle>
              </TextGroup>
              {/* <ButtonGroup>
                <Button
                  href="#"
                  onClick={handleOpenVideo}
                >
                  项目演示
                </Button>
              </ButtonGroup> */}
            </BannerContent>
          </Banner>

          {sections.map((section, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600, color: "#333" }}
              >
                {section.title}
              </Typography>
              {section.content}
            </Card>
          ))}

          <VideoDialog
            open={videoOpen}
            onClose={handleCloseVideo}
            aria-labelledby="demo-video-dialog"
            maxWidth="lg"
            fullWidth
          >
            <VideoContent>
              <video controls autoPlay>
                <source src={parkeaseDemoVideo} type="video/mp4" />
                您的浏览器不支持视频标签。
              </video>
            </VideoContent>
          </VideoDialog>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

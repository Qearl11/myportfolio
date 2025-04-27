import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';
import userYourVoiceImg from '../assets/useryourvoice.png';
import ProjectNavigation from '../components/ProjectNavigation';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f5ff 0%, #fff 100%);
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
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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
    content: '';
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
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  
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

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  background: ${props => props.color || '#f0f7ff'};
  color: ${props => props.textColor || '#007AFF'};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ContentWrapper = styled(Container)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 20px;
`;

const Banner = styled.div`
  background: #00274C;
  color: white;
  padding: 1.75rem 2rem 2.25rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    pointer-events: none;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  color: #FFCB05;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 500;
  color: rgba(255,255,255,0.95);
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

const Card = styled(motion.div)`
  background: white;
  padding: 1.75rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0,0,0,0.05);
  
  &:hover {
    box-shadow: 0 6px 24px rgba(0,0,0,0.06);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Button = styled.a`
  background: #FFCB05;
  color: #00274C;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: #ffd333;
    transform: translateY(-2px);
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
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-top: 1rem;
`;

const PosterTitle = styled.h2`
  font-size: 1.5rem;
  color: #00274C;
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
  border-left: 4px solid #FFCB05;
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
  
  th, td {
    padding: 1rem;
    border: 1px solid #e0e0e0;
    vertical-align: top;
  }
  
  th {
    background: #f5f5f5;
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
    background: #f8f8f8;
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
      color: #FFCB05;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

export default function UseYourVoiceProject() {
  const posterRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);  // 组件加载时滚动到顶部
  }, []);

  const scrollToPoster = (e) => {
    e.preventDefault();
    const navbarHeight = 64; // 导航栏的高度
    const padding = 20; // 额外的间距
    const yOffset = -(navbarHeight + padding); // 确保标题在导航栏下方有一定间距
    const element = posterRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const sections = [
    {
      title: "📎 项目简介",
      content: (
        <StyledList>
          <li>为密歇根医学急诊科设计的患者故事分享平台。作为7人团队负责人，主导产品规划、用户研究和功能开发。</li>
          <li><strong>项目名称：</strong> Use Your Voice：以患者为中心的诊断故事分享平台</li>
          <li><strong>时间线：</strong> 2025年1月 - 2025年4月</li>
          <li><strong>课程项目：</strong> SI 699 | 密歇根大学信息学院（UMSI）</li>
          <li><strong>客户：</strong> 密歇根医学中心急诊科</li>
          <li><strong>使用工具：</strong> Figma、React、Django、Jira、Zoom</li>
        </StyledList>
      )
    },
    {
      title: "🎯 项目背景与问题陈述",
      content: (
        <>
          <p>本项目由密歇根医学中心急诊科联合Tapper家族发起，旨在通过患者叙事改善急诊诊断的准确性与安全性，灵感来源于Alice Tapper的真实经历。诊断延误和误诊带来了严重后果，全球每年因此造成近万亿美元的额外医疗开支。</p>
          <p><strong>核心问题：如何提升诊断准确性和安全性，以改善患者结局并优化医疗资源？</strong></p>
        </>
      )
    },
    {
      title: "👥 目标用户与痛点分析",
      content: (
        <>
          <h4>目标用户群体</h4>
          <StyledList>
            <li><strong>患者及其家属：</strong> 曾经历延误、误诊或成功诊断的患者，希望通过分享故事帮助他人。</li>
            <li><strong>临床医生与医疗工作者：</strong> 希望从患者角度了解诊断过程，提升诊断准确性的专业人士。</li>
            <li><strong>研究人员与行政人员：</strong> 研究诊断错误并基于真实患者故事设计干预措施的人员。</li>
          </StyledList>

          <h4>主要痛点</h4>
          <StyledList>
            <li>
              <strong>😶 在诊断过程中缺乏发声机会</strong>
              <p>患者常常感觉自己的声音没有被倾听，特别是在误诊或延误发生时，情感与身体创伤缺乏应有的重视。</p>
            </li>
            <li>
              <strong>🔐 隐私与信任担忧</strong>
              <p>许多人担心分享健康故事可能泄露隐私或遭受评判。</p>
            </li>
            <li>
              <strong>🧭 难以在复杂医疗体系中找到表达渠道</strong>
              <p>当前的医疗系统缺乏便捷直观的方式，供患者反思和记录自己的诊断经历。</p>
            </li>
          </StyledList>

          <h4>用户反馈</h4>
          <blockquote>
            <p>"没有孩子应该因为常见疾病的误诊或延误而遭受痛苦。"</p>
            <footer>—— Jake & Jennifer Tapper</footer>
          </blockquote>
          <blockquote>
            <p>"及时得出正确诊断是患者与医疗提供者每一次互动中最基本的要求。"</p>
            <footer>—— 密歇根医学中心急诊科</footer>
          </blockquote>
        </>
      )
    },
    {
      title: "✨ 核心功能",
      content: (
        <Table>
          <thead>
            <tr>
              <th>✅ 核心功能</th>
              <th>👤 满足的用户需求</th>
              <th>🎯 实现的客户目标</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>结构化故事提交系统</strong></td>
              <td>提供便捷方式分享诊断旅程，用户可自主控制故事发布</td>
              <td>
                <ul>
                  <li>建立可搜索的患者故事库</li>
                  <li>支持研究数据收集</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>可定制隐私设置</strong></td>
              <td>自由设置可见范围，安全分享敏感健康信息</td>
              <td>
                <ul>
                  <li>确保符合HIPAA隐私合规标准</li>
                  <li>获得用户信任</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>故事搜索与筛选系统</strong></td>
              <td>按分类、日期、诊断阶段快速查找相关故事</td>
              <td>
                <ul>
                  <li>帮助研究人员和临床人员提取有价值数据</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>用户认证系统</strong></td>
              <td>安全访问、编辑和管理个人故事</td>
              <td>
                <ul>
                  <li>确保数据安全存储与隐私保护</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>首页与引导导航设计</strong></td>
              <td>流畅引导用户完成故事分享流程</td>
              <td>
                <ul>
                  <li>优化用户体验，提升参与率</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>社区故事展示页</strong></td>
              <td>查看他人经历，获得支持与启发，增强归属感</td>
              <td>
                <ul>
                  <li>营造以共情为基础的诊断改善文化</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      )
    },
    {
      title: "🛠️ 项目开发流程与方法",
      content: (
        <>
          <p><strong>采用敏捷开发（Agile）方法，基于用户反馈、利益相关方需求与技术可行性进行迭代优化。</strong></p>
          
          <SubTitle>目标：</SubTitle>
          <StyledList>
            <li>深入理解患者、医生与研究人员的需求。</li>
            <li>设计一个真正患者友好的数字故事分享平台。</li>
            <li>通过持续测试和反馈，不断打磨核心功能。</li>
            <li>在第5个冲刺（Sprint）结束前交付功能完备的MVP。</li>
          </StyledList>

          <SubTitle>具体方法：</SubTitle>
          <p>需求调研 → 设计原型 → 快速开发 → 用户测试 → 迭代优化</p>

          <SubTitle>关键洞察：</SubTitle>
          <StyledList>
            <li><strong>Sprint 1：</strong> 完整绘制了诊断故事流程图，明确隐私设置是用户信任的关键。</li>
            <li><strong>Sprint 2：</strong> 用户与客户反馈导航不够直观，重新设计了侧边栏并添加了"设置隐私"标签。</li>
            <li><strong>Sprint 3：</strong> 后端功能和社区模块基本完成，重点加强了安全弹窗与隐私控制。</li>
            <li><strong>Sprint 4-5：</strong> 统一应用视觉语言，完善筛选器与内容控制功能，实现本地化完整部署测试。</li>
          </StyledList>

          <SubTitle>团队进展（Velocity Report）：</SubTitle>
          <p>从组建期（Forming）到高效协作期（Performing），不断提升冲刺完成度。</p>
        </>
      )
    },
    {
      title: "🎉 最终成果",
      content: (
        <>
          <p><strong>我们开发了一个以患者为中心、重视隐私、促进社区互动的安全型故事分享平台。</strong></p>
          
          <SubTitle>平台特点：</SubTitle>
          <StyledList>
            <li>结构化故事提交与管理</li>
            <li>完善的隐私设置与认证机制</li>
            <li>社区故事浏览与筛选功能</li>
            <li>响应式设计，适配多设备使用体验</li>
          </StyledList>
        </>
      )
    },
    {
      title: "🖥️ 技术栈",
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
              <td><strong>前端</strong></td>
              <td>React</td>
              <td>构建交互式、响应式用户界面</td>
            </tr>
            <tr>
              <td><strong>后端</strong></td>
              <td>Django</td>
              <td>管理数据处理、认证系统及服务器逻辑</td>
            </tr>
            <tr>
              <td><strong>数据库</strong></td>
              <td>SQLite（开发阶段）/ PostgreSQL（正式环境）</td>
              <td>存储结构化健康叙事和元数据</td>
            </tr>
            <tr>
              <td><strong>部署</strong></td>
              <td>本地（Yarn & Django开发服务器）</td>
              <td>多人环境下MVP功能测试</td>
            </tr>
            <tr>
              <td><strong>设计</strong></td>
              <td>Figma</td>
              <td>原型设计、界面组件及流程设计</td>
            </tr>
            <tr>
              <td><strong>协作</strong></td>
              <td>Jira、GitHub</td>
              <td>敏捷开发流程管理与版本控制</td>
            </tr>
          </tbody>
        </TechTable>
      )
    },
    {
      title: "💡 项目影响力",
      content: (
        <>
          <p><strong>我们的MVP不仅实现了技术可行性验证，也为后续实际应用和医学界推广奠定了基础。</strong></p>
          
          <StyledList>
            <li>
              <strong>🎯 成功交付：</strong> 本地部署完成，包含完整的患者故事管理和社区交互功能。
            </li>
            <li>
              <strong>🤝 以人为本共创过程：</strong> 与密歇根医学中心急诊医生、研究人员和患者倡导者密切合作开发。
            </li>
            <li>
              <strong>📈 战略对齐：</strong> 支持密歇根医学中心即将成立的<strong>诊断卓越中心（Center for Diagnostic Excellence）</strong>的建设目标。
            </li>
            <li>
              <strong>📚 广泛推广潜力：</strong> 平台也将与Alice Tapper即将出版的新书推广活动、以及密歇根大学的筹款宣传活动联动，进一步扩大患者故事对医学诊断改进的影响。
            </li>
          </StyledList>
        </>
      )
    },
    {
      title: "💡 后续展望",
      content: (
        <StyledList>
          <li>持续优化用户界面和体验，确保平台的易用性。</li>
          <li>扩展数据分析功能，为医疗机构提供更多洞察。</li>
          <li>探索与其他医疗机构的合作机会。</li>
          <li>建立更多患者社区互动功能。</li>
        </StyledList>
      )
    }
  ];

  return (
    <>
      <ProjectNavigation />
      <PageWrapper>
        <ContentWrapper>
          <Banner>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Use Your Voice
            </Title>
            <Subtitle>诊断故事分享平台</Subtitle>
            <ButtonGroup>
              <Button
                href="https://github.com/Linus-XZX/UseYourVoice"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub源码
              </Button>
              <Button
                href="#poster"
                onClick={scrollToPoster}
              >
                项目海报
              </Button>
              <Button
                href="http://lxzx.my.to:3000/"
                target="_blank"
                rel="noopener noreferrer"
              >
                项目网站
              </Button>
            </ButtonGroup>
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

import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn } from '@mui/icons-material';

const ResumeSection = styled.section`
  padding: 120px 0 60px;
  background: #fff;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled(Typography)`
  font-weight: 600;
  color: #007AFF;
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: #007AFF;
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #007AFF;
  }
`;

const Company = styled(Typography)`
  font-weight: 600;
  color: #333;
`;

const Period = styled(Typography)`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Description = styled(Typography)`
  color: #444;
  line-height: 1.6;
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #f0f7ff;
  color: #007AFF;
  border-radius: 20px;
  font-size: 0.9rem;
  margin: 0.25rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  margin-bottom: 0.5rem;
  
  svg {
    font-size: 1.2rem;
    color: #007AFF;
  }
`;

const Resume = () => {
  return (
    <ResumeSection>
      <Container maxWidth="md">
        {/* 个人信息 */}
        <Section>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            王雪纯
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: '#666', marginBottom: 3 }}>
            产品经理 / UX设计师
          </Typography>
          <Box mb={3}>
            <ContactInfo>
              <Email />
              <Typography>xuechun@umich.edu</Typography>
            </ContactInfo>
            <ContactInfo>
              <Phone />
              <Typography>(+1)7348828356 / (+86)18009699186 (EST, 时差-12h)</Typography>
            </ContactInfo>
            {/* <ContactInfo>
              <LinkedIn />
              <Typography>LinkedIn</Typography>
            </ContactInfo> */}
          </Box>
        </Section>

        {/* 教育背景 */}
        <Section>
          <SectionTitle variant="h5">教育背景</SectionTitle>
          <TimelineItem>
            <Company>密歇根大学，信息学院</Company>
            <Period>08/2023 - 12/2025</Period>
            <Description>
              信息学理学硕士（人机交互与UX设计方向）| GPA: 3.93<br />
              课程: 产品管理、交互设计、网页设计:响应性与可访问性、数据库应用设计、构建交互式应用、服务器、Shell 和 Git、平面设计与视觉传达
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>圣安德鲁斯大学, 计算机科学学院与管理学院</Company>
            <Period>09/2022 - 08/2023</Period>
            <Description>
              信息技术与管理硕士(with Merit)
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>利物浦大学 (UoL), 计算机科学学院</Company>
            <Period>09/2019 - 06/2022</Period>
            <Description>
              金融计算机荣誉理学士（一等）
            </Description>
          </TimelineItem>
        </Section>

        {/* 工作经历 */}
        <Section>
          <SectionTitle variant="h5">工作经历</SectionTitle>
          <TimelineItem>
            <Company>科大讯飞 - 产品经理实习</Company>
            <Period>08/2024 - 12/2024</Period>
            <Description>
              • 参与RPA产品的核心功能设计，包括原子能力模块、CV拾取功能，并撰写PRD文档<br />
              • 参与RPA设计器机器人页面功能的规划及设计，进行竞品分析调研，推动模块功能优化以提升用户体验<br />
              • 布置并参与公司1024展会，搭建产品演示框架，向参观者展示RPA产品的关键应用场景，提升产品曝光度和市场认知度
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>湖南广播电视台 - 导演组实习</Company>
            <Period>04/2021 - 12/2021</Period>
            <Description>
              • 跟踪部门节目质量和进度，及时了解制作部门的工作动态，沟通协调并解决节目中出现的问题<br />
              • 协助嘉宾安排和拍摄广告以及整理观众相关数据<br />
              • 制定应急预案和成本控制计划，以应对突发录制事故
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>中国工商银行 - 分析实习生</Company>
            <Period>06/2020 - 08/2020</Period>
            <Description>
              • 协助经理完成数据收集要求和简单的数据分析,输出数据分析报告
            </Description>
          </TimelineItem>
        </Section>

        {/* 项目经验 */}
        <Section>
          <SectionTitle variant="h5">研究与项目</SectionTitle>
          <TimelineItem>
            <Company>Use Your Voice诊断故事分享平台 | 密歇根医学急诊科</Company>
            <Period>01/2025 - 04/2025</Period>
            <Description>
              • 领导由7人组成的跨职能团队，构建一个以患者为核心的诊断故事平台，提升诊断准确性<br />
              • 基于用户访谈和客户反馈制定产品路线图与功能优先级，明确MVP交付目标<br />
              • 主持敏捷开发流程，包括sprint规划、站会与回顾，使用Jira保持团队协作透明<br />
              • 使用React和Django构建平台核心功能，包括故事提交流程、可配置隐私控制和完整用户认证系统
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>ParkEase APP设计 | 密歇根大学</Company>
            <Period>09/2023 - 12/2023</Period>
            <Description>
              • 通过用户调研分析城市停车痛点，构思并设计了一款用户友好型实时停车应用程序<br />
              • 负责线框图和交互原型设计，使用Adobe XD构建UI界面，通过迭代用户测试优化完善应用程序的界面和功能
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>StoryScape App设计 | 密歇根大学</Company>
            <Period>09/2023 - 12/2023</Period>
            <Description>
              • 负责家长访谈与市场调研，针对家长教育质量与屏幕时间之间的矛盾，打造适用于0-10岁儿童的可定制互动视频APP<br />
              • 主导亲子互动视频模块设计，引入个性化故事定制机制，使用Figma设计产品原型，优化用户体验
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>有色孤儿院的3D重建 | 圣安德鲁斯大学</Company>
            <Period>05/2023 - 08/2023</Period>
            <Description>
              • 研究有色人种孤儿院的历史和图像，并收集用户评估调查<br />
              • 使用Blender创建三维模型，并使用unreal5创建有色孤儿院的景观<br />
              • 创建网站，介绍有色人种孤儿院和3D重建项目
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>学术研究助理 | 波士顿大学</Company>
            <Period>06/2022 - 08/2022</Period>
            <Description>
              • 参与基于Twitter的公司风险事件缓解项目<br />
              • 负责数据预处理，以补偿缺失值、识别异常值和标准化变量
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>自动旅行助手 APP | 电子商务小组项目, 利物浦大学</Company>
            <Period>02/2020 - 05/2020</Period>
            <Description>
              • 主导APP需求分析与功能规划，围绕用户时间与预算设计个性化自驾游路线推荐系统，并通过Google Maps可视化路线展示<br />
              • 从内部数据库整合城市和景点信息，确保用户能精准查询目的地，基于用户评分系统量化景点吸引力，优化推荐算法<br />
              • 设计并实现用户评论系统，使用户能够对行程计划进行反馈与调整，提升个性化推荐效果
            </Description>
          </TimelineItem>
        </Section>

        {/* 技能特长 */}
        <Section>
          <SectionTitle variant="h5">技能</SectionTitle>
          <Box mb={2}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>技术:</Typography>
            <Box>
              <SkillTag>JavaScript</SkillTag>
              <SkillTag>HTML5</SkillTag>
              <SkillTag>CSS3</SkillTag>
              <SkillTag>Django</SkillTag>
              <SkillTag>React</SkillTag>
              <SkillTag>Python</SkillTag>
              <SkillTag>R</SkillTag>
              <SkillTag>Java</SkillTag>
              <SkillTag>SQL</SkillTag>
              <SkillTag>Git</SkillTag>
              <SkillTag>Linux</SkillTag>
              <SkillTag>Tableau</SkillTag>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>设计:</Typography>
            <Box>
              <SkillTag>Figma</SkillTag>
              <SkillTag>Photoshop</SkillTag>
              <SkillTag>Adobe Illustrator</SkillTag>
              <SkillTag>Adobe XD</SkillTag>
              <SkillTag>Unreal Engine</SkillTag>
              <SkillTag>Blender</SkillTag>
            </Box>
          </Box>
        </Section>

        {/* 活动经历 */}
        <Section>
          <SectionTitle variant="h5">活动</SectionTitle>
          <TimelineItem>
            <Company>Peer Mentor | 利物浦大学, 计算机科学系</Company>
            <Period>09/2021 - 05/2022</Period>
            <Description>
              为低年级学生提供学术支持
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>利物浦大学 华人会</Company>
            <Period>11/2020 - 06/2021</Period>
            <Description>
              组织校园活动并推广中国文化
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>加州大学伯克利分校，夏校</Company>
            <Period>06/2018 - 08/2018</Period>
            <Description>
              学习宏观经济和K-8教学课程
            </Description>
          </TimelineItem>
        </Section>
      </Container>
    </ResumeSection>
  );
};

export default Resume;

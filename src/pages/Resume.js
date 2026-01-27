import React from "react";
import styled from "styled-components";
import { Container, Typography, Box } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

const ResumeSection = styled.section`
  padding: 120px 0 60px;
  background: #fdf6ed;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled(Typography)`
  font-weight: 600;
  color: #58527c;
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: #9e89a0;
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #9e89a0;
  }
`;

const Company = styled(Typography)`
  font-weight: 600;
  color: #58527c;
`;

const Period = styled(Typography)`
  color: #58527c;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Description = styled(Typography)`
  color: #58527c;
  line-height: 1.6;
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #f5f0f7;
  color: #58527c;
  border-radius: 20px;
  font-size: 0.9rem;
  margin: 0.25rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #58527c;
  margin-bottom: 0.5rem;

  svg {
    font-size: 1.2rem;
    color: #9e89a0;
  }
`;

const Resume = () => {
  return (
    <ResumeSection>
      <Container maxWidth="md">
        {/* 个人信息 */}
        <Section>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 700, color: "#58527C" }}
          >
            王雪纯
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#58527C", marginBottom: 3 }}
          >
            产品经理
          </Typography>
          <Box mb={3}>
            <ContactInfo>
              <Email />
              <Typography>xuechun@umich.edu</Typography>
            </ContactInfo>
            <ContactInfo>
              <Phone />
              <Typography>
                (+1)7348828356 / (+86)18009699186 (EST, 时差-12h)
              </Typography>
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
              信息学理学硕士（人机交互与UX设计方向）| GPA: 3.93
              <br />
              课程:
              产品管理、交互设计、网页设计:响应性与可访问性、数据库应用设计、构建交互式应用、平面设计与视觉传达等
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>圣安德鲁斯大学, 计算机科学学院与管理学院</Company>
            <Period>09/2022 - 08/2023</Period>
            <Description>信息技术与管理硕士(with Merit)</Description>
          </TimelineItem>
          <TimelineItem>
            <Company>利物浦大学 (UoL), 计算机科学学院</Company>
            <Period>09/2019 - 06/2022</Period>
            <Description>金融计算机荣誉理学士（一等）</Description>
          </TimelineItem>
        </Section>

        {/* 工作经历 */}
        <Section>
          <SectionTitle variant="h5">工作经历</SectionTitle>
          <TimelineItem>
            <Company>AI产品经理 | HIPOND</Company>
            <Period>10/2025 - 至今</Period>
            <Description>
              •
              主导留学生二手交易平台的AI智能化转型升级，针对用户发布闲置物品流程繁琐、信息录入负担重的痛点，设计并落地“AI一键批量识图发帖”功能，产出核心PRD文档与交互原型。
              <br />
              •
              基于AI图像识别与NLP技术优化发帖链路：用户仅需上传照片，系统即可自动识别商品并生成标题、定价建议与描述，支持多商品批量处理并一键发布，显著降低发帖门槛并提升内容产出效率。
              <br />•
              针对买家找货效率低、供需难以闭环的问题，设计AI智能导购助手，支持自然语言搜索与智能匹配，构建供需智能撮合系统，在新出售帖发布时自动匹配高相关求购需求并触发双向通知，缩短交易路径并提升成交转化率。
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>产品经理实习 | 科大讯飞</Company>
            <Period>06/2025 - 09/2025</Period>
            <Description>
              •
              主导短剧翻译平台的核心功能设计（字幕翻译与编辑、AI配音、音色克隆、口型对齐、字幕擦除、字幕编组及项目管理），产出PRD文档与交互原型，满足了短剧出海业务的多语种本地化需求，支持
              MVP 快速上线并应用于客户演示。
              <br />
              •
              通过调研明确了传统人工翻译与配音效率低、成本高和音色不稳定等痛点，引入
              AI
              配音，音色克隆和字幕编组功能，显著降低了短剧翻译的制作门槛，提升了观众的沉浸式观看体验。
              <br />•
              编写产品说明文档以支持产品宣传推广，帮助B端客户快速理解产品价值，加速业务拓展与产品市场化落地。
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>产品经理实习 | 科大讯飞</Company>
            <Period>08/2024 - 12/2024</Period>
            <Description>
              •
              参与RPA产品核心功能设计，完成竞品分析并产出3篇调研报告，明确产品功能与主要竞品的差异化优势，产出PRD文档5篇并参与评审，推动功能优化与产品迭代，改善了用户在自动化办公场景下的使用体验。
              <br />
              •
              针对图像拾取准确率低的问题，提出并推动锚点方案，在原拾取功能上引入锚点概念，显著提升了图像识别准确率和任务执行的稳定性。
              <br />
              •
              明确流程开发中用户频繁依赖外部Excel处理结构化数据从而增加了数据流转复杂性的问题，设计并推动内置轻量可视化数据表格功能，在流程中支持表格数据读写、导入导出等，显著提升了开发效率和稳定性。
              <br />
              •
              面对系统操作和用户行为不可追溯、审计难的痛点，在审计日志中引入日志告警和统计报表功能，显著提高了系统审计效率和合规留痕能力。
              <br />•
              布置并参与公司产品展会，搭建产品演示框架，向潜在客户展示产品的典型应用场景（财务报表处理、数据录入自动化），提升了产品曝光度和市场认知度。
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>导演组实习 | 湖南广播电视台</Company>
            <Period>04/2021 - 12/2021</Period>
            <Description>
              •
              跟踪部门节目质量和进度，沟通协调执行、道具、艺人统筹多个部门，制定应急预案和成本控制计划，实时监控进度并及时解决突发录制事故。协助嘉宾安排和拍摄广告以及整理观众相关数据。
            </Description>
          </TimelineItem>
        </Section>

        {/* 项目经验 */}
        <Section>
          <SectionTitle variant="h5">研究与项目</SectionTitle>
          <TimelineItem>
            <Company>
              Use Your Voice诊断故事分享平台 | 小组项目, 密歇根医学急诊科
            </Company>
            <Period>01/2025 - 04/2025</Period>
            <Description>
              •
              领导7人跨职能团队，构建以患者为核心的诊断故事平台，以改善急诊诊断的准确性与效率。基于用户访谈和客户反馈制定产品路线图与功能优先级，明确交付目标，包括故事提交流程、可配置隐私控制和完整用户认证系统。
              <br />•
              主持敏捷开发流程（sprint规划、站会与回顾），使用Jira保持团队协作透明，确保项目高效推进。
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>ParkEase App设计 | 小组项目, Umich</Company>
            <Period>09/2023 - 12/2023</Period>
            <Description>
              •
              针对城市停车难题开展用户调研，识别用户痛点并提出解决方案，设计用户友好型实时停车APP，将用户与可用车位实时数据无缝连接，并结合导航功能提升停车效率。负责线框图和交互原型设计，使用Adobe
              XD构建UI界面，通过多轮用户测试迭代优化交互体验，提升了产品的易用性和可用性。
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>StoryScape App设计 | 小组项目, Umich</Company>
            <Period>09/2023 - 12/2023</Period>
            <Description>
              •
              负责家长访谈与市场调研，针对家长教育质量与屏幕时间的矛盾，提出儿童互动可定制视频APP作为解决方案。
              <br />•
              主导亲子互动视频模块设计，引入个性化故事定制机制，使用Figma设计产品原型，优化用户体验。
            </Description>
          </TimelineItem>
          <TimelineItem>
            <Company>自动旅行助手App | 小组项目, UoL</Company>
            <Period>02/2021 - 05/2021</Period>
            <Description>
              •
              主导需求分析与功能规划，结合用户时间与预算设计自驾游路线推荐系统，通过Google
              Maps可视化路线展示。
              <br />
              •
              整合数据库中城市和景点信息，确保用户能精准查询目的地，基于评分系统量化景点吸引力，优化推荐算法，增强推荐的科学性与用户满意度。
              <br />•
              设计并实现用户评论系统，使用户能够对行程计划进行反馈与调整，形成闭环优化的推荐机制。
            </Description>
          </TimelineItem>
        </Section>

        {/* 技能特长 */}
        <Section>
          <SectionTitle variant="h5">技能</SectionTitle>
          <Box mb={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600, color: "#58527C" }}
            >
              技术:
            </Typography>
            <Box>
              <SkillTag>JavaScript</SkillTag>
              <SkillTag>HTML5</SkillTag>
              <SkillTag>CSS3</SkillTag>
              <SkillTag>React</SkillTag>
              <SkillTag>Python</SkillTag>
              <SkillTag>SQL</SkillTag>
              <SkillTag>Git</SkillTag>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600, color: "#58527C" }}
            >
              设计:
            </Typography>
            <Box>
              <SkillTag>Figma</SkillTag>
              <SkillTag>Photoshop</SkillTag>
              <SkillTag>Adobe Illustrator</SkillTag>
              <SkillTag>Adobe XD</SkillTag>
            </Box>
          </Box>
        </Section>

        {/* 活动经历 */}
        <Section>
          <SectionTitle variant="h5">活动</SectionTitle>
          <TimelineItem>
            <Company>Peer Mentor | 利物浦大学, 计算机科学系</Company>
            <Period>09/2021 - 05/2022</Period>
            <Description>为低年级学生提供学术支持</Description>
          </TimelineItem>
          <TimelineItem>
            <Company>利物浦大学 华人会</Company>
            <Period>11/2020 - 06/2021</Period>
            <Description>组织校园活动并推广中国文化</Description>
          </TimelineItem>
          <TimelineItem>
            <Company>加州大学伯克利分校，夏校</Company>
            <Period>06/2018 - 08/2018</Period>
            <Description>学习宏观经济和K-8教学课程</Description>
          </TimelineItem>
        </Section>
      </Container>
    </ResumeSection>
  );
};

export default Resume;

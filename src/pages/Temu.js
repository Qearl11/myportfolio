import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Typography, Container } from "@mui/material";
import ProjectNavigation from "../components/ProjectNavigation";
import temuLogo from "../assets/temulogo.png";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #fdf6ed;
  overflow-x: hidden;
`;

const ContentWrapper = styled(Container)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 10px;
  }
`;

const Banner = styled.div`
  background: #fdf6ed;
  padding: 2rem 1.5rem 3rem;
  margin: -1rem -1.5rem 2rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem 2rem 5rem;
    margin: -1rem -2rem 3rem;
  }

  @media (max-width: 768px) {
    padding-top: 5rem; /* 增加顶部内边距，避免被导航栏遮挡 */
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: #fdf6ed;
    clip-path: ellipse(50% 60% at 50% 100%);
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
  padding-top: 1rem; /* 添加顶部内边距，使 logo 向下移动 */

  img {
    height: 120px;
    width: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding-top: 0.5rem; /* 在移动端减小顶部内边距 */

    img {
      height: 80px;
    }
  }
`;

const ContentContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2rem; /* 增加顶部内边距，使文字向下移动 */

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding-top: 0; /* 在移动端移除内边距 */
    margin-top: -0.5rem; /* 在移动端添加负的上边距，使文字向上移动 */
  }
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: #333;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
`;

const TextGroup = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.75rem;
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin: 0;
  background: #f97a28;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(249, 122, 40, 0.2);
    background: #e86a18;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const Card = styled(motion.div)`
  background: #fdf6ed;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: #333;
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
      color: #f97a28;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
  border-left: 3px solid #f97a28;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const FeatureIcon = styled.span`
  font-size: 1.5rem;
  line-height: 1;
`;

const ImageContainer = styled.div`
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const FlowStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f97a28;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const StepText = styled.div`
  font-size: 1rem;
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

const PersonaCard = styled.div`
  background: #fdf6ed;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem 0;
  border-left: 4px solid #f97a28;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const PersonaTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: #333;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #f97a28;
  text-align: center;
  margin: 2rem 0;
  font-weight: 500;
`;

export default function Temu() {
  useEffect(() => {
    // 立即滚动到顶部，不使用平滑滚动以确保即时效果
    window.scrollTo(0, 0);
  }, []); // 仅在组件挂载时执行

  const openDemoPage = (e) => {
    e.preventDefault();
    window.open(
      process.env.PUBLIC_URL + "/temu-demo.html",
      "_blank",
      "width=414,height=896",
    );
  };

  const openWebDemoPage = (e) => {
    e.preventDefault();
    window.open(process.env.PUBLIC_URL + "/temu-demo-web.html", "_blank");
  };

  const sections = [
    {
      title: "项目简介",
      content: (
        <>
          <StyledList>
            <li>
              Temu产品测量与AR预览功能设计，旨在解决平台商品尺寸信息混乱、退货率高的问题。
            </li>
            <li>
              <strong>项目名称：</strong> Temu产品测量与AR预览功能设计
            </li>
            {/* <li><strong>时间线：</strong> 2025年4月 - 2025年12月</li> */}
            <li>
              <strong>项目类型：</strong> 产品设计与功能优化
            </li>
            {/* <li><strong>使用工具：</strong> Adobe XD</li> */}
          </StyledList>

          <div style={{ marginTop: "1.5rem" }}>
            <ButtonGroup>
              <Button href="#" onClick={openDemoPage}>
                移动端演示
              </Button>
              <Button href="#" onClick={openWebDemoPage}>
                网页端演示
              </Button>
            </ButtonGroup>
          </div>
        </>
      ),
    },
    {
      title: "项目背景与问题定义",
      content: (
        <>
          <p>
            Temu 是一家迅速崛起的全球电商平台，以极具价格竞争力的
            Factory-to-Consumer (F2C)
            模式，连接全球买家与工厂直供卖家。尽管平台强调高性价比和购物便利，但因卖家数量庞大且管理松散，
            <strong>商品尺寸信息不规范、描述与实物不符</strong>
            的问题屡见不鲜，导致：
          </p>

          <StyledList>
            <li>用户购物体验受损</li>
            <li>退货率高企，增加运营成本</li>
            <li>用户对平台信任度下降，影响复购</li>
          </StyledList>

          <p>
            这些问题在家具、家电等<strong>尺寸敏感型品类</strong>
            中尤为突出，成为Temu亟需解决的核心挑战。
          </p>
        </>
      ),
    },
    {
      title: "市场洞察与机会分析",
      content: (
        <>
          <p>通过调研，我们发现：</p>

          <StyledList>
            <li>
              72% 的线上消费者表示<strong>尺寸不准确</strong>是退货的重要原因
            </li>
            <li>
              消费者希望在购买前获得更加<strong>直观、可信的尺寸信息</strong>
            </li>
            <li>
              当前主流电商（如Amazon、eBay）虽提供基础尺寸，但缺乏
              <strong>互动式预览（如AR）和用户反馈校验机制</strong>
            </li>
          </StyledList>

          <p>
            因此，<strong>通过标准化测量系统+AR预览功能提升透明度</strong>
            ，不仅可以降低退货，还能成为Temu差异化竞争的新优势。
          </p>
        </>
      ),
    },
    {
      title: "产品解决方案概览",
      content: (
        <>
          <p>
            我们设计了一套完整的<strong>Temu产品测量与AR预览系统</strong>
            ，核心目标：
          </p>

          <StyledList>
            <li>
              为买家提供<strong>标准化、真实可感的尺寸信息</strong>
            </li>
            <li>
              为卖家提供<strong>高效、低门槛的数据录入工具</strong>
            </li>
            <li>
              为平台建立<strong>用户反馈驱动的尺寸验证闭环</strong>
            </li>
          </StyledList>

          <p>最终提升用户信任、转化率与平台整体运营效率。</p>
        </>
      ),
    },
    {
      title: "核心功能设计",
      content: (
        <>
          <SubTitle>1. 标准化测量模板（高优先级）</SubTitle>
          <StyledList>
            <li>按商品品类（如家具、家电、配饰）预设尺寸字段</li>
            <li>自动提示必填项，减少漏填、错填</li>
            <li>支持批量上传，降低卖家操作成本</li>
          </StyledList>
          <p>
            <strong>设计思考：</strong>{" "}
            统一模板可为后续数据分析和功能扩展（如推荐系统）奠定结构化基础。
          </p>

          <SubTitle>2. AR实景预览（高优先级）</SubTitle>
          <StyledList>
            <li>
              买家可通过AR功能将商品投影到实际空间中，查看尺寸、比例与环境适配度
            </li>
            <li>支持缩放、旋转，提升沉浸感</li>
          </StyledList>
          <p>
            <strong>案例参考：</strong> 类似IKEA Place
            App，让用户在购买前真实感知物品大小与摆放效果。
          </p>

          <SubTitle>3. 3D扫描工具（高优先级）</SubTitle>
          <StyledList>
            <li>卖家可使用手机摄像头扫描实物，系统自动生成3D模型与精准尺寸</li>
            <li>减少人工录入错误，提升AR预览质量</li>
          </StyledList>

          <SubTitle>4. 尺寸准确性反馈机制（中优先级）</SubTitle>
          <StyledList>
            <li>买家在评论中上传实物照片或AR截图</li>
            <li>购买后自动弹出提示，询问"商品尺寸是否符合描述"</li>
            <li>超过5%买家反馈"尺寸不符"时，系统自动提醒卖家修改信息</li>
          </StyledList>
          <p>
            <strong>设计亮点：</strong>{" "}
            建立数据闭环，不依赖内部审核，利用用户反馈持续优化平台数据。
          </p>

          <SubTitle>5. 自动化测量校验（中优先级）</SubTitle>
          <StyledList>
            <li>后台逻辑校验（如：长宽高关系合理性检查）</li>
            <li>发布前即提示潜在错误，避免误导用户</li>
          </StyledList>

          <SubTitle>6. AR画廊与个性化推荐（低优先级）</SubTitle>
          <StyledList>
            <li>商品详情页展示买家上传的AR实景图，增强真实性</li>
            <li>根据用户历史AR浏览记录，推荐尺寸风格相似的其他商品</li>
          </StyledList>
        </>
      ),
    },
    {
      title: "用户画像（Personas）",
      content: (
        <>
          <PersonaCard>
            <PersonaTitle>Linda（首次网购用户）</PersonaTitle>
            <StyledList>
              <li>54岁，退休教师，线上购物经验少</li>
              <li>担心尺寸不符导致退换货</li>
              <li>需要直观、简洁的尺寸与实际效果展示</li>
            </StyledList>
          </PersonaCard>

          <PersonaCard>
            <PersonaTitle>Emily（频繁网购达人）</PersonaTitle>
            <StyledList>
              <li>28岁，家居爱好者</li>
              <li>习惯细读产品规格</li>
              <li>依赖AR预览作决策</li>
            </StyledList>
          </PersonaCard>

          <PersonaCard>
            <PersonaTitle>Jack（中小卖家）</PersonaTitle>
            <StyledList>
              <li>35岁，家具类店主</li>
              <li>苦于手动录入大量产品尺寸</li>
              <li>急需高效准确的上架工具，减少因尺寸错误导致的退货与差评</li>
            </StyledList>
          </PersonaCard>
        </>
      ),
    },
    {
      title: "用户旅程（User Journey）",
      content: (
        <>
          <SubTitle>买家流程</SubTitle>
          <div style={{ marginTop: "1.5rem" }}>
            <FlowStep>
              <StepNumber>1</StepNumber>
              <StepText>发现商品</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>2</StepNumber>
              <StepText>使用AR预览查看实际效果</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>3</StepNumber>
              <StepText>查看标准测量与买家评论</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>4</StepNumber>
              <StepText>下单购买</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>5</StepNumber>
              <StepText>收货确认尺寸无误</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>6</StepNumber>
              <StepText>上传反馈</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>7</StepNumber>
              <StepText>帮助他人决策</StepText>
            </FlowStep>
          </div>

          <SubTitle>卖家流程</SubTitle>
          <div style={{ marginTop: "1.5rem" }}>
            <FlowStep>
              <StepNumber>1</StepNumber>
              <StepText>选择商品品类</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>2</StepNumber>
              <StepText>使用模板上传测量数据</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>3</StepNumber>
              <StepText>扫描生成3D模型</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>4</StepNumber>
              <StepText>发布商品</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>5</StepNumber>
              <StepText>监测尺寸相关反馈</StepText>
            </FlowStep>
            <FlowStep>
              <StepNumber>6</StepNumber>
              <StepText>根据反馈优化商品信息</StepText>
            </FlowStep>
          </div>
        </>
      ),
    },
    {
      title: "项目执行计划（Roadmap）",
      content: (
        <>
          <CompetitorTable>
            <thead>
              <tr>
                <th>阶段</th>
                <th>时间</th>
                <th>主要任务</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>阶段1</strong>
                </td>
                <td>2025年4-5月</td>
                <td>市场调研、用户访谈、功能定义、原型设计</td>
              </tr>
              <tr>
                <td>
                  <strong>阶段2</strong>
                </td>
                <td>2025年6-8月</td>
                <td>核心功能开发、内部测试、Alpha版本发布</td>
              </tr>
              <tr>
                <td>
                  <strong>阶段3</strong>
                </td>
                <td>2025年9-10月</td>
                <td>Beta测试，收集用户反馈，优化体验</td>
              </tr>
              <tr>
                <td>
                  <strong>阶段4</strong>
                </td>
                <td>2025年11-12月</td>
                <td>正式上线，全球推广，高价值品类优先部署</td>
              </tr>
            </tbody>
          </CompetitorTable>
        </>
      ),
    },
    {
      title: "成功标准（KPIs）",
      content: (
        <StyledList>
          <li>上线后三个月内，80%卖家使用测量模板</li>
          <li>带有AR预览与测量信息的商品转化率提升10%</li>
          <li>使用AR功能的用户比例达到30%</li>
          <li>退货率下降15%-20%</li>
          <li>"尺寸不符"相关投诉减少25%</li>
          <li>客户满意度评分提高0.2分以上</li>
        </StyledList>
      ),
    },
    {
      title: "预算概览",
      content: (
        <StyledList>
          <li>人力成本（产品经理、开发、设计、AR专家等）：约141万美元</li>
          <li>福利及间接费用：42万美元</li>
          <li>外包与专业服务（AR咨询等）：15万美元</li>
          <li>软件与工具投入：5万美元</li>
          <li>培训与团队发展预算：5万美元</li>
          <li>
            <strong>总预算估算：约208万美元</strong>
          </li>
        </StyledList>
      ),
    },
    {
      title: "市场推广策略（Go-To-Market）",
      content: (
        <>
          <SubTitle>渠道部署：</SubTitle>
          <StyledList>
            <li>官网与App内置新功能入口</li>
            <li>卖家后台集成测量上传工具</li>
          </StyledList>

          <SubTitle>宣传推广：</SubTitle>
          <StyledList>
            <li>应用内Banner、推送提醒</li>
            <li>邮件营销、社交媒体广告</li>
            <li>与网红/KOL合作，展示AR体验案例</li>
          </StyledList>

          <SubTitle>卖家培训：</SubTitle>
          <StyledList>
            <li>发布在线教程与知识中心材料</li>
            <li>举办在线研讨会与实操演练</li>
          </StyledList>
        </>
      ),
    },
    {
      title: "项目意义与总结",
      content: (
        <>
          <p>
            本项目不仅解决了Temu在商品描述准确性上的长期痛点，还通过数据标准化、体验可视化、用户驱动验证三大策略，提升了买家的购物信心与卖家的运营效率，符合电商平台在激烈竞争中提升用户体验和信任度的核心发展方向。
          </p>

          <Tagline>Measure Right, Shop with Confidence.</Tagline>
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
            <BannerContent style={{ paddingTop: "30px" }}>
              <LogoContainer>
                <img src={temuLogo} alt="Temu Logo" />
              </LogoContainer>
              <ContentContainer>
                <TextGroup>
                  <Subtitle>产品测量与AR预览功能设计</Subtitle>
                </TextGroup>
              </ContentContainer>
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
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

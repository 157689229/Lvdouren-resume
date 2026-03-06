import { useState, useMemo, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Play,
  Film,
  Scissors,
  MonitorPlay,
  ChevronRight,
  ArrowUpRight,
  Star,
  GraduationCap,
} from "lucide-react";

const portfolioItems = [
  {
    title: "湾区优品人物采访与品牌内容系列",
    type: "正式工作",
    role: "选题策划 / 采访提纲 / 拍摄 / 剪辑 / 包装",
    desc: "围绕湾区优品相关品牌、企业负责人和供应链故事，完成采访提纲、镜头组织、成片节奏和字幕包装，服务品牌背书与项目传播。",
    tags: ["人物采访", "品牌内容", "项目包装"],
    metric: "当前正式工作中的核心内容方向",
  },
  {
    title: "供应链与垂类短视频内容",
    type: "正式工作",
    role: "脚本拆解 / 拍摄执行 / 剪辑 / AI辅助内容生产",
    desc: "参与潮玩、留学、供应链等方向的短视频内容生产，兼顾项目表达、平台传播和效率型内容工作流。",
    tags: ["短视频", "垂类内容", "AI工作流"],
    metric: "体现当前岗位的多题材内容适配能力",
  },
  {
    title: "四川观察新闻短片项目",
    type: "传统媒体",
    role: "拍摄 / 剪辑",
    desc: "在四川省广播电视台实习期间，参与《川大英才学子》《成都市双林小学》等内容制作，作品登上四川观察，积累了新闻类内容的拍摄与后期经验。",
    tags: ["新闻拍摄", "电视媒体", "成片剪辑"],
    metric: "作品曾在四川观察平台发布",
  },
  {
    title: "《法国吃货寻味记》融媒体项目",
    type: "传统媒体",
    role: "项目参与 / 视频制作",
    desc: "围绕中法建交六十年相关主题参与融媒体内容制作，作品先后在四川卫视、四川文旅、四川交通广播、微成都等官方媒体发布。",
    tags: ["融媒体", "外宣内容", "官方发布"],
    metric: "多平台官方媒体发布",
  },
  {
    title: "《乡村会客厅》访谈节目",
    type: "传统媒体",
    role: "脚本撰写 / 嘉宾联系 / 演播厅拍摄 / 后期剪辑",
    desc: "全程参与四川卫视《乡村会客厅》之《气候变化下的农业“生存”之道》内容制作，完整经历节目型项目从前期到后期的执行流程。",
    tags: ["节目制作", "演播厅拍摄", "全流程协作"],
    metric: "具备完整的大型访谈节目参与经验",
  },
  {
    title: "校园影视与专题作品集",
    type: "校园项目",
    role: "团队负责人 / 策划 / 拍摄 / 剪辑",
    desc: "在校期间担任团队主要负责人，参与制作新闻专题片《红色剧本杀》《滠水河》，微电影《我看见了》，MV《小娟》，影视广告《银鹭花生牛奶》等多类作品。",
    tags: ["专题片", "微电影", "广告短片"],
    metric: "覆盖专题、剧情、MV、广告等多种视频类型",
  },
  {
    title: "个人自媒体内容运营",
    type: "自媒体账号",
    role: "选题 / 文案 / 剪辑 / 运营",
    desc: "独立运营多个内容平台，熟悉企鹅号、抖音、B站、小红书等不同平台调性，能根据平台特征调整视频结构和表达方式。",
    tags: ["账号运营", "平台适配", "内容策划"],
    metric: "企鹅号8万粉，视频总播放量1600余万",
  },
];

const strengths = [
  {
    icon: Film,
    title: "传统媒体 + 新媒体双线经验",
    desc: "做过电视台实习、新闻短片、访谈节目、融媒体项目，也做过自媒体账号和企业短视频内容。",
  },
  {
    icon: Scissors,
    title: "能写能拍能剪",
    desc: "不仅会后期，也参与脚本撰写、采访提纲、拍摄执行和成片包装，适合综合型视频岗位。",
  },
  {
    icon: MonitorPlay,
    title: "懂内容目标和传播场景",
    desc: "会把剪辑放进项目表达、平台分发和品牌内容里思考，成片更贴近业务需求。",
  },
];

const skillGroups = [
  {
    name: "后期软件",
    items: ["Premiere Pro", "After Effects", "Final Cut Pro", "剪映专业版", "Photoshop"],
  },
  {
    name: "设计与辅助",
    items: ["Illustrator", "Animate", "WPS", "醒图", "基础视觉包装"],
  },
  {
    name: "内容与执行",
    items: ["摄影摄像", "脚本撰写", "采访提纲", "新媒体运营", "跨平台内容适配"],
  },
  {
    name: "效率与AI",
    items: ["AI配音", "AI数字人口播", "内容批量化思维", "素材整理", "基础工作流搭建"],
  },
];

const timeline = [
  {
    period: "2025.07 - 至今",
    title: "新媒体运营 / 内容策划 / 拍摄剪辑",
    company: "粤贸全球湾区优品展贸中心",
    desc: "负责湾区优品相关内容的视频策划、采访提纲、拍摄执行、后期剪辑、字幕包装和AI辅助内容生产，覆盖人物采访、品牌表达、供应链与垂类短视频等方向。",
  },
  {
    period: "2024",
    title: "四川省广播电视台实习",
    company: "传统媒体项目实践",
    desc: "参与新闻短片、融媒体内容和访谈节目制作，接触电视媒体标准化制作流程，完成拍摄、脚本、联络和后期等多环节工作。",
  },
  {
    period: "2021.09 - 2025.06",
    title: "武汉文理学院 传播学本科",
    company: "校园影视项目与课程训练",
    desc: "系统学习摄影摄像、新媒体运营、影视后期特效与合成等课程，在校期间持续参与专题片、微电影、MV、广告短片等项目制作。",
  },
  {
    period: "在校期间",
    title: "个人自媒体内容创作",
    company: "多平台账号运营实践",
    desc: "积累娱乐、摄影干货、热点分析等内容经验，形成从选题、脚本到剪辑发布的一体化能力，具备较强的平台感知和执行力。",
  },
];

const testimonials = [
  {
    quote: "优势不只是会剪片，而是具备内容理解、项目协作和多平台表达能力。",
    name: "岗位匹配总结",
  },
  {
    quote: "既有校园阶段的作品积累，也已经有正式岗位中的真实业务内容经验。",
    name: "网站定位总结",
  },
];

function FadeIn({ children, style: extraStyle = {}, delay = 0 }) {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.08 }
    );

    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        ...extraStyle,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ en, title, desc }) {
  const c = {
    accent: "#C9A96E",
    sub: "#5C5247",
  };
  const sans = "system-ui, -apple-system, 'Segoe UI', sans-serif";

  return (
    <div style={{ marginBottom: 32 }}>
      <div
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: 3,
          color: c.accent,
          fontWeight: 700,
          fontFamily: sans,
        }}
      >
        {en}
      </div>
      <h2 style={{ fontSize: 28, marginTop: 8 }}>{title}</h2>
      {desc ? (
        <p
          style={{
            maxWidth: 620,
            marginTop: 10,
            fontSize: 15,
            lineHeight: 1.8,
            color: c.sub,
            fontFamily: sans,
          }}
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("全部");
  const filters = ["全部", "正式工作", "传统媒体", "校园项目", "自媒体账号"];
  const filteredItems = useMemo(
    () => (filter === "全部" ? portfolioItems : portfolioItems.filter((i) => i.type === filter)),
    [filter]
  );

  const c = {
    bg: "#FBF5EB",
    bgWarm: "#F5ECDC",
    card: "#fff",
    text: "#1C1917",
    sub: "#5C5247",
    muted: "#9C8B75",
    accent: "#C9A96E",
    accentDark: "#8B6914",
    accentBg: "#F5E6C8",
    border: "#EDE4D4",
    borderDark: "#DDD2C0",
  };
  const sans = "system-ui, -apple-system, 'Segoe UI', sans-serif";
  const serif = "Georgia, 'Times New Roman', 'SimSun', serif";

  const responsiveGrid = (min) => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
    gap: 16,
  });

  return (
    <div style={{ fontFamily: serif, background: c.bg, color: c.text, minHeight: "100vh" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(251,245,235,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 1 }}>任茂常</div>
            <div style={{ fontSize: 12, color: c.muted, fontFamily: sans, marginTop: 1 }}>
              Video Editor & Content Creator
            </div>
          </div>
          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              ["作品集", "#portfolio"],
              ["经历", "#experience"],
              ["技能", "#skills"],
              ["联系", "#contact"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                style={{
                  fontSize: 14,
                  color: c.sub,
                  textDecoration: "none",
                  fontFamily: sans,
                  fontWeight: 500,
                }}
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "68px 24px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
            alignItems: "center",
          }}
        >
          <FadeIn>
            <div
              style={{
                width: "100%",
                maxWidth: 320,
                aspectRatio: "2 / 3",
                borderRadius: 24,
                overflow: "hidden",
                background: `linear-gradient(135deg, ${c.bgWarm}, #E9DCC9)`,
                border: `1px solid ${c.border}`,
                boxShadow: "0 16px 40px rgba(28,25,23,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 18,
                  borderRadius: 18,
                  border: "1px dashed rgba(139,105,20,0.35)",
                }}
              />
              <div style={{ textAlign: "center", zIndex: 1 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 3,
                    color: c.accent,
                    fontWeight: 700,
                    fontFamily: sans,
                  }}
                >
                  Portrait
                </div>
                <div style={{ fontSize: 16, color: c.sub, marginTop: 10, fontFamily: sans }}>
                  替换为人物头像
                </div>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <h1
                style={{
                  fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Hey Friends
              </h1>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p
                style={{
                  maxWidth: 680,
                  marginTop: 22,
                  fontSize: 16,
                  lineHeight: 1.95,
                  color: c.sub,
                  fontFamily: sans,
                }}
              >
                我是任茂常，一名视频内容创作者。传播学本科出身，从校园影视创作、四川省广播电视台实习到正式岗位中的品牌内容与人物采访，我一直在做同一件事：把复杂的信息整理成清晰、好看、能传播的视频表达。现在我主要负责品牌内容、采访类视频、项目短片和 AI 辅助内容生产。比起只负责后期执行，我更擅长在前期策划、现场拍摄和后期包装之间，保持同一条内容逻辑，让内容既能被看懂，也能被记住。
              </p>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href="#portfolio"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 28px",
                    borderRadius: 999,
                    background: c.text,
                    color: c.bg,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    fontFamily: sans,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  }}
                >
                  <Play size={15} /> 查看作品
                </a>
                <div style={{ display: "flex", gap: 18, fontSize: 13, color: c.muted, fontFamily: sans, flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Mail size={13} /> 157689229@qq.com
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Phone size={13} /> 17354485109
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <MapPin size={13} /> 广东东莞 / 深圳
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 52px" }}>
        <FadeIn>
          <div style={responsiveGrid(180)}>
            {[
              ["8万+", "企鹅号粉丝"],
              ["1600万+", "总播放量"],
              ["28万", "抖音单条最高"],
              ["5万", "B站单条最高"],
            ].map(([n, l]) => (
              <div
                key={l}
                style={{
                  textAlign: "center",
                  padding: "26px 16px",
                  background: c.card,
                  border: `1px solid ${c.border}`,
                  borderRadius: 14,
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700 }}>{n}</div>
                <div style={{ fontSize: 13, color: c.muted, marginTop: 4, fontFamily: sans }}>{l}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={responsiveGrid(260)}>
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.title} delay={i * 0.07}>
                <div
                  style={{
                    background: c.card,
                    border: `1px solid ${c.border}`,
                    borderRadius: 16,
                    padding: 28,
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: c.accentBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={20} color={c.accentDark} />
                  </div>
                  <h3 style={{ fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: c.sub, fontFamily: sans }}>{s.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section id="portfolio" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 60px" }}>
        <FadeIn>
          <SectionTitle
            en="Portfolio"
            title="作品方向展示"
            desc="按校园简历信息和当前正式工作方向整理，后续补充真实作品封面和视频链接即可直接用于求职。"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  border: filter === f ? `1.5px solid ${c.text}` : `1.5px solid ${c.borderDark}`,
                  background: filter === f ? c.text : "transparent",
                  color: filter === f ? c.bg : c.sub,
                  cursor: "pointer",
                  fontFamily: sans,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <div style={responsiveGrid(300)}>
          {filteredItems.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.05}>
              <div
                style={{
                  background: c.card,
                  border: `1px solid ${c.border}`,
                  borderRadius: 16,
                  padding: 22,
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    aspectRatio: "16/9",
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${c.bgWarm}, #EDDFCC)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    border: `1px solid ${c.border}`,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Play size={28} color={c.accent} />
                    <div style={{ fontSize: 12, color: c.muted, marginTop: 6, fontFamily: sans }}>
                      替换为作品封面
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: 2.5,
                        color: c.accent,
                        fontWeight: 700,
                        fontFamily: sans,
                      }}
                    >
                      {item.type}
                    </div>
                    <h3 style={{ fontSize: 17, marginTop: 5 }}>{item.title}</h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "5px 12px",
                      borderRadius: 999,
                      border: `1.5px solid ${c.borderDark}`,
                      fontSize: 12,
                      color: c.muted,
                      whiteSpace: "nowrap",
                      fontFamily: sans,
                      flexShrink: 0,
                    }}
                  >
                    查看 <ArrowUpRight size={12} />
                  </div>
                </div>
                <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.8, color: c.sub, fontFamily: sans }}>{item.desc}</p>
                <div style={{ marginTop: 10, fontSize: 12.5, color: c.muted, fontFamily: sans }}>负责环节：{item.role}</div>
                <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "3px 12px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 500,
                        background: c.accentBg,
                        color: c.accentDark,
                        fontFamily: sans,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 14,
                    background: `linear-gradient(135deg, ${c.bg}, ${c.accentBg})`,
                    border: "1px solid #F0DFC0",
                    borderRadius: 10,
                    padding: "10px 14px",
                    fontSize: 13,
                    color: c.accentDark,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: sans,
                  }}
                >
                  <Star size={13} /> {item.metric}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="experience" style={{ background: c.bgWarm, padding: "60px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <FadeIn>
            <SectionTitle
              en="Experience"
              title="经历概览"
              desc="校园积累与正式工作经历并列展示，体现完整成长路径与岗位适配度。"
            />
          </FadeIn>
          {timeline.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.07}>
              <div style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 5,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: c.accent,
                      border: `3px solid ${c.bgWarm}`,
                      boxShadow: `0 0 0 2px ${c.accent}`,
                    }}
                  />
                  {idx < timeline.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: c.borderDark, marginTop: 4 }} />
                  )}
                </div>
                <div style={{ paddingBottom: 32 }}>
                  <div style={{ fontSize: 12.5, color: c.accent, fontWeight: 700, fontFamily: sans, marginBottom: 5 }}>
                    {item.period}
                  </div>
                  <h3 style={{ fontSize: 17, marginBottom: 3 }}>{item.title}</h3>
                  <div style={{ fontSize: 13, color: c.muted, marginBottom: 8, fontFamily: sans }}>{item.company}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: c.sub, fontFamily: sans }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="skills" style={{ maxWidth: 1080, margin: "0 auto", padding: "60px 24px" }}>
        <FadeIn>
          <SectionTitle en="Skills" title="技能结构" />
        </FadeIn>

        <div style={responsiveGrid(220)}>
          {skillGroups.map((g, gi) => (
            <FadeIn key={g.name} delay={gi * 0.06}>
              <div
                style={{
                  background: c.card,
                  border: `1px solid ${c.border}`,
                  borderRadius: 16,
                  padding: 24,
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    marginBottom: 14,
                    paddingBottom: 10,
                    borderBottom: `2px solid ${c.accentBg}`,
                  }}
                >
                  {g.name}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {g.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "7px 14px",
                        borderRadius: 9,
                        fontSize: 13,
                        background: c.bgWarm,
                        color: c.sub,
                        border: `1px solid ${c.border}`,
                        fontFamily: sans,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div style={{ ...responsiveGrid(320), marginTop: 28 }}>
          <FadeIn delay={0.08}>
            <div
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 16,
                padding: 28,
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  color: c.accent,
                  fontWeight: 700,
                  fontFamily: sans,
                }}
              >
                Why Me
              </div>
              <h3 style={{ fontSize: 20, marginTop: 8, marginBottom: 14 }}>我适合什么团队</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.85, color: c.sub, fontFamily: sans }}>
                更适合品牌内容团队、新媒体部门、宣传部门、老板IP团队和中小型内容团队。因为这类岗位需要的，不只是单点剪辑能力，而是对内容目标、执行效率、沟通协作和项目表达的综合把控，而这些正是你一路积累出来的优势。
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 16,
                padding: 28,
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  color: c.accent,
                  fontWeight: 700,
                  fontFamily: sans,
                }}
              >
                Feedback
              </div>
              <h3 style={{ fontSize: 20, marginTop: 8, marginBottom: 18 }}>协作印象</h3>
              {testimonials.map((t) => (
                <div
                  key={t.quote}
                  style={{
                    padding: "16px 20px",
                    borderRadius: 12,
                    background: c.bgWarm,
                    borderLeft: `3px solid ${c.accent}`,
                    marginBottom: 14,
                  }}
                >
                  <p style={{ fontSize: 14.5, lineHeight: 1.8, color: c.text, fontStyle: "italic" }}>
                    “{t.quote}”
                  </p>
                  <div style={{ marginTop: 8, fontSize: 12, color: c.muted, fontWeight: 600, fontFamily: sans }}>
                    — {t.name}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="contact" style={{ padding: "0 24px 72px" }}>
        <FadeIn>
          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              borderRadius: 22,
              background: "linear-gradient(135deg, #1C1917, #2E2418)",
              padding: "42px 44px",
              color: c.bg,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              boxSizing: "border-box",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  color: "#D4A853",
                  fontWeight: 700,
                  fontFamily: sans,
                }}
              >
                Next Step
              </div>
              <h2 style={{ fontSize: 24, marginTop: 8 }}>作品先说话，合作再细聊</h2>
              <p
                style={{
                  maxWidth: 560,
                  marginTop: 14,
                  fontSize: 14.5,
                  lineHeight: 1.8,
                  color: "rgba(251,245,235,0.7)",
                  fontFamily: sans,
                }}
              >
                这页更适合承担作品展示和职业介绍的作用，所以联系方式我前移到了首屏。这里保留轻一点的收尾，只做下一步动作引导。
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="#portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 24px",
                  borderRadius: 999,
                  background: "#D4A853",
                  color: "#1C1917",
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: sans,
                  boxShadow: "0 4px 18px rgba(212,168,83,0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                查看作品 <ChevronRight size={15} />
              </a>
              <a
                href="mailto:157689229@qq.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 24px",
                  borderRadius: 999,
                  background: "transparent",
                  color: c.bg,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: sans,
                  border: "1px solid rgba(251,245,235,0.25)",
                  whiteSpace: "nowrap",
                }}
              >
                发邮件 <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer
        style={{
          borderTop: `1px solid ${c.border}`,
          padding: 24,
          textAlign: "center",
          fontSize: 12.5,
          color: c.muted,
          fontFamily: sans,
        }}
      >
        © 2025 任茂常 · 用内容逻辑做好每一条视频
      </footer>
    </div>
  );
}

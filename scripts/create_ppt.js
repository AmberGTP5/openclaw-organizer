const pptxgen = require("pptxgenjs");
let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
const C = {primary:"065A82",secondary:"1C7293",accent:"21295C",light:"F5F8FA",white:"FFFFFF",text:"1E293B",muted:"64748B",highlight:"0891B2"};

// 1. Title
let s1 = pres.addSlide();
s1.background = {color:C.accent};
s1.addText("R&D-Agent-Quant",{x:.5,y:1.8,w:9,h:1,fontSize:44,color:C.white,bold:true,align:"center"});
s1.addText("A Multi-Agent Framework for Data-Centric Factors and Model Joint Optimization",{x:.5,y:2.9,w:9,h:.8,fontSize:16,color:C.light,align:"center"});
s1.addText("NeurIPS 2025",{x:.5,y:4.2,w:9,h:.5,fontSize:16,color:C.highlight,align:"center"});

// 2. Background
let s2 = pres.addSlide();
s2.background = {color:C.light};
s2.addText("Background & Motivation",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s2.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.1,w:.08,h:.5,fill:{color:C.highlight}});
s2.addText("Financial Markets Challenges",{x:.8,y:1.1,w:8,h:.5,fontSize:20,color:C.text,bold:true});
s2.addText("• High dimensionality\n• Non-stationarity\n• Persistent volatility\n• Cross-sectional dependence",{x:.8,y:1.7,w:4,h:1.8,fontSize:14,color:C.text});
s2.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:.08,h:.5,fill:{color:C.highlight}});
s2.addText("Quantitative Investing Trend",{x:5.5,y:1.1,w:4,h:.5,fontSize:20,color:C.text,bold:true});
s2.addText("• Data-driven decision making\n• Risk-controlled execution\n• Precise excess returns",{x:5.5,y:1.7,w:4,h:1.5,fontSize:14,color:C.text});

// 3. Pipeline
let s3 = pres.addSlide();
s3.background = {color:C.light};
s3.addText("Traditional Quantitative Pipeline",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
["Data","Processing","Factor","Model","Test"].forEach((t,i)=>{let x=.5+i*1.9;s3.addShape(pres.shapes.RECTANGLE,{x:x,y:1.3,w:1.7,h:.8,fill:{color:[C.primary,C.secondary,C.highlight,C.accent,C.text][i]}});s3.addText(t,{x:x,y:1.4,w:1.7,h:.6,fontSize:12,color:C.white,align:"center",valign:"middle"});if(i<4)s3.addText("→",{x:x+1.7,y:1.5,w:.3,h:.5,fontSize:20,color:C.muted});});
s3.addText("R&D-Agent(Q) automates factor mining, model innovation, and strategy evaluation",{x:.5,y:3,w:9,h:.5,fontSize:18,color:C.text,bold:true});

// 4. Limitations
let s4 = pres.addSlide();
s4.background = {color:C.light};
s4.addText("Limitations of Current Approaches",{x:.5,y:.3,w:9,h:.7,fontSize:32,color:C.primary,bold:true});
[{n:"1",t:"Limited Automation",c:"EF4444",d:"Extensive human intervention"},{n:"2",t:"Poor Interpretability",c:"F59E0B",d:"LLM agents produce signals without grounded factors"},{n:"3",t:"Fragmented Optimization",c:"8B5CF6",d:"Lack of systematic task decomposition"}].forEach((it,i)=>{let x=.5+i*3.1;s4.addShape(pres.shapes.RECTANGLE,{x:x,y:1.2,w:2.9,h:3.8,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:8,offset:2,angle:135,opacity:.1}});s4.addShape(pres.shapes.RECTANGLE,{x:x,y:1.2,w:2.9,h:.08,fill:{color:it.c}});s4.addText(it.n,{x:x+.2,y:1.5,w:.5,h:.5,fontSize:28,color:it.c,bold:true});s4.addText(it.t,{x:x+.7,y:1.6,w:2,h:.4,fontSize:16,color:C.text,bold:true});s4.addText(it.d,{x:x+.2,y:2.2,w:2.5,h:2.5,fontSize:12,color:C.muted});});

// 5. Overview
let s5 = pres.addSlide();
s5.background = {color:C.accent};
s5.addText("R&D-Agent(Q) Overview",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.white,bold:true});
s5.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.6,w:4.3,h:1.8,fill:{color:C.primary}});
s5.addText("Research Phase",{x:.7,y:1.7,w:4,h:.4,fontSize:18,color:C.white,bold:true});
s5.addText("• Specification Unit\n• Synthesis Unit\n• Task Generation",{x:.7,y:2.2,w:4,h:1,fontSize:13,color:C.light});
s5.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.6,w:4.3,h:1.8,fill:{color:C.secondary}});
s5.addText("Development Phase",{x:5.4,y:1.7,w:4,h:.4,fontSize:18,color:C.white,bold:true});
s5.addText("• Co-STEER Agent\n• Implementation Unit\n• Validation Unit",{x:5.4,y:2.2,w:4,h:1,fontSize:13,color:C.light});
s5.addShape(pres.shapes.RECTANGLE,{x:2.5,y:3.8,w:5,h:1.5,fill:{color:C.highlight}});
s5.addText("Analysis Unit + Multi-Armed Bandit",{x:2.7,y:4,w:4.6,h:.4,fontSize:16,color:C.white,bold:true});
s5.addText("Feedback loop for adaptive optimization",{x:2.7,y:4.5,w:4.6,h:.6,fontSize:13,color:C.light});

// 6. Five Units
let s6 = pres.addSlide();
s6.background = {color:C.light};
s6.addText("Five Core Units",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
[{n:"Specification",d:"Dynamic task context",c:C.primary},{n:"Synthesis",d:"Hypothesis generation",c:C.secondary},{n:"Implementation",d:"Code generation",c:C.highlight},{n:"Validation",d:"Backtesting",c:C.accent},{n:"Analysis",d:"Evaluation & scheduling",c:"10B981"}].forEach((u,i)=>{let x=.5+i*1.9;s6.addShape(pres.shapes.RECTANGLE,{x:x,y:1.2,w:1.7,h:3.8,fill:{color:u.c}});s6.addText(u.n,{x:x,y:2.3,w:1.7,h:.8,fontSize:14,color:C.white,align:"center",valign:"middle",bold:true});s6.addText(u.d,{x:x+.1,y:3.2,w:1.5,h:1.4,fontSize:10,color:C.light,align:"center"});});

// 7. Specification
let s7 = pres.addSlide();
s7.background = {color:C.light};
s7.addText("Specification Unit",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s7.addText("Top-level component for task context and constraints",{x:.5,y:.9,w:9,h:.4,fontSize:14,color:C.muted});
s7.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.5,w:.08,h:2.5,fill:{color:C.highlight}});
s7.addText("Theoretical Axis",{x:.8,y:1.5,w:4,h:.4,fontSize:18,color:C.text,bold:true});
s7.addText("• Prior assumptions\n• Data schemas\n• Output protocols",{x:.8,y:2,w:4,h:1.5,fontSize:14,color:C.text});
s7.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.5,w:.08,h:2.5,fill:{color:C.highlight}});
s7.addText("Empirical Axis",{x:5.5,y:1.5,w:4,h:.4,fontSize:18,color:C.text,bold:true});
s7.addText("• Execution environment\n• Standardized interfaces\n• Backtesting setup",{x:5.5,y:2,w:4,h:1.5,fontSize:14,color:C.text});
s7.addShape(pres.shapes.RECTANGLE,{x:.5,y:4.3,w:9,h:1,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s7.addText("S = (B, D, F, M)",{x:1,y:4.5,w:3,h:.6,fontSize:20,color:C.primary,bold:true});
s7.addText("B: Background | D: Data | F: Format | M: Environment",{x:4,y:4.5,w:5,h:.6,fontSize:11,color:C.muted});

// 8. Synthesis
let s8 = pres.addSlide();
s8.background = {color:C.light};
s8.addText("Synthesis Unit",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s8.addText("Generates hypotheses from historical experiments",{x:.5,y:.9,w:9,h:.4,fontSize:14,color:C.muted});
[{n:"Knowledge Forest",d:"Historical hypotheses and feedback"},{n:"Stochastic Mapping G",d:"Next hypothesis generation"},{n:"Adaptive Strategy",d:"Complexity increases on success"}].forEach((u,i)=>{let x=.5+i*3.1;s8.addShape(pres.shapes.RECTANGLE,{x:x,y:1.5,w:2.9,h:2.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});s8.addText(u.n,{x:x+.2,y:1.6,w:2.5,h:.4,fontSize:16,color:C.primary,bold:true});s8.addText(u.d,{x:x+.2,y:2.1,w:2.5,h:1.5,fontSize:12,color:C.muted});});
s8.addText("h(t+1) = G(H(a), F(a))",{x:3,y:4.3,w:4,h:.5,fontSize:20,color:C.accent,bold:true,align:"center"});

// 9. Co-STEER
let s9 = pres.addSlide();
s9.background = {color:C.light};
s9.addText("Co-STEER: Implementation Agent",{x:.5,y:.3,w:9,h:.7,fontSize:32,color:C.primary,bold:true});
s9.addText("Code-generation with chain-of-thought reasoning",{x:.5,y:.9,w:9,h:.4,fontSize:14,color:C.muted});
s9.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.5,w:4.3,h:2.2,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s9.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.5,w:.08,h:2.2,fill:{color:C.highlight}});
s9.addText("Scheduling Module",{x:.8,y:1.6,w:3.8,h:.4,fontSize:16,color:C.text,bold:true});
s9.addText("• Task complexity assessment\n• DAG-based execution planning\n• Adaptive prioritization",{x:.8,y:2.1,w:3.8,h:1.4,fontSize:12,color:C.text});
s9.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.5,w:4.3,h:2.2,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s9.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.5,w:.08,h:2.2,fill:{color:C.secondary}});
s9.addText("Implementation Module",{x:5.5,y:1.6,w:3.8,h:.4,fontSize:16,color:C.text,bold:true});
s9.addText("• Code synthesis\n• Knowledge base retrieval\n• Feedback-driven refinement",{x:5.5,y:2.1,w:3.8,h:1.4,fontSize:12,color:C.text});
s9.addText("K(t+1) = K(t) U {(task, code, feedback)}",{x:1,y:4.3,w:8,h:.5,fontSize:14,color:C.accent,align:"center"});

// 10. Validation & Analysis
let s10 = pres.addSlide();
s10.background = {color:C.light};
s10.addText("Validation & Analysis Units",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s10.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.2,w:4.3,h:3.8,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s10.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.2,w:4.3,h:.08,fill:{color:C.highlight}});
s10.addText("Validation Unit",{x:.7,y:1.5,w:4,h:.5,fontSize:20,color:C.text,bold:true});
s10.addText("• Factor de-duplication (IC)\n• Qlib backtesting\n• Model evaluation",{x:.7,y:2.2,w:4,h:2.5,fontSize:13,color:C.text});
s10.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.2,w:4.3,h:3.8,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s10.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.2,w:4.3,h:.08,fill:{color:"10B981"}});
s10.addText("Analysis Unit",{x:5.4,y:1.5,w:4,h:.5,fontSize:20,color:C.text,bold:true});
s10.addText("• Multi-dimensional assessment\n• SOTA set management\n• Contextual Two-Armed Bandit",{x:5.4,y:2.2,w:4,h:2.5,fontSize:13,color:C.text});

// 11. Experimental Setup
let s11 = pres.addSlide();
s11.background = {color:C.light};
s11.addText("Experimental Setup",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s11.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.2,w:4.3,h:2,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s11.addText("Dataset",{x:.7,y:1.3,w:4,h:.4,fontSize:18,color:C.text,bold:true});
s11.addText("CSI300 (300 A-shares)\nTrain: 2008-2014\nValid: 2015-2016\nTest: 2017-2020",{x:.7,y:1.8,w:4,h:1.2,fontSize:13,color:C.muted});
s11.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.2,w:4.3,h:2,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s11.addText("Configurations",{x:5.4,y:1.3,w:4,h:.4,fontSize:18,color:C.text,bold:true});
s11.addText("• R&D-Factor: LightGBM + factors\n• R&D-Model: Alpha20 + models\n• R&D-Agent(Q): Joint optimization",{x:5.4,y:1.8,w:4,h:1.2,fontSize:13,color:C.muted});

// 12. Results
let s12 = pres.addSlide();
s12.background = {color:C.light};
s12.addText("Main Results: Performance",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s12.addText("R&D-Agent(Q) consistently outperforms all baselines",{x:.5,y:.9,w:9,h:.4,fontSize:14,color:C.muted});
s12.addText("14.21%",{x:.5,y:1.5,w:2.5,h:1,fontSize:48,color:C.highlight,bold:true,align:"center"});
s12.addText("Annualized Return",{x:.5,y:2.5,w:2.5,h:.4,fontSize:12,color:C.muted,align:"center"});
s12.addText("0.0532",{x:3.5,y:1.5,w:2.5,h:1,fontSize:48,color:C.highlight,bold:true,align:"center"});
s12.addText("Information Coefficient",{x:3.5,y:2.5,w:2.5,h:.4,fontSize:12,color:C.muted,align:"center"});
s12.addText("1.74",{x:6.5,y:1.5,w:2.5,h:1,fontSize:48,color:C.highlight,bold:true,align:"center"});
s12.addText("Information Ratio",{x:6.5,y:2.5,w:2.5,h:.4,fontSize:12,color:C.muted,align:"center"});
s12.addText("2x higher ARR than classical factor libraries with 70% fewer factors",{x:.5,y:3.5,w:9,h:.5,fontSize:16,color:C.text,bold:true,align:"center"});
s12.addText("Cost under $10 per experiment",{x:.5,y:4.2,w:9,h:.4,fontSize:14,color:C.muted,align:"center"});

// 13. Ablation
let s13 = pres.addSlide();
s13.background = {color:C.light};
s13.addText("Ablation Study",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s13.addText("Bandit scheduler achieves best overall performance",{x:.5,y:.9,w:9,h:.4,fontSize:14,color:C.muted});
s13.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.5,w:2.9,h:3.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s13.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.5,w:2.9,h:.08,fill:{color:"10B981"}});
s13.addText("Bandit Scheduler",{x:.7,y:1.7,w:2.5,h:.4,fontSize:18,color:C.text,bold:true});
s13.addText("• Best IC and ARR\n• Highest SOTA selections\n• Adaptive direction selection",{x:.7,y:2.2,w:2.5,h:2.5,fontSize:12,color:C.muted});
s13.addShape(pres.shapes.RECTANGLE,{x:3.55,y:1.5,w:2.9,h:3.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s13.addShape(pres.shapes.RECTANGLE,{x:3.55,y:1.5,w:2.9,h:.08,fill:{color:C.highlight}});
s13.addText("LLM-based",{x:3.75,y:1.7,w:2.5,h:.4,fontSize:18,color:C.text,bold:true});
s13.addText("• Moderate performance\n• Higher per-step overhead\n• Additional model calls",{x:3.75,y:2.2,w:2.5,h:2.5,fontSize:12,color:C.muted});
s13.addShape(pres.shapes.RECTANGLE,{x:6.6,y:1.5,w:2.9,h:3.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s13.addShape(pres.shapes.RECTANGLE,{x:6.6,y:1.5,w:2.9,h:.08,fill:{color:"EF4444"}});
s13.addText("Random",{x:6.8,y:1.7,w:2.5,h:.4,fontSize:18,color:C.text,bold:true});
s13.addText("• Worst performance\n• Underscores importance of informed decision-making",{x:6.8,y:2.2,w:2.5,h:2.5,fontSize:12,color:C.muted});

// 14. Generalization
let s14 = pres.addSlide();
s14.background = {color:C.light};
s14.addText("Generalizability",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s14.addText("Out-of-sample results on CSI500 and NASDAQ100",{x:.5,y:.9,w:9,h:.4,fontSize:14,color:C.muted});
s14.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.5,w:4.3,h:2.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s14.addText("CSI500",{x:.7,y:1.6,w:4,h:.4,fontSize:20,color:C.text,bold:true});
s14.addText("• Best IC: 0.0288\n• Best IR: 2.17\n• Tested 2024-2025",{x:.7,y:2.1,w:4,h:1.5,fontSize:13,color:C.muted});
s14.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.5,w:4.3,h:2.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s14.addText("NASDAQ100",{x:5.4,y:1.6,w:4,h:.4,fontSize:20,color:C.text,bold:true});
s14.addText("• Best IC: 0.0172\n• Best IR: 1.77\n• Tested 2024-2025",{x:5.4,y:2.1,w:4,h:1.5,fontSize:13,color:C.muted});
s14.addText("Strong out-of-sample robustness across both Chinese and U.S. markets",{x:.5,y:4.3,w:9,h:.5,fontSize:14,color:C.text,bold:true,align:"center"});

// 15. Key Contributions
let s15 = pres.addSlide();
s15.background = {color:C.light};
s15.addText("Key Contributions",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
[{t:"End-to-end automation with transparency",d:"First data-centric multi-agent framework in quantitative finance"},{t:"High-performance R&D tools",d:"Co-STEER agent for data-centric tasks"},{t:"Strong empirical performance",d:"2x ARR, 70% fewer factors, cost under $10"}].forEach((c,i)=>{let y=1.2+i*1.4;s15.addShape(pres.shapes.RECTANGLE,{x:.5,y:y,w:.08,h:1.1,fill:{color:C.highlight}});s15.addText(c.t,{x:.8,y:y,w:8,h:.5,fontSize:18,color:C.text,bold:true});s15.addText(c.d,{x:.8,y:y+.5,w:8,h:.5,fontSize:14,color:C.muted});});

// 16. Related Work
let s16 = pres.addSlide();
s16.background = {color:C.light};
s16.addText("Related Work",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s16.addText("Factor Mining Evolution",{x:.5,y:1.1,w:9,h:.5,fontSize:20,color:C.text,bold:true});
s16.addText("• Fama-French models → Symbolic regression → RL optimization",{x:.5,y:1.6,w:9,h:.4,fontSize:14,color:C.text});
s16.addText("Model Innovation",{x:.5,y:2.2,w:9,h:.5,fontSize:20,color:C.text,bold:true});
s16.addText("• Autoregression → ML models → Deep learning (GRU, LSTM, Transformer)",{x:.5,y:2.7,w:9,h:.4,fontSize:14,color:C.text});
s16.addText("LLM & Multi-agent",{x:.5,y:3.3,w:9,h:.5,fontSize:20,color:C.text,bold:true});
s16.addText("• Information extraction → Signal generation → Expert simulation",{x:.5,y:3.8,w:9,h:.4,fontSize:14,color:C.text});

// 17. Method Details
let s17 = pres.addSlide();
s17.background = {color:C.light};
s17.addText("Method Details",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s17.addText("Co-STEER Knowledge Transfer",{x:.5,y:1.1,w:9,h:.4,fontSize:18,color:C.text,bold:true});
s17.addText("c_new = argmax similarity(task, task_k) · code_k",{x:.5,y:1.6,w:9,h:.4,fontSize:14,color:C.accent,align:"center"});
s17.addText("Multi-Armed Bandit for Direction Selection",{x:.5,y:2.3,w:9,h:.4,fontSize:18,color:C.text,bold:true});
s17.addText("• 8-dimensional performance state vector\n• Linear Thompson sampling\n• Adaptive balance exploration/exploitation",{x:.5,y:2.8,w:9,h:1.2,fontSize:14,color:C.text});

// 18. Exploration Patterns
let s18 = pres.addSlide();
s18.background = {color:C.light};
s18.addText("Exploration Patterns",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s18.addText("Analysis of Factor Hypothesis Evolution",{x:.5,y:.9,w:9,h:.4,fontSize:14,color:C.muted});
[{t:"Local refinement",d:"Multi-step refinement within a conceptual thread"},{t:"Strategic revisit",d:"Ability to revisit and incrementally refine promising hypotheses"},{t:"Diverse paths yield synergy",d:"8 of 36 trials selected into SOTA, spanning 5 of 6 clusters"}].forEach((p,i)=>{let y=1.5+i*1.2;s18.addShape(pres.shapes.RECTANGLE,{x:.5,y:y,w:.08,h:1,fill:{color:C.highlight}});s18.addText(p.t,{x:.8,y:y,w:8,h:.4,fontSize:16,color:C.text,bold:true});s18.addText(p.d,{x:.8,y:y+.4,w:8,h:.5,fontSize:13,color:C.muted});});

// 19. Conclusion
let s19 = pres.addSlide();
s19.background = {color:C.accent};
s19.addText("Conclusion",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.white,bold:true});
s19.addText("R&D-Agent(Q) represents a significant step toward intelligent and autonomous quantitative research",{x:.5,y:1.2,w:9,h:.8,fontSize:16,color:C.light,align:"center"});
s19.addShape(pres.shapes.RECTANGLE,{x:.5,y:2.3,w:4.3,h:2.5,fill:{color:C.primary}});
s19.addText("Automation",{x:.7,y:2.5,w:4,h:.4,fontSize:18,color:C.white,bold:true});
s19.addText("End-to-end automated R&D process with verifiable outputs",{x:.7,y:3,w:4,h:1.5,fontSize:13,color:C.light});
s19.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.3,w:4.3,h:2.5,fill:{color:C.secondary}});
s19.addText("Performance",{x:5.4,y:2.5,w:4,h:.4,fontSize:18,color:C.white,bold:true});
s19.addText("2x ARR, 70% fewer factors, under $10 cost",{x:5.4,y:3,w:4,h:1.5,fontSize:13,color:C.light});
s19.addText("https://github.com/microsoft/RD-Agent",{x:.5,y:5,h:.4,fontSize:12,color:C.highlight,align:"center"});

// 20. Thank You
let s20 = pres.addSlide();
s20.background = {color:C.accent};
s20.addText("Thank You!",{x:.5,y:2,w:9,h:1,fontSize:48,color:C.white,bold:true,align:"center"});
s20.addText("Questions?",{x:.5,y:3.2,w:9,h:.6,fontSize:24,color:C.light,align:"center"});
s20.addText("NeurIPS 2025",{x:.5,y:4.5,w:9,h:.4,fontSize:16,color:C.highlight,align:"center"});

pres.writeFile({fileName:"/Users/lationlee/Downloads/RD-Agent-Quant-Presentation.pptx"});
console.log("PPT created: /Users/lationlee/Downloads/RD-Agent-Quant-Presentation.pptx");

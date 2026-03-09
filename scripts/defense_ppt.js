const pptxgen = require("pptxgenjs");
let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
const C = {primary:"1E3A5F",secondary:"2D5A87",accent:"3A7CA5",light:"F0F4F8",white:"FFFFFF",text:"1E293B",muted:"64748B",highlight:"0891B2"};

// 1. Title
let s1 = pres.addSlide();
s1.background = {color:C.primary};
s1.addText("项目答辩",{x:.5,y:1.5,w:9,h:1,fontSize:48,color:C.white,bold:true,align:"center"});
s1.addText("—— 基于深度学习的XXX系统",{x:.5,y:2.6,w:9,h:.8,fontSize:24,color:C.light,align:"center"});
s1.addText("汇报人：XXX",{x:.5,y:4,w:9,h:.5,fontSize:18,color:C.white,align:"center"});
s1.addText("指导老师：XXX | 2026年X月",{x:.5,y:4.6,w:9,h:.4,fontSize:14,color:C.muted,align:"center"});

// 2. Team Introduction
let s2 = pres.addSlide();
s2.background = {color:C.light};
s2.addText("1. 团队介绍",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s2.addText("核心成员",{x:.5,y:1.1,w:9,h:.5,fontSize:20,color:C.text,bold:true});

// Member 1
s2.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.8,w:2.9,h:3.2,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:8,offset:2,angle:135,opacity:.1}});
s2.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.8,w:2.9,h:.08,fill:{color:C.highlight}});
s2.addText("成员一",{x:.7,y:2.1,w:2.5,h:.4,fontSize:18,color:C.text,bold:true});
s2.addText("职位/角色",{x:.7,y:2.5,w:2.5,h:.3,fontSize:12,color:C.muted});
s2.addText("负责内容：\n• 工作内容1\n• 工作内容2\n• 工作内容3",{x:.7,y:2.9,w:2.5,h:1.8,fontSize:12,color:C.text});

// Member 2
s2.addShape(pres.shapes.RECTANGLE,{x:3.55,y:1.8,w:2.9,h:3.2,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:8,offset:2,angle:135,opacity:.1}});
s2.addShape(pres.shapes.RECTANGLE,{x:3.55,y:1.8,w:2.9,h:.08,fill:{color:C.secondary}});
s2.addText("成员二",{x:3.75,y:2.1,w:2.5,h:.4,fontSize:18,color:C.text,bold:true});
s2.addText("职位/角色",{x:3.75,y:2.5,w:2.5,h:.3,fontSize:12,color:C.muted});
s2.addText("负责内容：\n• 工作内容1\n• 工作内容2\n• 工作内容3",{x:3.75,y:2.9,w:2.5,h:1.8,fontSize:12,color:C.text});

// Member 3
s2.addShape(pres.shapes.RECTANGLE,{x:6.6,y:1.8,w:2.9,h:3.2,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:8,offset:2,angle:135,opacity:.1}});
s2.addShape(pres.shapes.RECTANGLE,{x:6.6,y:1.8,w:2.9,h:.08,fill:{color:C.accent}});
s2.addText("成员三",{x:6.8,y:2.1,w:2.5,h:.4,fontSize:18,color:C.text,bold:true});
s2.addText("职位/角色",{x:6.8,y:2.5,w:2.5,h:.3,fontSize:12,color:C.muted});
s2.addText("负责内容：\n• 工作内容1\n• 工作内容2\n• 工作内容3",{x:6.8,y:2.9,w:2.5,h:1.8,fontSize:12,color:C.text});

// 3. Demo (Blank for Video)
let s3 = pres.addSlide();
s3.background = {color:C.primary};
s3.addText("2. Demo 演示",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.white,bold:true});
s3.addShape(pres.shapes.RECTANGLE,{x:1,y:1.5,w:8,h:3.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:10,offset:4,angle:135,opacity:.2}});
s3.addText("[ 演示视频播放区域 ]",{x:1,y:2.8,w:8,h:1,fontSize:28,color:C.muted,align:"center",valign:"middle"});
s3.addText("点击播放按钮开始演示",{x:1,y:4,w:8,h:.5,fontSize:14,color:C.muted,align:"center"});

// 4. Data Source & Processing
let s4 = pres.addSlide();
s4.background = {color:C.light};
s4.addText("3. 数据来源与处理",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s4.addText("libero_all 数据集",{x:.5,y:1.1,w:9,h:.5,fontSize:20,color:C.text,bold:true});

s4.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.8,w:4.3,h:2.8,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s4.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.8,w:.08,h:2.8,fill:{color:C.highlight}});
s4.addText("数据来源",{x:.8,y:2,w:3.8,h:.4,fontSize:16,color:C.text,bold:true});
s4.addText("• libero_all 公开数据集\n• 包含多模态观测数据\n• 时间序列特征\n• 结构化属性信息",{x:.8,y:2.5,w:3.8,h:1.8,fontSize:13,color:C.text});

s4.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.8,w:4.3,h:2.8,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s4.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.8,w:.08,h:2.8,fill:{color:C.secondary}});
s4.addText("数据处理",{x:5.5,y:2,w:3.8,h:.4,fontSize:16,color:C.text,bold:true});
s4.addText("• 数据清洗与标准化\n• 缺失值处理\n• 特征工程\n• 数据增强",{x:5.5,y:2.5,w:3.8,h:1.8,fontSize:13,color:C.text});

s4.addShape(pres.shapes.RECTANGLE,{x:.5,y:4.8,w:9,h:.6,fill:{color:C.primary}});
s4.addText("数据规模：XXX 样本 | 特征维度：XXX | 训练/测试划分：X/X",{x:.7,y:4.9,w:8.6,h:.4,fontSize:14,color:C.white,align:"center"});

// 5. Model Architecture
let s5 = pres.addSlide();
s5.background = {color:C.light};
s5.addText("4. 模型架构说明",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s5.addText("Wall-Oss-Flow 架构",{x:.5,y:1.1,w:9,h:.5,fontSize:20,color:C.text,bold:true});

s5.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.8,w:2.5,h:1.2,fill:{color:C.primary}});
s5.addText("Input\n(输入层)",{x:.5,y:2.1,w:2.5,h:.6,fontSize:14,color:C.white,align:"center",valign:"middle"});
s5.addText("→",{x:3.1,y:2.2,w:.5,h:.5,fontSize:24,color:C.muted,align:"center"});

s5.addShape(pres.shapes.RECTANGLE,{x:3.7,y:1.8,w:2.5,h:1.2,fill:{color:C.secondary}});
s5.addText("Wall Module\n(墙体特征)",{x:3.7,y:2.1,w:2.5,h:.6,fontSize:12,color:C.white,align:"center",valign:"middle"});
s5.addText("→",{x:6.3,y:2.2,w:.5,h:.5,fontSize:24,color:C.muted,align:"center"});

s5.addShape(pres.shapes.RECTANGLE,{x:6.9,y:1.8,w:2.5,h:1.2,fill:{color:C.accent}});
s5.addText("Oss Module\n(OSS融合)",{x:6.9,y:2.1,w:2.5,h:.6,fontSize:12,color:C.white,align:"center",valign:"middle"});
s5.addText("→",{x:2.8,y:3.3,w:.5,h:.5,fontSize:24,color:C.muted,align:"center"});

s5.addShape(pres.shapes.RECTANGLE,{x:3.5,y:3.2,w:3,h:1.2,fill:{color:C.highlight}});
s5.addText("Flow Module\n(流式预测)",{x:3.5,y:3.5,w:3,h:.6,fontSize:14,color:C.white,align:"center",valign:"middle"});
s5.addText("↓",{x:4.8,y:4.5,w:.5,h:.3,fontSize:20,color:C.muted,align:"center"});

s5.addShape(pres.shapes.RECTANGLE,{x:3.5,y:4.6,w:3,h:.8,fill:{color:C.text}});
s5.addText("Output (预测结果)",{x:3.5,y:4.7,w:3,h:.6,fontSize:14,color:C.white,align:"center",valign:"middle"});
s5.addText("核心特点：",{x:.5,y:3.2,w:2,h:.4,fontSize:14,color:C.text,bold:true});
s5.addText("• Wall: 墙体结构特征提取\n• Oss: 多源异构特征融合\n• Flow: 时序流式预测机制",{x:.5,y:3.6,w:3,h:1.2,fontSize:12,color:C.muted});

// 6. Training & Inference
let s6 = pres.addSlide();
s6.background = {color:C.light};
s6.addText("5. 训练与推理过程",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});
s6.addText("训练配置：32 Epochs",{x:.5,y:1.1,w:9,h:.5,fontSize:20,color:C.text,bold:true});

s6.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.8,w:4.3,h:2.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s6.addText("训练参数",{x:.7,y:2,w:3.8,h:.4,fontSize:16,color:C.text,bold:true});
s6.addText("• Epochs: 32\n• Batch Size: XXX\n• Learning Rate: XXX\n• Optimizer: Adam\n• Loss Function: XXX",{x:.7,y:2.5,w:3.8,h:1.5,fontSize:13,color:C.text});

s6.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.8,w:4.3,h:2.5,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s6.addText("训练过程",{x:5.4,y:2,w:3.8,h:.4,fontSize:16,color:C.text,bold:true});
s6.addText("• 第1-10轮：基础收敛\n• 第11-20轮：性能提升\n• 第21-30轮：微调优化\n• 第31-32轮：最终收敛",{x:5.4,y:2.5,w:3.8,h:1.5,fontSize:13,color:C.text});

s6.addShape(pres.shapes.RECTANGLE,{x:.5,y:4.5,w:9,h:1,fill:{color:C.primary}});
s6.addText("[ 训练曲线示意图 - Loss / Accuracy 随 Epoch 变化 ]",{x:.7,y:4.7,w:8.6,h:.6,fontSize:14,color:C.white,align:"center",valign:"middle"});

// 7. Problems & Highlights
let s7 = pres.addSlide();
s7.background = {color:C.light};
s7.addText("6. 存在问题与项目亮点",{x:.5,y:.3,w:9,h:.7,fontSize:36,color:C.primary,bold:true});

s7.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.2,w:4.3,h:2.8,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s7.addShape(pres.shapes.RECTANGLE,{x:.5,y:1.2,w:4.3,h:.08,fill:{color:"EF4444"}});
s7.addText("存在问题",{x:.7,y:1.5,w:4,h:.4,fontSize:18,color:C.text,bold:true});
s7.addText("• 尚未采集现实场景数据\n• 当前使用公开数据集验证\n• 后续需要实地数据采集\n• 模型泛化性待进一步验证",{x:.7,y:2,w:4,h:1.8,fontSize:13,color:C.muted});

s7.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.2,w:4.3,h:2.8,fill:{color:C.white},shadow:{type:"outer",color:"000000",blur:6,offset:2,angle:135,opacity:.08}});
s7.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.2,w:4.3,h:.08,fill:{color:"10B981"}});
s7.addText("项目亮点",{x:5.4,y:1.5,w:4,h:.4,fontSize:18,color:C.text,bold:true});
s7.addText("• 创新的 Wall-Oss-Flow 架构\n• 多模态特征有效融合\n• 32 epochs 充分训练\n• 模块化设计便于扩展",{x:5.4,y:2,w:4,h:1.8,fontSize:13,color:C.muted});

s7.addShape(pres.shapes.RECTANGLE,{x:.5,y:4.2,w:9,h:1.2,fill:{color:C.primary}});
s7.addText("后续计划",{x:.7,y:4.4,w:8.6,h:.4,fontSize:16,color:C.white,bold:true});
s7.addText("• 采集现实业务数据 | • 部署到实际场景 | • 持续优化模型性能",{x:.7,y:4.9,w:8.6,h:.4,fontSize:13,color:C.light,align:"center"});

// Thank you
let s8 = pres.addSlide();
s8.background = {color:C.primary};
s8.addText("感谢聆听！",{x:.5,y:2,w:9,h:1,fontSize:48,color:C.white,bold:true,align:"center"});
s8.addText("请批评指正",{x:.5,y:3.2,w:9,h:.6,fontSize:24,color:C.light,align:"center"});
s8.addText("Q&A",{x:.5,y:4.2,w:9,h:.5,fontSize:20,color:C.highlight,align:"center"});

pres.writeFile({fileName:"/Users/lationlee/Downloads/项目答辩PPT.pptx"});
console.log("PPT created: /Users/lationlee/Downloads/项目答辩PPT.pptx");

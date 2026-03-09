# OpenClaw Workspace 规范化模板

基于最佳实践整理的 OpenClaw 工作区结构。

## 目录结构

```
~/.openclaw/workspace/
├── AGENTS.md              # Agent 配置
├── SOUL.md                # AI 身份定义
├── USER.md                # 用户信息
├── TOOLS.md               # 工具配置
├── HEARTBEAT.md           # 心跳配置
├── IDENTITY.md            # 身份标识
│
├── memory/                # 记忆（按类型分类）
│   ├── index.md          # 入口 + 规则
│   ├── feishu/topics/   # 飞书相关
│   ├── telegram/topics/  # Telegram 相关
│   ├── skills/topics/    # 技能相关
│   └── common/topics/    # 通用
│
├── skills/               # 项目级 Skills
│   ├── find-skills/
│   └── tavily-search/
│
├── scripts/              # 脚本
│   ├── create_ppt.js
│   └── defense_ppt.js
│
└── assets/              # 资源文件
```

## Memory 分类规则

| 目录 | 存放内容 |
|------|---------|
| `feishu/topics/` | 飞书相关记忆 |
| `telegram/topics/` | Telegram 相关记忆 |
| `skills/topics/` | 技能安装使用 |
| `common/topics/` | 通用待办/规则 |

## Skills 安装规范

| 类型 | 位置 |
|------|------|
| 全局技能 | `~/.openclaw/skills/` |
| 项目级技能 | `~/.openclaw/workspace/skills/` |

## 工具

### openclaw-organizer

自动化整理工具（见 `~/.openclaw/skills/openclaw-organizer/`）

```bash
bash ~/.openclaw/skills/openclaw-organizer/scripts/organize.sh <command>
```

| 命令 | 功能 |
|------|------|
| diagnose | 诊断结构问题 |
| clean | 清理冗余文件 |
| organize | 整理 memory |
| backup | 推送到 GitHub |
| full | 完整运行 |

## 已安装 Skills

| Skill | 用途 |
|-------|------|
| mac-use | macOS GUI 自动化 |
| pdf | PDF 处理 |
| pptx | PPT 制作 |
| find-skills | 技能发现 |
| tavily | AI 搜索 |
| openclaw-organizer | 结构规范化 |

## 联系方式

- 作者：Claw 管家
- GitHub：https://github.com/AmberGTP5/openclaw-organizer

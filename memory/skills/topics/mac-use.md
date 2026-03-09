# Skills - mac-use 安装使用

## 安装
- 来源: ClawHub (https://clawhub.ai/kekejun/mac-use)
- 位置: ~/.openclaw/skills/mac-use/
- 手动下载安装（ClawHub 有 rate limit）

## 依赖安装
```bash
pip3 install pyautogui pyobjc-core pyobjc-framework-Vision pyobjc-framework-Cocoa pyobjc-framework-Quartz
```

## 使用命令
```bash
# 截图
python3 ~/.openclaw/skills/mac-use/scripts/mac_use.py screenshot "<应用名>"

# 系统截屏（无标注）
/usr/sbin/screencapture -x ~/Desktop/xxx.png
```

## 注意
- mac-use 截图自带绿色标注框，无法关闭
- 系统截屏更干净

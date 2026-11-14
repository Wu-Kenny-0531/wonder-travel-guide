@echo off
chcp 65001 >nul
title GoWonder Travel Guide 本機伺服器
echo 正在為您啟動 GoWonder Travel Guide 旅遊指南網站...

start "" "http://localhost:3000/"

set "AGY_NODE=%APPDATA%\Antigravity\bin\agy-node.cmd"

if exist "%AGY_NODE%" (
  call "%AGY_NODE%" server.cjs
) else (
  where node >nul 2>nul
  if %errorlevel% equ 0 (
    node server.cjs
  ) else (
    echo [提示] 未找到 Node.js，將為您直接以瀏覽器開啟 preview.html
    start "" "preview.html"
    pause
  )
)

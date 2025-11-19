@echo off
cd /d "%~dp0"
nginx.exe -s stop
echo Insect Identification App has been stopped
pause
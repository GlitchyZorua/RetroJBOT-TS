@echo off

:: I don't feel like touchin this code, all it does is launch the runtime
:: I feel it get worse in the future.
:: OH WELL.

setlocal
break /? 2>nul
if errorlevel 1 goto wine
dir /n >nul
if errorlevel 1 goto wine
dir /4 >nul
if errorlevel 1 goto wine
dpath /? 2>nul
if errorlevel 1 goto wine
set random=
if not defined random goto wine
goto :c

:: ============================
:: ANTI STUPID WARNINGS
:: ============================

:wine
echo =============================================================
echo : You are using this script in wine. Please don't do this.  :
echo : This script is NOT MEANT TO BE USED WITH WINE. AND HAS    :
echo : THE POTENTIAL OF BREAKING STUFF! PLEASE USE LOAD.SH       :
echo : INSTEAD. Press any key to terminate the script.           :
echo =============================================================
pause
exit



:: this is a hack. 
ver | findstr /i "5\.0\." > nul
IF %ERRORLEVEL% EQU 0 goto notsupported
ver | findstr /i "5\.1\." > nul
IF %ERRORLEVEL% EQU 0 goto notsupported
ver | findstr /i "5\.2\." > nul
IF %ERRORLEVEL% EQU 0 goto notsupported
ver | findstr /i "6\.0\." > nul
IF %ERRORLEVEL% EQU 0 goto notsupported
ver | findstr /i "6\.1\." > nul
IF %ERRORLEVEL% EQU 0 goto notsupported
goto c
:: this code is untested. oh fucking well. 


:notsupported
echo ===============================
echo : Your OS isn't supported.    :
echo : This script will terminate. :
echo ===============================
pause
exit


:: the menu
:menu
cls
echo ==================================
echo :   RetroJBOT Runtime Manager    :
echo ==================================
echo v1.0
echo What would you like to do? (use mouse or keyboard)
cmdMenuSel f870 "1. First-time startup" "2. Start RetroJBOT" "3. Exit" 
:: this menu was ripped from a batch os.
:: it was created for me.
:: cute reference. i hate my self.
if %ERRORLEVEL% == 1 goto fts
if %ERRORLEVEL% == 2 goto start
if %ERRORLEVEL% == 3 exit

:: First Time Up 
:fts
echo Starting first-time startup
call npm install
call npm run build
echo Finished!
call cmdMenuSel f870 "1. Menu" "2. Exit"
if %ERRORLEVEL% == 1 goto menu
if %ERRORLEVEL% == 2 exit

:start
echo Enable Loop Mode Or halt when crash?

cmdMenuSel f870 "1. loop mode (recommended)" "2. Halt when crash" "3. Cancel"
if %ERRORLEVEL% == 1 goto loop
if %ERRORLEVEL% == 2 goto run
if %ERRORLEVEL% == 3 goto menu


:: halt when crash
:run
cls
echo Running Node...
call npm ci
call npm run build
call npm run start
call cmdMenuSel f870 "1. Restart" "2. Exit"
if %ERRORLEVEL% == 1 goto run
if %ERRORLEVEL% == 2 exit

:: loop mode
:loop
cls
call npm ci
call npm run build
call npm run start
echo Restarting...
goto loop

:: BATCH + JS = SHIT
:: If this scripts breaks due to microsoft, i'm forced to rewrite it. without using batch script
:: probably powershell.
:: JUST FOR A GOD DAMN LAUNCHER FOR A DISCORD BOT. FUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
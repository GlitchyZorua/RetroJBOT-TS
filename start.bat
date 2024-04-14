@echo off
:startup
:: Arguments 

IF "%1"=="-?" goto help
:: Skip Wine Checks
IF "%1"=="--no-wine-check" goto menu
:: First Time Setup
IF "%1"=="-fts" goto fts
:: loop-mode
IF "%1"=="--loop-mode" goto loop
:: Normal Mode
IF "%1"=="--normal-mode" goto start

goto winecheck
:help
echo Here is a list of arguments you can use:
echo -? - this
echo -fts - Runs first time setup
echo --loop-mode - Runs Loop Mode
echo --normal-mode - Runs normal mode
echo --no-wine-check - Skips the wine check


cmd
:winecheck
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
goto menu


:wine
echo Please don't run this batch file under wine! If you are trying to run the bot on linux, please run "start.sh" (without using wine.)
echo If you still want to proceed, you will be excluded from reporting a issue on github, UNLESS you are seeing this message in a error.
echo You can skip this check by adding the "--no-wine-check" argument
ver
set /P c=Do you still try running this? (Press A if you wanna check again) (y/n/a)
if /I "%c%" EQU "Y" goto menu
if /I "%c%" EQU "N" exit
if /I "%c%" EQU "A" goto startup

:: the menu
:menu
cls
echo ==================================
echo :   RetroJBOT Runtime Manager    :
echo ==================================
echo v1.0.0
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
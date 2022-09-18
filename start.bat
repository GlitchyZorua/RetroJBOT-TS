@echo off



:menu
cls
echo ==================================
echo :   RetroJBOT Runtime Manager    :
echo ==================================
echo v1.0
echo What would you like to do? (use mouse or keyboard)
cmdMenuSel f870 "1. First-time startup" "2. Start RetroJBOT" "3. Exit"
if %ERRORLEVEL% == 1 goto fts
if %ERRORLEVEL% == 2 goto start
if %ERRORLEVEL% == 3 exit

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

:run
cls
echo Running Node...
call npm ci
call npm run build
call npm run start
call cmdMenuSel f870 "1. Restart" "2. Exit"
if %ERRORLEVEL% == 1 goto run
if %ERRORLEVEL% == 2 exit

:settings
.env

:loop
cls
call npm ci
call npm run build
call npm run start
echo Restarting...
goto loop

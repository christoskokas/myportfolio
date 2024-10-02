@echo off

:: Open the first PowerShell window and run the Python script
start powershell -NoExit -Command "& { cd 'C:\\Users\\Coke\\Desktop\\Projects\\my_portfolio\\backend'; python.exe app.py; Write-Host 'Python script execution completed.'; Read-Host 'Press Enter to close this window...'; }"

:: Open the second PowerShell window and run npm start
start powershell -NoProfile -NoExit -Command "& { cd 'C:\\Users\\Coke\\Desktop\\Projects\\my_portfolio\\frontend\\src'; npm start; Write-Host 'npm start completed.'; Read-Host 'Press Enter to close this window...'; }"
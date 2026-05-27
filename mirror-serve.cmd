@echo off
set "PATH=%PATH%;C:\Program Files\nodejs"
cd /d "C:\My Web Sites\Joes Vintage"
call npx --yes serve . -l 4322 --no-clipboard --no-port-switching

@echo off
set dir=%~dp0lib\JSBuilder\
%dir%jsdb\win\jsdb.exe -path %dir% %dir%bin\Dispatch.js %*
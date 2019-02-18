var WshShell = new ActiveXObject("WScript.Shell");

WshShell.RegDelete("HKCU\\Software\\Classes\\*\\shell\\nano-in-wsl-terminal\\command\\");
WshShell.RegDelete("HKCU\\Software\\Classes\\*\\shell\\nano-in-wsl-terminal\\");

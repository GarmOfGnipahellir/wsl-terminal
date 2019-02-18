var WshShell = new ActiveXObject("WScript.Shell");

WshShell.CurrentDirectory = "..";
WshShell.RegWrite("HKCU\\Software\\Classes\\*\\shell\\nano-in-wsl-terminal\\"
    , "Open with &nano in wsl-terminal", "REG_SZ");
WshShell.RegWrite("HKCU\\Software\\Classes\\*\\shell\\nano-in-wsl-terminal\\icon"
    , "\"" + WshShell.CurrentDirectory + "\\nano.exe\"" );
WshShell.RegWrite("HKCU\\Software\\Classes\\*\\shell\\nano-in-wsl-terminal\\command\\"
    , "\"" + WshShell.CurrentDirectory + "\\nano.exe\" \"%1\"", "REG_SZ");

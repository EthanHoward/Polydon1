/*
* Authored by Ethan Howard,
* Copyright Polydon Industries 2023
* All Rights Reserved
*
* Deprecated, DID log to console, unfortunately on the server. Was intended for client side to look... fancy.
* */
function PDIConsoleLog() {
  console.log(`
%cCopyright %cPolydon %cIndustries %c2023. All Rights Reserved.

%c######    #####   ###      ##   ##  ######    #####   ###  ##
 ##  ##  ### ###   ##      ##   ##   ## ###  ### ###   ### ##
 ##  ##  ##   ##   ##      ##   ##   ##  ##  ##   ##   ######
 #####   ##   ##   ##       ######   ##  ##  ##   ##   ## ###
 ##      ##   ##   ##           ##   ##  ##  ##   ##   ##  ##
 ##      ### ###   ##  ##  ##   ##   ## ###  ### ###   ##  ##
####      #####   #######   #####   ######    #####   ###  ##

%c######  ###  ##  ######   ##   ##   #####   ######## ######    ######  #######   #####
  ##     ### ##   ## ###   #   ##  ##   ##  ## ## ##  ##  ##     ##     ##  ##  ##   ##
  ##     ######   ##  ##  ##   ##  ##          ##     ##  ##     ##     ##      ##
  ##     ## ###   ##  ##  ##   ##   #####      ##     #####      ##     ####     #####
  ##     ##  ##   ##  ##  ##   ##       ##     ##     ##  ##     ##     ##           ##
  ##     ##  ##   ## ###  ### ###  ##   ##     ##     ##  ##     ##     ##  ##  ##   ##
######  ###  ##  ######    #####    #####     ####   #### ###  ######  #######   #####
`, "color:white", "color:#2500FF", "color:#E91920", "color:white", "color:#2500FF", "color:#E91920")

}

export default PDIConsoleLog
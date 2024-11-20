const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349060517249";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_29_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgMSxcbiAgICAgICAgMTExLFxuICAgICAgICA1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWk3LzVraDZzam1ocUlZaEtmc1pzVmpoMVdpRHN1cW16TEtDVU1TcUpWWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMktQbmNwS2lUMm01TmY5bDd5bmtKd1wiLFxuICBcInBob25lSWRcIjogXCI1ZjAyYTI4MS04NDc0LTRmNmYtYjQ0Ny1mYzk5OTExYmI2NmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTM5LFxuICAgICAgMTM0LFxuICAgICAgMjQwLFxuICAgICAgNzQsXG4gICAgICAxMzgsXG4gICAgICA4OCxcbiAgICAgIDEzMCxcbiAgICAgIDIzMCxcbiAgICAgIDU1LFxuICAgICAgMjA3LFxuICAgICAgMTIyLFxuICAgICAgMjQ4LFxuICAgICAgNDMsXG4gICAgICA5NCxcbiAgICAgIDkyLFxuICAgICAgMjQ1LFxuICAgICAgMTcxLFxuICAgICAgMjIzLFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMjE0LFxuICAgICAgMTcyLFxuICAgICAgMjIsXG4gICAgICAyMzcsXG4gICAgICAzOCxcbiAgICAgIDIzNyxcbiAgICAgIDI1NCxcbiAgICAgIDY1LFxuICAgICAgMjQ3LFxuICAgICAgMjU0LFxuICAgICAgMTExLFxuICAgICAgMjE1LFxuICAgICAgMTE0LFxuICAgICAgMTAyLFxuICAgICAgMTEyLFxuICAgICAgMjI1LFxuICAgICAgNTcsXG4gICAgICA4MSxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaMUE5S1RORlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2MDUxNzI0OTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI1MjI0MzYwNDg5MTI0OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pEMm51MEdFTnYyOUxrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK2FVUk95ZGhDQWM0eW5JTFJFRUJHWlNrTUtNVDJic1JjT3ljcGZxT1QxTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVOHFnekloR0NHTGRCMFpiVjg1UGEwSFB0ZVJidlQvUDJSOUZ2dlBmTU44K0dVcEwvUGZSaWdZblA0bGVGUWZtc2p3WVl6aE5BNUhSeWY1MkFLOHpEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxZTEyRlppbHlrZmwzeGdKN0lmaEZlcENINzVUdHNiYWJicmVGYk14cTk0aE8vcklXN2hHbmp0alhjc0tyWkJSTnppYXRQemJVSXlHTTlab1VWYk1Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYwNTE3MjQ5OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjA2NjE0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU44Q1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjhDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTFc3cHhxVFQ0RlhjbXkyQUtZSHAzK0ZVU3NLdXVzWEhEV0VobXhFbW8vYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODM5NzA4OTQ0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE4NjQxMTc4NDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

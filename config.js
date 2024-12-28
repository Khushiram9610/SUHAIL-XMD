const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Rajasthan,india."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916377252603";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_49_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSdjZYaTlHOGxqT1k5T2UrcStFTTNEZHBVVXBuWmxIZVhwcXJvMFY0dy9RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpSXBqaTZIVVM2dXROTFFVZ1VaSml3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2ZDNlODZkLTAxYWQtNDNmNS1hZWRiLTlkMTQ3OWRkZGY4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDIwNCxcbiAgICAgIDgzLFxuICAgICAgMjcsXG4gICAgICAyNTIsXG4gICAgICA0MSxcbiAgICAgIDE4MSxcbiAgICAgIDgwLFxuICAgICAgMzgsXG4gICAgICAyMCxcbiAgICAgIDExOSxcbiAgICAgIDIyNyxcbiAgICAgIDExNyxcbiAgICAgIDI1NSxcbiAgICAgIDIzNyxcbiAgICAgIDEwMCxcbiAgICAgIDEzLFxuICAgICAgMTQyLFxuICAgICAgNTcsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxMTUsXG4gICAgICA4MSxcbiAgICAgIDI0NyxcbiAgICAgIDIyNSxcbiAgICAgIDEyMCxcbiAgICAgIDIxMSxcbiAgICAgIDI0NyxcbiAgICAgIDIxLFxuICAgICAgMTc0LFxuICAgICAgMTA0LFxuICAgICAgNDIsXG4gICAgICAxMDMsXG4gICAgICA2MCxcbiAgICAgIDEyNyxcbiAgICAgIDE4MixcbiAgICAgIDE3NCxcbiAgICAgIDEzNSxcbiAgICAgIDg2LFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkpLQ1NBWEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjM3NzI1MjYwMzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn7wk4qI8JKGnEPNmUjNmU/NmVXNmUTNmUjNmUHNmVLNmVnNmfCShpzwk4qJ4L+Q6qeCflwiLFxuICAgIFwibGlkXCI6IFwiMTE5OTYzMTY3NzkzMjQ5OjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xiZzR4OFE0WVBBdXdZWUhTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidDRDMmtjbGZjWS90dTdmSXhHZjVkWSs1V0Uyc2g2ZGRmZk5CNlZDR0hqcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXMXlidTd2MXUwQjFRN3R6TGU5VUh0VzM5UWRoV3pXVjZJY0cyMkhEOVlkVlN6UTYreTFTalVmc2dESFQwaTBOenFpMDVPRm1SN2Z0SGFxOVBhWUlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqa3pFMmFic3J4UkQrbzQyME5WbGluNGxLYmRqa3M0dlM3cXdTWHNtWStGenM1c24yMVhRa3k4cmF3NUpYUm8xSEJzaGFEaERsR0R2OGlLU01kaGVoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTYzNzcyNTI2MDM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MzkzNzY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "❤️𓊈𒆜C͙H͙O͙U͙D͙H͙A͙R͙Y͙𒆜𓊉࿐꧂",
  packname: process.env.PACK_NAME || "❤️𓊈𒆜C͙H͙O͙U͙D͙H͙A͙R͙Y͙𒆜𓊉࿐꧂",
  botname : process.env.BOT_NAME  || "jatt",
  ownername:process.env.OWNER_NAME|| "❤️𓊈𒆜C͙H͙O͙U͙D͙H͙A͙R͙Y͙𒆜𓊉࿐꧂",


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

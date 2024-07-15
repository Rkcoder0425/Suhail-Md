const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_35_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm0xMlR6YkRUZkY2bzN3cFh4SHJhb1Voblk1SVZZbGpRbWFvUFpOUkovQlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5uVXlDQXF6U1JpcWNKR09lWkNPX0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDM3NWRkNGItMGIxZS00ZjU1LWFmYzEtZmFjN2U5NzNjOGQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDY3LFxuICAgICAgMjI4LFxuICAgICAgMTExLFxuICAgICAgMTIxLFxuICAgICAgMzMsXG4gICAgICAyNixcbiAgICAgIDE5MyxcbiAgICAgIDE5OSxcbiAgICAgIDMyLFxuICAgICAgNjMsXG4gICAgICAyNDMsXG4gICAgICAyMzAsXG4gICAgICA3NyxcbiAgICAgIDI2LFxuICAgICAgMjMyLFxuICAgICAgMjEyLFxuICAgICAgMCxcbiAgICAgIDExOSxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgOTQsXG4gICAgICAxMDAsXG4gICAgICAyMTQsXG4gICAgICAzNSxcbiAgICAgIDUsXG4gICAgICA0OSxcbiAgICAgIDEyNSxcbiAgICAgIDk5LFxuICAgICAgMCxcbiAgICAgIDQyLFxuICAgICAgNDksXG4gICAgICAyNTQsXG4gICAgICAyMjYsXG4gICAgICAxNDcsXG4gICAgICAyOCxcbiAgICAgIDE5LFxuICAgICAgODksXG4gICAgICAxNTQsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlAyUDcxOUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ4MDg5MDg0MToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkVycm9yXCIsXG4gICAgXCJsaWRcIjogXCIyMjcxNjk3NjI1OTg5NzA6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUCtCaXRFRkVLM3EwclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFYnkydG5PZ0F2KzRKTVV3QThEMGhucU1Na1ZldnIwdXYzU3ZMdWJhWURzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndzLy95eUJMd3BsVFArMS9MeTg5blE5ZjZDZVh0UWJmcHdjS09ZVXZiSW96MkxVMWZEUHBaR1N4SlZvU01pVkNzc1Z5bkdPSWlOL2xDWkdocGpzMkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkkzWDJvcHdkY2ZlWmI5RmFrSzBHQ3YzTnpCdVFNQUt5VFF1V2c2S2xHSVNDLzFNUSs0RC91ZUJMelZxSTEzNjR3blJ2T0t6SFZ0ZWE1cE9PTFBCc2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ4MDg5MDg0MToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwMjE3NDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

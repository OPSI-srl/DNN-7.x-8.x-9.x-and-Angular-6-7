# Visual studio Templare for DNN 7.x, 8.x, 9.x.
This is a complete template DNN module .ascx for DNN 7.x useful for legacy DNN.
If you need SPA module inside DNN 9.x -> [coming soon]

# Description
To handle an Angular 6 project with DNN you need 2 different project:
1. Angular CLI project
2. DNN module that host your angular (this project)

This is a best practice for your developer frontend is independent from DNN.
Frontend developer should love it.

# Issues resolved with DNN 7.x and Angular 6
1. How to develop your Angular CLI and deploy inside DNN module.
2. How to pass information from DNN to Angular
3. Angulare 6 is too fast to load information than DNN. You need to make all information available to DNN in the correct format.
4. How to use DNN webapi and angular

# Angular CLI project
Tested for Angular CLI: 6.1.2

# DNN module that host your angular
When you build your Angular 
View.ascx have all information for booting angolar 6 and DNN

# Feature
Automatic Routing with Angualar app 
Passing information form DNN to Angular:
- "routingWebAPI": routing 
- "IsEditable": 
- "EditMode": ,
- "IsAdmin": [next release]
- "ModuleId": 
- "PortalId": 
- "UserId": 
- "HomeDirectory": 
- "ModuleDirectory": 
- "RawUrl": 
- "PortalLanguages": 
- "CurrentLanguage": [next release]
- "Users": [next release]
- "TabId": 
- "locale": 

Example:
- "routingWebAPI": "/DesktopModules/MyDemo/API/",
- "IsEditable": false,
- "EditMode": true,
- "IsAdmin": false,
- "ModuleId": 13914,
- "PortalId": 1,
- "UserId": 5,
- "HomeDirectory": "Portals/1/",
- "ModuleDirectory": "/DesktopModules/DemoTemplate/",
- "RawUrl": "/MyDemoTemplate/tabid/9424/language/it-IT/Default.aspx/",
- "PortalLanguages": ["it-IT"],
- "CurrentLanguage": "it-IT",
- "Users": [],
- "TabId": 9424,
- "locale": $("html").attr("lang"),

DNN WebAPI variable needed: 
1. moduleId:
2. tabId: 
3. antiForgeryToken:

# Reference
This project is made from this important resources:
http://www.bitboxx.net/Blog/Post/525/DNN-module-development-with-Angular-2-Part-7#/
https://2sxc.org/en/blog/post/how-to-correctly-connect-dnn-to-angular-4-5-using-reactive-javascript
https://github.com/2sic/dnn-sxc-angular

# Missinig important activity
1. Loading Multilangua resources [Next release]

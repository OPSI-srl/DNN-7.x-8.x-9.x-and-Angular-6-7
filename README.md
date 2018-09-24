# Visual studio Template for DNN 7.x, 8.x, 9.x.
This is a complete template DNN module .ascx for DNN 7.x and Angular 6. Useful for legacy DNN.

**[coming soon]** SPA module inside DNN 9.x.

# Description
To Develop Angular 6 project with DNN you need 2 different project:
1. Angular CLI project
2. DNN module that host your angular (this project)

This is a best practice for your developer frontend, because it is independent from DNN.

Frontend developer should love it.

# Issues resolved with DNN 7.x and Angular 6
1. How to develop your Angular CLI (Tested for Angular CLI: 6.1.2) and deploy inside DNN 7.x.
2. How to pass information from DNN to Angular
3. Angular 6 is too fast to load information than DNN. You need to make all information available to DNN in the correct format.
4. How to use DNN webapi and angular

# Features
### Automatic Routing with Angular app

```html 
<base href="<%= Request.RawUrl%>">
```

### Passing information from DNN to Angular:

```javascript 
<script>
   var serviceFramework = $.ServicesFramework(parseInt('<%=ModuleId %>'));
<%-- 
 2 -> Rename AngularTEMPLATE inside window["AngularTEMPLATE"], with same name in dnncontext.service.ts
 --%>
    window["AngularTEMPLATE"] =
        {
            "Resources":  {
                "Example01": "lorem ipsum 01",
                "Example02": "lorem ipsum 02",
            },
            "Settings": {
                "AllowIndex": "True"
            },
            "routingWebAPI": "/DesktopModules/Rainbow_Staging/API/",
            "IsEditable": <%= Editable.ToString().ToLower()%>,
            "EditMode": <%= EditMode.ToString().ToLower() %>,
            "IsAdmin": false,
            "ModuleId": <%=ModuleId%>,
            "PortalId": <%= PortalId %>,
            "UserId": <%= UserId %>,
            "HomeDirectory": "Portals/<%= PortalId %>/",
            "ModuleDirectory": "<%= ControlPath %>",
            "RawUrl": "<%= Request.RawUrl%>",
            "PortalLanguages": ["<%= PortalSettings.CultureCode %>"],
            "CurrentLanguage": "it-IT",
            "Users": [],
            "TabId": <%= TabId %>,
            "locale": $("html").attr("lang"),
        }
</script>
```

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

### You must use DNN WebAPI:
You should use DNN webapi, so you can use [DnnAuthorize] and [ValidateAntiForgeryToken]

`<link>` : https://talkdotnet.wordpress.com/tag/dnnauthorize/

`<link>` : http://www.dnnsoftware.com/community-blog/cid/144400/webapi-tips

You should pass 3 variable via http header to DNN. The solution is to intercept http from Angular (this is explain in Angular cli project). Now you should just know that you need these variables:

1. **moduleId**:
2. **tabId**: 
3. **antiForgeryToken**: is created by $.ServicesFramework 

`<link>` : (http://www.dnnsoftware.com/wiki/services-framework-webapi)

### Automatic build zip file module for DNN
Version control for now is indipendent from DNN, next relese I will take dnn version.


```html 
<script src="<%= ControlPath %>dist/runtime.js<%= version %>"></script>
<script src="<%= ControlPath %>dist/polyfills.js<%= version %>"></script>
<script src="<%= ControlPath %>dist/styles.js<%= version %>"></script>
<script src="<%= ControlPath %>dist/vendor.js<%= version %>"></script>
<script src="<%= ControlPath %>dist/main.js<%= version %>"></script>
```
### From codebehind of your .ascx
From codebehind of your .ascx you can pass whatever you want to angular.

### Visual Studio: DNN module automatic creationt file zip 
[I need to test it, this part is from template Torsten Weggen template - bitboxx.com]
Building your solution with visual studio on **Release mode** automaticaly visual studio make DNN package zip file with all informations.


# What you need to do step by step:
1. Create a Folder (example: "Demo-Angular6") inside your DNN /desktopmodule/Demo-Angular6/
2. Clone this project from git inside /desktopmodule/Demo-Angular6/ (all files should be in root folder)
3. Open TemplateDNN7NG6.sln with visual studio 2015
4. Re-naming the project/solution
5. Change Assembly name and Namespace
6. Maybe change guid project (I need to check)
7. Inside file view.ascx.cs change namespace
8. Inside file view.ascx change Inherits
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" **Inherits="DemoAngular6.View"** %>
8. **[Skip for now]** Change ZipFileNamePrefix and DesktopFolderName for correct building name. File \Installation\Project.targets line 38 and 39.
9. Build your solution and check any error.
10. Check in bin folder your dll project (Demo-Angular6.dll)
11. It's time to register Module inside your DNN
- Login as host.
- Go to host->Estension->Create new module
- select control module 
- select module file
- Select resource: view.ascx
- insert module name: Demo Angular 6
12. Add new page
13. Add your module inside page
14. Publish/copy your angular files inside dist folder (/desktopmodule/Demo-Angular6/dist/)
15. Open View.ascx file
- change selector "app-root-md" with the same on your Angular module (app.component.ts)

```html 
    <app-root>
    <p>Loading...</p>
    </app-root>
```

- change "AngularTEMPLATE"

```html
    window["AngularTEMPLATE"] =
        {
```

# Missinig important activity
1. Loading Multilanguage resources [Next release]
2. Building DNN package via visual studio on Release build. (I need to tested, sholud work this tempalte is from Torsten Weggen - bitboxx)

# Reference
This project is just an avolution or code encapsulation made from these important resources by Torsten Weggen and Danile Mettler:

`<link>` : http://www.bitboxx.net/Blog/Post/525/DNN-module-development-with-Angular-2-Part-7#/

`<link>` : https://2sxc.org/en/blog/post/how-to-correctly-connect-dnn-to-angular-4-5-using-reactive-javascript

`<link>` : https://github.com/2sic/dnn-sxc-angular


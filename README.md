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
1. How to develop your Angular CLI (Tested for Angular CLI: 6.1.2) and deploy inside DNN module.
2. How to pass information from DNN to Angular
3. Angulare 6 is too fast to load information than DNN. You need to make all information available to DNN in the correct format.
4. How to use DNN webapi and angular

# Feature
Automatic Routing with Angular app

```html 
<base href="<%= Request.RawUrl%>">
```

Passing information from DNN to Angular:

```javascript 
<script>
   var serviceFramework = $.ServicesFramework(parseInt('<%=ModuleId %>'));
<%-- 
 2 -> Rename AngularNGMD inside window["AngularNGMD"], with same name in dnncontext.service.ts
 --%>
    window["AngularNGMD"] =
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
            "ModuleDirectory": "<%=ControlPath%>",
            "RawUrl": "<%= Request.RawUrl%>",
            "PortalLanguages": ["<%= PortalSettings.CultureCode%>"],
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

DNN WebAPI variable needed: 
1. moduleId:
2. tabId: 
3. antiForgeryToken: is created by $.ServicesFramework 

`<link>` : (http://www.dnnsoftware.com/wiki/services-framework-webapi)

# Step by step
1. Create a Folder "Demo-Angular6" inside your DNN /desktopmodule/Demo-Angular6/
2. Clone this project from git inside /desktopmodule/Demo-Angular6/ (all files should be in root folder)
3. Open TemplateDNN7NG6.sln with visual studio 2015
4. (you should change this project with your name project)
- 
- 
- 
- 
- 
5. Build your solution and check any error.
6. Register Module on your DNN
- host->Estension->Create new module
- select control module 
- select module file
- Select resource: view.ascx
- insert module name: Demo Angular 6
4. Add new page
5. Add your module inside page
6. Publish/copy your angular files inside dist folder (/desktopmodule/Demo-Angular6/dist/)
7. Open View.ascs file
- change selector "app-root-md" with the same on your Angular module (app.component.ts)

```html 
    <app-root-md>
    <p>Loading...</p>
    </app-root-md>
```

- change "AngularNGMD"

```html
    window["AngularNGMD"] =
        {
```

# Missinig important activity
1. Loading Multilangua resources [Next release]
2. Building DNN package via visual studio on Release build. (I need to tested, sholud work this tempalte is from Torsten Weggen - bitboxx)

# Reference
This project is just an avolution or code encapsulation made from these important resources by Torsten Weggen and Danile Mettler:

`<link>` : http://www.bitboxx.net/Blog/Post/525/DNN-module-development-with-Angular-2-Part-7#/

`<link>` : https://2sxc.org/en/blog/post/how-to-correctly-connect-dnn-to-angular-4-5-using-reactive-javascript

`<link>` : https://github.com/2sic/dnn-sxc-angular


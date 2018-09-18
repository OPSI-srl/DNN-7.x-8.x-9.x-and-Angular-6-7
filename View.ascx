<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="Angularmodule.View" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%--
<dnn:JavaScriptLibraryInclude runat="server" Name="AngularJS" />
<dnn:JavaScriptLibraryInclude runat="server" Name="angular-route" />
<dnn:JavaScriptLibraryInclude runat="server" Name="angular-ng-progress" />
<dnn:DnnCssInclude runat="server" FilePath="~/Resources/libraries/angular-ng-progress/01_00_07/ngProgress.min.css" />
<dnn:JavaScriptLibraryInclude runat="server" Name="angular-ui-sortable" />
<dnn:JavaScriptLibraryInclude runat="server" Name="angular-ng-dialog" />
<dnn:DnnCssInclude runat="server" FilePath="~/Resources/libraries/angular-ng-dialog/00_05_01/ngDialog.min.css" />
<dnn:DnnCssInclude runat="server" FilePath="~/Resources/libraries/angular-ng-dialog/00_05_01/ngDialog-theme-default.min.css" />

<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Angularmodule/Script/app.js" Priority="40"/>
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Angularmodule/Script/Controller/itemController.js" Priority="100"/>
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Angularmodule/Script/Service/itemService.js" Priority="100"/>

<div id="itemApp<%=ModuleId%>" class="itemApp">
    <div ng-view>Loading...</div>
</div>
<script>
    angular.element(document).ready(function () {

        function init(appName, moduleId, apiPath) {
            var sf = $.ServicesFramework(moduleId);
            var localAppName = appName + moduleId;
            var application = angular.module(localAppName, [appName])
                .constant("serviceRoot", sf.getServiceRoot(apiPath))
                .config(function($httpProvider) {
                    var httpHeaders = { "ModuleId": sf.getModuleId(), "TabId": sf.getTabId(), "RequestVerificationToken": sf.getAntiForgeryValue() };
                    angular.extend($httpProvider.defaults.headers.common, httpHeaders);
                });
            return application;
        };

        var app = init("itemApp", <%=ModuleId%>, "Angularmodule");
        app.constant("userlist", '<%=Users%>');
        app.constant("resources", '<%=Resources%>');
        app.constant("editable", '<%=Editable%>');
        app.constant("moduleId", '<%=ModuleId%>');
        app.constant("settings", '<%=ModuleSettings%>');
        var moduleContainer = document.getElementById("itemApp<%=ModuleId%>");
        angular.bootstrap(moduleContainer, [app.name]);
    });
</script>--%>

this.ControlName
<%= PortalSettings.CultureCode%>
<base href="<%= Request.RawUrl%>">
<app-root-md>
    <p>Loading...</p>
</app-root-md>

<script>
   var serviceFramework = $.ServicesFramework(parseInt('<%=ModuleId %>'));

    window["AngularNGMD"] =
        {
            "Resources":  {
                "Example01": "lorem ipsum 01",
                "Example02": "lorem ipsum 02",
            },
            "Settings": {
                "AllowIndex": "True"
            },
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
    console.log('111111111111-starting antiforgeryvalue: ' + window.$.ServicesFramework(<%=ModuleId%>).getAntiForgeryValue());
</script>

<script>
    jQuery(document).ready(function() {
        console.log('starting antiforgeryvalue +: ' + window.$.ServicesFramework(<%=ModuleId%>).getAntiForgeryValue());
    });

</script>



<script src="/DesktopModules/NG6Template/dist/runtime.js<%= version %>"></script>
<script src="/DesktopModules/NG6Template/dist/polyfills.js<%= version %>"></script>
<script src="/DesktopModules/NG6Template/dist/styles.js<%= version %>"></script>
<script src="/DesktopModules/NG6Template/dist/vendor.js<%= version %>"></script>
<script src="/DesktopModules/NG6Template/dist/main.js<%= version %>"></script>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
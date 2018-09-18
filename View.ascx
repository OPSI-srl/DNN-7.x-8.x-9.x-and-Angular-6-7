<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="Angularmodule.View" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<base href="<%= Request.RawUrl%>">
<%-- 
 1 -> Rename 
 --%>
<app-root-md>
    <p>Loading...</p>
</app-root-md>

<script>
   var serviceFramework = $.ServicesFramework(parseInt('<%=ModuleId %>'));
<%-- 
 2 -> Rename with same name in dnncontext.service.ts
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
            "ModuleDirectory": "<%=ControlPath%>",
            "RawUrl": "<%= Request.RawUrl%>",
            "PortalLanguages": ["<%= PortalSettings.CultureCode%>"],
            "CurrentLanguage": "it-IT",
            "Users": [],
            "TabId": <%= TabId %>,
            "locale": $("html").attr("lang"),
        }
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
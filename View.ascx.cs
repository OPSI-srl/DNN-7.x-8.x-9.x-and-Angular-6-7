using System;
using System.Collections;
using System.Linq;
using System.Resources;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Users;
using DotNetNuke.Security;
using DotNetNuke.Security.Permissions;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.UI.Utilities;
using Newtonsoft.Json;

namespace TemplateDNN9NG6
{
    [DNNtc.ModuleDependencies(DNNtc.ModuleDependency.CoreVersion, "07.00.00")]
    [DNNtc.PackageProperties("TemplateDNN9NG6", 1, "Angular module", "An Angular6 template", "BBAngular.png", "Torsten Weggen", "OPSI solutions", "http://www.opsi.it", "support@bopsi.it", false)]
    [DNNtc.ModuleProperties("TemplateDNN9NG6", "Angular module", 0)]
    [DNNtc.ModuleControlProperties("", "TemplateDNN9NG6", DNNtc.ControlType.View, "", false, false)]
    public partial class View : PortalModuleBase
    {
        protected string Users
        {
            get
            {
                var users = UserController.GetUsers(PortalId).Cast<UserInfo>()
                    .Select(u => new { text = u.Username, id = u.UserID });
                return ClientAPI.GetSafeJSString(JsonConvert.SerializeObject(users));
            }
        }

        protected string Resources
        {
            get
            {
                using (var rsxr = new ResXResourceReader(MapPath(LocalResourceFile + ".ascx.resx")))
                {
                    var res = rsxr.OfType<DictionaryEntry>()
                        .ToDictionary(
                            entry => entry.Key.ToString().Replace(".", "_"),
                            entry => LocalizeString(entry.Key.ToString()));

                    return ClientAPI.GetSafeJSString(JsonConvert.SerializeObject(res));
                }

            }
        }


        protected string OriginalUrl
        {
            get
            {
                return Context.Items["UrlRewrite:OriginalUrl"].ToString();
            }
        }

        protected string ModuleSettings
        {
            get
            {
                return ClientAPI.GetSafeJSString(JsonConvert.SerializeObject(Settings));
            }
        }

        protected bool Editable
        {
            get { return IsEditable && EditMode; }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                DotNetNuke.Framework.ServicesFramework.Instance.RequestAjaxScriptSupport();
                DotNetNuke.Framework.ServicesFramework.Instance.RequestAjaxAntiForgerySupport();
            }
            catch (Exception exc) //Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        protected string version
        {
            get
            {
                //return "?v=" + this.PortalSettings.CdfVersion;
                return "?v=" + DateTime.Now.Ticks;
            }
        }
    }
}
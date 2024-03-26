(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{579:function(s,t,e){"use strict";e.r(t);var n=e(18),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"option1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option1"}},[s._v("#")]),s._v(" Option1 "),e("div",{attrs:{id:"option1"}})]),s._v(" "),e("ol",[e("li",[s._v("On the Windows taskbar, right-click the "),e("strong",[s._v("Windows")]),s._v(" icon and select "),e("strong",[s._v("System")]),s._v(".")]),s._v(" "),e("li",[s._v("In the "),e("strong",[s._v("Settings")]),s._v(" window, under "),e("strong",[s._v("Related Settings")]),s._v(", click "),e("strong",[s._v("Advanced system settings")]),s._v(".")]),s._v(" "),e("li",[s._v("On the "),e("strong",[s._v("Advanced")]),s._v(" tab, click "),e("strong",[s._v("Environment Variables")]),s._v(".")]),s._v(" "),e("li",[s._v("Click "),e("strong",[s._v("New")]),s._v(" to create a new environment variable. Click "),e("strong",[s._v("Edit")]),s._v(" to modify an existing environment variable.")]),s._v(" "),e("li",[s._v("After creating or modifying the environment variable, click "),e("strong",[s._v("Apply")]),s._v(" and then "),e("strong",[s._v("OK")]),s._v(" to have the change take effect.")])]),s._v(" "),e("h2",{attrs:{id:"option2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option2"}},[s._v("#")]),s._v(" Option2")]),s._v(" "),e("ol",[e("li",[s._v("Press "),e("strong",[s._v("Windows Key")]),s._v(" and type "),e("strong",[s._v("env")])]),s._v(" "),e("li",[s._v("Click "),e("strong",[s._v("Edit the system environment variables")]),s._v(" and refer to "),e("a",{attrs:{href:"#option1"}},[e("strong",[s._v("Step3 in Option1")])])])]),s._v(" "),e("h2",{attrs:{id:"option3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option3"}},[s._v("#")]),s._v(" Option3")]),s._v(" "),e("ol",[e("li",[s._v("Open the "),e("strong",[s._v("Start")]),s._v(" menu and start the "),e("strong",[s._v("Run")]),s._v(" app.")]),s._v(" "),e("li",[s._v("Type "),e("strong",[s._v("sysdm.cpl")]),s._v(" and click "),e("strong",[s._v("OK")]),s._v(". This opens the "),e("strong",[s._v("System Properties")]),s._v(" window.")]),s._v(" "),e("li",[s._v("Navigate to the "),e("strong",[s._v("Advanced")]),s._v(" tab and refer to "),e("a",{attrs:{href:"#option1"}},[e("strong",[s._v("Step3 in Option1")])])])]),s._v(" "),e("h2",{attrs:{id:"option4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option4"}},[s._v("#")]),s._v(" Option4")]),s._v(" "),e("ol",[e("li",[s._v("Right click the "),e("strong",[s._v("This PC")]),s._v(" icon and select "),e("strong",[s._v("Properties")]),s._v(".")]),s._v(" "),e("li",[s._v("Refer to "),e("a",{attrs:{href:"#option1"}},[e("strong",[s._v("Step2 in Option1")])])])]),s._v(" "),e("h2",{attrs:{id:"option5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option5"}},[s._v("#")]),s._v(" Option5")]),s._v(" "),e("ol",[e("li",[s._v("Press "),e("strong",[s._v("Windows Key + E")]),s._v(" to open "),e("strong",[s._v("File Explorer")])]),s._v(" "),e("li",[s._v("Right click the "),e("strong",[s._v("This PC")]),s._v(" icon on side bar and select "),e("strong",[s._v("Properties")]),s._v(".")]),s._v(" "),e("li",[s._v("Refer to "),e("a",{attrs:{href:"#option1"}},[e("strong",[s._v("Step2 in Option1")])])])]),s._v(" "),e("h2",{attrs:{id:"set-environment-variables-via-cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-environment-variables-via-cmd"}},[s._v("#")]),s._v(" Set environment variables via cmd")]),s._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM list all environment variables")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM list specific environment variables")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%PATH%")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%USERPROFILE%")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%JAVA_HOME%")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM Use the setx command to set a new user-specific environment variable")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("setx")]),s._v(" [variable_name] "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[variable_value]"')])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("setx")]),s._v(" Test_variable "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Variable value"')])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("setx")]),s._v(" PATH "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%PATH%;C:\\Program Files\\Amazon\\AWSCLI2"')])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM For all users")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("setx")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("/M")]),s._v(" PATH "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%PATH%;C:\\Program Files\\Amazon\\AWSCLI2"')])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("setx")]),s._v(" JAVA_HOME "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files\\java\\jdk1.6.0_27"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("/M")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# list all environment variables:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Get-ChildItem")]),s._v(" Env:\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# list specific environment variables")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Env")]),s._v(":PATH\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Env")]),s._v(":USERNAME\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"unset-environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unset-environment-variables"}},[s._v("#")]),s._v(" Unset Environment Variables")]),s._v(" "),e("p",[s._v("When you add an environment variable in Windows, the key-value pair is saved in the registry. The default registry folders for environment variables are:")]),s._v(" "),e("ul",[e("li",[s._v("user-specific variables: "),e("code",[s._v("HKEY_CURRENT_USER")]),s._v("-> "),e("code",[s._v("Environment")])]),s._v(" "),e("li",[s._v("system-wide variables: "),e("code",[s._v("HKEY_LOCAL_MACHINE")]),s._v(" -> "),e("code",[s._v("SYSTEM")]),s._v(" -> "),e("code",[s._v("CurrentControlSet")]),s._v(" -> "),e("code",[s._v("Control")]),s._v(" -> "),e("code",[s._v("Session Manager")]),s._v(" -> "),e("code",[s._v("Environment")])])]),s._v(" "),e("p",[s._v("Using the "),e("code",[s._v("reg")]),s._v(" command allows you to review and unset environment variables directly in the registry.")]),s._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM list all user-specific environment variables")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("reg")]),s._v(" query HKEY_CURRENT_USER\\Environment")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM list all the system environment variables")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("reg")]),s._v(" query "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment"')])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM list a specific variable")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("reg")]),s._v(" query "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("/v")]),s._v(" JAVA_HOME")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM unset an environment variable in the registry")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("REM The /f parameter is used to confirm the reg delete command. Automatically answer yes for all questions without prompts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("reg")]),s._v(" delete HKEY_CURRENT_USER\\Environment "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("/v")]),s._v(" JAVA_HOME "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[s._v("/f")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);
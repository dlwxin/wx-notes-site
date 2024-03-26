(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{639:function(s,n,a){"use strict";a.r(n);var t=a(18),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[s._v("#")]),s._v(" Links")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://tengine.taobao.org/book/module_development.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 开发从入门到精通"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/wcwnina/p/8728391.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 相关介绍 Nginx 是什么?能干嘛?"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.linode.com/docs/web-servers/nginx/how-to-configure-nginx/",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to Configure NGINX"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.xshell.net/Linux/nginx-count-access-log.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("根据日志统计 Nginx 访问量"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"nginx-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-commands"}},[s._v("#")]),s._v(" Nginx Commands")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./nginx -help\nnginx version: nginx/1.20.1\nUsage: nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-?hvVtTq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-e filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g directives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOptions:\n  -?,-h         "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\n  -v            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" show version and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n  -V            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" show version and configure options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n  -t            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" configuration and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n  -T            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" configuration, dump it and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n  -q            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" suppress non-error messages during configuration testing\n  -s signal     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" send signal to a master process: stop, quit, reopen, reload\n  -p prefix     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: NONE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -e filename   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" error log "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: logs/error.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -c filename   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: conf/nginx.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -g directives "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global directives out of configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"location-of-the-nginx-default-index-html-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-of-the-nginx-default-index-html-file"}},[s._v("#")]),s._v(" Location of the Nginx default index.html file")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/39835855/location-of-the-nginx-default-index-html-file-on-mac-os",target:"_blank",rel:"noopener noreferrer"}},[s._v("Location of the Nginx default index.html file on MAC OS"),a("OutboundLink")],1)])]),s._v(" "),a("ol",[a("li",[s._v("check the path by command "),a("code",[s._v("nginx -V")])]),s._v(" "),a("li",[s._v("will see "),a("code",[s._v("--prefix=/usr/local/Cellar/nginx/1.12.0_1")]),s._v(", this is the folder of nginx files.")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Maybe")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# location of nginx.conf")]),s._v("\n/opt/homebrew/etc/nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# location of html folder")]),s._v("\n/opt/homebrew/Cellar/nginx/1.21.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"nginx-related-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-related-path"}},[s._v("#")]),s._v(" NGINX related path")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" nginx\nnginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx /usr/share/man/man8/nginx.8.gz\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /usr/sbin/nginx\n/usr/sbin/nginx*\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /etc/nginx\ncert/         fastcgi_params  mime.types          nginx.conf      scgi_params       snippets/\nconf.d/       koi-utf         modules-available/  nginx.conf.bak  sites-available/  uwsgi_params\nfastcgi.conf  koi-win         modules-enabled/    proxy_params    sites-enabled/    win-utf\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /usr/share/nginx\nhtml/  modules@  modules-available/\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /var/log/nginx/\naccess.log        access.log.11.gz  access.log.14.gz  access.log.4.gz  access.log.7.gz  error.log       error.log.3.gz\naccess.log.1      access.log.12.gz  access.log.2.gz   access.log.5.gz  access.log.8.gz  error.log.1     error.log.4.gz\naccess.log.10.gz  access.log.13.gz  access.log.3.gz   access.log.6.gz  access.log.9.gz  error.log.2.gz  error.log.5.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# After nginx starts")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /run/nginx.pid\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("981380")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"nginx-log-rotation-回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-log-rotation-回滚"}},[s._v("#")]),s._v(" NGINX log rotation（回滚）")]),s._v(" "),a("blockquote",[a("p",[s._v("nginx 本身不提供 log 回滚机制，建议采用系统自带的 logrotate 工具进行日志回滚。")])]),s._v(" "),a("p",[s._v("要让 nginx 日志回滚，需要按照以下步骤进行操作：")]),s._v(" "),a("ol",[a("li",[s._v("nginx 的默认日志配置文件路径为"),a("code",[s._v("/etc/nginx/nginx.conf")]),s._v("，其中默认的 log 格式如下：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('http {\n    ...\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    ...\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("其中 "),a("code",[s._v("access_log")]),s._v(" 指令设置了 nginx 的访问日志存放位置和使用的日志格式，它所在的文件也是 nginx.conf。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("在找到日志设置后，查看其中是否有 "),a("code",[s._v("logrotate")]),s._v(" 的设置项。如果没有设置，那么需要手动安装并配置此工具。")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/logrotate/logrotate",target:"_blank",rel:"noopener noreferrer"}},[s._v("logrotate in GitHub"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("logrotate")]),s._v(" --help\nUsage: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("logrotate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("configfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  -d, --debug               Don"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t do anything, just test and print debug messages\n  -f, --force               Force file rotation\n  -m, --mail=command        Command to send mail (instead of `/usr/bin/mail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -s, --state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("statefile     Path of state "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n  -v, --verbose             Display messages during rotation\n  -l, --log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("logfile         Log "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'syslog'")]),s._v(" to log to syslog\n      --version             Display version information\n\nHelp options:\n  -?, --help                Show this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message\n      --usage               Display brief usage message\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("如果已经安装了 "),a("code",[s._v("logrotate")]),s._v(" 工具，则创建针对 Nginx 日志的新配置文件。你可以执行以下命令来完成此步骤：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /etc/logrotate.d/nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/logrotate.d/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在大多数 Linux 发行版中，Nginx 的 log 日志的回滚配置位于"),a("code",[s._v("/etc/logrotate.d/nginx")]),s._v("文件中。")]),s._v(" "),a("p",[s._v("以下是默认的"),a("code",[s._v("nginx")]),s._v("日志回滚配置:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/var/log/nginx/*.log {\n    daily\n    missingok\n    rotate 14\n    compress\n    delaycompress\n    notifempty\n    create 0640 nginx adm\n    sharedscripts\n    postrotate\n        [ -f /var/run/nginx.pid ] && kill -USR1 `cat /var/run/nginx.pid`\n    endscript\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("这个配置文件指定了使用 Linux 系统的日志切割工具 "),a("code",[s._v("logrotate")]),s._v("对 Nginx 的访问日志及错误日志进行管理， 该配置将会对 "),a("code",[s._v("/var/log/nginx/*.log")]),s._v(" 路径下的所有以 "),a("code",[s._v(".log")]),s._v(" 结尾的 nginx 日志文件进行日志回滚")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("daily")]),s._v(": 每天运行一次日志轮换任务")]),s._v(" "),a("li",[a("code",[s._v("missingok")]),s._v(": 如果日志文件不存在，则不生成任何错误消息和警告。")]),s._v(" "),a("li",[a("code",[s._v("rotate 14")]),s._v(": 最多保留 14 份旧日志文件，超过这个数量旧日志将会被删除。")]),s._v(" "),a("li",[a("code",[s._v("compress")]),s._v(": 对老日志进行 gzip 压缩")]),s._v(" "),a("li",[a("code",[s._v("delaycompress")]),s._v(": 此选项指示日志轮换程序等到下一次执行时再压缩")]),s._v(" "),a("li",[a("code",[s._v("notifempty")]),s._v(": 如果日志为空，则不调用日志轮换程序。")]),s._v(" "),a("li",[a("code",[s._v("create 0640 nginx adm")]),s._v(": 在进行日志轮换时创建属于"),a("code",[s._v("nginx:adm")]),s._v("用户组的新日志文件,权限为"),a("code",[s._v("640")])]),s._v(" "),a("li",[a("code",[s._v("sharedscripts")]),s._v(": 当日志轮换脚本被执行时，告诉 logrotate 运行所有与该服务相关联的命令。")]),s._v(" "),a("li",[a("code",[s._v("postrotate")]),s._v(": 日志轮换后需要执行的自定义命令，此处是向主进程发送 SIGUSR1 信号，使其重新打开日志文件。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);
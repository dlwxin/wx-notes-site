(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{552:function(s,a,e){"use strict";e.r(a);var n=e(18),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Vim(Vi improved)")]),s._v(" "),e("h2",{attrs:{id:"vim-s-three-working-modes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-s-three-working-modes"}},[s._v("#")]),s._v(" Vim's three working modes")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("命令模式\n使用 Vim 编辑文件时，默认处于命令模式。在此模式下，可以使用上、下、左、右键或者 k、j、h、l 命令进行光标移动，\n还可以对文件内容进行复制、粘贴、替换、删除等操作。")])]),s._v(" "),e("li",[e("p",[s._v("输入模式\n在输入模式下可以对文件执行写操作，类似在 Windows 的文档中输入内容。进入输入模式的方法是输入 i、a、o 等插入\n命令，编写完成后按 Esc 键即可返回命令模式。")])]),s._v(" "),e("li",[e("p",[s._v('编辑模式\n如果要保存、查找或者替换一些内容等，就需要进入编辑模式。编辑模式的进入方法为：在命令模式下按":"键，Vim 窗口\n的左下方会出现一个":"符号，这时就可以输入相关的指令进行操作了。指令执行后会自动返回命令模式。')])])]),s._v(" "),e("h2",{attrs:{id:"vim-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-version"}},[s._v("#")]),s._v(" Vim Version")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" --version\n\nVIM - Vi IMproved "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" May "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(", compiled Nov 08 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":21:34"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nIncluded patches: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-2269\nModified by team+vim@tracker.debian.org\nCompiled by team+vim@tracker.debian.org\nHuge version without GUI.  Features included "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" or not "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n+acl               -farsi             -mouse_sysmouse    -tag_any_white\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"vim-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-plugin"}},[s._v("#")]),s._v(" Vim Plugin")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.hulifa.cn/2019-10-20-Vim-8%E5%86%85%E7%BD%AE%E5%8C%85%E7%AE%A1%E7%90%86%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vim 8 内置包管理使用指南"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("Vim 8 及更高版本上，可以手动安装插件，而无需使用额外的第三方插件管理器。使用默认的插件管理支持，只需将插件的内容复制到 "),e("code",[s._v("~/.vim")]),s._v(" 目录下的指定文件夹即可。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# E.g. install vim-terraform plugin, put vim-terraform plugin to below path")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.vim/pack/plugins/start/vim-terraform\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"basic-operation-of-vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-operation-of-vim"}},[s._v("#")]),s._v(" Basic operation of Vim")]),s._v(" "),e("h3",{attrs:{id:"使用-vim-打开文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-vim-打开文件"}},[s._v("#")]),s._v(" 使用 Vim 打开文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" test.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"常用的插入命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的插入命令"}},[s._v("#")]),s._v(" 常用的插入命令")]),s._v(" "),e("ul",[e("li",[s._v("i：在当前光标所在位置插入随后输入的文本，光标后的文本相应向右移动")]),s._v(" "),e("li",[s._v("I：在光标所在行的行首插入随后输入的文本，行首是该行的第一个非空白字符，相当于光标移动到行首执行 i 命令")]),s._v(" "),e("li",[s._v("a：在当前光标所在位置之后插入随后输入的文本")]),s._v(" "),e("li",[s._v("A：在光标所在行的行尾插入随后输入的文本，相当于光标移动到行尾再执行 a 命令")]),s._v(" "),e("li",[s._v("o：在光标所在行的下面插入新的一行。光标停在空行首，等待输入文本")]),s._v(" "),e("li",[s._v("O：在光标所在行的上面插入新的一行。光标停在空行的行首，等待输入文本")])]),s._v(" "),e("p",[e("strong",[s._v("esc 键 ：退出到命令模式")]),s._v(" (在命令模式下)")]),s._v(" "),e("ul",[e("li",[s._v("u:撤销")]),s._v(" "),e("li",[s._v("x:删除")]),s._v(" "),e("li",[s._v("v:选择文本")]),s._v(" "),e("li",[s._v("y:复制")]),s._v(" "),e("li",[s._v("yy:复制当前行")]),s._v(" "),e("li",[s._v("dd:删除光标所在行")]),s._v(" "),e("li",[s._v("p:粘贴")]),s._v(" "),e("li",[s._v("w：移动光标到下一个单词的单词首")]),s._v(" "),e("li",[s._v("b：移动光标到上一个单词的单词首")]),s._v(" "),e("li",[s._v("e：移动光标到下一个单词的单词尾")]),s._v(" "),e("li",[s._v(":w 保存")]),s._v(" "),e("li",[s._v(":q 退出")]),s._v(" "),e("li",[s._v(":wq 保存退出")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v('在命令模式中，还可以输入"ZZ"命令退出，按两次"Shift+Z"快捷键方便，此时如果对文件没有修改，就是不保存退出；如果对文件已经进行了修改，就是保存后退出。')])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 打开文件后，直接进入"nobody"字符串所在行，')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 如果文件中有多个"nobody"字符串，则会以査到的第一个为准')]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" +/nobody index.sh\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接进入 Vim 编辑文件的指定行数处")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" +20 index.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"vim-显示行号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-显示行号"}},[s._v("#")]),s._v(" Vim 显示行号")]),s._v(" "),e("p",[s._v("在命令模式下输入"),e("code",[s._v(":set nu")]),s._v("("),e("code",[s._v(":set number")]),s._v(")即可显示每一行的行号\n如果想要取消行号，输入"),e("code",[s._v(":set nonu")]),s._v("("),e("code",[s._v(":set nonumber")]),s._v(")")]),s._v(" "),e("h3",{attrs:{id:"vim-paste-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-paste-mode"}},[s._v("#")]),s._v(' Vim "paste" mode.')]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/2514445/turning-off-auto-indent-when-pasting-text-into-vim",target:"_blank",rel:"noopener noreferrer"}},[s._v("Turning off auto indent when pasting text into vim"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/renyuanfang/article/details/88837172",target:"_blank",rel:"noopener noreferrer"}},[s._v("vim 外部粘贴代码，如何保持原格式，而不持续缩进"),e("OutboundLink")],1)])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(":set "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("paste")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(":set nopaste\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"vim-批量注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-批量注释"}},[s._v("#")]),s._v(" Vim 批量注释")]),s._v(" "),e("ol",[e("li",[s._v("在指定范围行加"),e("code",[s._v("#")]),s._v("注释，可以使用"),e("code",[s._v(":")]),s._v("起始行，终止行 "),e("code",[s._v("s/^/#/g")])])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 表示在第 1~10 行行首加"#"注释。"^"意为行首。"g"表示执行替换时不询问确认。如果希望每行交互询问是否执行，则可将"g"改为"c"。')]),s._v("\n:1,10s/^/"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/g")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("取消连续行注释，则可以使用 "),e("code",[s._v(":")]),s._v(" 起始行，终止行 "),e("code",[s._v("s/^#//g")])])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(":1,10s/^"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#//g")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 意为将行首的"#"替换为空，即删除')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"visudo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visudo"}},[s._v("#")]),s._v(" visudo")]),s._v(" "),e("p",[s._v("safely edit the sudoers file")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("usage: visudo [-chqsV] [[-f] sudoers ]\n\nOptions:\n  -c, --check              check-only mode\n  -f, --file=sudoers       specify sudoers file location\n  -h, --help               display help message and exit\n  -q, --quiet              less verbose (quiet) syntax error messages\n  -s, --strict             strict syntax checking\n  -V, --version            display version information and exit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("A typical "),e("code",[s._v("sudoers")]),s._v(" file looks like this:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#\n# This file MUST be edited with the \'visudo\' command as root.\n#\n# Please consider adding local content in /etc/sudoers.d/ instead of\n# directly modifying this file.\n#\n# See the man page for details on how to write a sudoers file.\n#\nDefaults        env_reset\nDefaults        mail_badpass\nDefaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin"\n\n# Host alias specification\n\n# User alias specification\n\n# Cmnd alias specification\n\n# User privilege specification\nroot    ALL=(ALL:ALL) ALL\n# Members of the admin group may gain root privileges\n%admin ALL=(ALL) ALL\n\n# Allow members of group sudo to execute any command\n%sudo   ALL=(ALL:ALL) ALL\n\n# See sudoers(5) for more information on "#include" directives:\n\n#includedir /etc/sudoers.d\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);
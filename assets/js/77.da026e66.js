(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{540:function(e,a,t){"use strict";t.r(a);var r=t(18),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"java-lang-illegalstateexception-timer-already-cancelled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-lang-illegalstateexception-timer-already-cancelled"}},[e._v("#")]),e._v(" java.lang.IllegalStateException: Timer already cancelled.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/brettwooldridge/HikariCP/issues/1715",target:"_blank",rel:"noopener noreferrer"}},[e._v("java.lang.IllegalStateException: Timer already cancelled."),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/opentracing-contrib/java-jdbc/issues/73",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why we need to have TracingDriver as the first registered driver?"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"error-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-logs"}},[e._v("#")]),e._v(" Error logs")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("22:08:18.405 [Test worker] ERROR com.zaxxer.hikari.pool.HikariPool -db_owner - Exception during pool initialization.\njava.lang.IllegalStateException: Timer already cancelled.\nat java.util.Timer.sched(Timer.java:397)\nat java.util.Timer.schedule(Timer.java:193)\nat oracle.net.nt.TimeoutInterruptHandler.scheduleInterrupt(TimeoutInterruptHandler.java:80)\nat oracle.net.nt.TimeoutInterruptHandler.scheduleInterrupt(TimeoutInterruptHandler.java:93)\nat oracle.net.nt.TimeoutSocketChannel.scheduleInterrupt(TimeoutSocketChannel.java:239)\nat oracle.net.nt.TimeoutSocketChannel.connect(TimeoutSocketChannel.java:106)\nat oracle.net.nt.TimeoutSocketChannel.(TimeoutSocketChannel.java:86)\nat oracle.net.nt.TcpNTAdapter.connect(TcpNTAdapter.java:188)\nat oracle.net.nt.ConnOption.connect(ConnOption.java:172)\nat oracle.net.nt.ConnStrategy.execute(ConnStrategy.java:508)\n...\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("h3",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),t("blockquote",[t("p",[e._v("From "),t("a",{attrs:{href:"https://tomcat.apache.org/tomcat-8.5-doc/jndi-datasource-examples-howto.html#:~:text=Any",target:"_blank",rel:"noopener noreferrer"}},[e._v("DriverManager, the service provider mechanism and memory leaks"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("The list of drivers in java.sql.DriverManager is also a known source of memory leaks. Any Drivers registered by a web application must be deregistered when the web application stops. Tomcat will attempt to automatically discover and deregister any JDBC drivers loaded by the web application class loader when the web application stops. However, it is expected that applications do this for themselves via a ServletContextListener.")])]),e._v(" "),t("blockquote",[t("p",[e._v("!!! Oracle ojdbc doesn't support registering after deregistering, It will throw exception.")])]),e._v(" "),t("p",[e._v("Refer to "),t("RouterLink",{attrs:{to:"/pages/f26067/#tomcat_guice_jdbc_memory_leak"}},[e._v("Tomcat Guice/JDBC Memory Leak")])],1),e._v(" "),t("h2",{attrs:{id:"how-do-i-limit-the-number-of-rows-returned-by-an-oracle-query-after-ordering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-limit-the-number-of-rows-returned-by-an-oracle-query-after-ordering"}},[e._v("#")]),e._v(" How do I limit the number of rows returned by an Oracle query after ordering")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/470542/how-do-i-limit-the-number-of-rows-returned-by-an-oracle-query-after-ordering",target:"_blank",rel:"noopener noreferrer"}},[e._v("How do I limit the number of rows returned by an Oracle query after ordering?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/SELECT.html#GUID-CFA006CA-6FF1-4972-821E-6996142A51C6",target:"_blank",rel:"noopener noreferrer"}},[e._v("row_limiting_clause"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/database/121/SQLRF/statements_10002.htm#SQLRF01702",target:"_blank",rel:"noopener noreferrer"}},[e._v("row_limiting_clause"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" emp\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("order")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" sal "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("desc")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" ROWNUM "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("blockquote",[t("p",[e._v("Starting with Oracle 12c (12.1) there is a syntax available to limit rows or start at offsets.")])]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v("   sometable\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("OFFSET")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ROWS")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FETCH")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("NEXT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ROWS")]),e._v(" ONLY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" title "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" post "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DESC")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FETCH")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FIRST")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ROWS")]),e._v(" ONLY\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" title "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" post "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DESC")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FETCH")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FIRST")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ROWS")]),e._v(" ONLY\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"oracle-cloud-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle-cloud-security"}},[e._v("#")]),e._v(" Oracle Cloud Security")]),e._v(" "),t("h3",{attrs:{id:"change-database-passwords-without-application-downtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-database-passwords-without-application-downtime"}},[e._v("#")]),e._v(" Change Database Passwords Without Application Downtime")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blogs.oracle.com/cloudsecurity/post/change-passwords-without-application-downtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("Change Database Passwords Without Application Downtime"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);
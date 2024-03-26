(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{535:function(s,e,t){"use strict";t.r(e);var a=t(18),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"links"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[s._v("#")]),s._v(" Links")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis official website"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/redis/redis",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis GitHub"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/antirez",target:"_blank",rel:"noopener noreferrer"}},[s._v("antirez GitHub"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://redis.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis 中文文档"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://redis.cn/documentation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis 中文文档"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://try.redis.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Try Redis"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://doc.redisfans.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis 命令参考"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://redis.io/docs/about/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis release cycle"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[s._v("#")]),s._v(" Download")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://download.redis.io/redis-stable/redis.conf",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis.conf"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://download.redis.io/redis-stable.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[s._v("latest stable release"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://download.redis.io/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("releases"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://redis.io/docs/getting-started/installation/install-redis-on-windows/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install Redis on Windows(Use Redis on Windows for development)"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://redis.com.cn/redis-installation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 windows 上安装 Redis"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"setup-redis-docker-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-redis-docker-container"}},[s._v("#")]),s._v(" Setup Redis docker container")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1562815",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 安装 Redis （Redis 配置）"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"download-redis-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-redis-image"}},[s._v("#")]),s._v(" Download redis image")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker pull redis:7.0.11-alpine3.18\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"modify-redis-conf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modify-redis-conf"}},[s._v("#")]),s._v(" Modify redis.conf")]),s._v(" "),t("p",[s._v("从官网获取 "),t("a",{attrs:{href:"http://download.redis.io/redis-stable/redis.conf",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis.conf"),t("OutboundLink")],1),s._v(" 配置文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/redis-stable/redis.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改默认配置文件")]),s._v(" "),t("ul",[t("li",[s._v("bind 127.0.0.1 #注释掉这部分，这是限制 redis 只能本地访问")]),s._v(" "),t("li",[s._v("protected-mode no #默认 yes，开启保护模式，限制为本地访问")]),s._v(" "),t("li",[s._v("daemonize no#默认 no，改为 yes 意为以守护进程方式启动，可后台运行，除非 kill 进程（可选），改为 yes 会使配置文件方式启动 redis 失败")]),s._v(" "),t("li",[s._v("dir ./ #输入本地 redis 数据库存放文件夹（可选）")]),s._v(" "),t("li",[s._v("appendonly yes #redis 持久化（可选）")])]),s._v(" "),t("h3",{attrs:{id:"deploy-the-redis-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-redis-container"}},[s._v("#")]),s._v(" Deploy the Redis Container")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" docker run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1125")]),s._v(":6379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --name redis_test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v /usr/local/docker/redis.conf:/etc/redis/redis.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v /usr/local/docker/data:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -d redis:7.0.11-alpine3.18 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n redis-server /etc/redis/redis.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --appendonly "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --requirepass "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis_password"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("-p 1125:6379 端口映射"),t("code",[s._v(":")]),s._v("前表示主机部分，"),t("code",[s._v(":")]),s._v("后表示容器部分。")]),s._v(" "),t("li",[s._v("--name redis_test 指定该容器名称，查看和进行操作都比较方便。")]),s._v(" "),t("li",[s._v("-v 挂载目录，规则与端口映射相同。")]),s._v(" "),t("li",[s._v("-d redis:7.0.11-alpine3.18 表示后台启动 redis")]),s._v(" "),t("li",[s._v("redis-server /etc/redis/redis.conf 以配置文件启动 redis，加载容器内的 conf 文件，最终找到的是挂载的目录/usr/local/docker/redis.conf")]),s._v(" "),t("li",[s._v("appendonly yes 开启 redis 持久化")])]),s._v(" "),t("h3",{attrs:{id:"test-connect-redis-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-connect-redis-container"}},[s._v("#")]),s._v(" Test connect Redis container")]),s._v(" "),t("p",[t("strong",[s._v("Option1:")]),s._v(" 进入 Redis container 内部")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 1f740fe73ea2 /bin/bash\nroot@1f740fe73ea2:/data"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOAUTH Authentication required\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" auth redis_password\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\nPONG\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" msg "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test message"')]),s._v("\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get msg\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test message"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("Option2:")]),s._v(" Connect Redis with redis-cli")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis-tools\n\nredis-cli\n\nredis-cli -h localhost -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" -a redis_password\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tool"}},[s._v("#")]),s._v(" Tool")]),s._v(" "),t("h3",{attrs:{id:"redisinsight"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redisinsight"}},[s._v("#")]),s._v(" RedisInsight")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.redis.com/latest/ri/installing/install-docker/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install RedisInsight on Docker"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run -v redisinsight:/db -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8001")]),s._v(":8001 redislabs/redisinsight:latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Then, point your browser to http://localhost:8001.")]),s._v(" "),t("h2",{attrs:{id:"data-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[s._v("#")]),s._v(" Data types")]),s._v(" "),t("h3",{attrs:{id:"strings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#strings"}},[s._v("#")]),s._v(" Strings")]),s._v(" "),t("p",[s._v("Strings 类型是二进制安全的，Strings 类型的值可以包含任意数据， E.g. JPG 图片或者序列化的对象，最大为 512M。")]),s._v(" "),t("h3",{attrs:{id:"lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lists"}},[s._v("#")]),s._v(" Lists")]),s._v(" "),t("p",[s._v("Redis List 是按插入顺序排序的字符串列表。可以在 List 的头部（左边）或尾部（右边）添加元素。他的底层实际上是个双端列表")]),s._v(" "),t("h3",{attrs:{id:"hashes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashes"}},[s._v("#")]),s._v(" Hashes")]),s._v(" "),t("p",[s._v("Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象。")]),s._v(" "),t("h3",{attrs:{id:"sets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sets"}},[s._v("#")]),s._v(" Sets")]),s._v(" "),t("p",[s._v("Redis 的 Set 是 string 类型的无序集合。")]),s._v(" "),t("p",[s._v("集合成员是唯一的，这就意味着集合中没有重复的数据。集合对象的编码可以是 insert 或 hashtable")]),s._v(" "),t("p",[s._v("在 Redis 中 Set 是通过哈希表实现的，所以添加、删除和查找的时间复杂都是 O(1)（不管 Set 中包含多少元素）。")]),s._v(" "),t("h3",{attrs:{id:"sorted-sets-zset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sorted-sets-zset"}},[s._v("#")]),s._v(" Sorted Sets(ZSet)")]),s._v(" "),t("p",[s._v("Redis 有序集合和集合一样也是 string 类型元素的集合，且不允许重复的成员。")]),s._v(" "),t("p",[s._v("不同的是每个元素都会关联一个 double 类型的分数。Redis 正是通过分数来为集合中的成员进行从小到大的排序。")]),s._v(" "),t("p",[s._v("有序集合的成员是唯一的,但分数 ( score ) 却可以重复。")]),s._v(" "),t("p",[s._v("集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。")]),s._v(" "),t("h3",{attrs:{id:"geospatial-geo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geospatial-geo"}},[s._v("#")]),s._v(" Geospatial(GEO)")]),s._v(" "),t("h3",{attrs:{id:"hyperloglog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog"}},[s._v("#")]),s._v(" HyperLogLog")]),s._v(" "),t("h3",{attrs:{id:"bitmaps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmaps"}},[s._v("#")]),s._v(" Bitmaps")]),s._v(" "),t("h3",{attrs:{id:"bitfields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitfields"}},[s._v("#")]),s._v(" Bitfields")]),s._v(" "),t("h3",{attrs:{id:"streams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[s._v("#")]),s._v(" Streams")])])}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{660:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"kubernetes-k8s-static-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-k8s-static-pod"}},[t._v("#")]),t._v(" Kubernetes(k8s) static pod")]),t._v(" "),a("h3",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("静态 Pod 是没有经由 kube-scheduler 调度直接由 kubelet 进行管理的仅存于特定 Node 节点上的 Pod。它们不能通过 API Server 进行管理， 无法与 ReplicationController、Deployment 或者 DaemonSet 进行关联，并且 kubelet 也无法对它们进行健康检查。静态 Pod 总是由 kubelet 进行创建的，并且总是在 Kubelet 所在的 Node 上运行的。")]),t._v(" "),a("p",[t._v("如 master 节点上的 kube-apiserver、kube-controller-manager、kube-scheduler。这些静态 pod 是由 master 节点的的 kubelet 发布的，直接通知容器运行时。")]),t._v(" "),a("h3",{attrs:{id:"配置静态-pod-有两种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置静态-pod-有两种方式"}},[t._v("#")]),t._v(" 配置静态 Pod 有两种方式")]),t._v(" "),a("p",[a("strong",[t._v("1. 本地配置文件方式")])]),t._v(" "),a("p",[t._v("kubelet 配置文件存放在"),a("code",[t._v("/var/lib/kubelet/config.yaml")]),t._v("，其中"),a("code",[t._v("[staticPodPath:]")]),t._v("所指定的路径为存放本机运行静态 pod 的 manifest 文件。"),a("code",[t._v("staticPodPath")]),t._v(" 默认为："),a("code",[t._v("/etc/kubernetes/manifests")])]),t._v(" "),a("ul",[a("li",[t._v("当把 Pod 的定义 manifest 文件放入"),a("code",[t._v("/etc/kubernetes/manifests")]),t._v(" 后，立刻创建 Pod。")]),t._v(" "),a("li",[t._v("静态 Pod 无法使用 kubectl delete pod 或 docker delete 命令彻底杀死 pod 或容器。杀死后 kubelet 将自动重建 pod 或容器。")]),t._v(" "),a("li",[t._v("当把 Pod 的定义 manifest 文件从"),a("code",[t._v("/etc/kubernetes/manifests")]),t._v(" 移除，立刻结束 Pod")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd /etc/kubernetes/manifests/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-node1 manifests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim static-pod.yml")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" static"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpd\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpd\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("strong",[t._v("2. HTTP 方式")])]),t._v(" "),a("p",[t._v("通过设置 kubelet 的启动参数"),a("code",[t._v("--manifest-url")]),t._v("，kubelet 将定期从该 url 地址下载 Pod 的定义文件，并以.yaml 或.json 文件的格式进行解析，然后创建 Pod，其实现方式与配置文件的实现方式一致。")]),t._v(" "),a("h2",{attrs:{id:"kubernetes-k8s-pod-affinity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-k8s-pod-affinity"}},[t._v("#")]),t._v(" Kubernetes(k8s) pod affinity")]),t._v(" "),a("h3",{attrs:{id:"kubernetes-pod-调度说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-pod-调度说明"}},[t._v("#")]),t._v(" Kubernetes Pod 调度说明")]),t._v(" "),a("p",[t._v("Scheduler 是 Kubernetes 的调度器，主要任务是把定义的 Pod 分配到集群的节点上，听起来非常简单，但要考虑需要方面的问题：")]),t._v(" "),a("ul",[a("li",[t._v("公平：如何保证每个节点都能被分配到资源")]),t._v(" "),a("li",[t._v("资源高效利用：集群所有资源被最大化使用")]),t._v(" "),a("li",[t._v("效率：调度性能要好，能够尽快的对大批量的 Pod 完成调度工作")]),t._v(" "),a("li",[t._v("灵活：允许用户根据自己的需求控制调度的流程")])]),t._v(" "),a("p",[t._v("Scheduler 是作为单独的服务运行的，启动之后会一直监听 API Server，获取 podSpec.NodeName 为空的 Pod，对每个 Pod 都会创建一个 binding，表明该 Pod 应该放在哪个节点上。")]),t._v(" "),a("h3",{attrs:{id:"调度过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调度过程"}},[t._v("#")]),t._v(" 调度过程")]),t._v(" "),a("p",[a("strong",[t._v("调度流程：")])]),t._v(" "),a("ul",[a("li",[t._v("首先过滤掉不满足条件的节点，这个过程称为 predicate")]),t._v(" "),a("li",[t._v("然后对通过的节点按照优先级的顺序，这个是 priority")]),t._v(" "),a("li",[t._v("最后从中选择优先级最高的节点。如果中间有任何一步报错，则直接返回错误信息。(对于调度过程分为两部分，一部分是预选，一部分是优选)")])]),t._v(" "),a("p",[a("strong",[t._v("Predicate 有一系列的算法可以使用")])]),t._v(" "),a("ul",[a("li",[t._v("PodFitsResources：节点上剩余的资源是否大于 Pod 请求的资源。")]),t._v(" "),a("li",[t._v("PodFitsHost：如果 Pod 指定了 nodeName，检查节点名称是否和 nodeName 匹配。")]),t._v(" "),a("li",[t._v("PodFitsHostPort：节点上已经使用的 port 是否和 Pod 申请的 port 冲突。")]),t._v(" "),a("li",[t._v("PodSelectorMatches：过滤和 Pod 指定的 label 不匹配的节点。")]),t._v(" "),a("li",[t._v("NoDiskConflict：已经 mount 的 volume 和 Pod 指定的 volume 不冲突，除非他们都是只读。")])]),t._v(" "),a("p",[t._v("如果在 predicate 过程中没有适合的节点，Pod 会一直处于 Pending 状态，不断重新调度，直到有节点满足条件，经过这个步骤，如果多个节点满足条件， 就会进入 priority 过程：按照优先级大小对节点排序，优先级由一系列键值对组成，键是该优先级的名称，值是它的权重，这些优先级选项包括：")]),t._v(" "),a("ul",[a("li",[t._v("LeastRequestedPriority：通过计算 CPU 和 Memory 的使用率来决定权重，使用率越低权重越高，换句话说，这个优先级倾向于资源使用率低的节点。")]),t._v(" "),a("li",[t._v("BalanceResourceAllocation：节点上 CPU 和 Memory 使用率非常及接近，权重就越高，这个要和上边的一起使用，不可单独使用。")]),t._v(" "),a("li",[t._v("ImageLocalityPriority：倾向于已经要使用镜像的节点，镜像的总大小值越大，权重越高。 通过算法对所有的优先级项目和权重进行计算，得出最终的结果")])]),t._v(" "),a("h3",{attrs:{id:"自定义调度器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义调度器"}},[t._v("#")]),t._v(" 自定义调度器")]),t._v(" "),a("p",[t._v("除了 Kubernetes 自带的调度器，也可以编写自己的调度器，通过 "),a("code",[t._v("spec.schedulername")]),t._v(" 参数指定调度器的名字，可以为 Pod 选择某个调度器进行调度，比如下边的 Pod 选择 my-scheduler 进行调度，而不是默认的 default-scheduler。")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("scheduler\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schedulerName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("scheduler\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bin/sh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tail -f /dev/null'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("scheduler\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[a("strong",[t._v("pod.spec.affinity")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("策略对象")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("nodeAffinity")]),t._v(" "),a("td",[a("code",[t._v("<Object>")])]),t._v(" "),a("td",[t._v("描述 pod 的节点亲和性调度规则。")])]),t._v(" "),a("tr",[a("td",[t._v("podAffinity")]),t._v(" "),a("td",[a("code",[t._v("<Object>")])]),t._v(" "),a("td",[t._v("描述 pod 亲和性调度规则(例如，将这个 pod 与其他 pod 放在同一个节点、区域等)。")])]),t._v(" "),a("tr",[a("td",[t._v("podAntiAffinity")]),t._v(" "),a("td",[a("code",[t._v("<Object>")])]),t._v(" "),a("td",[t._v("描述 pod 反亲和调度规则（例如，避免将此 pod 与其他 pod 放在同一节点、区域等)。")])])])]),t._v(" "),a("p",[a("strong",[t._v("pod.spec.affinity 可用调度约束")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("策略对象")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("preferredDuringSchedulingIgnoredDuringExecution")]),t._v(" "),a("td",[a("code",[t._v("<Object>")])]),t._v(" "),a("td",[t._v("软策略是偏向于，更想落在某个节点上，但如果实在没有，落在其他节点也可以。")])]),t._v(" "),a("tr",[a("td",[t._v("requiredDuringSchedulingIgnoredDuringExecution")]),t._v(" "),a("td",[a("code",[t._v("<Object>")])]),t._v(" "),a("td",[t._v("硬策略是必须落在指定的节点上，如果不符合条件，则一直处于 Pending 状态。")])])])]),t._v(" "),a("p",[a("strong",[t._v("键值运算关系")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("策略对象")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("In")]),t._v(" "),a("td",[t._v("label 的值在某个列表里")])]),t._v(" "),a("tr",[a("td",[t._v("NotIn")]),t._v(" "),a("td",[t._v("label 的值不在某个列表中")])]),t._v(" "),a("tr",[a("td",[t._v("Gt")]),t._v(" "),a("td",[t._v("label 的值大于某个值")])]),t._v(" "),a("tr",[a("td",[t._v("Lt")]),t._v(" "),a("td",[t._v("label 的值小于某个值")])]),t._v(" "),a("tr",[a("td",[t._v("Exists")]),t._v(" "),a("td",[t._v("某个 label 存在")])]),t._v(" "),a("tr",[a("td",[t._v("DoesNotExist")]),t._v(" "),a("td",[t._v("某个 label 不存在")])])])]),t._v(" "),a("p",[t._v("For Examples:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://gitee.com/dlwxin/example-kubernetes/blob/main/manifests/pod/affinity/node-affinity/pod-node-affinity-preferred.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("pod-node-affinity-preferred.yaml"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitee.com/dlwxin/example-kubernetes/blob/main/manifests/pod/affinity/node-affinity/pod-node-affinity-required.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("pod-node-affinity-required.yaml"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitee.com/dlwxin/example-kubernetes/blob/main/manifests/pod/affinity/node-affinity/pod-node-affinity-required-preferred-01.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("pod-node-affinity-required-preferred-01.yaml"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"pod-spec-automountserviceaccounttoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-spec-automountserviceaccounttoken"}},[t._v("#")]),t._v(" pod.spec.automountServiceAccountToken")]),t._v(" "),a("blockquote",[a("p",[t._v("AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.")])]),t._v(" "),a("ul",[a("li",[t._v("在 Pod 中挂在当前 serviceaccount 的 token，")]),t._v(" "),a("li",[t._v("作用：pod 连接 ApiServer 的时候需要拿着这个 token")]),t._v(" "),a("li",[t._v("这个字段的值是 Boolean 类型的， 默认为 true")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl get pod busybox\nNAME      READY   STATUS    RESTARTS   AGE\nbusybox   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          19h\n\n$ kubectl get pod busybox -o yaml\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在这个 manifest中，我删减了一些字段，只留了与这个问题相关的字段")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /bin/sh\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("c\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" tail "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("f /dev/null\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/run/secrets/kubernetes.io/serviceaccount\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("t4cwv\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("t4cwv\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projected")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("420")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceAccountToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expirationSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3607")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" token\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ca.crt\n                  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ca.crt\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ca.crt\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("downwardAPI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fieldRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n                    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fieldPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metadata.namespace\n                  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" namespace\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br")])]),a("ul",[a("li",[t._v("使用 volume 时, 在 "),a("code",[t._v(".spec.volumes")]),t._v(" 字段中设置为 Pod 提供的 volume，并在 "),a("code",[t._v(".spec.containers[*].volumeMounts")]),t._v(" 字段中声明 volume 在容器中的挂载位置")]),t._v(" "),a("li",[t._v("可以看到 "),a("code",[t._v(".spec.volumes")]),t._v(" 字段中的 "),a("code",[t._v("serviceAccountToken")])]),t._v(" "),a("li",[t._v("可以看到 "),a("code",[t._v(".spec.containers[*].volumeMounts")]),t._v(" 字段 "),a("code",[t._v("mountPath")])])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i -t busybox -- "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n\n/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd /var/run/secrets/kubernetes.io/serviceaccount")]),t._v("\n/var/run/secrets/kubernetes.io/serviceaccount "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\nca.crt     namespace  token\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
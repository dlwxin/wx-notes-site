(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{663:function(e,r,s){"use strict";s.r(r);var t=s(18),v=Object(t.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"service-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-概念"}},[e._v("#")]),e._v(" Service 概念")]),e._v(" "),s("p",[e._v("在 kubernetes 中，当创建带有多个副本的 deployment 时，kubernetes 会创建出多个 pod，此时即一个服务后端有多个容器，那么在 kubernetes 中负载均衡怎么做，容器漂移后 ip 也会发生变化，如何做服务发现以及会话保持？这就是 service 的作用，service 是一组具有相同 label pod 集合的抽 象，集群内外的各个服务可以通过 service 进行互相通信，当创建一个 service 对象时也会对应创建一个 endpoint 对象，endpoint 是用来做容器发现的， service 只是将多个 pod 进行关联，实际的路由转发都是由 kubernetes 中的 kube-proxy 组件来实现，因此 service 必须结合 kube-proxy 使用，kube-proxy 组件可以运行在 kubernetes 集群中的每一个节点上也可以只运行在单独的几个节点上，其会根据 service 和 endpoints 的变动来改变节点上 iptables 或 者 ipvs 中保存的路由规则。")]),e._v(" "),s("h2",{attrs:{id:"service-的负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-的负载均衡"}},[e._v("#")]),e._v(" Service 的负载均衡")]),e._v(" "),s("p",[e._v("service 实际的路由转发都是由 kube-proxy 组件来实现的，service 仅以一种 VIP（ClusterIP）的形式存在，kube-proxy 主要实现了集群内部从 pod 到 service 和集群外部从 nodePort 到 service 的访问，kube-proxy 的路由转发规则是通过其后端的代理模块实现的，kube-proxy 的代理模块目前有 3 种实现方案，userspace、iptables、ipvs。")]),e._v(" "),s("p",[e._v("kubernetes v1.0：services 仅是一个“4 层”代理，代理模块只有 userspace。")]),e._v(" "),s("ul",[s("li",[e._v("v1.1：Ingress API 出现，其代理“7 层”服务，并且增加了 iptables 代理模块。")]),e._v(" "),s("li",[e._v("v1.2：iptables 成为默认代理模式。")]),e._v(" "),s("li",[e._v("v1.8：引入 ipvs 代理模块。")]),e._v(" "),s("li",[e._v("v1.9：ipvs 代理模块成为 beta 版本 kubernetes")]),e._v(" "),s("li",[e._v("v1.11：ipvs 代理模式 GA。")])]),e._v(" "),s("h2",{attrs:{id:"kube-proxy-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kube-proxy-的作用"}},[e._v("#")]),e._v(" kube-proxy 的作用")]),e._v(" "),s("p",[e._v("在 k8s 中，service 的 Cluster IP 能够实现数据报文请求的转发，需要在每个 node 节点上部署的一个组件 kube-proxy：")]),e._v(" "),s("ul",[s("li",[e._v("实时监控 API，获取 service 和 pod 的信息，来保持 pod 和虚拟 IP 的映射关系")]),e._v(" "),s("li",[e._v("维护本地 Netfilter 、iptables、IPVS 等内核组件，实现数据报文的转发规则")]),e._v(" "),s("li",[e._v("实现每个 node 节点上虚拟 IP 的发布和路由维护")]),e._v(" "),s("li",[e._v("构建路由信息，通过转发规则转发报文到虚拟 IP 对应的 pod")])]),e._v(" "),s("h2",{attrs:{id:"kube-proxy-的三种模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kube-proxy-的三种模式"}},[e._v("#")]),e._v(" kube-proxy 的三种模式")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=v.exports}}]);
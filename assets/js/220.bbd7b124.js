(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{686:function(t,a,v){"use strict";v.r(a);var e=v(18),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("ul",[v("li",[v("a",{attrs:{href:"https://aws.amazon.com/cn/vpc/faqs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon VPC 常见问题"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"vpc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vpc"}},[t._v("#")]),t._v(" VPC")]),t._v(" "),v("h3",{attrs:{id:"overview"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),v("p",[t._v("虚拟私有云 (VPC) 是仅适用于您的 AWS 账户的虚拟网络。它在逻辑上与 AWS 云中的其他虚拟网络隔绝。您可以为 VPC 指定 IP 地址范围、添加子网、添加网关以及关联安全组。")]),t._v(" "),v("h3",{attrs:{id:"vpc-basics"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vpc-basics"}},[t._v("#")]),t._v(" VPC basics")]),t._v(" "),v("p",[v("strong",[t._v("VPC 跨越区域（Region）中的所有可用区（Availability Zone）。")])]),t._v(" "),v("p",[t._v("在创建 VPC 时，您必须以无类域间路由（CIDR）块的形式为 VPC 指定一个 IPv4 地址范围。示例："),v("code",[t._v("10.0.0.0/16")]),t._v("。这是您的 VPC 的主要 CIDR 块。\n当您创建 VPC 时，必须为这个 VPC 指定 IPv4 CIDR 块。在创建 VPC 后，您可以将额外的 IPv4 CIDR 块与 VPC 关联。")]),t._v(" "),v("ul",[v("li",[t._v("允许的块大小介于 "),v("code",[t._v("/16")]),t._v(" 网络掩码 (65,536 个 IP 地址) 和 "),v("code",[t._v("/28")]),t._v(" 网络掩码 (16 个 IP 地址) 之间。")]),t._v(" "),v("li",[t._v("您不能增加或减少现有 CIDR 块的大小。")]),t._v(" "),v("li",[t._v("在添加或删除 CIDR 块时，它会经历不同的状态：associating |associated |disassociating|disassociated |failing |failed 。当 CIDR 块处于 associated 状态时，表示它已准备就绪，可供您使用。")]),t._v(" "),v("li",[t._v("您可以取消与 VPC 相关联的 CIDR 块的关联，但无法取消最初用于创建 VPC 的 CIDR 块 (主要 CIDR 块) 的关联。")]),t._v(" "),v("li",[t._v("NAT gateways（NAT 网关）：选择要在其中创建网络地址转换 (NAT) 网关的可用区数量。NAT 网 关是一项 AWS 托管式服务，可让私有子网中的 EC2 实例将出站流量发送到互联网。但互联网上 的资源无法与实例建立连接。请注意，使用 NAT 网关会产生成本。")]),t._v(" "),v("li",[t._v("VPC endpoints（VPC 终端节点）：选择是否为 Amazon S3 创建 VPC 终端节点。VPC 端点使您能 够将 VPC 私密地连接到支持的 AWS 服务和 VPC 端点服务（由 PrivateLink 提供支持），而无需使用 互联网网关、NAT 设备、VPN 连接或 AWS Direct Connect 连接。VPC 中的实例无需公有 IP 地址便 可与服务中的资源通信。")]),t._v(" "),v("li",[t._v("如果您删除了默认 VPC，则可以创建一个新的默认 VPC。您无法恢复之前删除的默认 VPC，并且无法将现有非默认 VPC 标记为默认 VPC。")]),t._v(" "),v("li",[t._v("每个可用区只能有一个默认子网。不能在非默认 VPC 中创建默认子网。")])]),t._v(" "),v("h3",{attrs:{id:"vpc-中的-dns-属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vpc-中的-dns-属性"}},[t._v("#")]),t._v(" VPC 中的 DNS 属性")]),t._v(" "),v("p",[t._v("域名系统 (DNS) 是 Internet 中名称使用的标准，以将名称解析到各自相应的 IP 地址。DNS 主机名是可以唯一并绝对区分计算机的名称；它由主机名和域名组成。DNS 服务器会将 DNS 主机名称解析到其相应的 IP 地址。")]),t._v(" "),v("ul",[v("li",[t._v("Amazon DNS 服务器是 Amazon Route 53 Resolver 服务器。此服务器允许 DNS 使用需要通过 VPC 互联网网关进行通信的实例。")]),t._v(" "),v("li",[t._v("Amazon DNS 服务器不驻留在 VPC 中的特定子网或可用区内。")])]),t._v(" "),v("h3",{attrs:{id:"network-address-usage-nau"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#network-address-usage-nau"}},[t._v("#")]),t._v(" Network Address Usage (NAU)")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://docs.amazonaws.cn/zh_cn/vpc/latest/userguide/amazon-vpc-limits.html#vpc-size-limits",target:"_blank",rel:"noopener noreferrer"}},[t._v("Network Address Usage (NAU)"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"subnet"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#subnet"}},[t._v("#")]),t._v(" Subnet")]),t._v(" "),v("h3",{attrs:{id:"overview-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),v("p",[t._v("子网是您的 VPC 内的 IP 地址范围。您可将 AWS 资源（如 Amazon EC2 实例）启动到您的子网中。您可以将子网连接到互联网、其他 VPC 和自己的数据中心，并使用路由表路由传入和传出子网的流量。")]),t._v(" "),v("p",[t._v("您可以将 AWS 资源（例如 EC2 实例）在特定子网中启动。在创建子网 时，指定子网的 IPv4 CIDR 块，它是 VPC CIDR 块的子集。"),v("strong",[t._v("每个子网都必须完全位于一个可用区之内，不能跨越多个可用区")]),t._v("。通过在独立的可用区内启动实例，您可以保护您的应用程序不受单一可用区故障的影响。")]),t._v(" "),v("p",[t._v("子网的 CIDR 块可以与 VPC 的 CIDR 块相同（如果 VPC 中只有单个子网），也可以是 VPC 的 CIDR 块的一个子集（用于在 VPC 中创建多个子网）。允许的块大小在 "),v("code",[t._v("/28")]),t._v(" 网络掩码与 "),v("code",[t._v("/16")]),t._v(" 网络掩码之间。如果您在 VPC 中创建多个子网，子网的 CIDR 块不能重叠。")]),t._v(" "),v("p",[t._v("例如，如果创建其 CIDR 块为 10.0.0.0/24 的 VPC，则它支持 256 个 IP 地址。您可以将这个 CIDR 块分散到两个子网，每个子网支持 128 个 IP 地址。一个子网使用 CIDR 块 10.0.0.0/25 (对于地址 10.0.0.0- 10.0.0.127)，另一个子网使用 CIDR 块 10.0.0.128/25 (对于地址 10.0.0.128 - 10.0.0.255)。")]),t._v(" "),v("h3",{attrs:{id:"subnet-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#subnet-type"}},[t._v("#")]),t._v(" Subnet type")]),t._v(" "),v("p",[t._v("根据您的 VPC 配置方式，子网分为公有子网（ Public subnet）、私有子网（Private subnet）或仅限 VPN 子网（VPN-only subnet）")]),t._v(" "),v("ul",[v("li",[t._v("公有子网：子网流量会通过互联网网关或仅出口互联网网关路由到公共互联网。")]),t._v(" "),v("li",[t._v("私有子网：子网流量无法通过互联网网关或仅出口互联网网关路由到公共互联网。")]),t._v(" "),v("li",[t._v("仅限 VPN 的子网：子网流量通过虚拟私有网关路由到 Site-to-Site VPN 连接。子网流量无法通过互联网网关连接访问互联网。")])]),t._v(" "),v("h3",{attrs:{id:"子网路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#子网路由"}},[t._v("#")]),t._v(" 子网路由")]),t._v(" "),v("p",[t._v("每个子网都必须关联一个路由表，这个路由表可指定允许出站流量离开子网的可用路由。您创建的每个子网都会自动关联 VPC 的主路由表。您可以更改关联，以及更改主路由表的内容。")]),t._v(" "),v("h2",{attrs:{id:"vpc-and-subnets"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vpc-and-subnets"}},[t._v("#")]),t._v(" VPC and subnets")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",[t._v("Adjustable")]),t._v(" "),v("th",[t._v("Comments")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VPCs per Region")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("Yes")]),t._v(" "),v("td",[t._v("Increasing this quota increases the quota on internet gateways per Region by the same amount. You can increase this limit so that you can have 100s of VPCs per Region.")])]),t._v(" "),v("tr",[v("td",[t._v("Subnets per VPC")]),t._v(" "),v("td",[t._v("200")]),t._v(" "),v("td",[t._v("Yes")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("IPv4 CIDR blocks per VPC")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("Yes (up to 50)")]),t._v(" "),v("td",[t._v("This primary CIDR block and all secondary CIDR blocks count toward this quota.")])]),t._v(" "),v("tr",[v("td",[t._v("IPv6 CIDR blocks per VPC")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("No")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"availability-zone-az"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#availability-zone-az"}},[t._v("#")]),t._v(" Availability Zone(AZ)")]),t._v(" "),v("h3",{attrs:{id:"overview-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#overview-3"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),v("p",[t._v("可用区（Availability Zone）是一个 AWS 区域（Region）中具有冗余电源、联网和连接的一个或多个离散数据中心。与单个数据中心相 比，您可以通过可用区运营具有更高可用性、容错能力和可扩展性的生产级应用程序和数据库。如果 跨可用区对在子网中运行的应用程序进行分区，则可以实现更好的隔离并防止停电、雷击、龙卷风、 地震等问题的影响。")])])}),[],!1,null,null,null);a.default=s.exports}}]);
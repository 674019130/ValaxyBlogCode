import{_}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DRMwKLA6.js";import{a as d,p as r,o as h,c as g,w as l,f as m,v as u,r as s,g as t,h as n}from"./app-B_lbTwZU.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DXX2ZxjQ.js";import"./YunCard.vue_vue_type_script_setup_true_lang-DDKa6XCF.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-l3Vxf24V.js";import"./post-B4jxDa69.js";const f=t("h1",{id:"第一章-可靠性、可伸缩性和可维护性",tabindex:"-1"},[n("第一章：可靠性、可伸缩性和可维护性 "),t("a",{class:"header-anchor",href:"#第一章-可靠性、可伸缩性和可维护性","aria-label":'Permalink to "第一章：可靠性、可伸缩性和可维护性"'},"​")],-1),b=t("p",null,[n("将发布的推文 "),t("strong",null,"扇出 Fan-out"),n(" 到其他关注者的 Timeline 缓存中。")],-1),D=t("hr",null,null,-1),k=t("blockquote",null,[t("p",null,"增加负载参数并保持系统资源（CPU、内存、网络带宽等）不变时，系统性能将受到什么影响？增加负载参数并希望保持性能不变时，需要增加多少系统资源？")],-1),v=t("p",null,[n("增加负载的时候考虑两个方面，"),t("strong",null,"性能"),n(" 不变与 "),t("strong",null,"系统资源"),n(" 不变。")],-1),q=t("hr",null,null,-1),$=t("blockquote",null,[t("p",null,[n("对于 Hadoop 这样的批处理系统，通常关心的是 "),t("strong",null,"吞吐量（throughput）"),n("，即每秒可以处理的记录数量，或者在特定规模数据集上运行作业的总时间 。对于在线系统，通常更重要的是服务的 "),t("strong",null,"响应时间（response time）"),n("，即客户端发送请求到接收响应之间的时间。")])],-1),A=t("p",null,[n("分情况讨论，理解 "),t("strong",null,"批处理"),n(" 和后面可能出现的 "),t("strong",null,"流处理"),n("。")],-1),y=t("hr",null,null,-1),I=t("p",null,"一个服务 100 请求的响应时间报表。",-1),x=t("p",null,[n("值得注意的是，平均数（即算术平均值）在实际生产应用中的表现并不如其他指标，作者推荐使用的是"),t("strong",null,"百分位点"),n("，包括但不限于 p50, p90, p999。这些指标反映了 "),t("strong",null,"异常情况下"),n(" 和 "),t("strong",null,"绝大多数"),n(" 情况下对请求的响应表现。p99 等高百分位点（尾部延迟 tail lantencies）非常重要，直接影响了用户体验。")],-1),C=t("hr",null,null,-1),F=t("blockquote",null,[t("p",null,"这是因为请求响应最慢的客户往往也是数据最多的客户，也可以说是最有价值的客户 —— 因为他们掏钱了【19】。")],-1),T=t("p",null,"平均数会被「脏数据」污染，但表现不佳的情况是事实发生的，用户确确实实感知到了这次糟糕的体验。",-1),H=t("p",null,[n("BTW，响应时间（response time）是客户端所见，包括 "),t("strong",null,"实际处理请求的时间"),n("、网络延迟和排队延迟。延迟（latency）是某个请求等待处理的 "),t("strong",null,"持续时长"),n("，在此期间它处于 "),t("strong",null,"休眠（latent）"),n(" 状态，并等待服务。")],-1),M=t("hr",null,null,-1),S=t("blockquote",null,[t("p",null,[n("百分位点通常用于 "),t("strong",null,"服务级别目标（SLO, service level objectives）"),n(" 和 "),t("strong",null,"服务级别协议（SLA, service level agreements）"),n("，即定义服务预期性能和可用性的合同。")])],-1),N=t("p",null,[n("涨知识。会在合同中使用这个指标做 "),t("strong",null,"量化"),n(" （在我的认知中，关于代码的很多东西其实是难以量化的。但是对客户来讲，最直观的体验可能就是响应时间，也是易于被量化的东西。这些甚至可能是工程师和其他岗位的人产生冲突的原因之一）。延伸一下，在指定相关指标时，必然需要对应用 / 服务做尽量全面的测试，模拟生产环境数据，压力测试，极端环境下系统的稳定性，预留安全冗余等。因为这些东西都关乎金钱。这似乎与沉迷于代码世界的工程师们的认知有偏差，但当思考的角度从「如何让这个系统更好」转换到「系统性能已经被确定，如何完全挖掘出其性能指标并提供给客户，保证收入」时，这些思考便水到渠成了。")],-1),P=t("hr",null,null,-1),B=t("blockquote",null,[t("p",null,[t("strong",null,"排队延迟（queueing delay）"),n(" 通常占了高百分位点处响应时间的很大一部分。由于服务器只能并行处理少量的事务（如受其 CPU 核数的限制），所以只要有少量缓慢的请求就能阻碍后续请求的处理，这种效应有时被称为 "),t("strong",null,"头部阻塞（head-of-line blocking）"),n(" 。")])],-1),O=t("p",null,"在头部阻塞情况下，提交了其他请求的客户端感知可能是「少量的数据依然需要较高的处理时间，fuck」。",-1),U=t("hr",null,null,-1),w=t("blockquote",null,[t("p",null,"适应某个级别负载的架构不太可能应付 10 倍于此的负载。如果你正在开发一个快速增长的服务，那么每次负载发生数量级的增长时，你可能都需要重新考虑架构 —— 或者更频繁。"),t("p",null,[n("人们经常讨论 "),t("strong",null,"纵向伸缩"),n("（scaling up，也称为垂直伸缩，即 vertical scaling，转向更强大的机器）和 "),t("strong",null,"横向伸缩"),n("（scaling out，也称为水平伸缩，即 horizontal scaling，将负载分布到多台小机器上）之间的对立。跨多台机器分配负载也称为 “"),t("strong",null,"无共享（shared-nothing）"),n("” 架构。可以在单台机器上运行的系统通常更简单，但高端机器可能非常贵，所以非常密集的负载通常无法避免地需要横向伸缩。现实世界中的优秀架构需要将这两种方法务实地结合，因为使用几台足够强大的机器可能比使用大量的小型虚拟机更简单也更便宜。")])],-1),V=t("p",null,"在讨论负载数量级和横纵向伸缩的时候，往往跟硬件条件关联起来，这似乎也是实践中的事实——升级硬件而不是做算法上的优化。",-1),L=t("hr",null,null,-1),j=t("blockquote",null,[t("p",null,[n("跨多台机器部署 "),t("strong",null,"无状态服务（stateless services）"),n(" 非常简单，但将带状态的数据系统从单节点变为分布式配置则可能引入许多额外复杂度。出于这个原因，常识告诉我们应该将数据库放在单个节点上（纵向伸缩），直到伸缩成本或可用性需求迫使其改为分布式。")])],-1),G=t("p",null,[n("不要忘了数据库也是一种服务，而且往往是带状态的服务。这里的 "),t("strong",null,"状态"),n(" 理解为后续请求的结果依赖于前置请求（当前数据库的数据状态）。")],-1),K=t("hr",null,null,-1),R=t("blockquote",null,[t("p",null,[n("一个良好适配应用的可伸缩架构，是围绕着 "),t("strong",null,"假设（assumption）"),n(" 建立的：哪些操作是常见的？哪些操作是罕见的？这就是所谓负载参数。如果假设最终是错误的，那么为伸缩所做的工程投入就白费了，最糟糕的是适得其反。在早期创业公司或非正式产品中，通常支持产品快速迭代的能力，要比可伸缩至未来的假想负载要重要的多。")])],-1),W=t("p",null,"假设，市场调研很重要，信息（情报）很重要。在务实的时候，信息不应该被忽视。",-1),Z=t("p",null,"负载，伸缩。可以具象化地想象为一块木板承载弹球。",-1),z=t("hr",null,null,-1),J=t("blockquote",null,[t("p",null,[t("strong",null,"复杂度（complexity）"),n(" 有各种可能的症状，例如：状态空间激增、模块间紧密耦合、纠结的依赖关系、不一致的命名和术语、解决性能问题的 Hack、需要绕开的特例等等，现在已经有很多关于这个话题的讨论【31,32,33】。")])],-1),Q=t("p",null,"用一些术语来描述复杂度提升的原因。试着用起来吧。",-1),E=t("hr",null,null,-1),X=t("blockquote",null,[t("p",null,[n("简化系统并不一定意味着减少功能；它也可以意味着消除 "),t("strong",null,"额外的（accidental）"),n(" 的复杂度。 Moseley 和 Marks【32】把 "),t("strong",null,"额外复杂度"),n(" 定义为：由具体实现中涌现，而非（从用户视角看，系统所解决的）问题本身固有的复杂度。")])],-1),Y=t("p",null,"理解这句话，在开发过程中，由工具本身带来的局限性导致需要做一些额外的处理，这可以算作额外复杂度。",-1),tt=t("hr",null,null,-1),nt=t("blockquote",null,[t("p",null,[n("用于消除 "),t("strong",null,"额外复杂度"),n(" 的最好工具之一是 "),t("strong",null,"抽象（abstraction）"),n("。一个好的抽象可以将大量实现细节隐藏在一个干净，简单易懂的外观下面。一个好的抽象也可以广泛用于各类不同应用。比起重复造很多轮子，重用抽象不仅更有效率，而且有助于开发高质量的软件。抽象组件的质量改进将使所有使用它的应用受益。")]),t("p",null,[n("例如，高级编程语言是一种抽象，隐藏了机器码、CPU 寄存器和系统调用。 SQL 也是一种抽象，隐藏了复杂的磁盘 / 内存数据结构、来自其他客户端的并发请求、崩溃后的不一致性。当然在用高级语言编程时，我们仍然用到了机器码；只不过没有 "),t("strong",null,"直接（directly）"),n(" 使用罢了，正是因为编程语言的抽象，我们才不必去考虑这些实现细节。")])],-1),lt=t("p",null,[n("在许多时候我们都在讨论 "),t("strong",null,"抽象"),n("，这意味着透过现象看到本质，将问题直截了当，但又不失优雅（这需要大量的经验）地用合适的标准化流程将其解决。这是一件非常困难的事情。")],-1),ot=t("p",null,"直到现在我还没有熟悉各种常用的设计模式，long way to go.",-1),st=t("hr",null,null,-1),et=t("blockquote",null,[t("p",null,[n("在组织流程方面， "),t("strong",null,"敏捷（agile）"),n(" 工作模式为适应变化提供了一个框架。敏捷社区还开发了对在频繁变化的环境中开发软件很有帮助的技术工具和模式，如 "),t("strong",null,"测试驱动开发（TDD, test-driven development）"),n(" 和 "),t("strong",null,"重构（refactoring）"),n(" 。")])],-1),at=t("p",null,[n("需求一直在变。面对一直变化的需求，文中提到的解决方案在如今看来似乎已经司空见惯，小范围的重构和 TDD 也为将 "),t("strong",null,"抽象"),n(" 应用于实践提供了便利。但本书将讨论更广义的提高敏捷性的办法。")],-1),it=t("p",null,[n("这有别于其他之前看过的技术书籍——屏蔽掉编码细节，只讨论数据系统和数据模型等，这也是一种 "),t("strong",null,"抽象"),n("。")],-1),rt=t("hr",null,null,-1),ut=t("p",null,"本章介绍了一些数据系统的评价指标，接下来将看到作者介绍其他数据系统用例。",-1),ct=t("h1",{id:"后记",tabindex:"-1"},[n("后记 "),t("a",{class:"header-anchor",href:"#后记","aria-label":'Permalink to "后记"'},"​")],-1),pt=t("p",null,"在微软工作的那段时间，Galaxy team 所负责的 Galaxy 平台无疑就是一个数据流处理系统，当时在工作中没有对工作内容开放性地进行思考，当时隐约窥见了所有应用的本质其实都是对数据进行清洗、处理、转换等等。数据系统、数据管道（data pipeline）等概念在这个时候初入脑海。",-1),_t=t("p",null,"随后我阅读了《Kafka 权威指南》这本书。Kafka 作为顶级消息队列解决方案，在其设计和使用时处处透露出我们工作的本质——搬运数据。这本书更加验证了我的这个想法。",-1),dt=t("p",null,"跳出一直在做的 CRUD 这个圈子，从更高的角度思考我们所做的工作，可能更有利于提升自己，找到正确的方向。BTW，在微软的工作往往可以让我感觉我是真的在处理并解决问题，而非将数据库的数据搬运到接口中。",-1),ht=t("p",null,"无论如何，希望自己可以永远进步下去，保持对代码的热爱之心。",-1),yt={__name:"Designing Data-Intensive Applications 读书笔记 0x00",setup(gt,{expose:c}){const e=JSON.parse('{"title":"《Designing Data-Intensive Applications》 读书笔记 | 0x00","description":"","frontmatter":{"title":"《Designing Data-Intensive Applications》 读书笔记 | 0x00","date":"2023-01-30T14:18:50.000Z","tags":["DDIA","System Design"],"categories":["读书笔记","DDIA"],"excerpt":"没看过《人月神话》，看看 《DDIA》 也不错。我们一直在谈的可靠性、可伸缩性和可维护性到底是什么？","author":"苏","readmore":true},"headers":[],"relativePath":"pages/posts/Designing Data-Intensive Applications 读书笔记 0x00.md","path":"/home/runner/work/674019130.github.io/674019130.github.io/pages/posts/Designing Data-Intensive Applications 读书笔记 0x00.md","lastUpdated":1719766846000}'),i=d(),a=e.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},e.frontmatter||{}),r("pageData",e),r("valaxy:frontmatter",a),globalThis.$frontmatter=a,c({frontmatter:{title:"《Designing Data-Intensive Applications》 读书笔记 | 0x00",date:"2023-01-30T14:18:50.000Z",tags:["DDIA","System Design"],categories:["读书笔记","DDIA"],excerpt:"没看过《人月神话》，看看 《DDIA》 也不错。我们一直在谈的可靠性、可伸缩性和可维护性到底是什么？",author:"苏",readmore:!0}}),(o,ft)=>{const p=_;return h(),g(p,{frontmatter:m(a)},{"main-content-md":l(()=>[f,u(" > ![图 1-3 用于分发推特至关注者的数据流水线，2012 年 11 月的负载参数【16】](https://1126993343-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MHdCOHMs3fNDC20H5qi%2Fuploads%2Fgit-blob-31a6740f3d8fa7b256e88ed10f00a2e162125646%2Ffig1-3.png) "),b,D,k,v,q,$,A,y,u(" > ![图 1-4 展示了一个服务 100 次请求响应时间的均值与百分位数](https://1126993343-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MHdCOHMs3fNDC20H5qi%2Fuploads%2Fgit-blob-14ae4b436ce95f2e6343f794ccfbe5b74dfca608%2Ffig1-4.png?alt=media) "),I,x,C,F,T,H,M,S,N,P,B,O,U,w,V,L,j,G,K,R,W,Z,z,J,Q,E,X,Y,tt,nt,lt,ot,st,et,at,it,rt,ut,ct,pt,_t,dt,ht]),"main-header":l(()=>[s(o.$slots,"main-header")]),"main-header-after":l(()=>[s(o.$slots,"main-header-after")]),"main-nav":l(()=>[s(o.$slots,"main-nav")]),"main-content":l(()=>[s(o.$slots,"main-content")]),"main-content-after":l(()=>[s(o.$slots,"main-content-after")]),"main-nav-before":l(()=>[s(o.$slots,"main-nav-before")]),"main-nav-after":l(()=>[s(o.$slots,"main-nav-after")]),comment:l(()=>[s(o.$slots,"comment")]),footer:l(()=>[s(o.$slots,"footer")]),aside:l(()=>[s(o.$slots,"aside")]),"aside-custom":l(()=>[s(o.$slots,"aside-custom")]),default:l(()=>[s(o.$slots,"default")]),_:3},8,["frontmatter"])}}};export{yt as default};

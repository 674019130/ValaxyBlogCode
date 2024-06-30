import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DRMwKLA6.js";import{a as d,p as k,o,c,w as t,f as y,r as l,g as i,h as s}from"./app-B_lbTwZU.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DXX2ZxjQ.js";import"./YunCard.vue_vue_type_script_setup_true_lang-DDKa6XCF.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-l3Vxf24V.js";import"./post-B4jxDa69.js";const g=i("h1",{id:"场景",tabindex:"-1"},[s("场景 "),i("a",{class:"header-anchor",href:"#场景","aria-label":'Permalink to "场景"'},"​")],-1),u=i("p",null,"ORM：Mybatis",-1),F=i("p",null,"数据库：Oracle",-1),m=i("p",null,"组里新人写的一个接口。",-1),f=i("p",null,"传给 Mapper 层的是两个元素数量相等的 List，根据某两个字段是否与 List 中的元素匹配，对 status 字段做更新。",-1),b=i("h1",{id:"问题",tabindex:"-1"},[s("问题 "),i("a",{class:"header-anchor",href:"#问题","aria-label":'Permalink to "问题"'},"​")],-1),C=i("p",null,"假如传入 3 条数据，对应数据库中，应该更新三行的 status，如果能够做到全部更新成功，则继续后续业务的执行。但是无论受影响行数是 0 或其他任何非负整数，方法的返回值都是 -1。无法获取受影响行数。",-1),_=i("h1",{id:"解决方案",tabindex:"-1"},[s("解决方案 "),i("a",{class:"header-anchor",href:"#解决方案","aria-label":'Permalink to "解决方案"'},"​")],-1),A=i("p",null,[s("这个项目用的是 xml 文件写 mapper，为了实现批量查询，需要在 "),i("code",null,"foreach"),s(" 标签里添加一些东西。")],-1),D=i("p",null,[i("code",null,' <foreach collection="list" item="item" index="index" open="begin" close=";end;" separator=";">')],-1),B=i("p",null,"解决了批量更新的问题，返回值还是 -1，开始查网上的资料。无奈 Mybatis & Oracle 的相关资料非常少，包括外网也是。",-1),v=i("p",null,[s("当数据库是 MySQL 的时候，可以通过修改 JDBC 的 URL 参数，添加"),i("code",null,"”affectedRows=true“"),s("来实现返回受影响行数的功能（我自己在 MySQL 数据库开发的时候并没有遇到需要额外配置这个参数的情况）。于是我去搜了 Oracle JDBC 的官方文档，官方给出的 URL 参数里并没有效果类似"),i("code",null,"”affectedRows“"),s("的，这条路走不通。")],-1),S=i("p",null,"JDBC 连接上走不通，看看能不能从 Mybatis 入手。继续搜别的资料。",-1),w=i("p",null,"搜到有解释说，返回值是 -1 是由于：",-1),L=i("blockquote",null,[i("p",null,"是由于defaultExecutorType的引起的，defaultExecutorType有三个执行器SIMPLE、REUSE和BATCH。其中BATCH可以批量更新操作缓存SQL以提高性能，但是有个缺陷就是无法获取update、delete返回的行数。defaultExecutorType的默认执行器是SIMPLE。"),i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"名称"),i("th",null,"描述")])]),i("tbody",null,[i("tr",null,[i("td",null,"SIMPLE"),i("td",null,"执行器执行其它语句")]),i("tr",null,[i("td",null,"REUSE"),i("td",null,"可能重复使用prepared statements 语句")]),i("tr",null,[i("td",null,"BATCH"),i("td",null,"可以重复执行语句和批量更新")])])]),i("p",null,"由于项目配置中启用了BATCH执行器，UPDATE和DELETE返回的行数就丢失了，把执行器改为SIMPLE即可。")],-1),M=i("p",null,"但是该项目的 Mybatis 配置是这样的：",-1),O=i("div",{class:"language-yaml vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"yaml"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"mybatis"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    configuration"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"        default-executor-type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"simple")])])]),i("button",{class:"collapse"})],-1),T=i("p",null,"所以这条路也走不通，继续找原因。",-1),x=i("p",null,"在 StackOverflow 找到有个人说用 BEGIN + END + ; 实现的并不是 「a batch operation」，这里引出了 statement batch 的类型。",-1),$=i("blockquote",null,[i("figure",null,[i("img",{src:"https://tva3.sinaimg.cn/large/008kWByAly8h7swp3ep1wj30j80lp76t.jpg",alt:"image-20221104103007804",loading:"lazy",decoding:"async"})])],-1),j=i("p",null,[s("但是实际测试的时候发现"),i("code",null,"getUpdateCounts()"),s("返回的数组还是都是 -2。")],-1),J=i("p",null,[s("无奈已经下班一个小时了，只好先用 "),i("code",null,"in"),s("代替了"),i("code",null,"where"),s("条件中的"),i("code",null,"="),s("，抛弃了批量更新，修改为了一条 SQL 语句。这样可以正常获取返回值。")],-1),I=i("p",null,"第二天早上来了就在查还有没有相关的资料。查到一个人读了更多的 Oracle JDBC 的文档，解决了我的问题。",-1),Q=i("blockquote",null,[i("p",null,"后来，在 Oracle 的文档说明中，发现的原因："),i("p",null,[i("a",{href:"https://docs.oracle.com/cd/E11882_01/java.112/e16548/oraperf.htm#JJDBC28777",target:"_blank",rel:"noreferrer"},"https://docs.oracle.com/cd/E11882_01/java.112/e16548/oraperf.htm#JJDBC28777")]),i("p",null,"其中，有一段说明："),i("p",null,"Update Counts in the Oracle Implementation of Standard Batching"),i("p",null,[s("If a statement batch is processed successfully, then the integer array, or update counts array, returned by the statement "),i("code",null,"executeBatch"),s(" call will always have one element for each operation in the batch. In the Oracle implementation of standard update batching, the values of the array elements are as follows:")]),i("ul",null,[i("li",null,[s("For a prepared statement batch, it is not possible to know the number of rows affected in the database by each individual statement in the batch. Therefore, all array elements have a value of "),i("code",null,"-2"),s(". According to the JDBC 2.0 specification, a value of "),i("code",null,"-2"),s(" indicates that the operation was successful but the number of rows affected is unknown.")]),i("li",null,"For a generic statement batch, the array contains the actual update counts indicating the number of rows affected by each operation. The actual update counts can be provided only in the case of generic statements in the Oracle implementation of standard batching."),i("li",null,[s("For a callable statement batch, the server always returns the value "),i("code",null,"1"),s(" as the update count, irrespective of the number rows affected by each operation.")])]),i("p",null,[s("In your code, upon successful processing of a batch, you should be prepared to handle either "),i("code",null,"-2"),s(", "),i("code",null,"1"),s(", or true update counts in the array elements. For a successful batch processing, the array contains either all "),i("code",null,"-2"),s(", 1, or all positive integers.")])],-1),R=i("p",null,"针对三种不同的「statement batch」，Oracle 给出的返回值是不同的，也代表了不同的意义，文档里说的很明白。",-1),P=i("ul",null,[i("li",null,[i("p",null,"parpared statement：-2 表示执行成功，但无法返回实际成功行数；")]),i("li",null,[i("p",null,"generic statement：返回实际成功行数；")]),i("li",null,[i("p",null,"callable statement：永远返回 1；")])],-1),q=i("p",null,"最终的解决方案，抛弃 Mybatis：",-1),U=i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"private"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," int"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," updateList"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(List "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," MyObject "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," myList) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," size "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," myList."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"size"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," batchSize "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 100"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," index "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    Long affectedRows "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," L;")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    SqlSession sqlSession "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," sqlSessionFactory."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"openSession"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ExecutorType.BATCH);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    Connection conn "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," sqlSession."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getConnection"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    Statement statement "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    try"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        statement "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," conn."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"createStatement"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        conn."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setAutoCommit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        for"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (MyObject obj"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," myList) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            index"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"++"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            String sql "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "update tb_test set status = "'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj.getStatus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' " where id = "'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            statement."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addBatch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(sql);")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (index "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," batchSize "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ||"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," index "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," size) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"                int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[] ints "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," statement."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executeBatch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                affectedRows "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," IntStream."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"of"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ints)."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sum"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                statement."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"clearBatch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        conn."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"commit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        conn."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setAutoCommit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"catch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (SQLException "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"throwables"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        throwables."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"printStackTrace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"finally"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        try"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (statement "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &&"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," !"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"statement."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"isClosed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                statement."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"close"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"catch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (SQLException "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"throwables"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            throwables."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"printStackTrace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        try"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (conn "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &&"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," !"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"conn."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"isClosed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                conn."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"close"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"catch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (SQLException "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"throwables"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            throwables."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"printStackTrace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," affectedRows."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"intValue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),z=i("h1",{id:"吐槽",tabindex:"-1"},[s("吐槽 "),i("a",{class:"header-anchor",href:"#吐槽","aria-label":'Permalink to "吐槽"'},"​")],-1),N=i("ul",null,[i("li",null,[i("p",null,"Oracle 给我一种很难用的感觉。")]),i("li",null,[i("p",null,"网络上（尤其是 CSDN & 博客园）的资料基本都是复制来复制去，毫无营养。")]),i("li",null,[i("p",null,"新人手里那个项目的代码质量一言难尽，主要是注释和魔法数问题。")]),i("li",null,[i("p",null,"三种 statement 的区分是什么，后面找机会再了解下。（懒狗一条🐶")])],-1),ti={__name:"Oracle-Mybatis-批量更新返回值问题",setup(H,{expose:r}){const e=JSON.parse('{"title":"Oracle & Mybatis 批量更新返回值问题","description":"","frontmatter":{"title":"Oracle & Mybatis 批量更新返回值问题","date":"2022-11-04T09:29:59.000Z","tags":["数据库","Oracle","Mybatis","Java"],"categories":["奇奇怪怪的项目里的问题"],"author":"苏","readmore":true,"excerpt":"Mybatis 在使用（批量）更新语句的时候，应该在 SQL 语句正常执行完毕后返回「受影响行数」，但在连接的数据库是 Oracle 的时候却一直返回 -1，无法对 SQL 的执行状态进行判断，为了解决这个问题，我做了一些尝试……"},"headers":[],"relativePath":"pages/posts/Oracle-Mybatis-批量更新返回值问题.md","path":"/home/runner/work/674019130.github.io/674019130.github.io/pages/posts/Oracle-Mybatis-批量更新返回值问题.md","lastUpdated":1719766846000}'),n=d(),h=e.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},e.frontmatter||{}),k("pageData",e),k("valaxy:frontmatter",h),globalThis.$frontmatter=h,r({frontmatter:{title:"Oracle & Mybatis 批量更新返回值问题",date:"2022-11-04T09:29:59.000Z",tags:["数据库","Oracle","Mybatis","Java"],categories:["奇奇怪怪的项目里的问题"],author:"苏",readmore:!0,excerpt:"Mybatis 在使用（批量）更新语句的时候，应该在 SQL 语句正常执行完毕后返回「受影响行数」，但在连接的数据库是 Oracle 的时候却一直返回 -1，无法对 SQL 的执行状态进行判断，为了解决这个问题，我做了一些尝试……"}}),(a,Z)=>{const E=p;return o(),c(E,{frontmatter:y(h)},{"main-content-md":t(()=>[g,u,F,m,f,b,C,_,A,D,B,v,S,w,L,M,O,T,x,$,j,J,I,Q,R,P,q,U,z,N]),"main-header":t(()=>[l(a.$slots,"main-header")]),"main-header-after":t(()=>[l(a.$slots,"main-header-after")]),"main-nav":t(()=>[l(a.$slots,"main-nav")]),"main-content":t(()=>[l(a.$slots,"main-content")]),"main-content-after":t(()=>[l(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[l(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[l(a.$slots,"main-nav-after")]),comment:t(()=>[l(a.$slots,"comment")]),footer:t(()=>[l(a.$slots,"footer")]),aside:t(()=>[l(a.$slots,"aside")]),"aside-custom":t(()=>[l(a.$slots,"aside-custom")]),default:t(()=>[l(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{ti as default};

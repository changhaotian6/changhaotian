import { getAssetURL, uuid } from "@/utils/utils";

export const mockProfileInfo = [
  {
    label: "姓名",
    value: "常浩田",
  },
  {
    label: "生日",
    value: "1996年8月",
  },
  {
    label: "籍贯",
    value: "山东省济宁市",
  },
  {
    label: "工作年限",
    value: "5年",
  },
  {
    label: "邮箱",
    value: "changhaotian6@163.com",
  },
];

export const mockSchoolInfos = [
  {
    id: "威海职业学院",
    name: "威海职业学院",
    position: [121.946604, 37.452907], // 威职经纬度
    img: getAssetURL("weizhi.png"),
    imageHeight: "100px",
    color: "rgb(140,0,0)",
    schoolInfo: [
      {
        label: "学校",
        value: "威海职业学院",
      },
      {
        label: "系所",
        value: "信息工程系",
      },
      {
        label: "专业",
        value: "软件技术",
      },
      {
        label: "入学日期",
        value: "2015年09月01日",
      },
      {
        label: "离校日期：",
        value: "2018年07月01日",
      },
    ],
  },
  {
    id: "山东科技大学",
    name: "山东科技大学",
    position: [116.972698, 36.678025], // 山科经纬度
    img: getAssetURL("shanke.png"),
    imageHeight: "80px",
    color: "rgb(4,90,163)",
    schoolInfo: [
      {
        label: "学校",
        value: "山东科技大学",
      },
      {
        label: "学院",
        value: "信息学院",
      },
      {
        label: "专业",
        value: "计算机科学与技术",
      },
      {
        label: "入学日期",
        value: "2023年03月01日",
      },
      {
        label: "离校日期：",
        value: "2025年07月01日",
      },
    ],
  },
];

export const mockWorkInfos = [
  {
    id: "bochuang",
    name: "威海博创软件科技有限公司",
    jobPosition: "前端开发工程师",
    img: getAssetURL("bochuang.png"),
    position: [122.131526, 37.504885],
    date: "2018.01~2020.01",
    workInfo: [
      {
        label: "在职时间",
        value: "2018.01~2020.01",
      },
      {
        label: "任职岗位",
        value: "前端开发工程师",
      },
    ],
    workDescriptionInfo: [
      "1、参与项目分工，参与项目需求和研发设计的讨论。",
      "2、设计并实现前端页面的布局和界面，运用React技术进行开发。",
      "3、基于前端主流框架React，采用前后端分离的开发模式，实现高效的团队协作和开发流程。",
      "4、独立负责前端模块的设计和开发，确保模块的质量和功能的实现。",
    ],
    workProjectInfo: [
      {
        id: "zhrw",
        name: "智慧热网管理系统",
        description: "PC端设备远程管控系统",
      },
      {
        id: "nyrl",
        name: "南阳热力考试系统",
        description: "PC端考试系统",
      },
    ],
  },
  {
    id: "duandian",
    name: "广东端点科技有限公司",
    jobPosition: "前端开发工程师",
    img: getAssetURL("duandian.png"),
    position: [113.549854, 22.136295],
    date: "2020.04~2021.05",
    workInfo: [
      {
        label: "在职时间",
        value: "2020.04~2021.05",
      },
      {
        label: "任职岗位",
        value: "前端开发工程师",
      },
    ],
    workDescriptionInfo: [
      "1、参与项目需求分析和制定研发时间计划，确保项目按时启动和顺利进行。",
      "2.、使用Vue全家桶开发并持续改进电商管理后台，保证系统功能稳定、高效运行。",
      "3、使用uni-app进行混合开发，开发移动端APP和微信小程序，提供优质的用户体验和良好的性能。",
    ],
    workProjectInfo: [
      {
        id: "veshop",
        name: "Veshop",
        description: "移动端代购APP",
      },
      {
        id: "qwzs",
        name: "千雾助手",
        description: "移动端分销APP",
      },
      {
        id: "jzlw",
        name: "精致礼物",
        description: "商城购物小程序",
      },
      {
        id: "bpty",
        name: "博乒体育",
        description: "场馆预定、商城购物小程序",
      },
    ],
  },
  {
    id: "huarong",
    name: "华戎信息产业有限公司",
    jobPosition: "前端开发工程师",
    img: getAssetURL("huarong.png"),
    position: [117.135163, 36.660995],
    date: "2021.07~2023.02",
    workInfo: [
      {
        label: "在职时间",
        value: "2021.07~2023.02",
      },
      {
        label: "任职岗位",
        value: "前端开发工程师",
      },
    ],
    workDescriptionInfo: [
      "1、参与需求分析和评审，前端项目技术选型及工期评估，以确保项目顺利进行。",
      "2、使用Vue全家桶进行低代码办公平台研发与维护。",
      "3、使用Vue、Echarts、Cesium进行开发可视化平台的研发与维护，实现数据的生动展示和深度分析。",
      "4、参与制定公司前端规范。推动了团队在开发过程中达到高标准的代码质量和一致性。",
      "5、和后端同事共同商讨数据规范和技术实现方案，为系统的稳定性和性能提供最佳解决方案",
    ],
    workProjectInfo: [
      {
        id: "lhpt",
        name: "蓝海平台",
        description: "微前端架构的低代码OA办公平台",
      },
      {
        id: "ht",
        name: "HiChat（海图）",
        description: "2D可视化、3D可视化、低代码平台",
      },
    ],
  },
];

export const projects = {
  lhpt: {
    name: "蓝海平台",
    date: '2022.04~2023.02',
    description: `蓝海平台是一个微前端架构模式的低代码工程，是公司其他所有产品一个必须依赖的基座，前端工程复杂度也较高。我主要负责项目中单据中心模块、IM模块、应用中心模块的研发工作，及针对其他产品线的提出的需求和问题进行评估和指定研发方案。`,
    stack:
      "Vue + Vuex + Vue Router + AntDesign + axios + Less + WebSocket + 微前端",
    content: [
      "1. 针对前端工程的复杂度问题，梳理出蓝海前端工程依赖关系文档，减少了新成员2周的上手时间，为公司减少了人力成本，提前了产品交付时间。",
      "2、在单据中心中针对可视化配置表单时的合并单元格错位及事件不丰富问题，浏览了百度富文本编辑器源码，修复了源码相关bug，并友好的添加了事件钩子函数。",
      "3、在单据中心中遇到含有子表时配置项的json数据过多一次保存时较慢的问题，通过事件监听获取到当前操作的组件，后端通过组件的ID和上一次的内容进行一个diff比对，进行多次上传方式解决。",
      "4、针对其他产品提出的需求和问题，将同类问题和解决方案归档到公司文档中心中，有效的降低了同类问题反复出现在需求列表中。",
      "5、针对其他同事想参与或学习我负责的单据中心模块时的上手问题，整理了一套视频教程，部门领导和身边同事都给予好评，并被部门总监发布到部门群里进行推广。",
    ],
  },
  ht: {
    name: "海图",
    date: '2021.07~2022.04',
    description: `海图是一个可视化低代码平台。拥有丰富的ECharts图表组件、多个文本组件、地图组件、边框组件等，并且可以在线开发自定义需求的组件。我在此项目中主要负责组件的研发、组件联动功能、全局变量功能、3D功能研发（标绘、全景图、图上推演、快照等）。`,
    stack:
      "Vue + Vuex + Vue Router + ElementUI + Cesium + OpenLayers + Panolens + axios + sass",
    content: [
      "1、封装了12个Echarts组件、6个容器组件、3个2D地图组件、1个表格组件、46个3D图标标绘控件（图标标绘30个、动画标绘4个、态势标绘12个、轨迹标绘1个）。",
      "2、在开发3D标绘模块时，由于一阶段交付时间紧急，我通过自己的学习方法仅用一周时间从0学习Cesium相关技术并搭建出了一个协同开发的基础架构，保证多个参与成员都可以并行工作，在工期内进行交付。",
      "3、在开发图标标绘时遇到需求UI给图片效果是iconfont图标和一些自定义样式实现的，这样挂在到Cesium实例上的是不允许的，Cesium实体接受一个图片，这时候我又封装了一个方法，使用canvas绘制iconfont+CSS动态生成图片进行挂载，里面还有一个细节就是需要监听一下字体库加载完毕事件，不然iconfont是获取失败的。",
      "4、还有一些在3D开发中遇到的问题，如海量标绘触发帧监听事件时内存溢出导致页面卡死，我通过研究Cesium源码和查阅一些资料，封装了一个公共事件处理器，采用发布订阅的模式统一管理Cesium所有事件，解决了此问题。",
    ],
  },
  bpty: {
    name: "博乒体育",
    date: '2020.04~2020.07',
    description: `本项目是一个微信小程序项目。主要实现的功能有场馆预定、课程购买、商城功能、赛事直播、新闻资讯、赛事报名、俱乐部管理等功能，实现了乒乓球运动从购买到直播的一个闭环生态体系。`,
    stack: "Vue + Vuex + Vue Router + iView + uni-app + axios + scss + flex",
    content: [
      "1、主要负责场馆预定、课程购买、赛事直播、新闻资讯、赛事报名功能模块的实现。",
      "2、使用uni-app进行开发小程序。",
      "3、使用Vue全家桶开发后台管理系统。",
      "4、负责页面的优化与后期维护。",
    ],
  },
  jzlw: {
    name: "精致礼物",
    date: '2020.07~2020.09',
    description: `本项目是一个微信小程序项目。主要实现的功能有礼物分类、礼物智选、礼品购买与购物车功能、分销推广功能、供应商功能等功能模块，实现了通过分销推广模式来进行物品的销售，让大家都参与进物品的流通环节。`,
    stack:
      "Vue + Vuex + Vue Router + iView + less + uni-app + axios + scss + flex",
    content: [
      "1、主要负责礼物分类、礼物智选、分销推广功能、供应商功能模块的实现。",
      "2、负责页面的开发和交互优化与后期维护。",
      "3、对常用组件的封装，使用Vue-CLi进行供应商后台基础框架的搭建与开发。",
      "4、负责微信小程序的更新维护与上线发布。",
    ],
  },
  qwzs: {
    name: "千雾助手",
    date: '2020.10~2021.02',
    description: `本项目是一个移动端APP项目。主要实现的有代理商管理、库存管理、商城体系、业绩可视化、新闻资讯、消息推送等功能模块，是一款多模式分销代理的产品。我主要负责代理商管理模块、库存管理、商城体系、业绩数据可视化、消息通知模块的APP及后台管理系统的开发与实现。`,
    stack:
      "uni-app + uniPush + Vue + Vuex + Vue Router + iView + Less + axios + Sass + flex",
    content: [
        "1、通过Sass中的变量、函数和继承功能实现了App换肤功能。",
        "2、使用ECharts开发了业绩数据可视化模块。",
        "3、针对使用uniPush时手机收不到推送消息问题，发现有些手机品牌不兼容，后面进行格式兼容处理解决了此问题。",
        "4、开发完成后负责发布应用到蒲公英应用中心。",
    ],
  },
  veshop: {
    name: "Veshop",
    date: '2021.02~2021.05',
    description: `本项目是一个移动端APP项目。主要实现的有商品代购模块、客服咨询、会员体系、消息推送、多语言国际化、交易数据可视化、商品采购及汇率差计算等功能模块，是一款针对港澳台用户的代购APP。`,
    stack:
      "Vue + Vuex + Vue Router + iView + less + uni-app + uniPush + socket + axios + scss + flex",
    content: [
      "1、主要负责商品代购体系、会员体系、消息推送、交易数据可视化、商品采购模块开发。",
      "2、参与项目需求分析与讨论，提出建议与产品优化见解。",
      "3、负责项目维护和功能优化。",
      "4、配合后端人员联调并独立开发前端功能。",
    ],
  },
  nyrl: {
    name: "南阳热力考试系统",
    date: '2018.11~2019.01',
    description: `本项目是一个移动端项目，采用Vue框架开发。实现的主要业务有试题题库管理、试卷组卷、模拟考试、线上考试、试卷审批、成绩分析管理等。`,
    stack: "Vue2.0 + Vuex + Vue Router + ElementUI + axios + less + flex",
    content: [
      "1、主要负责项目试题题库、考试功能及成绩分析模块的实现。",
      "2、使用ELementUI库快速开发组件。",
      "3、使用flex布局进行移动端屏幕适配，提高用户体验。",
    ],
  },
  zhrw: {
    name: "智慧热网管理系统",
    date: '2019.02~2020.01',
    description: `本项目是PC端项目。采用react框架进行开发，主要功能有数据的监控与报警、仪表远程管控、报表管理、数据分析、地理信息、财务管理模块、巡检管理模块、客服工单模块等，实现了对设备的远程管控。我主要负责仪表报警、报表管理、数据分析、巡检管理和客服工单功能模块的实现和页面布局的设计。`,
    stack: "React + Redux + React-Router + Ant Design + axios + Less",
    content: [
      "1、使用Axure进行页面原型设计。",
      "2、使用Antd对页面进行布局。",
      "3、对axios请求、antd表格控件进行二次封装进行二次封装。",
      "4、和后端同事一起定制接口数据规范。",
    ],
  },
};

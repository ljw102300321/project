// 昆虫数据库
export const insectDatabase = {
  "蟋蟀": {
    "name": "蟋蟀",
    "category": "直翅目",
    "features": "具有强有力的后腿，善于跳跃，会鸣叫",
    "function": "生态指示、观赏价值",
    "isPest": false,
    "colors": ["黑色", "棕色"],
    "shape": "细长形",
    "size": "小型",
    "keyFeatures": ["有长触角", "后腿发达", "会鸣叫"],
    "habitat": "草地、田野、石缝中",
    "habits": "夜行性，雄性通过摩擦翅膀发出鸣叫声吸引雌性，杂食性，以植物、种子和小昆虫为食",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜥蜴", "青蛙", "蜘蛛"],
    "classicalPoems": [
      {
        "title": "夜书所见",
        "author": "叶绍翁",
        "content": "萧萧梧叶送寒声，江上秋风动客情。知有儿童挑促织，夜深篱落一灯明。"
      },
      {
        "title": "蟋蟀",
        "author": "白居易",
        "content": "西窗独暗坐，满耳新蛩声。烦暑未云退，凉飙殊未生。"
      }
    ]
  },
  "蝉": {
    "name": "蝉",
    "category": "半翅目",
    "features": "具有透明的翅膀和响亮的鸣叫声",
    "function": "生态指示、食物链组成部分",
    "isPest": true,
    "colors": ["棕色", "绿色", "黑色"],
    "shape": "椭圆形",
    "size": "中型",
    "keyFeatures": ["有透明翅膀", "有鸣叫器官", "复眼突出"],
    "habitat": "树木上、林间",
    "habits": "幼虫在地下生活数年，成虫在树上吸食树汁，雄性会鸣叫吸引雌性",
    "controlMethods": [
      "修剪受影响的树枝",
      "使用粘虫板",
      "保护树木健康，增强抗虫能力"
    ],
    "naturalEnemies": ["鸟类", "螳螂", "蜻蜓", "寄生蜂"],
    "classicalPoems": [
      {
        "title": "蝉",
        "author": "虞世南",
        "content": "垂緌饮清露，流响出疏桐。居高声自远，非是藉秋风。"
      },
      {
        "title": "所见",
        "author": "袁枚",
        "content": "牧童骑黄牛，歌声振林樾。意欲捕鸣蝉，忽然闭口立。"
      }
    ]
  },
  "萤火虫": {
    "name": "萤火虫",
    "category": "鞘翅目",
    "features": "具有发光器官，能发出荧光",
    "function": "生态指示、观赏价值",
    "isPest": false,
    "colors": ["黑色", "棕色", "黄色"],
    "shape": "细长形",
    "size": "小型",
    "keyFeatures": ["有发光器官", "鞘翅柔软", "触角锯齿状"],
    "habitat": "湿润环境、草地、林间",
    "habits": "夜间活动，通过发光进行求偶交流，幼虫捕食蜗牛和蛞蝓",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜘蛛", "青蛙", "蟾蜍"],
    "classicalPoems": [
      {
        "title": "秋夕",
        "author": "杜牧",
        "content": "银烛秋光冷画屏，轻罗小扇扑流萤。天阶夜色凉如水，卧看牵牛织女星。"
      },
      {
        "title": "即事",
        "author": "陆游",
        "content": "百舌无声燕子飞，日长人静漏声稀。午窗睡起芭蕉绿，梦到流萤入户飞。"
      }
    ]
  },
  "蠼螋": {
    "name": "蠼螋",
    "category": "革翅目",
    "features": "尾部有一对钳状尾铗",
    "function": "捕食害虫、分解有机物",
    "isPest": false,
    "colors": ["棕色", "黑色"],
    "shape": "细长形",
    "size": "小型",
    "keyFeatures": ["有尾铗", "有翅膀", "身体扁平"],
    "habitat": "潮湿环境、石块下、树皮缝隙",
    "habits": "夜行性，捕食小型昆虫和植物害虫，喜欢潮湿环境",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜘蛛", "青蛙", "蜥蜴"]
  },
  "金龟子": {
    "name": "金龟子",
    "category": "鞘翅目",
    "features": "具有坚硬的鞘翅，有金属光泽",
    "function": "分解有机物、部分种类为植物害虫",
    "isPest": true,
    "colors": ["绿色", "金色", "棕色", "黑色"],
    "shape": "椭圆形",
    "size": "中型",
    "keyFeatures": ["有坚硬鞘翅", "有金属光泽", "触角鳃叶状"],
    "habitat": "农田、草地、林间",
    "habits": "幼虫（蛴螬）生活在土壤中啃食植物根部，成虫啃食植物叶片",
    "controlMethods": [
      "灯光诱杀成虫",
      "人工捕捉",
      "使用杀虫剂",
      "深耕土壤减少幼虫"
    ],
    "naturalEnemies": ["鸟类", "步甲", "寄生蜂"]
  },
  "蜜蜂": {
    "name": "蜜蜂",
    "category": "膜翅目",
    "features": "具有采集花粉和酿造蜂蜜的能力",
    "function": "授粉、生产蜂蜜和蜂蜡",
    "isPest": false,
    "colors": ["黄色", "黑色", "棕色"],
    "shape": "椭圆形",
    "size": "小型",
    "keyFeatures": ["有翅膀", "有螫针", "有花粉篮"],
    "habitat": "蜂巢、花朵密集区域",
    "habits": "群居生活，白天活动，采集花蜜和花粉，通过舞蹈交流食物位置信息",
    "controlMethods": [],
    "naturalEnemies": ["胡蜂", "蚂蚁", "蜘蛛"],
    "classicalPoems": [
      {
        "title": "蜂",
        "author": "罗隐",
        "content": "不论平地与山尖，无限风光尽被占。采得百花成蜜后，为谁辛苦为谁甜？"
      },
      {
        "title": "江畔独步寻花",
        "author": "杜甫",
        "content": "黄四娘家花满蹊，千朵万朵压枝低。留连戏蝶时时舞，自在娇莺恰恰啼。"
      }
    ]
  },
  "苍蝇": {
    "name": "苍蝇",
    "category": "双翅目",
    "features": "具有一对翅膀和复眼",
    "function": "分解有机物、传播病原体",
    "isPest": true,
    "colors": ["黑色", "灰色"],
    "shape": "椭圆形",
    "size": "小型",
    "keyFeatures": ["有翅膀", "复眼大", "触角短"],
    "habitat": "垃圾堆、厨房、厕所等",
    "habits": "喜欢在腐烂的有机物上产卵，传播疾病，飞行速度快但飞行距离短",
    "controlMethods": [
      "保持环境清洁，及时清理垃圾",
      "使用纱窗、纱门阻止苍蝇进入",
      "使用粘蝇纸或苍蝇拍",
      "使用安全的杀虫剂"
    ],
    "naturalEnemies": ["蜘蛛", "蜻蜓", "寄生蜂", "鸟类"]
  },
  "蚂蚁": {
    "name": "蚂蚁",
    "category": "膜翅目",
    "features": "具有社会性群居特征，分工明确",
    "function": "分解有机物、土壤改良",
    "isPest": true,
    "colors": ["黑色", "棕色", "红色"],
    "shape": "细长形",
    "size": "微型",
    "keyFeatures": ["有触角", "有六条腿", "胸部和腹部明显"],
    "habitat": "土壤中、木材缝隙、墙缝等",
    "habits": "群居生活，有明确的分工（工蚁、兵蚁、蚁后），通过信息素交流，寻找食物并搬运回巢",
    "controlMethods": [
      "保持环境清洁，封堵蚂蚁进入的缝隙",
      "使用蚂蚁药饵",
      "使用硼酸和糖的混合物",
      "清除蚂蚁觅食路径上的食物残渣"
    ],
    "naturalEnemies": ["食蚁兽", "穿山甲", "蜥蜴", "鸟类"]
  },
  "蝴蝶": {
    "name": "蝴蝶",
    "category": "鳞翅目",
    "features": "具有色彩斑斓的翅膀",
    "function": "授粉、生态指示",
    "isPest": false,
    "colors": ["彩色", "黄色", "橙色", "蓝色"],
    "shape": "椭圆形",
    "size": "中型",
    "keyFeatures": ["有翅膀", "触角末端呈棒状", "翅膀色彩丰富"],
    "habitat": "花园、草地、森林等植物丰富的地方",
    "habits": "白天活动，以花蜜为食，经历卵、幼虫、蛹、成虫四个阶段的完全变态发育",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜘蛛", "蜥蜴", "寄生蜂"],
    "classicalPoems": [
      {
        "title": "宿新市徐公店",
        "author": "杨万里",
        "content": "篱落疏疏一径深，树头新绿未成阴。儿童急走追黄蝶，飞入菜花无处寻。"
      },
      {
        "title": "锦瑟",
        "author": "李商隐",
        "content": "庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。"
      }
    ]
  },
  "蜻蜓": {
    "name": "蜻蜓",
    "category": "蜻蜓目",
    "features": "具有两对透明的翅膀和强壮的飞行能力",
    "function": "捕食害虫、生态平衡",
    "isPest": false,
    "colors": ["蓝色", "绿色", "红色", "黑色"],
    "shape": "细长形",
    "size": "中型",
    "keyFeatures": ["有两对翅膀", "复眼大", "腹部细长"],
    "habitat": "水边、湿地、池塘附近",
    "habits": "飞行能力强，捕食蚊子等害虫，幼虫（水虿）生活在水中",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜘蛛", "青蛙", "蜥蜴"],
    "classicalPoems": [
      {
        "title": "小池",
        "author": "杨万里",
        "content": "泉眼无声惜细流，树阴照水爱晴柔。小荷才露尖尖角，早有蜻蜓立上头。"
      },
      {
        "title": "初夏绝句",
        "author": "陆游",
        "content": "纷纷红紫已成尘，布谷声中夏令新。夹路桑麻行不尽，始知身是太平人。"
      }
    ]
  },
  "红蜘蛛": {
    "name": "红蜘蛛",
    "category": "蛛形纲",
    "features": "具有八条腿和吸食植物汁液的口器",
    "function": "捕食小型昆虫、植物害虫",
    "isPest": true,
    "colors": ["红色", "棕色"],
    "shape": "圆形",
    "size": "微型",
    "keyFeatures": ["有八条腿", "身体分节不明显", "会结网"],
    "habitat": "植物叶片背面、温室、干燥环境",
    "habits": "吸食植物汁液导致叶片发黄，喜欢干燥高温环境，繁殖速度快",
    "controlMethods": [
      "增加空气湿度",
      "定期用水冲洗叶片",
      "使用杀螨剂",
      "引入天敌如捕食螨"
    ],
    "naturalEnemies": ["捕食螨", "草蛉", "食蚜蝇", "瓢虫"]
  },
  "蟑螂": {
    "name": "蟑螂",
    "category": "蜚蠊目",
    "features": "具有扁平的身体和快速爬行能力",
    "function": "分解有机物",
    "isPest": true,
    "colors": ["棕色", "黑色"],
    "shape": "椭圆形",
    "size": "小型",
    "keyFeatures": ["有六条腿", "触角长", "身体扁平"],
    "habitat": "厨房、卫生间、缝隙中",
    "habits": "夜行性，喜欢温暖潮湿环境，杂食性，繁殖能力强，传播疾病",
    "controlMethods": [
      "保持环境清洁干燥",
      "封堵缝隙",
      "使用蟑螂药饵和粘板",
      "使用杀虫剂"
    ],
    "naturalEnemies": ["蜘蛛", "蝎子", "蜈蚣", "鸟类"]
  },
  "蝗虫": {
    "name": "蝗虫",
    "category": "直翅目",
    "features": "具有强壮的后腿用于跳跃",
    "function": "植物害虫",
    "isPest": true,
    "colors": ["绿色", "棕色", "黄色"],
    "shape": "细长形",
    "size": "中型",
    "keyFeatures": ["有后腿用于跳跃", "有翅膀", "触角短"],
    "habitat": "草地、农田",
    "habits": "群居性，食量大，能飞行和跳跃，对农作物造成严重危害",
    "controlMethods": [
      "生物防治（引入天敌）",
      "合理使用杀虫剂",
      "及时清理杂草",
      "监测蝗虫密度，及早防治"
    ],
    "naturalEnemies": ["鸟类", "青蛙", "蜥蜴", "寄生蜂"]
  },
  "瓢虫": {
    "name": "瓢虫",
    "category": "鞘翅目",
    "features": "具有硬壳状的翅膀和鲜艳的颜色",
    "function": "捕食蚜虫等害虫",
    "isPest": false,
    "colors": ["红色", "橙色", "黄色"],
    "shape": "圆形",
    "size": "小型",
    "keyFeatures": ["有硬壳翅膀", "颜色鲜艳", "有斑点"],
    "habitat": "花园、农田、植物叶片上",
    "habits": "捕食蚜虫、螨虫等害虫，成虫和幼虫都具有捕食能力，对农业有益",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜘蛛", "寄生蜂", "草蛉"]
  },
  "蚊子": {
    "name": "蚊子",
    "category": "双翅目",
    "features": "雌性具有吸血的口器",
    "function": "传播疾病",
    "isPest": true,
    "colors": ["黑色", "灰色"],
    "shape": "细长形",
    "size": "小型",
    "keyFeatures": ["有翅膀", "有细长口器", "触角有鳞片"],
    "habitat": "水边、湿地、积水处",
    "habits": "雌蚊吸血繁殖，雄蚊吸食花蜜，幼虫（孑孓）生活在水中，传播疟疾、登革热等疾病",
    "controlMethods": [
      "清除积水",
      "使用纱窗、蚊帐",
      "使用驱蚊剂",
      "生物防治（如养鱼吃孑孓）",
      "合理使用杀虫剂"
    ],
    "naturalEnemies": ["蜻蜓", "青蛙", "鱼类", "蝙蝠"]
  },
  "蚜虫": {
    "name": "蚜虫",
    "category": "同翅目",
    "features": "具有刺吸式口器，体型小",
    "function": "植物害虫",
    "isPest": true,
    "colors": ["绿色", "黑色", "棕色"],
    "shape": "椭圆形",
    "size": "微型",
    "keyFeatures": ["体型小", "有刺吸式口器", "腹管明显"],
    "habitat": "植物嫩叶、茎部",
    "habits": "群集在植物嫩叶和茎部吸食汁液，导致植物生长不良，传播植物病毒",
    "controlMethods": [
      "生物防治（引入瓢虫、草蛉等天敌）",
      "使用肥皂水冲洗",
      "合理使用杀虫剂",
      "及时修剪受害植物部分"
    ],
    "naturalEnemies": ["瓢虫", "草蛉", "食蚜蝇", "寄生蜂"]
  },
  "草蛉": {
    "name": "草蛉",
    "category": "脉翅目",
    "features": "具有透明的网状翅膀",
    "function": "捕食蚜虫等害虫",
    "isPest": false,
    "colors": ["绿色", "黄色"],
    "shape": "细长形",
    "size": "中型",
    "keyFeatures": ["有透明网状翅膀", "触角长", "复眼大"],
    "habitat": "花园、农田、植物丰富的地方",
    "habits": "幼虫（蚜狮）和成虫都捕食蚜虫、螨虫等害虫，是重要的天敌昆虫",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜘蛛", "寄生蜂"]
  },
  "食蚜蝇": {
    "name": "食蚜蝇",
    "category": "双翅目",
    "features": "模仿蜜蜂的外观但只有一对翅膀",
    "function": "授粉、捕食蚜虫",
    "isPest": false,
    "colors": ["黄色", "黑色", "棕色"],
    "shape": "椭圆形",
    "size": "小型",
    "keyFeatures": ["有翅膀", "模仿蜂类", "只有一对翅膀"],
    "habitat": "花园、农田、花朵附近",
    "habits": "成虫以花蜜为食，幼虫捕食蚜虫，是益虫",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜘蛛", "寄生蜂"]
  },
  "螳螂": {
    "name": "螳螂",
    "category": "螳螂目",
    "features": "前足为捕捉足，能灵活转动头部",
    "function": "捕食害虫",
    "isPest": false,
    "colors": ["绿色", "棕色"],
    "shape": "细长形",
    "size": "中型",
    "keyFeatures": ["前足为捕捉足", "头部能灵活转动", "有复眼"],
    "habitat": "花园、农田、灌木丛",
    "habits": "捕食性昆虫，以其他昆虫为食，善于伪装，雌螳螂会吃掉雄螳螂",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜥蜴", "蝙蝠", "寄生蜂"]
  },
  "竹节虫": {
    "name": "竹节虫",
    "category": "竹节虫目",
    "features": "身体细长如竹枝，善于伪装",
    "function": "生态指示",
    "isPest": false,
    "colors": ["绿色", "棕色"],
    "shape": "细长形",
    "size": "大型",
    "keyFeatures": ["身体细长", "善于伪装", "腿细长"],
    "habitat": "树林、灌木丛",
    "habits": "以树叶为食，通过拟态伪装成树枝或树叶来躲避天敌",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜥蜴", "青蛙"]
  },
  "天牛": {
    "name": "天牛",
    "category": "鞘翅目",
    "features": "触角很长，通常超过体长",
    "function": "部分种类为植物害虫",
    "isPest": true,
    "colors": ["黑色", "棕色", "白色"],
    "shape": "细长形",
    "size": "中型",
    "keyFeatures": ["触角长", "有鞘翅", "身体坚硬"],
    "habitat": "树木、木材",
    "habits": "幼虫在树木内部蛀食，成虫啃食树皮和嫩枝，对树木造成危害",
    "controlMethods": [
      "人工捕捉成虫",
      "剪除受害枝条",
      "使用杀虫剂",
      "加强树木管理，保持树木健康"
    ],
    "naturalEnemies": ["鸟类", "寄生蜂", "步甲"]
  },
  "蠋蝽": {
    "name": "蠋蝽",
    "category": "半翅目",
    "features": "体形似蜂，有刺吸式口器",
    "function": "捕食鳞翅目幼虫的天敌昆虫",
    "isPest": false,
    "colors": ["棕色", "黑色"],
    "shape": "椭圆形",
    "size": "中型",
    "keyFeatures": ["体形似蜂", "有刺吸式口器", "前翅有花纹"],
    "habitat": "茶园、果园、森林",
    "habits": "捕食鳞翅目幼虫、蛹及成虫，是重要的生物防治昆虫",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜘蛛", "寄生蜂"]
  },
  "叶蝉": {
    "name": "叶蝉",
    "category": "同翅目",
    "features": "体小而扁平，善于跳跃",
    "function": "植物害虫，传播植物病毒",
    "isPest": true,
    "colors": ["绿色", "黄色", "白色"],
    "shape": "楔形",
    "size": "小型",
    "keyFeatures": ["体小而扁平", "善于跳跃", "头部尖锐"],
    "habitat": "植物叶片上",
    "habits": "以刺吸式口器吸食植物汁液，造成叶片出现白斑，传播植物病毒",
    "controlMethods": [
      "清除田间杂草",
      "合理使用杀虫剂",
      "保护天敌昆虫"
    ],
    "naturalEnemies": ["蜘蛛", "草蛉", "寄生蜂", "步甲"]
  },
  "步行虫": {
    "name": "步行虫",
    "category": "鞘翅目",
    "features": "体长而扁平，善于行走",
    "function": "捕食害虫",
    "isPest": false,
    "colors": ["黑色", "棕色"],
    "shape": "细长形",
    "size": "小型",
    "keyFeatures": ["体长而扁平", "善于行走", "有强壮的颚"],
    "habitat": "地面、石块下、落叶层",
    "habits": "夜行性，捕食各种小昆虫和无脊椎动物，是重要的天敌昆虫",
    "controlMethods": [],
    "naturalEnemies": ["鸟类", "蜥蜴", "青蛙"]
  },
  "白蛾": {
    "name": "白蛾",
    "category": "鳞翅目",
    "features": "白色翅膀，夜间活动，幼虫为毛虫",
    "function": "植物害虫，危害多种树木",
    "isPest": true,
    "colors": ["白色", "灰白色"],
    "shape": "椭圆形",
    "size": "中型",
    "keyFeatures": ["白色翅膀", "夜间活动", "幼虫为毛虫"],
    "habitat": "树林、果园、城市绿化树木",
    "habits": "幼虫大量啃食树叶，能在短时间内造成树木叶片被吃光，繁殖能力强",
    "controlMethods": [
      "人工摘除卵块和幼虫",
      "使用性引诱剂诱杀成虫",
      "释放天敌如周氏啮小蜂",
      "合理使用杀虫剂"
    ],
    "naturalEnemies": ["周氏啮小蜂", "鸟类", "蜘蛛"]
  },
  "蓟马": {
    "name": "蓟马",
    "category": "缨翅目",
    "features": "体型微小，有锉吸式口器，翅膀边缘有长毛",
    "function": "植物害虫，危害花卉和蔬菜",
    "isPest": true,
    "colors": ["黄色", "棕色", "黑色"],
    "shape": "细长形",
    "size": "微型",
    "keyFeatures": ["体型微小", "翅膀边缘有长毛", "有锉吸式口器"],
    "habitat": "植物花朵、叶片、嫩梢",
    "habits": "锉吸植物组织汁液，造成叶片卷曲、花朵畸形，传播植物病毒",
    "controlMethods": [
      "蓝色粘虫板诱杀",
      "清除杂草和受害植物残体",
      "使用杀虫剂",
      "保护天敌如捕食螨"
    ],
    "naturalEnemies": ["捕食螨", "草蛉", "小花蝽", "寄生蜂"]
  },
  "粉虱": {
    "name": "粉虱",
    "category": "同翅目",
    "features": "体型小，白色翅膀，常群集在叶片背面",
    "function": "植物害虫，危害蔬菜和花卉",
    "isPest": true,
    "colors": ["白色", "淡黄色"],
    "shape": "椭圆形",
    "size": "微型",
    "keyFeatures": ["白色翅膀", "体型小", "群集生活"],
    "habitat": "植物叶片背面，特别是温室植物",
    "habits": "刺吸植物汁液，分泌蜜露导致煤污病，降低植物光合作用，繁殖速度快",
    "controlMethods": [
      "黄色粘虫板诱杀",
      "释放天敌如丽蚜小蜂",
      "使用杀虫剂",
      "加强通风，降低湿度"
    ],
    "naturalEnemies": ["丽蚜小蜂", "捕食螨", "草蛉", "小花蝽"]
  },
  "潜叶蝇": {
    "name": "潜叶蝇",
    "category": "双翅目",
    "features": "幼虫在叶片内潜食，形成弯曲隧道",
    "function": "植物害虫，危害蔬菜和花卉叶片",
    "isPest": true,
    "colors": ["黑色", "灰色"],
    "shape": "小型",
    "size": "小型",
    "keyFeatures": ["幼虫潜叶为害", "形成隧道状痕迹", "成虫有翅膀"],
    "habitat": "蔬菜地、花卉园、温室",
    "habits": "雌虫在叶片内产卵，幼虫孵化后在叶肉内潜食，形成白色弯曲隧道，影响植物生长",
    "controlMethods": [
      "及时清除受害叶片",
      "使用黄色粘虫板诱杀成虫",
      "使用杀虫剂",
      "轮作换茬，减少虫源"
    ],
    "naturalEnemies": ["寄生蜂", "蜘蛛", "鸟类"]
  }
};

// 根据昆虫名称获取昆虫信息的函数
export const getInsectInfo = (name) => {
  return insectDatabase[name] || null;
};

// 获取所有昆虫名称的函数
export const getAllInsectNames = () => {
  return Object.keys(insectDatabase);
};
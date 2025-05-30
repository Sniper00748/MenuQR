// 菜单数据
const menuData = {
    categories: [
        {
            id: 1,
            name: "经典鸡尾酒",
            image: "https://s21.ax1x.com/2025/05/20/pEx8gUO.webp",
            description: "传统经典，永不过时的鸡尾酒选择"
        },
        {
            id: 2,
            name: "来生专属",
            image: "https://s21.ax1x.com/2025/05/20/pEx8yb6.webp",
            description: "独家配方，只在来生Afterlife才能品尝的特调"
        },
        {
            id: 3,
            name: "季节限定",
            image: "https://s21.ax1x.com/2025/05/20/pEx8h2d.webp",
            description: "限时供应，把握当季最佳风味"
        }
    ],
    items: [
        // 经典鸡尾酒
        {
            id: 101,
            categoryId: 1,
            name: "金汤力（新手友好）",
            price: 20,
            image: "https://s21.ax1x.com/2025/05/20/pExYGDI.webp",
            description: "清爽提神的经典调酒，金酒的草本香气与汤力水的苦甜完美融合",
            ingredients: "金酒、汤力水"
        },
        {
            id: 102,
            categoryId: 1,
            name: "冰与火之歌",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/20/pExYJbt.webp",
            description: "冰与火的完美融合，金酒的清爽与蓝橙利口酒的甜美，柠檬汁带来酸爽，红石榴糖浆点缀如火焰",
            ingredients: "金酒、蓝橙利口酒、柠檬汁、苏打水、红石榴糖浆"
        },
        {
            id: 103,
            categoryId: 1,
            name: "青珊瑚",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/20/pExYtVP.webp",
            description: "荣获1950年第二次日本饮料大赛冠军的鸡尾酒，由名古屋市调酒师鹿野彦司先生创造。清新薄荷与金酒的绝妙组合，柠檬汁增添一丝酸爽，视觉与味觉的双重享受",
            ingredients: "金酒、绿薄荷利口酒、柠檬汁"
        },
        {
            id: 104,
            categoryId: 1,
            name: "巴拉莱卡",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/20/pExYU58.webp",
            description: "俄罗斯风情的经典鸡尾酒，伏特加的烈性与君度的甜香，柠檬汁带来清新平衡",
            ingredients: "伏特加、君度、柠檬汁"
        },
        {
            id: 105,
            categoryId: 1,
            name: "黑俄罗斯",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/20/pExYNUf.webp",
            description: "浓郁的咖啡香气与伏特加的完美结合，丝滑口感中蕴含着俄罗斯的神秘气息",
            ingredients: "伏特加、甘露咖啡利口酒"
        },
        {
            id: 106,
            categoryId: 1,
            name: "自由古巴（新手友好）",
            price: 20,
            image: "https://s21.ax1x.com/2025/05/20/pExYw8g.webp",
            description: "加勒比海的热情与自由，朗姆酒的醇厚与可乐的甜美，青柠汁增添一丝清新",
            ingredients: "朗姆、可乐、青柠汁"
        },
        {
            id: 107,
            categoryId: 1,
            name: "止痛药",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/20/pExUWPf.webp",
            description: "热带风情的经典调酒，朗姆酒的醇厚与果汁的甜美，椰浆增添丝滑口感",
            ingredients: "朗姆、橙汁、菠萝汁、椰浆"
        },
        {
            id: 108,
            categoryId: 1,
            name: "海明威特调",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/20/pExU2IP.webp",
            description: "文学大师最爱的鸡尾酒，朗姆酒的醇厚与野樱桃的甜美，柑橘类果汁带来清新平衡",
            ingredients: "朗姆、野樱桃酒、青柠汁、葡萄柚汁"
        },
        {
            id: 109,
            categoryId: 1,
            name: "威士忌酸",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/20/pExU4xg.webp",
            description: "经典美式鸡尾酒，波本威士忌的醇厚与柠檬汁的酸爽，糖浆平衡口感",
            ingredients: "波本威士忌、柠檬汁、糖浆"
        },
        {
            id: 110,
            categoryId: 1,
            name: "龙舌兰日出（新手友好）",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/21/pExgbdO.webp",
            description: "如同墨西哥日出般绚丽的层次感，龙舌兰的烈性与橙汁的甜美，红石榴糖浆点缀如朝霞",
            ingredients: "龙舌兰、橙汁、红石榴糖浆"
        },
        {
            id: 111,
            categoryId: 1,
            name: "玛格丽特",
            price: 25,
            image: "https://s21.ax1x.com/2025/05/21/pExgqoD.webp",
            description: "1949年召开的美国国民鸡尾酒大赛的入选作品，由约翰·迪莱莎设计调制。为了纪念他不幸去世的恋人玛格丽特而取名的一款鸡尾酒。杯子用盐装饰出冰霜代表着泪水，龙舌兰的烈性与青柠的酸爽，君度增添一丝甜美",
            ingredients: "龙舌兰、君度、青柠汁"
        },
        {
            id: 112,
            categoryId: 1,
            name: "长岛冰茶",
            price: 35,
            image: "https://s21.ax1x.com/2025/05/21/pExgjWd.webp",
            description: "据说在二十世纪二十年代美国禁酒令期间，酒保将烈酒与可乐混成一杯看似茶的饮品。另一种说是在1972年，由长岛橡树滩客栈的酒保发明了这种以四种基酒混制出来的饮料。四种基酒的完美融合，口感如同冰茶般顺滑，却蕴含着强大的力量",
            ingredients: "金酒、伏特加、朗姆、龙舌兰、君度、柠檬汁、可乐"
        },
        {
            id: 113,
            categoryId: 1,
            name: "秀兰·邓波儿（无酒精）",
            price: 20,
            image: "https://s21.ax1x.com/2025/05/25/pVSMlGj.webp",
            description: "虽然谁也说不清为什么这个饮料叫这个名字，但那石榴糖浆渲染出的魅惑、性感和诱惑，是对秀兰邓波儿最好的伤怀，毕竟这些都远不及那段率性的秀兰·邓波儿舞更让人记得这个名字。",
            ingredients: "柠檬汁、红石榴糖浆、干姜水"
        },
        // 来生专属
        {
            id: 201,
            categoryId: 2,
            name: "大卫·马丁内斯",
            price: 30,
            image: "https://s21.ax1x.com/2025/05/20/pExUcVI.webp",
            description: "大卫·马丁内斯，生的伟大，死的光荣。子弹杯里伏特加加冰,兑小可乐。大卫不喜欢碳酸饮料，可乐是给露西加的，她喜欢。",
            ingredients: "伏特加、柠檬汁、蓝可乐"
        },
        {
            id: 202,
            categoryId: 2,
            name: "杰克·威尔斯",
            price: 30,
            image: "https://s21.ax1x.com/2025/05/21/pExgOFe.webp",
            description: "夜城霓虹下的烈焰灵魂，酸爽清冽带着“一点爱”，致敬夜之城那位真正的大人物",
            ingredients: "伏特加、青柠汁、干姜水、樱花可乐"
        },
        {
            id: 203,
            categoryId: 2,
            name: "强尼·银手",
            price: 35,
            image: "https://s21.ax1x.com/2025/05/21/pExgXJH.webp",
            description: "如同传奇摇滚歌手的个性，龙舌兰的烈性与墨西哥啤酒的清爽，辣椒带来的刺激如同银手的反叛精神",
            ingredients: "龙舌兰、龙舌兰糖浆、苦精、墨西哥啤酒、辣椒"
        },
        {
            id: 204,
            categoryId: 2,
            name: "丽贝卡（即将上市）",
            price: "35",
            image: "https://s21.ax1x.com/2025/05/30/pVpv3WQ.webp",
            description: " 如同她不加掩饰的直率性格，在你放松警惕的瞬间，引爆你的感官",
            ingredients: "暂定：干型朗姆、梅斯卡尔、樱桃利口酒、覆盆子糖浆、柠檬汁、苦精"
        },
        {
            id: 205,
            categoryId: 2,
            name: "露西（即将上市）",
            price: "待定",
            image: "https://s21.ax1x.com/2025/05/23/pEzswLT.webp",
            description: "冷静而难以捉摸，柔情是她深藏心底的月球之梦。带你一同挣脱引力，飞向那遥远而宁静的彼端",
            ingredients: "暂定：伏特加、接骨木花利口酒、葡萄柚汁、白桃糖浆、干型起泡酒、橙味苦精"
        },
        {
            id: 206,
            categoryId: 2,
            name: "亚当·重锤（即将上市）",
            price: "待定",
            image: "https://s21.ax1x.com/2025/05/23/pEzsaQ0.webp",
            description: "感受荒坂铁拳的冰冷重量！钢铁壁垒，每一滴都散发着引擎般的低吼和毫不留情的苦涩。这杯“重锤”不讲情面，只讲力量——你，承受得起吗？",
            ingredients: "暂定：日本伏特加、黑朗姆酒、咖啡利口酒、苦精"
        },
        // 季节限定
        {
            id: 301,
            categoryId: 3,
            name: "啤酒花Chill Highball",
            price: 32,
            image: "https://s21.ax1x.com/2025/05/20/pExYkv9.webp",
            description: "季节限定特饮，稀有啤酒花品种浸泡蒸馏制作的烧酒，加入苏打水带来清爽口感，冰块充足，适合夏日消暑",
            ingredients: "Chill Green啤酒花手工蒸馏烈酒、苏打水"
        },
        {
            id: 302,
            categoryId: 3,
            name: "植物Chill Highball",
            price: 30,
            image: "https://s21.ax1x.com/2025/05/20/pExYi34.webp",
            description: "季节限定特饮，麦烧酒+天然植物蒸馏加入苏打水提升气泡感，冰镇后更显清爽。像一瓶香水，喝起来都是柠檬橙花草本香气",
            ingredients: "Chill Green植物手工蒸馏烈酒、苏打水"
        }
    ]
};
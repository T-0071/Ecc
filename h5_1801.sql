/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1801

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-16 09:05:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '../img/k1.jpg', '美国原装进口Adsdfd深海冰水精华五谷配方全浪 30 磅（13.6kg）', '895.00', 'a', '2018-04-11 15:13:24');
INSERT INTO `goods` VALUES ('2', '../img/k2.jpg', '加拿大原装进料口 原始猎食渴望六种鱼肉+美毛专用配方2kg', '290.00', 'a', '2018-04-11 15:18:07');
INSERT INTO `goods` VALUES ('3', '../img/k3.jpg', '耐吉斯SOLOTION比利时班 肌肉+三文鱼配方幼犬粮 3磅、1.36kg', '100.00', 'a', '2018-04-11 15:16:24');
INSERT INTO `goods` VALUES ('4', '../img/k4.jpg', '加拿大原装进口牛顿五谷低声糖系列去骨鸡肉&火鸡肉犬粮1.82kg', '190.00', 'a', '2018-04-11 15:18:15');
INSERT INTO `goods` VALUES ('5', '../img/k5.jpg', '美国Wellness宠物将抗系列 鸡肉配方小型幼犬粮2.7kg', '219.00', 'a', '2018-04-11 15:19:26');
INSERT INTO `goods` VALUES ('6', '../img/k6.jpg', '加拿大原装进料口 原始猎食渴望六种鱼肉+美毛专用配方2k', '209.00', 'a', '2018-04-11 15:20:11');
INSERT INTO `goods` VALUES ('7', '../img/k7.jpg', '耐吉斯SOLOTION比利时班 肌肉+三文鱼配方幼犬粮 3磅、1.36kg', '230.00', 'a', '2018-04-11 15:20:37');
INSERT INTO `goods` VALUES ('8', '../img/k8.jpg', '加拿大原装进料口 原始猎食渴望六种鱼肉+美毛专用配方2k', '349.00', 'a', '2018-04-11 15:20:57');
INSERT INTO `goods` VALUES ('9', '../img/k9.jpg', '孟蓓天然带肉牛棒骨S号', '22.80', 'b', '2018-04-11 15:23:06');
INSERT INTO `goods` VALUES ('10', '../img/k10.jpg', '宝路绿茶口味大型犬成全借此棒11g', '15.60', 'b', '2018-04-11 15:24:18');
INSERT INTO `goods` VALUES ('11', '../img/k11.jpg', '宠儿香家庭专用系列 美将康是罐头90g', '18.00', 'b', '2018-04-11 16:07:29');
INSERT INTO `goods` VALUES ('12', '../img/k12.jpg', '德国原装进口卡劳德医生 全用肝脏处方量1kg', '25.00', 'b', '2018-04-11 16:08:38');
INSERT INTO `goods` VALUES ('13', '../img/k13.jpg', '宠儿香家庭专用系列 美将康是罐头90g', '12.00', 'b', '2018-04-11 16:09:05');
INSERT INTO `goods` VALUES ('14', '../img/k14.jpg', '宝路绿茶口味大型犬成全借此棒11g', '13.20', 'b', '2018-04-11 16:09:37');
INSERT INTO `goods` VALUES ('15', '../img/k15.jpg', '孟蓓天然带肉牛棒骨S号', '15.90', 'b', '2018-04-11 16:09:59');
INSERT INTO `goods` VALUES ('16', '../img/k16.jpg', '宝路绿茶口味大型犬成全借此棒11g', '26.00', 'b', '2018-04-11 16:10:22');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL COMMENT '内容',
  `listprice` decimal(50,2) DEFAULT NULL COMMENT '原价',
  `ourprice` decimal(50,2) DEFAULT NULL COMMENT '活动价',
  `sale` varchar(255) DEFAULT NULL COMMENT '已售',
  `interact` varchar(255) DEFAULT NULL COMMENT '互动',
  `category` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '../img/a1.jpg', '法国维克 耳漂 新一代犬用耳道清洁剂 125ml', '150.00', '126.00', '已售12788瓶', '6282人互动', 'a', '2018-04-06 00:55:31');
INSERT INTO `goodslist` VALUES ('2', '../img/a2.jpg', '正品法国维克 耳漂 新一代犬用耳道清洁剂 60ml', '37.00', '27.67', '已售6302支', '1539人互动', 'a', '2018-04-06 00:56:38');
INSERT INTO `goodslist` VALUES ('3', '../img/a3.jpg', '法国维克 爱乐滴 皮肤修复剂 单支/2ml 10kg以下 单支', '100.80', '84.00', '已售8483瓶', '6282人互动', 'a', '2018-04-06 00:58:00');
INSERT INTO `goodslist` VALUES ('4', '../img/a4.jpg', '法国维克 爱乐滴 犬用皮肤修复剂 6支/盒 4ml/10kg以上 ', '237.60', '198.00', '已售5838支', '1075人互动', 'a', '2018-04-06 11:57:50');
INSERT INTO `goodslist` VALUES ('5', '../img/a5.jpg', '美国原装进口 麦高臣MicrocynAH 宠物神仙水 伤', '391.20', '329.00', '已售5247瓶', '2802人互动', 'a', '2018-04-06 01:01:36');
INSERT INTO `goodslist` VALUES ('6', '../img/a6.jpg', '正品法国维克 益口清漱口水 250ml ', '141.60', '118.00', '已售4694瓶', '2802人互动', 'a', '2018-04-06 01:07:14');
INSERT INTO `goodslist` VALUES ('7', '../img/a7.jpg', '正品法国维克 益口清漱口水 250ml ', '141.60', '118.00', '已售4694瓶', '1365人互动', 'a', '2018-04-06 01:09:10');
INSERT INTO `goodslist` VALUES ('8', '../img/a8.jpg', '法国维克 犬 复合酶牙膏 鸡肉味70g', '118.00', '112.00', '已售1601瓶', '1365人互动', 'a', '2018-04-06 01:11:17');
INSERT INTO `goodslist` VALUES ('9', '../img/a9.jpg', '正品法国维克 益口清漱口水 250ml ', '114.00', '118.00', '已售1601瓶', '516人互动', 'a', '2018-04-06 01:19:44');
INSERT INTO `goodslist` VALUES ('10', '../img/a10.jpg', '法国维克 犬 复合酶牙膏 鸡肉味70g', '36.00', '39.00', '已售5247瓶', '1365人互动', 'a', '2018-04-06 01:32:38');
INSERT INTO `goodslist` VALUES ('11', '../img/a11.jpg', '德国特瑞仕TRIXIE 犬用牛肉味牙膏套装100g', '44.00', '37.00', '已售5247瓶', '2802人互动', 'a', '2018-04-06 01:26:30');
INSERT INTO `goodslist` VALUES ('12', '../img/a12.jpg', '加拿大原装进口Omega Paw 洁耳液120ml', '55.00', '45.00', '已售20瓶', '6人互动', 'a', '2018-04-06 01:31:27');
INSERT INTO `goodslist` VALUES ('13', '../img/a13.jpg', '美国原装进口 麦高臣MicrocynAH 宠物神仙水 伤', '34.00', '45.00', '已售4694瓶', '1365人互动', 'a', '2018-04-06 01:32:45');
INSERT INTO `goodslist` VALUES ('14', '../img/a14.jpg', '加拿大原装进口Omega Paw 洁耳液120ml', '78.00', '45.00', '已售5247瓶', '516人互动', 'a', '2018-04-06 01:36:22');
INSERT INTO `goodslist` VALUES ('15', '../img/a15.jpg', '正品法国维克 益口清漱口水 250ml ', '129.00', '134.00', '已售4694瓶', '6282人互动', 'a', '2018-04-06 01:38:00');
INSERT INTO `goodslist` VALUES ('16', '../img/a16.jpg', '正品法国维克 益口清漱口水 250ml ', '234.00', '123.00', '已售1601瓶', '1365人互动', 'a', '2018-04-06 01:40:32');
INSERT INTO `goodslist` VALUES ('17', '../img/a17.jpg', '正品法国维克 益口清漱口水 250ml ', '345.00', '123.00', '已售5247瓶', '6282人互动', 'a', '2018-04-06 01:42:05');
INSERT INTO `goodslist` VALUES ('18', '../img/a18.jpg', '加拿大原装进口Omega Paw 洁耳液120ml', '234.00', '124.40', '已售4694瓶', '1365人互动', 'a', '2018-04-06 01:43:00');
INSERT INTO `goodslist` VALUES ('19', '../img/a19.jpg', '爱纳它ainata 宠物用克痢肽口服液 25ml ', '55.00', '45.00', '已售3209瓶', '830人互动', 'a', '2018-04-06 01:43:45');
INSERT INTO `goodslist` VALUES ('20', '../img/a20.jpg', '美贝 宠物用感冒药惠中感康 10ml/支*10支/盒', '98.00', '80.00', '已售2065盒', '16712人互动', 'a', '2018-04-06 01:44:30');
INSERT INTO `goodslist` VALUES ('21', '../img/a21.jpg', '美国梵特瑞 外耳炎洗耳水 4oz（118.3ml）', '126.00', '108.00', '已售202瓶', '48人互动', 'a', '2018-04-06 01:47:29');
INSERT INTO `goodslist` VALUES ('22', '../img/a22.jpg', '泰国原装进口gre3n 琭力初榨椰子油 450ml', '206.00', '168.00', '已售58罐', '39人互动', 'a', '2018-04-06 01:48:15');
INSERT INTO `goodslist` VALUES ('23', '../img/a23.jpg', '美国原装进口 麦高臣MicrocynAH 宠物神仙水 伤', '123.00', '34.00', '已售1601瓶', '48人互动', 'a', '2018-04-06 01:49:18');
INSERT INTO `goodslist` VALUES ('24', '../img/a24.jpg', '爱纳它ainata 宠物用克痢肽口服液 25ml ', '234.00', '123.00', '已售3209瓶', '516人互动', 'a', '2018-04-06 01:49:51');
INSERT INTO `goodslist` VALUES ('25', '../img/a25.jpg', '加拿大原装进口Omega Paw 洁耳液120ml', '78.00', '46.00', '已售3209瓶', '39人互动', 'a', '2018-04-06 01:50:36');
INSERT INTO `goodslist` VALUES ('26', '../img/a26.jpg', '美国原装进口 麦高臣MicrocynAH 宠物神仙水 伤', '123.00', '56.70', '已售2065盒', '6282人互动', 'a', '2018-04-06 01:51:13');
INSERT INTO `goodslist` VALUES ('27', '../img/a27.jpg', '法国维克 犬 复合酶牙膏 鸡肉味70g', '34.00', '56.00', '已售1601瓶', '6282人互动', 'a', '2018-04-06 01:51:57');
INSERT INTO `goodslist` VALUES ('28', '../img/a28.jpg', '美国原装进口 麦高臣MicrocynAH 宠物神仙水 伤', '345.00', '789.00', '已售1601瓶', '16712人互动', 'a', '2018-04-06 01:57:07');
INSERT INTO `goodslist` VALUES ('29', '../img/a29.jpg', '爱纳它ainata 宠物用克痢肽口服液 25ml ', '456.00', '789.00', '已售5247瓶', '516人互动', 'a', '2018-04-06 01:53:11');
INSERT INTO `goodslist` VALUES ('30', '../img/a30.jpg', '美国梵特瑞 外耳炎洗耳水 4oz（118.3ml）', '45.00', '55.00', '已售5247瓶', '1365人互动', 'a', '2018-04-06 01:53:44');
INSERT INTO `goodslist` VALUES ('31', '../img/a31.jpg', '法国维克 犬 复合酶牙膏 鸡肉味70g', '123.00', '56.00', '已售1601瓶', '1365人互动', 'a', '2018-04-06 01:54:20');
INSERT INTO `goodslist` VALUES ('32', '../img/a32.jpg', '加拿大原装进口Omega Paw 洁耳液120m', '77.00', '34.00', '已售202瓶', '48人互动', 'a', '2018-04-06 01:54:55');
INSERT INTO `goodslist` VALUES ('33', '../img/a33.jpg', '法国维克 犬 复合酶牙膏 鸡肉味70g', '108.00', '122.00', '已售4694瓶', '1365人互动', 'a', '2018-04-06 01:55:55');
INSERT INTO `goodslist` VALUES ('34', '../img/a34.jpg', '美贝 宠物用感冒药惠中感康 10ml/支*10支/盒', '190.00', '156.00', '已售58罐', '516人互动', 'a', '2018-04-06 01:56:33');
INSERT INTO `goodslist` VALUES ('35', '../img/a35.jpg', '法国维克 犬 复合酶牙膏 鸡肉味70g', '200.00', '123.00', '已售1601瓶', '1365人互动', 'a', '2018-04-06 01:57:25');
INSERT INTO `goodslist` VALUES ('36', '../img/a36.jpg', '加拿大原装进口Omega Paw 洁耳液120m', '567.00', '129.00', '已售202瓶', '6282人互动', 'a', '2018-04-06 01:58:07');
INSERT INTO `goodslist` VALUES ('37', '../img/e1.jpg', '谷登GOLDEN 犬用益生菌进口菌源5gx5袋/盒 ', '19.50', '39.00', null, null, 'e', '2018-04-10 20:29:15');
INSERT INTO `goodslist` VALUES ('38', '../img/e2.jpg', '雷米高 驱虫一粒清 0.2g*4片 ', '12.50', '12.50', null, null, 'e', '2018-04-10 20:29:26');
INSERT INTO `goodslist` VALUES ('39', '../img/e3.jpg', '台湾Amycarol 狗狗玩具 风味洁牙棉绳系列 起司味 20cm*4.8cm ', '2.50', '5.00', null, null, 'e', '2018-04-10 20:30:15');
INSERT INTO `goodslist` VALUES ('40', '../img/e4.jpg', '顽皮Wanpy 醇香牛肉棒 400g ', '8.40', '16.80', null, null, 'e', '2018-04-10 20:31:43');
INSERT INTO `goodslist` VALUES ('41', '../img/e5.jpg', '贝尔思味特 蔬菜营养卷棒 240g ', '14.00', '28.00', null, null, 'e', '2018-04-10 20:31:45');
INSERT INTO `goodslist` VALUES ('42', '../img/e6.jpg', '亚禾 30支装混合口味洁齿磨牙棒270g 单支9g*7cm ', '9.90', '19.80', null, null, 'e', '2018-04-10 20:32:24');
INSERT INTO `goodslist` VALUES ('43', '../img/e7.jpg', '宝路 成犬 牛肉妙鲜包 100g*12袋装 ', '19.95', '39.90', null, null, 'e', '2018-04-10 20:32:54');
INSERT INTO `goodslist` VALUES ('44', '../img/e4.jpg', '雷米高 驱虫一粒清 0.2g*4片 ', '12.00', '4.00', null, null, 'e', '2018-04-10 20:33:25');
INSERT INTO `goodslist` VALUES ('45', '../img/e5.jpg', '宝路 成犬 牛肉妙鲜包 100g*12袋装 ', '45.00', '34.00', null, null, 'e', '2018-04-10 20:33:54');
INSERT INTO `goodslist` VALUES ('46', '../img/e3.jpg', '顽皮Wanpy 醇香牛肉棒 400g ', '19.90', '12.30', null, null, 'e', '2018-04-10 20:34:24');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'ww', '123456');
INSERT INTO `user` VALUES ('2', 'xx', '234345435');
INSERT INTO `user` VALUES ('3', 'lao', '234243');
INSERT INTO `user` VALUES ('4', '123', 'd1c07866d71dc3a09b3b692d0a2086b4');
INSERT INTO `user` VALUES ('5', 'www', '224e374e047127efa3b1e5ec6f66aaac');
INSERT INTO `user` VALUES ('6', 'eee', '46310eb402e184bb757862862f12606a');
INSERT INTO `user` VALUES ('7', 'asdasasdas', 'f1cf78e0ba9acd143c5a70df995544e5');
INSERT INTO `user` VALUES ('8', 'sdad', 'c99a11a53a3748269e3f86d7ac38df11');
INSERT INTO `user` VALUES ('9', 'qweqwew', '588369ffeafb870dfead8786f57cdd72');
INSERT INTO `user` VALUES ('10', '2131313213', '97e745fe61235066e36bcf648de4c70e');
INSERT INTO `user` VALUES ('11', '张三', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('12', 'ee', '25d55ad283aa400af464c76d713c07ad');
INSERT INTO `user` VALUES ('13', 'qwe', '25d55ad283aa400af464c76d713c07ad');
INSERT INTO `user` VALUES ('14', 'rrr', '25d55ad283aa400af464c76d713c07ad');
INSERT INTO `user` VALUES ('15', 'qqq', '25d55ad283aa400af464c76d713c07ad');
INSERT INTO `user` VALUES ('16', 'ddd', '25d55ad283aa400af464c76d713c07ad');
INSERT INTO `user` VALUES ('17', 'ttt', '25d55ad283aa400af464c76d713c07ad');
INSERT INTO `user` VALUES ('18', 'ccc', '25d55ad283aa400af464c76d713c07ad');
INSERT INTO `user` VALUES ('19', 'vvvv', '25d55ad283aa400af464c76d713c07ad');
INSERT INTO `user` VALUES ('79', 'JK', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('78', 'DF', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('77', 'xc', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('76', 'SDSFD', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('75', 'QWEWQE', '164086169cadb43af4cfd229dee27072');
INSERT INTO `user` VALUES ('74', 'XCVXV', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('73', 'RTRT', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('72', 'qweqwe', 'b0c7792a583d1cf39737956766ca46c2');
INSERT INTO `user` VALUES ('71', '123213', '8542516f8870173d7d1daba1daaaf0a1');
INSERT INTO `user` VALUES ('70', '13321', '4297f44b13955235245b2497399d7a93');
INSERT INTO `user` VALUES ('69', 'QWEWEW', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('68', 'qwew', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('67', '123123', 'ae6e334f62fb5d989398deed87568c94');
INSERT INTO `user` VALUES ('66', '12321', 'd1c07866d71dc3a09b3b692d0a2086b4');
INSERT INTO `user` VALUES ('65', '13123', '786e861aa22a8b54168dc8c73484d501');
INSERT INTO `user` VALUES ('60', 'qweqe', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('61', 'wert', 'ae6e334f62fb5d989398deed87568c94');
INSERT INTO `user` VALUES ('62', 'rty', '25f9e794323b453885f5181f1b624d0b');
INSERT INTO `user` VALUES ('63', '12312332', '8f9cf3f5789e16124f38936954a98668');
INSERT INTO `user` VALUES ('64', '3123123', 'f7e0ef389ac6133c88aedbd66b44a4e1');
SET FOREIGN_KEY_CHECKS=1;

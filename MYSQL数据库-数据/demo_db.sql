/*
 Navicat Premium Data Transfer

 Source Server         : demo_connection
 Source Server Type    : MySQL
 Source Server Version : 80034
 Source Host           : localhost:3306
 Source Schema         : demo_db

 Target Server Type    : MySQL
 Target Server Version : 80034
 File Encoding         : 65001

 Date: 10/09/2023 21:24:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `level` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `roleName` int NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------

-- ----------------------------
-- Table structure for t_products
-- ----------------------------
DROP TABLE IF EXISTS `t_products`;
CREATE TABLE `t_products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `price` double NULL DEFAULT 0,
  `publishTime` datetime NULL DEFAULT NULL,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `title`(`title` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_products
-- ----------------------------
INSERT INTO `t_products` VALUES (8, 'iPhone14 pro', '跳水价5999', 6999.9, '2022-09-10 00:00:00', '2023-09-10 17:55:12');
INSERT INTO `t_products` VALUES (9, 'iPhone14', '跳楼价6999', 5999, '2022-09-10 00:00:00', '2023-09-10 17:55:52');

-- ----------------------------
-- Table structure for t_users
-- ----------------------------
DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users`  (
  `id` bigint NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `level` int NULL DEFAULT 0,
  `telPhone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE,
  UNIQUE INDEX `telPhone`(`telPhone` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_users
-- ----------------------------
INSERT INTO `t_users` VALUES (1, 'ikun', 18, '13200000000', NULL);

-- ----------------------------
-- Table structure for test_products
-- ----------------------------
DROP TABLE IF EXISTS `test_products`;
CREATE TABLE `test_products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` double NOT NULL,
  `score` decimal(2, 1) NULL DEFAULT NULL,
  `voteCnt` int NULL DEFAULT NULL,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of test_products
-- ----------------------------
INSERT INTO `test_products` VALUES (1, '苹果', '苹果7(全网通)', 999, 6.7, 123, 'https://www.baidu.com', 1185512);
INSERT INTO `test_products` VALUES (2, '苹果', '苹果7s(全网通)', 1299, 7.1, 462, 'https://www.baidu.com', 1185513);
INSERT INTO `test_products` VALUES (3, '苹果', '苹果7s plus(全网通)', 1599, 8.7, 135, 'https://www.baidu.com', 1185514);
INSERT INTO `test_products` VALUES (4, '苹果', '苹果8(全网通)', 1899, 5.7, 185, 'https://www.baidu.com', 1185515);
INSERT INTO `test_products` VALUES (5, '苹果', '苹果8s(全网通)', 2199, 4.5, 175, 'https://www.baidu.com', 1185516);
INSERT INTO `test_products` VALUES (6, '苹果', '苹果8s plus(全网通)', 2499, 6.2, 127, 'https://www.baidu.com', 1185517);
INSERT INTO `test_products` VALUES (7, '苹果', '苹果x(全网通)', 2899, 7.8, 555, 'https://www.baidu.com', 1185518);
INSERT INTO `test_products` VALUES (8, '苹果', '苹果xr(全网通)', 3199, 9.0, 542, 'https://www.baidu.com', 1185519);
INSERT INTO `test_products` VALUES (9, '苹果', '苹果xs(全网通)', 3499, 2.2, 347, 'https://www.baidu.com', 1185520);
INSERT INTO `test_products` VALUES (10, '苹果', '苹果xs max(全网通)', 3799, 8.8, 135, 'https://www.baidu.com', 1185521);
INSERT INTO `test_products` VALUES (11, '苹果', '苹果11(全网通)', 4099, 6.4, 122, 'https://www.baidu.com', 1185522);
INSERT INTO `test_products` VALUES (12, '苹果', '苹果11 pro(全网通)', 4399, 4.5, 128, 'https://www.baidu.com', 1185523);
INSERT INTO `test_products` VALUES (13, '苹果', '苹果11 pro max(全网通)', 4699, 9.5, 642, 'https://www.baidu.com', 1185524);
INSERT INTO `test_products` VALUES (14, '苹果', '苹果12(全网通)', 4999, 2.2, 185, 'https://www.baidu.com', 1185525);
INSERT INTO `test_products` VALUES (15, '苹果', '苹果12 pro(全网通)', 5399, 4.6, 344, 'https://www.baidu.com', 1185526);
INSERT INTO `test_products` VALUES (16, '苹果', '苹果12 pro max(全网通)', 5699, 7.8, 28, 'https://www.baidu.com', 1185527);
INSERT INTO `test_products` VALUES (17, '苹果', '苹果13(全网通)', 5999, 8.5, 18, 'https://www.baidu.com', 1185528);
INSERT INTO `test_products` VALUES (18, '苹果', '苹果13 pro(全网通)', 6299, 6.6, 44, 'https://www.baidu.com', 1185529);
INSERT INTO `test_products` VALUES (19, '苹果', '苹果13 pro max(全网通)', 6599, 8.0, 142, 'https://www.baidu.com', 1185530);
INSERT INTO `test_products` VALUES (20, '苹果', '苹果14(全网通)', 6999, 9.9, 102, 'https://www.baidu.com', 1185531);

SET FOREIGN_KEY_CHECKS = 1;

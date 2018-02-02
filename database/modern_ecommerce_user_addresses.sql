-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: modern_ecommerce
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user_addresses`
--

DROP TABLE IF EXISTS `user_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_addresses` (
  `adress_id` int(11) NOT NULL AUTO_INCREMENT,
  `adress` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fax` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`adress_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_addresses`
--

LOCK TABLES `user_addresses` WRITE;
/*!40000 ALTER TABLE `user_addresses` DISABLE KEYS */;
INSERT INTO `user_addresses` VALUES (1,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','11cdf7ff65cb48e9bceb5236edf27326',0),(2,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','f0f21e63a66444feaa0e2ebdd7368a15',0),(3,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','dc717a6d1334457a931ee64a94229826',0),(4,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','c2bc7836bc4c4eb1a9c495e9fd0eac4e',0),(5,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','17351369cb2d43e9b2f6689e509d2adf',0),(6,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','f92ba917cbbd442696698ae4412e91d8',0),(7,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','e938c94eaa07419295b2f73162b5b2b5',0),(8,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','c396ada6d7944046bbb4f0d8cc872c3e',0),(9,'Nhi?u hoa, trái, cây l? ph?c v? t?t','Ha noi','vietnam','124324234','097896249','0a4a7c9973e94f4b96604c11838a5fee',0);
/*!40000 ALTER TABLE `user_addresses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-02 17:23:51

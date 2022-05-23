-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: app
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctrine_migration_versions`
--

LOCK TABLES `doctrine_migration_versions` WRITE;
/*!40000 ALTER TABLE `doctrine_migration_versions` DISABLE KEYS */;
INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES ('DoctrineMigrations\\Version20220324182121','2022-03-24 18:21:37',1934),('DoctrineMigrations\\Version20220324182215','2022-03-24 18:24:49',15),('DoctrineMigrations\\Version20220324182440','2022-03-24 18:24:49',16),('DoctrineMigrations\\Version20220324183438','2022-03-24 18:34:46',300),('DoctrineMigrations\\Version20220324183544','2022-03-24 18:35:46',494),('DoctrineMigrations\\Version20220324183626','2022-03-24 18:36:27',631),('DoctrineMigrations\\Version20220324183717','2022-03-24 18:37:23',46),('DoctrineMigrations\\Version20220324183836','2022-03-24 18:38:38',15),('DoctrineMigrations\\Version20220426134814','2022-04-26 13:48:25',330),('DoctrineMigrations\\Version20220426144027','2022-04-26 14:40:36',88),('DoctrineMigrations\\Version20220428174911','2022-04-28 17:49:21',193),('DoctrineMigrations\\Version20220428181316','2022-04-28 18:13:23',756),('DoctrineMigrations\\Version20220428181718','2022-04-28 18:17:22',34);
/*!40000 ALTER TABLE `doctrine_migration_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `headers` longtext CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `queue_name` varchar(190) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messenger_messages`
--

LOCK TABLES `messenger_messages` WRITE;
/*!40000 ALTER TABLE `messenger_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messenger_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price`
--

DROP TABLE IF EXISTS `price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shop_id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_CAC822D94D16C4DD` (`shop_id`),
  KEY `IDX_CAC822D94584665A` (`product_id`),
  CONSTRAINT `FK_CAC822D94584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `FK_CAC822D94D16C4DD` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price`
--

LOCK TABLES `price` WRITE;
/*!40000 ALTER TABLE `price` DISABLE KEYS */;
INSERT INTO `price` (`id`, `shop_id`, `product_id`, `price`) VALUES (1,7,61,1.51),(2,7,62,3.99),(3,7,63,3.79),(4,7,64,2.65),(5,7,65,3.79),(6,7,66,3.38),(7,7,67,1.83),(8,7,68,4.61),(9,7,69,1.39),(10,7,70,2.15),(11,7,71,2.59),(12,7,72,4.25),(13,7,73,1.83),(14,7,74,0.99),(15,7,75,1.4),(16,7,76,2.99),(17,7,77,1.79),(18,7,78,3.69),(19,7,79,2.17),(20,7,80,2.39),(21,7,81,2.59),(22,7,82,1.4),(23,7,83,2.29),(24,7,84,3.49),(25,7,85,2.64),(26,7,86,2.75),(27,7,87,0.99),(28,7,88,5.29),(29,7,89,1.19),(30,7,90,4.03),(31,8,61,3.02),(32,8,62,7.98),(33,8,63,7.58),(34,8,64,5.3),(35,8,65,7.58),(36,8,66,6.76),(37,8,67,3.66),(38,8,68,9.22),(39,8,69,2.78),(40,8,70,4.3),(41,8,71,5.18),(42,8,72,8.5),(43,8,73,3.66),(44,8,74,1.98),(45,8,75,2.8),(46,8,76,5.98),(47,8,77,3.58),(48,8,78,7.38),(49,8,79,4.34),(50,8,80,4.78),(51,8,81,5.18),(52,8,82,2.8),(53,8,83,4.58),(54,8,84,6.98),(55,8,85,5.28),(56,8,86,5.5),(57,8,87,1.98),(58,8,88,10.58),(59,8,89,2.38),(60,8,90,8.06),(61,9,61,2.265),(62,9,62,5.985),(63,9,63,5.68),(64,9,64,3.97),(65,9,65,5.68),(66,9,66,5.07),(67,9,67,2.745),(68,9,68,6.91),(69,9,69,2.085),(70,9,70,3.22),(71,9,71,3.885),(72,9,72,6.375),(73,9,73,2.745),(74,9,74,1.48),(75,9,75,2.09),(76,9,76,4.485),(77,9,77,2.685),(78,9,78,5.535),(79,9,79,3.255),(80,9,80,3.585),(81,9,81,3.885),(82,9,82,2.09),(83,9,83,3.435),(84,9,84,5.235),(85,9,85,3.96),(86,9,86,4.125),(87,9,87,1.48),(88,9,88,7.93),(89,9,89,1.785),(90,9,90,6.045);
/*!40000 ALTER TABLE `price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `name`, `image`) VALUES (61,'BANANA EXTRA 4 UNIDADES 800G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190675.jpg'),(62,'NARANJA \"TORRES\" BOLSA 2 KG','https://static.condisline.com/resize_190x200/images/catalog/large/190576.jpg'),(63,'PLÁTANO DE CANARIAS FLOW PACK 1000G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190679.jpg'),(64,'TARRINA DE FRESAS 500 G','https://static.condisline.com/resize_190x200/images/catalog/large/190231.jpg'),(65,'UVA BLANCA  SIN PEPITAS 500 G','https://static.condisline.com/resize_190x200/images/catalog/large/190338.jpg'),(66,'PIÑA DEL MONTE 2 KG APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190672.jpg'),(67,'MANZANA FUJI NACIONAL 4 UNIDADES 800G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190537.jpg'),(68,'NARANJA DE MESA TORRES 4 UNIDADES 1400G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190572.jpg'),(69,'MANDARINA CLEMENTINA 8 UNIDADES 700 G','https://static.condisline.com/resize_190x200/images/catalog/large/190154.jpg'),(70,'NARANJA DE MESA CONDIS 4 UNIDADES 1200G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190589.jpg'),(71,'PLATANO DE CANARIAS PREMIUM 4 UNIDADES 650G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190267.jpg'),(72,'KIWI AMARILLO 4 UNIDADES 500G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190439.jpg'),(73,'PERA CONFERENCIA IMPORTACIÓN 4 UNIDADES 800G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190655.jpg'),(74,'ARÁNDANOS  BANDEJA 125 G','https://static.condisline.com/resize_190x200/images/catalog/large/190088.jpg'),(75,'CIRUELA ROJA 4 UNIDADES 500G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190112.jpg'),(76,'MANDARINA \"TORRES\" EXTRA 4 UNIDADES 600G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190525.jpg'),(77,'MANDARINA TORRES BOLSA 1KG','https://static.condisline.com/resize_190x200/images/catalog/large/190397.jpg'),(78,'PLÁTANO DE CANARIAS 6 UNIDADES 1000G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190677.jpg'),(79,'PERA CONFERENCIA RINCON DE SOTO 4 UNIDADES 750G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190182.jpg'),(80,'NARANJA PARA ZUMO CONDIS BOLSA 2 KG','https://static.condisline.com/resize_190x200/images/catalog/large/190577.jpg'),(81,'MANZANA GOLDEN MARLENE 4 UNIDADES 1 KG APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190532.jpg'),(82,'CIRUELA AMARILLA 4 UNIDADES 500G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190113.jpg'),(83,'MANZANA ROYAL GALA IMPORTACIÓN 4 UNIDADES 1 KG APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190539.jpg'),(84,'MANZANA PINK LADY 4 UNIDADES 1 KG APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190541.jpg'),(85,'AGUACATE 2 UNIDADES 400G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190015.jpg'),(86,'KIWI ZESPRI 4 UNIDADES 500G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190003.jpg'),(87,'LIMÓN  BOLSA 500 G','https://static.condisline.com/resize_190x200/images/catalog/large/190299.jpg'),(88,'FRESON PREMIUM CAJA 1 KG','https://static.condisline.com/resize_190x200/images/catalog/large/190284.jpg'),(89,'MANZANA GOLDEN 4 UNIDADES 800G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190530.jpg'),(90,'MANGO 1 UNIDAD 450G APROX.','https://static.condisline.com/resize_190x200/images/catalog/large/190527.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` (`id`, `name`) VALUES (7,'Mercadona'),(8,'Condis'),(9,'Carrefour');
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-20 17:29:30

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-09-2023 a las 01:54:15
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `foro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posteos`
--

DROP TABLE IF EXISTS `posteos`;
CREATE TABLE IF NOT EXISTS `posteos` (
  `id_posteo` int NOT NULL AUTO_INCREMENT,
  `titulo_posteo` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `posteo` text COLLATE utf8mb4_general_ci NOT NULL,
  `url_posteo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_posteo` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_posteo`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posteos`
--

INSERT INTO `posteos` (`id_posteo`, `titulo_posteo`, `posteo`, `url_posteo`, `fecha_posteo`) VALUES
(1, 'primero', 'cargado desde la base', 'https://th.bing.com/th/id/OIP.VWN3Sak6bbCBljg_0hrbQQHaHa?pid=ImgDet&rs=1', '2023-09-14 14:51:53'),
(8, 'el orden??', 'en que orden me pones?', 'https://th.bing.com/th/id/OIP.JFXRKeToUxEJrhJIDelQXQHaNK?pid=ImgDet&rs=1', '0000-00-00 00:00:00'),
(7, 'estoy cansada', 'me estoy cansando que no funque', 'https://th.bing.com/th/id/OIP.JFXRKeToUxEJrhJIDelQXQHaNK?pid=ImgDet&rs=1', '0000-00-00 00:00:00'),
(6, 'aca estamos todavia', 'arreglo una cosa y se rompe otra', 'https://th.bing.com/th/id/OIP.JFXRKeToUxEJrhJIDelQXQHaNK?pid=ImgDet&rs=1', '0000-00-00 00:00:00'),
(9, '?????', 'ya no se', 'https://th.bing.com/th/id/OIP.JFXRKeToUxEJrhJIDelQXQHaNK?pid=ImgDet&rs=1', '0000-00-00 00:00:00'),
(10, 'y ahora?', ':(:(:(', 'https://th.bing.com/th/id/OIP.JFXRKeToUxEJrhJIDelQXQHaNK?pid=ImgDet&rs=1', '0000-00-00 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

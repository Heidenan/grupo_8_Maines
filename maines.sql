-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-03-2022 a las 21:16:31
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1
-- DROP - CREATE - USE 

DROP DATABASE IF EXISTS `maines`;
CREATE DATABASE  `maines`;
USE DATABASE `maines`;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `maines`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Panificados'),
(2, 'Alimentos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` bigint(20) NOT NULL,
  `offert` tinyint(1) NOT NULL,
  `image` varchar(255) NOT NULL,
  `discount` int(11) NOT NULL,
  `discountValue` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `offert`, `image`, `discount`, `discountValue`, `category_id`) VALUES
(2, 'Ensalada de salmon ahumado', '¡Producto nuevo!', 500, 0, '/images/ensalada-salmon.jpeg', 15, 425, 2),
(3, 'Ensalada primavera modificada', '¡La mejor ensalada para la mejor temporada!', 650, 0, '/images/ensalada-primavera.jpeg', 0, 650, 2),
(4, 'Pan negro MODI', '100% salvado con 0% grasas trans', 400, 0, '/images/pan-negro.jpeg', 0, 650, 1),
(5, 'Tarta de verdura', '¡2x1 por tiempo limitado!', 400, 0, '/images/tarta-verdura.jpeg', 0, 450, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `userName`, `password`, `isAdmin`, `isActive`, `avatar`) VALUES
(1, 'Lucas', 'Goni', 'lucas.rgoni@gmail.com', 'LucasRG', '1234L!', 0, 1, 'avatar-1645223316892.jpg'),
(2, 'Julian', 'Bradach', 'julibradach@maines.com', 'JuliB', '1234J!', 1, 1, 'avatar-1645223316892.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categorie` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

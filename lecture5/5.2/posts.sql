-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 02 2018 г., 17:08
-- Версия сервера: 5.6.38
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `posts`
--

-- --------------------------------------------------------

--
-- Структура таблицы `poststable`
--

CREATE TABLE `poststable` (
  `id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `desc` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `poststable`
--

INSERT INTO `poststable` (`id`, `title`, `desc`) VALUES
(8, 'asda', 'asd'),
(9, 'asda', 'asd'),
(10, 'asdasd', 'asdasd'),
(11, 'dfgd', 'fgdfgdfg'),
(12, 'dfgd', 'fgdfgdfg'),
(13, 'dfgd', 'fgdfgdfg'),
(14, 'dfgd', 'fgdfgdfg'),
(15, 'dfgd', 'fgdfgdfg'),
(16, 'dfgd', 'fgdfgdfg'),
(17, 'dfgd', 'fgdfgdfg'),
(18, 'asdasd', 'asdasd'),
(19, 'asd', 'asd'),
(20, 'asdasd', 'asdasd'),
(21, 'asda', 'dasdasd'),
(22, 'фівфів', 'фівфівфівфів'),
(23, 'фівфів', 'фівфівфівфів'),
(24, 'asdasd', 'asdasd'),
(25, 'asdasd', 'asdasd'),
(26, 'asdasd', 'asdasd'),
(27, 'asdasd', 'asdasd'),
(28, 'asdasd', 'asdasd'),
(29, 'asdasd', 'dasdasdasd'),
(30, 'asdasd', 'dasdasdasd'),
(31, 'asdasd', 'dasdasdasd'),
(32, 'asdasd', 'dasdasdasd'),
(33, 'asdasd', 'asdads'),
(34, 'asdasd', 'asdads'),
(35, 'asdasd', 'asdads'),
(36, 'asdasd', 'asdads'),
(37, 'asdasd', 'asdads'),
(38, 'asd', 'asd'),
(39, 'asd', 'asd'),
(40, 'asdasd', 'asdasd'),
(41, 'asdasd', 'asdasd'),
(42, 'asdasd', 'asdasd'),
(43, 'asdasd', 'asdasd'),
(44, 'sdfs', 'fsdfsdf'),
(45, 'asdasd', 'asdasd'),
(46, 'asdasd', 'asdasdasdadsa'),
(47, 'asdasd', 'asdasdasdadsa'),
(48, 'asdasd', 'asdasdasdadsa'),
(49, 'asda', 'asdasd'),
(50, 'asdasd', 'asdasd'),
(51, 'asdasd', 'asdasd'),
(52, 'asdasd', 'asdasdasd'),
(53, 'asdas', 'dasdasdasd'),
(54, 'sfsdfs', 'fsdfsdf'),
(55, 'asdasdasd', 'asdasd'),
(56, 'asdasd', 'asdasdad'),
(57, 'asdasdad', 'sadasd'),
(58, 'asdasd', 'asdasd'),
(59, 'фівфівф', 'івфівфівфів'),
(60, 'птапра', 'апрапрапр');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `poststable`
--
ALTER TABLE `poststable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `poststable`
--
ALTER TABLE `poststable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

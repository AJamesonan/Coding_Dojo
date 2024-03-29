-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema recipes_schema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema recipes_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `recipes_schema` DEFAULT CHARACTER SET utf8mb3 ;
USE `recipes_schema` ;

-- -----------------------------------------------------
-- Table `recipes_schema`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipes_schema`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(80) NOT NULL,
  `last_name` VARCHAR(80) NOT NULL,
  `email` VARCHAR(90) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() on update NOW(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `recipes_schema`.`recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipes_schema`.`recipes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `under_30` TINYTEXT NULL DEFAULT NULL,
  `posted_by` VARCHAR(100) NOT NULL,
  `description` VARCHAR(205) NULL DEFAULT NULL,
  `instructions` MEDIUMTEXT NULL DEFAULT NULL,
  `date_cooked` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_id`),
  INDEX `fk_recipes_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_recipes_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `recipes_schema`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

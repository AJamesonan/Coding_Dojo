-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema car_deal_schema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema car_deal_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `car_deal_schema` DEFAULT CHARACTER SET utf8mb3 ;
USE `car_deal_schema` ;

-- -----------------------------------------------------
-- Table `car_deal_schema`.`sellers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_deal_schema`.`sellers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(80) NOT NULL,
  `last_name` VARCHAR(80) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `car_deal_schema`.`cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_deal_schema`.`cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` FLOAT NOT NULL,
  `model` VARCHAR(80) NOT NULL,
  `year` INT NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sellers_id` INT NOT NULL,
  PRIMARY KEY (`id`, `sellers_id`),
  INDEX `fk_cars_sellers_idx` (`sellers_id` ASC) VISIBLE,
  CONSTRAINT `fk_cars_sellers`
    FOREIGN KEY (`sellers_id`)
    REFERENCES `car_deal_schema`.`sellers` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

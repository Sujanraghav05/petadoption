create database petpal;
use petpal;
show tables;
select * from adoptions;
select * from admins;
DELETE FROM admins;
DELETE FROM adoptions;
-- Create database if not exists
CREATE DATABASE IF NOT EXISTS petpal;
USE petpal;

-- Check tables
SHOW TABLES;
set sql_safe_updates = 0;
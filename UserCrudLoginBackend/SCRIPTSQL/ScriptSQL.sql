create schema if not exists usercrudlogin;
use usercrudlogin;

insert into user (id, country, email, first_name, last_name, password, username) values (1, 'Paises Bajos', 'prueba@gmail.com', 'Max', 'Verstappen', '$2a$10$T8Woq6Lj8kzpioYdzdQSU.j/neq6wXmGDIt363Tl57q04dZwsFwe.','maxvers');
insert into user (id, country, email, first_name, last_name, password, username) values (2, 'Reino Unido', 'prue1ba@gmail.com', 'Lewis', 'Hamilton', '$2a$10$T8Woq6Lj8kzpioYdzdQSU.j/neq6wXmGDIt363Tl57q04dZwsFwe.','lewisham');
insert into user (id, country, email, first_name, last_name, password, username) values (3, 'Espania', 'prueb2a@gmail.com', 'Fernando', 'Alonso', '$2a$10$T8Woq6Lj8kzpioYdzdQSU.j/neq6wXmGDIt363Tl57q04dZwsFwe.','feralonso');
insert into user (id, country, email, first_name, last_name, password, username) values (4, 'Mexico', 'prueb3a@gmail.com', 'Sergio', 'Perez', '$2a$10$T8Woq6Lj8kzpioYdzdQSU.j/neq6wXmGDIt363Tl57q04dZwsFwe.','serperez');
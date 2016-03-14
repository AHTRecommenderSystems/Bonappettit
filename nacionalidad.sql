create database if not exists Bonappettit;

use Bonappettit;

create table if not exists counter(
	id int not null auto_increment,
	total int not null,
	PRIMARY KEY(id)
);

create table if not exists country(
	id int not null auto_increment,
	name varchar(40) not null,
	PRIMARY KEY(id)
);

insert into country(name) values("Alemania");
insert into country(name) values("Argentina");
insert into country(name) values("Bélgica");
insert into country(name) values("Brasil");
insert into country(name) values("Canadá");
insert into country(name) values("Chile");
insert into country(name) values("China");
insert into country(name) values("Colombia");
insert into country(name) values("Corea del Norte");
insert into country(name) values("Corea del Sur");
insert into country(name) values("Costa Rica");
insert into country(name) values("Croacia");
insert into country(name) values("Ecuador");
insert into country(name) values("España");
insert into country(name) values("Estados Unidos");
insert into country(name) values("Francia");
insert into country(name) values("Grecia");
insert into country(name) values("Guatemala");
insert into country(name) values("Honduras");
insert into country(name) values("Irlanda");
insert into country(name) values("Italia");
insert into country(name) values("Japón");
insert into country(name) values("México");
insert into country(name) values("Noruega");
insert into country(name) values("Nueva Zelanda");
insert into country(name) values("Panamá");
insert into country(name) values("Paraguay");
insert into country(name) values("Perú");
insert into country(name) values("Portugal");
insert into country(name) values("Rumanía");
insert into country(name) values("Rusia");
insert into country(name) values("Suecia");
insert into country(name) values("Suiza");
insert into country(name) values("Tailandia");
insert into country(name) values("Turquía");
insert into country(name) values("Uruguay");
insert into country(name) values("Venezuela");


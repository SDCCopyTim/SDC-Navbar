drop database if exists timcamppg;
create database timcamppg;

\c timcamppg;

drop table if exists locations;
drop table if exists camps;

create table locations
(
  id SERIAL PRIMARY KEY, -- The primary key
  city varchar NOT NULL,
  state varchar NOT NULL
);


create table camps
(
  id SERIAL PRIMARY KEY, -- The primary key
  name varchar NOT NULL,
  type varchar NOT NULL,
  state varchar NOT NULL,
  photo varchar NOT NULL
);

create table inventory(
    product_id serial primary key not null,
    name varchar(40) not null,
    price integer not null,
    imgurl varchar not null
);
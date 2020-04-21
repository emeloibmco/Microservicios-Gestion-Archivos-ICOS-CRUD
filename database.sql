CREATE DATABASE firstapi;

CREATE TABLE projects(
    id_project SERIAL PRIMARY KEY,
    name_project VARCHAR(40),
    description_project VARCHAR(40),
);

INSERT INTO users (name, email) VALUES
    ('joe', 'correo@correo.com'),
    ('maria', 'correomaria.com');

    --SELECT id_proyecto FROM proyecto1 WHERE nombre = 'proyecto de prueba';
--SELECT * FROM public.asset WHERE id_proyecto = 24;
--INSERT INTO public.asset VALUES ( 4 ,20, 'asset demo3');
--SELECT * FROM public.asset WHERE id_proyecto = 24;
DELETE FROM proyecto1 WHERE id_proyecto = 20

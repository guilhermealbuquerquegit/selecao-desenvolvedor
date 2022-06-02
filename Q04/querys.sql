-- ITEM A
SELECT u FROM users u LEFT JOIN groups g on u.id = g.users_id
         WHERE u.created >= '2013-01-01' AND g.id IN (15,40);

-- ITEM C
INSERT  INTO users (login, password, name, created) VALUES ('lary', '123', 'laryssa', '2022-01-04');

UPDATE groups SET users_id = 4 WHERE id IN (20,33);        

-- ITEM D
SELECT DISTINCT u FROM users u
    LEFT JOIN groups g on u.id = g.users_id
    LEFT JOIN permissions p on g.id = p.groups_id
         WHERE p.id IN (55,80,48);

-- ITEM E       
TRUNCATE TABLE groups, migrations, permissions, users;

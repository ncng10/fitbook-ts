CREATE TABLE users
(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_email character varying(255)  NOT NULL,
    user_password character varying(255)NOT NULL,
    user_name character varying(255) NOT NULL,
    CONSTRAINT unique_user_email UNIQUE (user_email),
    CONSTRAINT unique_user_name UNIQUE (user_name)
);


CREATE TABLE nutrition (
    user_id uuid,
    entry_id uuid DEFAULT uuid_generate_v4(),
    entry_calories character varying(255) NOT NULL,
    entry_protein character varying(255) ,
    entry_carbs character varying(255) ,
    entry_fats character varying(255) ,
    CONSTRAINT fk_user_id
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE food (
    user_id uuid,
    food_entry_id uuid DEFAULT uuid_generate_v4(),
    food_name character varying(255),
    food_protein character varying(255) ,
    food_carbs character varying(255) ,
    food_fats character varying(255) ,
    CONSTRAINT fk_user_id
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE groups (
	group_id SERIAL, 
	group_name VARCHAR(255) NOT NULL,
	user_id uuid,
	CONSTRAINT fk_user_id
		FOREIGN KEY(user_id)
			REFERENCES users(user_id)
);
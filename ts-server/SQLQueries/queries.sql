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
    entry_id uuid DEFAULT uuid_generate_v4(),
    entry_calories character varying(255) NOT NULL,
    entry_protein character varying(255) NOT NULL,
    entry_carbs character varying(255) NOT NULL,
    entry_fats character varying(255) NOT NULL,
    CONSTRAINT fk_user_id
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
)
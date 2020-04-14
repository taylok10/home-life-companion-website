DROP TABLE EmailRegistration;

CREATE TABLE EmailRegistration(
	User_Id 	int(10)	NOT NULL	AUTO_INCREMENT,
	Email			VARCHAR(250) NOT NULL,
	PRIMARY KEY (User_Id),
	UNIQUE	(Email)
);
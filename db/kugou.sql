SET NAMES UTF8;
DROP DATABASE IF EXISTS kugou;
CREATE DATABASE kugou CHARSET=UTF8;
USE kugou;
CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(20) UNIQUE,
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16) UNIQUE,
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender INT,
	ctime DATETIME,
	muid INT,
	expire enum('0','1'),
	v1 INT,
	v2 VARCHAR(255)
);
INSERT INTO users VALUES(NULL,'Esther',
md5('123'),'esther@qq.com','13535373749','',
'江江',0,now(),1,'0',0,'');
INSERT INTO users VALUES(NULL,'Lin',md5('123'),'Lin@qq.com','10535373749','','林',1,now(),2,
'0',0,'');
CREATE TABLE banner(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	href VARCHAR(128),
	link VARCHAR(128)
);
INSERT INTO banner VALUES(NULL,'img/index/banner1.jpg','');
INSERT INTO banner VALUES(NULL,'img/index/banner2.jpg','');
INSERT INTO banner VALUES(NULL,'img/index/banner3.jpg','');
INSERT INTO banner VALUES(NULL,'img/index/banner4.jpg','');
INSERT INTO banner VALUES(NULL,'img/index/banner5.jpg','');
INSERT INTO banner VALUES(NULL,'img/index/banner6.jpg','');


#songList TABLE(歌单)
#	 sid,listImg,creater(上传歌单人),mood,updateTime,intro(简介),
CREATE TABLE songList(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	listImg VARCHAR(128),
	ctr DECIMAL(7,1),
	creater VARCHAR(20),
	mood VARCHAR(128),
	updateTime DATETIME,
	intro VARCHAR(128),
	detail VARCHAR(128)
);
INSERT INTO songList VALUES(NULL,'img/index/floor1_left_m0.jpg',45.2,'贵族雪',null,now(),'暧昧中的男女需要一首恋曲催化','呜哇 春天准备到了么?放飞冷了一个季节的心啦，准备好了没？');
INSERT INTO songList VALUES(NULL,'img/index/floor1_left_m1.jpg',56.9,'小龙',null,now(),'爱你不是两三天了 我想和你好好恋爱','呜哇 春天准备到了么?放飞冷了一个季节的心啦，准备好了没？');
INSERT INTO songList VALUES(NULL,'img/index/floor1_left_m2.jpg',27.8,'槿兮',null,now(),'【古风对唱】人生若只如初见','呜哇 春天准备到了么?放飞冷了一个季节的心啦，准备好了没？');
INSERT INTO songList VALUES(NULL,'img/index/floor1_left_m3.jpg',12.8,'飞火FAG',null,now(),'来自于极致激昂的爆燃节奏日语','呜哇 春天准备到了么?放飞冷了一个季节的心啦，准备好了没？');
INSERT INTO songList VALUES(NULL,'img/index/floor1_left_m4.jpg',9.2,'Money',null,now(),'我的茶馆·里面的小恬静','呜哇 春天准备到了么?放飞冷了一个季节的心啦，准备好了没？');

#gequliebiao TABLE()
#	gequId,sid,songName
CREATE TABLE song(
	songId INT PRIMARY KEY AUTO_INCREMENT,
	sid INT,FOREIGN  KEY(sid)  REFERENCES  songlist(sid),
	song VARCHAR(128)
);
INSERT INTO song VALUES(null,1,'张惠妹-母系社会');
INSERT INTO song VALUES(null,1,'Ne-Yo - Miss Independent');
INSERT INTO song VALUES(null,1,'张靓颖 - 我是我的');
INSERT INTO song VALUES(null,1,'蔡依林、安室奈美恵 - I am Not Yours');
INSERT INTO song VALUES(null,1,'张宇 - 大女人');
INSERT INTO song VALUES(null,1,'Colbie Caillat - Try');
INSERT INTO song VALUES(null,1,'杨千嬅 - 烈女');
INSERT INTO song VALUES(null,1,'Beyonce - If I Were a Boy');
INSERT INTO song VALUES(null,1,'Lily Allen - Hard Out Here');
INSERT INTO song VALUES(null,1,'Ciara - One Woman Army');
INSERT INTO song VALUES(null,1,'Lady GaGa - Scheibe');
INSERT INTO song VALUES(null,1,'Beyonce - Single Ladies(Put A Ring On It)');
INSERT INTO song VALUES(null,1,'Jenny Lewis - Just One Of The Guys');
INSERT INTO song VALUES(null,1,'Cher - Woman\'s World');
INSERT INTO song VALUES(null,1,'Idina Menzel - Let It Go');
INSERT INTO song VALUES(null,1,'Jessie J - Do It Like a Dude');
INSERT INTO song VALUES(null,1,'Madonna - What It Feels Like for A Girl');
INSERT INTO song VALUES(null,1,'<i>Alicia Keys - Superwoman</i>');
INSERT INTO song VALUES(null,1,'Beyonce - Grown Woman');
INSERT INTO song VALUES(null,1,'Beyonce、Chimamanda Ngozi Adiche - Flawless');
INSERT INTO song VALUES(null,1,'Destiny\'s Child - Independent Women Part.1');
INSERT INTO song VALUES(null,1,'蔡依林 - 第二性');
INSERT INTO song VALUES(null,1,'Aretha Franklin - Respect');
INSERT INTO song VALUES(null,1,'陈珊妮 - 女王');
INSERT INTO song VALUES(null,1,'Jewel - Stronger Woman');
INSERT INTO song VALUES(null,1,'Beyonce - Run the World (Girls)');
INSERT INTO song VALUES(null,1,'Bob Marley - No Woman, No Cry');
INSERT INTO song VALUES(null,1,'Joss Stone - It S A Man S Man S Man S World');
INSERT INTO song VALUES(null,1,'Gloria Gaynor - I Will Survive');
INSERT INTO song VALUES(null,1,'Christina Aguilera、Lil\' Kim - Can\'t Hold Us Down');
INSERT INTO song VALUES(null,1,'黑撒 - 气管炎男人');
INSERT INTO song VALUES(null,1,'The Pretty Reckless - Hit Me Like A Man');
INSERT INTO song VALUES(null,1,'Grace、G-Eazy - You Don\'t Own Me');
INSERT INTO song VALUES(null,1,'Ashley Roberts - Woman Up');
INSERT INTO song VALUES(null,1,'Madonna - Express Yourself');
INSERT INTO song VALUES(null,1,'Helen Reddy - I Am Woman');

play.html?gequId=1
#
CREATE TABLE pic(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	href VARCHAR(128),
	title VARCHAR(128),
	singer VARCHAR(128),
	detail VARCHAR(225),
	ctime DATETIME,
	muid INT,
	expire enum('0','1'),
	v1 INT,
	v2 VARCHAR(255)
)
INSERT INTO pic VALUES(NULL,'img/index/floor2_right1.jpg','一步之遥','林志颖','这是一首好听的歌',now(),
1,'0',0,'');
#

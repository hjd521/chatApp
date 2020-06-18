image_version=`date +%Y%m%d%H%M`;
echo $image_version;
# cd vue2docker
git pull --rebase origin master;
docker stop vue2docker;
docker rm vue2docker;
docker build -t vue2docker:$image_version .;
docker images;
docker run -p 10003:80 -d --name vue2docker vue2docker:$image_version;
# -v ~/docker-data/house-web/appsettings.json:/app/appsettings.json -v ~/docker-data/house-web/NLogFile/:/app/NLogFile   --restart=always
docker logs vue2docker;
#É¾³ýbuild¹ý³ÌÖÐ²úÉúµÄ¾µÏñ    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)
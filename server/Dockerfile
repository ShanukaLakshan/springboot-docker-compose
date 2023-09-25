FROM openjdk:17-alpine

CMD mvn clean install -DskipTests

ADD target/*.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]

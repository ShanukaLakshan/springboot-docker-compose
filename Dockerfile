FROM openjdk:17-alpine

CMD mvn clean install -DskipTests

ADD target/*.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]


# # Use a Maven base image
# FROM maven:3.8.4-openjdk-17 AS build


# # Set the working directory in the Docker container
# WORKDIR /app

# # Copy the pom.xml file to download dependencies
# COPY pom.xml .

# # Download dependencies as a separate step to leverage Docker cache
# RUN mvn dependency:go-offline

# # Copy the rest of the application
# COPY src ./src

# # Build the application
# RUN mvn clean install -DskipTests

# # Use a lightweight Alpine-based image with OpenJDK 17 for the runtime
# FROM openjdk:17-alpine

# # Set the working directory in the Docker container
# WORKDIR /app

# # Copy the built JAR from the build stage
# COPY --from=build /app/target/*.jar app.jar

# # Set the default command for the container to run your Spring Boot application
# ENTRYPOINT ["java","-jar","app.jar"]

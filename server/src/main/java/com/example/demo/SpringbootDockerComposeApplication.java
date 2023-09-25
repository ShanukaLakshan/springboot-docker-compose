package com.example.demo;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication
// public class SpringbootDockerComposeApplication {

// 	public static void main(String[] args) {
// 		SpringApplication.run(SpringbootDockerComposeApplication.class, args);
// 	}

// }

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@SpringBootApplication
public class SpringbootDockerComposeApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootDockerComposeApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		Employee employee = new Employee();
		employee.setFirstName("Sasindu");
		employee.setLastName("Piumal");
		employee.setEmailId("sadindu@gmail.com");
		employeeRepository.save(employee);
	}
}

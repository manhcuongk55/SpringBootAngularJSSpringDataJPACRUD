package vn.plusplusc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;



@SpringBootApplication(scanBasePackages={"vn.plusplusc"})// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class SpringBootCRUDApp {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootCRUDApp.class, args);
	}
}

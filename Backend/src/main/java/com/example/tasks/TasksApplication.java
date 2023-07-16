package com.example.tasks;

import com.example.tasks.entities.Task;
import com.example.tasks.repository.TasKRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class TasksApplication {

    public static void main(String[] args) {
        SpringApplication.run(TasksApplication.class, args);
    }
    @Bean
    public CommandLineRunner commandLineRunner(TasKRepository tasKRepository) {
        return args -> {

            Task task1 = new Task();
            task1.setName("Build tasks managment app");
            task1.setStartDate(new Date());
            task1.setEndDate(new Date());

            Task task2 = new Task();
            task2.setName("Learn redux");
            task2.setStartDate(new Date());
            task2.setEndDate(new Date());

            Task task3 = new Task();
            task3.setName("Design the app");
            task3.setStartDate(new Date());
            task3.setEndDate(new Date());

            tasKRepository.save(task1);
            tasKRepository.save(task2);
            tasKRepository.save(task3);
        };
    }
}

package com.example.tasks.repository;

import com.example.tasks.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestController
@CrossOrigin("*")
public interface TasKRepository extends JpaRepository<Task,Long> {
}

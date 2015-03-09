package br.com.eits.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.eits.desafio.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {
	
}

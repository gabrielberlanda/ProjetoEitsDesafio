package br.com.eits.desafio.service;

import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import br.com.eits.desafio.entity.Course;
import br.com.eits.desafio.repository.CourseRepository;

@Service
public class CourseService {
	
	@Resource
	private CourseRepository courseRepository;
	
	@Transactional
	public Course create ( Course course ) 
	{
		Course createdCourse = course;
		return courseRepository.save( createdCourse );
	}
	@Transactional
	public Course save ( Course course)
	{
		return courseRepository.save(course);
	}

	@Transactional
	public Course findById ( int id )
	{
		return courseRepository.findOne( id );
	}
	@Transactional
	public Course delete ( int id ) 
	{
		Course deletedCourse = courseRepository.findOne(id); //encontra o curso p/ deletar, deleta e retorna.
		courseRepository.delete(deletedCourse);
		return deletedCourse;
	}
	@Transactional
	public List<Course> findAll (){
		return courseRepository.findAll();
	}
	@Transactional
	public Course update (Course course)
	{
		Course updatedCourse = courseRepository.findOne(course.getId());
		courseRepository.save(updatedCourse);
		return updatedCourse;
	}
	
	
	

}

package br.com.eits.desafio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import br.com.eits.desafio.entity.Course;
import br.com.eits.desafio.entity.Subject;
import br.com.eits.desafio.entity.Usuario;
import br.com.eits.desafio.service.CourseService;
import br.com.eits.desafio.service.SubjectService;
import br.com.eits.desafio.service.UsuarioService;

@Controller
@RestController
public class HomeController {
	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private CourseService courseService;
	@Autowired
	private SubjectService subjectService;
	
	@RequestMapping("/")
	public ModelAndView home() 
	{
		return new ModelAndView("ui/index");
	}
	
	@RequestMapping("/app")
	public ModelAndView menu()
	{
		return new ModelAndView("ui/principal/menu");
	}
	
	
	@RequestMapping("/userList")
	public List<Usuario> userList() {
		List<Usuario> userList = usuarioService.findAll();
		return userList;
	}

	@RequestMapping("/courseList")
	public List<Course> courseList() 
	{
		List<Course> courseList = courseService.findAll();
		return courseList;
	}
	
	@RequestMapping ("/subjectList")
	public List<Subject> subjectList()
	{
		List<Subject> subjectList = subjectService.findAll();
		return subjectList;
	}
	
	@RequestMapping (value="/saveSubject")
	public Subject saveSubject(@RequestBody Subject subject) 
	{
		return subjectService.save(subject);
	}
	
	@RequestMapping (value="/findById")
	public Subject findSubject (@RequestBody int id)
	{
		return subjectService.findById(id);
	}
	
	@RequestMapping (value="/deleteSubject")
	public Subject deleteSubject(@RequestBody Subject subject)
	{
		return subjectService.delete( subject.getId() );
	}
}

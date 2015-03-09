package br.com.eits.desafio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.eits.desafio.service.CourseService;

@Controller
@RequestMapping(value="/course")
public class CourseController {
	@Autowired
	private CourseService courseService;
	
	@RequestMapping(value="/")
	public String index() {
		return "index";
	}

//	@RequestMapping(value="/create", method=RequestMethod.GET)
//	public ModelAndView courseListPage() {
//		ModelAndView mav = new ModelAndView ("course-list");
//		List<Course> courseList = courseService.findAll();
//		mav.addObject("courseList", courseList);
//		return mav;
//	}
//	@RequestMapping(value="/create", method=RequestMethod.POST)
//	public ModelAndView createNewCourse(@ModelAttribute Course course,
//			final RedirectAttributes redirectAttributes){
//		ModelAndView mav = new ModelAndView();
//		String message = "New Course "+course.getName()+" was successfully created.";
//		
//		courseService.create(course);
//		mav.setViewName("redirect:/index.html");
//		
//		redirectAttributes.addFlashAttribute("message",message);
//		return mav;
//	}
	
	
}

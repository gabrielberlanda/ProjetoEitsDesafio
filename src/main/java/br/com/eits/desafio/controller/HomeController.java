package br.com.eits.desafio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import br.com.eits.desafio.entity.Usuario;
import br.com.eits.desafio.service.UsuarioService;

@RestController
public class HomeController {
	@Autowired
	private UsuarioService usuarioService;
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


	
}

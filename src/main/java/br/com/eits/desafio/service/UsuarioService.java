package br.com.eits.desafio.service;

import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import br.com.eits.desafio.entity.Usuario;
import br.com.eits.desafio.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Resource
	public UsuarioRepository usuarioRepository;
	
	@Transactional
	public Usuario create (Usuario usuario)
	{
		Usuario createdUsuario = usuario;
		return usuarioRepository.save(createdUsuario);	
	}
	public Usuario save ( Usuario usuario)
	{
		return usuarioRepository.save(usuario);
	}
	
	@Transactional
	public Usuario findById (int id)
	{
		return usuarioRepository.findOne(id);
	}
	
	@Transactional
	public Usuario delete (int id)	
	{
		Usuario deletedShop = usuarioRepository.findOne(id);
		if (deletedShop == null)
		{
			return deletedShop; // Tratar.
		}
		usuarioRepository.delete(id);
		return deletedShop;
	}
	
	@Transactional 
	public List<Usuario> findAll()
	{
		return usuarioRepository.findAll();
	}
	@Transactional
	public Usuario update (Usuario usuario)
	{
		Usuario updatedUsuario = usuarioRepository.findOne(usuario.getId());
		usuarioRepository.save(updatedUsuario);
		return updatedUsuario;
		
	}
	
}

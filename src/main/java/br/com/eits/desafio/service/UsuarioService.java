package br.com.eits.desafio.service;

import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;
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
		Usuario savedUsuario = usuarioRepository.save(usuario);
			try {
				sendEmail(usuario);
			} catch (EmailException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return 	savedUsuario;
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
	
	public void sendEmail (Usuario usuario) throws EmailException
	{
		Email email = new SimpleEmail();
		email.setHostName("smtp.googlemail.com");
		email.setSmtpPort(465);
		email.setAuthenticator(new DefaultAuthenticator("testedesafioeits@gmail.com", "teste123teste"));
		try {
			email.setSSLOnConnect(true);
			email.setFrom("testedesafioeits@gmail.com");
			
			email.setDebug(true);
			
			email.setSubject("Criação de cadastro");
			email.setMsg("Parabéns \n Seu cadastro foi criado com sucesso!!\n Seu login é: "+usuario.getEmail()+"\n Seu nome de usuário é: "+usuario.getName()+" \n Sua senha é: "+usuario.getPassword()+" .");
			email.addTo(usuario.getEmail());
			email.send();
		} catch (EmailException e){
			e.printStackTrace();
		}
	}
	
}

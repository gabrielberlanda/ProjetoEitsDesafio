package br.com.eits.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.eits.desafio.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> 
{

}

package br.com.eits.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.eits.desafio.entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject , Integer> {

}

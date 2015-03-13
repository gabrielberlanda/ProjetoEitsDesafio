package br.com.eits.desafio.service;

import java.util.List;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.stereotype.Service;

import br.com.eits.desafio.entity.Subject;
import br.com.eits.desafio.repository.SubjectRepository;

@Service
@RemoteProxy(name="subjectService")
public class SubjectService {
	@Resource
	private SubjectRepository subjectRepository;
	
	@Transactional
	public Subject create (Subject subject)
	{
		Subject create = subject;
		return subjectRepository.save(create);
	}
	
	public Subject save (Subject subject)
	{
		return subjectRepository.save(subject);
		
	}
	@Transactional 
	public Subject findById ( int id)
	{
		return subjectRepository.findOne(id);
	}
	
	@Transactional 
	public Subject delete (int id) 
	{
		Subject deletedSubject = subjectRepository.findOne(id);
		if (deletedSubject == null) 
		{
			return deletedSubject;
		}
		subjectRepository.delete(id);
		return deletedSubject;
		
	}
	@Transactional 
	public List<Subject> findAll() 
	{
		return subjectRepository.findAll();
	}
	@Transactional
	public Subject update (Subject subject)
	{
		Subject updatedSubject = subjectRepository.findOne(subject.getId());
		subjectRepository.save(subject);
		return updatedSubject;
	}
	

}

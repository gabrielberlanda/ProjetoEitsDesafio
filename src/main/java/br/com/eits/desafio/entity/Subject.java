package br.com.eits.desafio.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Subject {
	@Id
	@GeneratedValue
	private int id;
	
	@Column( length=35, nullable = false, unique=true )
	
	private String name;

	public Subject(){
		
	}
	public Subject(String name){
		this.name = name;
		
	}

	public int getId(){
		return id;
	}
	
	public String getName(){
		return name;
	}

	public void setId(int id){
		this.id = id;
	}

	public void setName(String name){
		this.name= name;
	}

}
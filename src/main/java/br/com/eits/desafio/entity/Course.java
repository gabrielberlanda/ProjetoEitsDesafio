package br.com.eits.desafio.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Course {
	
	@Id
	@GeneratedValue
	
	private int id;
	@Column( length=35, nullable = false )
	private String name;
	@Column (length=3 , nullable = false )
	private int periods;
	//public Subject m_Subject;

	public Course(){

	}


	public int getId(){
		return id;
	}
	
	public String getName(){
		return name;
	}

	public int getPeriods(){
		return periods;
	}

	public void setId(int id){
		this.id = id;
	}

	public void setName(String name){
		this.name = name;
	}

	public void setPeriods(int periods){
		this.periods = periods;

	}

}
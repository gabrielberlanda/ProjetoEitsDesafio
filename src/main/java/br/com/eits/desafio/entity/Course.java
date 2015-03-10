package br.com.eits.desafio.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Course {

	@Id
	@GeneratedValue
	private int id;
	@Column(length = 35, nullable = false)
	private String name;
	@Column(length = 3, nullable = false)
	private int periods;
	@OneToMany
	public List<Subject> subjects;

	public List<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(List<Subject> subjects) {
		this.subjects = subjects;
	}

	public Course() {

	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getPeriods() {
		return periods;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setPeriods(int periods) {
		this.periods = periods;

	}

}
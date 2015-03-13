package br.com.eits.desafio.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Usuario {

	@Id
	@GeneratedValue
	private int id;
	private int age;
	private String gender;

	@Column(length = 35, nullable = false)
	private String name;
	@Column(length = 35, nullable = false)
	private String userType;
	@Column(length = 50, nullable = false, unique = true)
	private String email;
	@Column(length = 20)
	private String password;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Usuario() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Usuario(int id, int age, String gender, String name,
			String userType, String email) {
		super();
		this.id = id;
		this.age = age;
		this.gender = gender;
		this.name = name;
		this.userType = userType;
		this.email = email;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
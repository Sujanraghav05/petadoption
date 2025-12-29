package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "adoptions")
@Data
public class Adoption {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String email;
  private String phone;
  private String petType;
  private String petName;

  @Column(length = 500)
  private String message;
  private String status;
  private String appointmentDate;
  private String appointmentTime;


  public Long getId() {
	return id;
  }

  public void setId(Long id) {
	this.id = id;
  }

  public String getName() {
	return name;
  }

  public void setName(String name) {
	this.name = name;
  }

  public String getEmail() {
	return email;
  }

  public void setEmail(String email) {
	this.email = email;
  }

  public String getPhone() {
	return phone;
  }

  public void setPhone(String phone) {
	this.phone = phone;
  }

  public String getPetType() {
	return petType;
  }

  public void setPetType(String petType) {
	this.petType = petType;
  }

  public String getPetName() {
	return petName;
  }

  public void setPetName(String petName) {
	this.petName = petName;
  }

  public String getMessage() {
	return message;
  }

  public void setMessage(String message) {
	this.message = message;
  }

  public String getStatus() {
	return status;
  }

  public void setStatus(String status) {
	this.status = status;
  }

  public String getAppointmentDate() {
	return appointmentDate;
  }

  public void setAppointmentDate(String appointmentDate) {
	this.appointmentDate = appointmentDate;
  }

  public String getAppointmentTime() {
	return appointmentTime;
  }

  public void setAppointmentTime(String appointmentTime) {
	this.appointmentTime = appointmentTime;
  }


}
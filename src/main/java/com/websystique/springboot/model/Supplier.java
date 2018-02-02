package com.websystique.springboot.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="suppliers")
public class Supplier implements Serializable{

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long supplier_id;

	@Column(name="company_id", nullable=false)
	private Long company_id;

	@Column(name="description", nullable=false)
	private String description;

	@Column(name="name", nullable=false)
	private String name;
	
	@Column(name="status", nullable=false)
	private Integer status;
	
	@Column(name="address", nullable=false)
	private String address;
	
	@Column(name="image", nullable=false)
	private String image;

	@Column(name="type_id", nullable=false)
	private Long type_id;

	public Long getSupplier_id() {
		return supplier_id;
	}

	public void setSupplier_id(Long supplier_id) {
		this.supplier_id = supplier_id;
	}

	public Long getCompany_id() {
		return company_id;
	}

	public void setCompany_id(Long company_id) {
		this.company_id = company_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Long getType_id() {
		return type_id;
	}

	public void setType_id(Long type_id) {
		this.type_id = type_id;
	}
	
	
}

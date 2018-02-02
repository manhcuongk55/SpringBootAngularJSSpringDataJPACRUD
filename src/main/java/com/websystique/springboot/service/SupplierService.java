package com.websystique.springboot.service;


import com.websystique.springboot.model.Supplier;

import java.util.List;

public interface SupplierService {
	
	Supplier findById(Long id);

	Supplier findByName(String name);

	void savesupplier(Supplier supplier);

	void updatesupplier(Supplier supplier);

	void deletesupplierById(Long id);

	void deleteAllsuppliers();

	List<Supplier> findAllsuppliers();

	boolean issupplierExist(Supplier supplier);
}
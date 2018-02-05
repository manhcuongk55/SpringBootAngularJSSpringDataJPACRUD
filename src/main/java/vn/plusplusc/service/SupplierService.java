package vn.plusplusc.service;


import java.util.List;

import vn.plusplusc.model.Supplier;

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
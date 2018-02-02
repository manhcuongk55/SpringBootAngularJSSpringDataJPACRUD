package com.websystique.springboot.service;

import java.util.List;

import com.websystique.springboot.model.Supplier;
import com.websystique.springboot.repositories.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service("supplierService")
@Transactional
public class SupplierServiceImpl implements SupplierService{

	@Autowired
	private SupplierRepository supplierRepository;

	public Supplier findById(Long id) {
		return supplierRepository.findOne(id);
	}

	public Supplier findByName(String name) {
		return supplierRepository.findByName(name);
	}

	public void savesupplier(Supplier supplier) {
		supplierRepository.save(supplier);
		System.out.println(supplier.getDescription());
	}

	public void updatesupplier(Supplier supplier){
		savesupplier(supplier);
	}

	public void deletesupplierById(Long id){
		supplierRepository.delete(id);
	}

	public void deleteAllsuppliers(){
		supplierRepository.deleteAll();
	}

	public List<Supplier> findAllsuppliers(){
		return supplierRepository.findAll();
	}

	public boolean issupplierExist(Supplier supplier) {
		return findByName(supplier.getName()) != null;
	}

}

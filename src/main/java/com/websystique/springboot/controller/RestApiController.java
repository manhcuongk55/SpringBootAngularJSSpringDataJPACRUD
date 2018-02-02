package com.websystique.springboot.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.websystique.springboot.model.Supplier;
import com.websystique.springboot.service.SupplierService;
import com.websystique.springboot.util.CustomErrorType;

@RestController
@RequestMapping("/api")
public class RestApiController {

	public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

	@Autowired
	SupplierService supplierService; //Service which will do all data retrieval/manipulation work

	// -------------------Retrieve All suppliers---------------------------------------------

	@RequestMapping(value = "/supplier/", method = RequestMethod.GET)
	public ResponseEntity<List<Supplier>> listAllsuppliers() {
		List<Supplier> suppliers = supplierService.findAllsuppliers();
		if (suppliers.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Supplier>>(suppliers, HttpStatus.OK);
	}

	// -------------------Retrieve Single supplier------------------------------------------

	@RequestMapping(value = "/supplier/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getsupplier(@PathVariable("id") long id) {
		logger.info("Fetching supplier with id {}", id);
		Supplier supplier = supplierService.findById(id);
		if (supplier == null) {
			logger.error("supplier with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("supplier with id " + id 
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Supplier>(supplier, HttpStatus.OK);
	}

	// -------------------Create a supplier-------------------------------------------

	@RequestMapping(value = "/supplier/", method = RequestMethod.POST)
	public ResponseEntity<?> createsupplier(@RequestBody Supplier supplier, UriComponentsBuilder ucBuilder) {
		logger.info("Creating supplier : {}", supplier);

		if (supplierService.issupplierExist(supplier)) {
			logger.error("Unable to create. A supplier with name {} already exist", supplier.getName());
			return new ResponseEntity(new CustomErrorType("Unable to create. A supplier with name " + 
			supplier.getName() + " already exist."),HttpStatus.CONFLICT);
		}
		supplierService.savesupplier(supplier);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/supplier/{id}").buildAndExpand(supplier.getSupplier_id()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	// ------------------- Update a supplier ------------------------------------------------

	@RequestMapping(value = "/supplier/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updatesupplier(@PathVariable("id") long id, @RequestBody Supplier supplier) {
		logger.info("Updating supplier with id {}", id);

		Supplier currentsupplier = supplierService.findById(id);

		if (currentsupplier == null) {
			logger.error("Unable to update. supplier with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. supplier with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentsupplier.setName(supplier.getName());
		currentsupplier.setType_id(supplier.getType_id());
		currentsupplier.setAddress(supplier.getAddress());
		currentsupplier.setDescription(supplier.getDescription());
        
		supplierService.updatesupplier(currentsupplier);
		return new ResponseEntity<Supplier>(currentsupplier, HttpStatus.OK);
	}

	// ------------------- Delete a supplier-----------------------------------------

	@RequestMapping(value = "/supplier/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deletesupplier(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting supplier with id {}", id);

		Supplier supplier = supplierService.findById(id);
		if (supplier == null) {
			logger.error("Unable to delete. supplier with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. supplier with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		supplierService.deletesupplierById(id);
		return new ResponseEntity<Supplier>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All suppliers-----------------------------

	@RequestMapping(value = "/supplier/", method = RequestMethod.DELETE)
	public ResponseEntity<Supplier> deleteAllsuppliers() {
		logger.info("Deleting All suppliers");

		supplierService.deleteAllsuppliers();
		return new ResponseEntity<Supplier>(HttpStatus.NO_CONTENT);
	}

}
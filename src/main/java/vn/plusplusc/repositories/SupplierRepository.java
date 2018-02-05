package vn.plusplusc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vn.plusplusc.model.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {

    Supplier findByName(String name);

}

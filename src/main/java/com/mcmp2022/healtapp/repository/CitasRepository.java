package com.mcmp2022.healtapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mcmp2022.healtapp.models.Citas;

@Repository
public interface CitasRepository extends JpaRepository<Citas,Long>{
	
	

}

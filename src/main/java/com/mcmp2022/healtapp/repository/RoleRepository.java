package com.mcmp2022.healtapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mcmp2022.healtapp.models.ERole;
import com.mcmp2022.healtapp.models.Role;

public interface RoleRepository extends JpaRepository <Role, Long> {
	
	Optional<Role> findByName(ERole name);

}

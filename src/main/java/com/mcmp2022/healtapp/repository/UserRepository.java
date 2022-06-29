package com.mcmp2022.healtapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mcmp2022.healtapp.models.User;


@Repository
public interface UserRepository extends JpaRepository <User, Long> {

	Optional<User> findByUsername(String username);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
}

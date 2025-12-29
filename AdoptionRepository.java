package com.example.demo.Repository;

import com.example.demo.Model.Adoption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface AdoptionRepository extends JpaRepository<Adoption, Long> {
}

package com.drillmap.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.drillmap.backend.entities.Dados;

public interface DadosRepository extends JpaRepository<Dados, Integer> {

}
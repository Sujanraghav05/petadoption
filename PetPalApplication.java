package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PetPalApplication {
    public static void main(String[] args) {
        SpringApplication.run(PetPalApplication.class, args);
        System.out.println("✅ PetPal Backend Started on http://localhost:8080");
    }
}
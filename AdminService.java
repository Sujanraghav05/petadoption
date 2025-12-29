package com.example.demo.Service;

import com.example.demo.Model.Admin;
import com.example.demo.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository repository;

    public Admin register(Admin admin) {
        return repository.save(admin);
    }

    public void login(String username, String password) {
        Admin admin = repository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Admin not found"));

        if (!admin.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }
    }
}

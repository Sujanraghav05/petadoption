package com.example.demo.Controller;

import com.example.demo.Model.Admin;
import com.example.demo.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService service;

    // ✅ REGISTER ADMIN
    @PostMapping("/register")
    public Admin register(@RequestBody Admin admin) {
        return service.register(admin);
    }

    // ✅ LOGIN ADMIN
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Admin admin) {

        service.login(admin.getUsername(), admin.getPassword());

        Map<String, String> response = new HashMap<>();
        response.put("token", "admin-auth-token");
        return response;
    }
}

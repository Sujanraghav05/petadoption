package com.example.demo.Controller;

import com.example.demo.Model.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService service;

    // ✅ REGISTER USER
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    // ✅ LOGIN USER
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        User loggedInUser = service.login(user.getUsername(), user.getPassword());

        Map<String, String> response = new HashMap<>();
        response.put("token", "user-auth-token");
        response.put("userId", loggedInUser.getId().toString());
        response.put("username", loggedInUser.getUsername());
        response.put("email", loggedInUser.getEmail());
        return response;
    }

    // ✅ GET USER PROFILE
    @GetMapping("/{id}")
    public User getUserProfile(@PathVariable Long id) {
        return service.getUserById(id);
    }

    // ✅ UPDATE USER PROFILE
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return service.updateUser(id, user);
    }
}

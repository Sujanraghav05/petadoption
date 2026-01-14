package com.example.demo.Service;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User register(User user) {
        // Check if username already exists
        if (repository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        
        // Check if email already exists
        if (repository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        
        return repository.save(user);
    }

    public User login(String username, String password) {
        User user = repository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }
        
        return user;
    }
    
    public User getUserById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
    
    public User updateUser(Long id, User updatedUser) {
        User user = getUserById(id);
        
        // Check if new username is available (if changed)
        if (!user.getUsername().equals(updatedUser.getUsername()) && 
            repository.existsByUsername(updatedUser.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        
        // Check if new email is available (if changed)
        if (!user.getEmail().equals(updatedUser.getEmail()) && 
            repository.existsByEmail(updatedUser.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        
        user.setUsername(updatedUser.getUsername());
        user.setEmail(updatedUser.getEmail());
        user.setPhone(updatedUser.getPhone());
        user.setAddress(updatedUser.getAddress());
        
        // Only update password if provided
        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            user.setPassword(updatedUser.getPassword());
        }
        
        return repository.save(user);
    }
}

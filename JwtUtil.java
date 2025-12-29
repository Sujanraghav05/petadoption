package com.example.demo.Config;

import java.security.Key; 
import java.util.Date; 
import org.springframework.stereotype.Component; 
import io.jsonwebtoken.Jwts; 
import io.jsonwebtoken.security.Keys; 
@Component 
public class JwtUtil { 
	private static final String SECRET = "petpal_secret_key_petpal_secret_key_petpal_secret_key"; 
	private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes()); 
	public String generateToken(String username) { 
		return Jwts.builder() .setSubject(username) 
				.setIssuedAt(new Date()) 
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) 
				.signWith(key) .compact(); 
		} 
	}
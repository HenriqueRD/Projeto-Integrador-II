package com.dordox.dordox.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
public class ConfigSecurity {
	
	@Autowired
	private FilterSecurity filterSecurity;
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.csrf(csrs -> csrs.disable()).authorizeHttpRequests(auth -> {
			auth.requestMatchers("/users/create").permitAll().requestMatchers("/users/auth")
			.permitAll().requestMatchers("/h2-console/**").permitAll();
			auth.anyRequest().authenticated();
		})
		.addFilterBefore(filterSecurity, BasicAuthenticationFilter.class)
		.headers(headers -> headers.frameOptions(frameOptions -> frameOptions.sameOrigin()));
		
		return http.build();
	}

	@Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

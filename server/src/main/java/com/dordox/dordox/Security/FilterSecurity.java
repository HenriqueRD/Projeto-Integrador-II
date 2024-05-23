package com.dordox.dordox.Security;

import java.io.IOException;
import java.util.Collections;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class FilterSecurity extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
		throws ServletException, IOException {
		String header = request.getHeader("Authorization");
		if(header != null) {
			String token = header.replace("Bearer ", "");
			try {
				Algorithm alg = Algorithm.HMAC256("12345");
				String id = JWT.require(alg).build().verify(token).getSubject();
				request.setAttribute("user_id", id);
				UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(id, null, Collections.emptyList());
				SecurityContextHolder.getContext().setAuthentication(auth);
			} catch (Exception e) {
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				System.err.println(e.getMessage());
				return;
			}
		}
		filterChain.doFilter(request, response);
	}
}
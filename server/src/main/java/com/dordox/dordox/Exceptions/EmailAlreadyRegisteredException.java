package com.dordox.dordox.Exceptions;

public class EmailAlreadyRegisteredException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public EmailAlreadyRegisteredException(String message) {
		super(message);
	}
}
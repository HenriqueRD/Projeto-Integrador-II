package com.dordox.dordox.Exceptions;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;

@ControllerAdvice
public class HandleException {
	
	private MessageSource messageSource;
	
	public HandleException(MessageSource messageSource) {
		this.messageSource = messageSource;
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<List<ErrorMessageException>> MethodArgumentNotValidException(MethodArgumentNotValidException e) {
		List<ErrorMessageException> errors = new ArrayList<>();
		e.getBindingResult().getFieldErrors().forEach(err -> {
			String message = messageSource.getMessage(err, LocaleContextHolder.getLocale());
			errors.add(new ErrorMessageException(err.getField(),message));
		});
		return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
	}
}

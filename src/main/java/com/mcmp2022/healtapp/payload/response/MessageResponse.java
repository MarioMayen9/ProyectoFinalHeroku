package com.mcmp2022.healtapp.payload.response;

public class MessageResponse {
	
	private String message;

	  public MessageResponse(String message) {
	    this.message = message;
	  }

	  public String getMessage() {
	    return message;
	  }

	  public void setMessage(String message) {
	    this.message = message;
	  }	
}

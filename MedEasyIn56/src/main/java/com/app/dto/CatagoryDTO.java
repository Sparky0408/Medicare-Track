package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
//Can this as replacement of above
//@RequiredArgsConstructor
@ToString
public class CatagoryDTO {
	
	private String categoryName;
	private String description;
	

}

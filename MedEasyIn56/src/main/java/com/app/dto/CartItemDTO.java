package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CartItemDTO {
	private Integer quantity;
	private Long userId;
	private Long productId;


//	public CartItemDTO(Integer quantity, Long userId, Long productId) {
//		super();
//		this.quantity = quantity;
//		this.userId = userId;
//		this.productId = productId;
//	}
//
//	public CartItemDTO() {
//		super();
//	}

//	public Integer getQuantity() {
//		return quantity;
//	}
//
//	public void setQuantity(Integer quantity) {
//		this.quantity = quantity;
//	}
//
//	public Long getUserId() {
//		return userId;
//	}
//
//	public void setUserId(Long userId) {
//		this.userId = userId;
//	}
//
//	public Long getProductId() {
//		return productId;
//	}
//
//	public void setProductId(Long productId) {
//		this.productId = productId;
//	}


	

}

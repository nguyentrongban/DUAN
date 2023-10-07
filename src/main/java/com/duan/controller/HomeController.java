package com.duan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home/")
public class HomeController {
	@RequestMapping("index")
	public String home(Model model) {
		return "user/index";
	}

	@RequestMapping("pay")
	public String pay(Model model) {
		return "vnpay/index";
	}
	

}

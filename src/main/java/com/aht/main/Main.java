package com.aht.main;

import com.aht.domain.Dish;
import com.aht.domain.User;
import com.aht.dao.click.ClickDAOImpl;
import com.aht.dao.neighbor.NeighborDAOImpl;
import com.aht.dao.rate.RateDAOImpl;
import com.aht.dao.upload.UploadDAOImpl;
import com.aht.domain.relationship.Click;
import com.aht.domain.relationship.Neighbor;
import com.aht.domain.relationship.Rate;
import com.aht.domain.relationship.Upload;

public class Main {
	public static void main(String[] args) {
		
		User danny = new User(); 
		User hector = new User();
		
		danny.setName("Dany");
		hector.setName("Hector");
		
		Neighbor neighbor = new Neighbor(hector, danny, (float) 1);
		NeighborDAOImpl ndi = new NeighborDAOImpl();
		ndi.create(neighbor);
		
		
		
		/*
		mexicana.setName("Comida mexicana");
		mexicana.setType("Mexicana");
		cdi.create(mexicana);

		Dish dish = new Dish();
		dish.setName("tacos al pastor");
		dish.setPicture("tacos_pastor.jpg");
		dish.setDescription("Tortilla, carne al pastor, verdura, salsa");
		dish.addCategory(mexicana);
		ddi.create(dish);

		Category mexicana = cdi.retrieve(0);
		Dish dish = new Dish();
		dish.setName("tacos al pastor");
		dish.setPicture("tacos_pastor.jpg");
		dish.setDescription("Tortilla, carne al pastor, verdura, salsa");

		dish.addCategory(mexicana);
		ddi.create(dish);

		UserDAOImpl udi = new UserDAOImpl();
		User user = new User();
		user.setName("Hector");
		user.setLastName("Bautista");
		user.setLastNameII("De Jesús");
		user.setBirthDate("jhbdlvgk");
		user.setEmail("hbautistaj@gmail.com");
		user.setGender("masculino");
		user.setNationality("Mexicana");
		user.setUsername("hector9317");
		user.setPassword("escom");
		user.setSince("jhgdhhba");
		udi.create(user);

		UserDAOImpl udi = new UserDAOImpl();
		System.out.println(udi.findByUsername("hector9317").toString());
		System.out.println(udi.findByEmail("hbautistaj@gmail.com").toString());

		RateDAOImpl rdi = new RateDAOImpl();
		float rating = (float) 0.7;
		Rate rate = new Rate(user, dish, rating);
		rdi.create(rate);

		ClickDAOImpl cdi = new ClickDAOImpl();
		Click click = new Click(user, dish, 10, "13-03-2016");
		cdi.create(click);
		
		Upload upload = new Upload(user, dish);
		UploadDAOImpl udi = new UploadDAOImpl();
		udi.create(upload);

		*/
		
	}
}